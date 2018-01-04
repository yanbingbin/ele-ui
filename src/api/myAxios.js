import axios from 'axios'
import Qs from 'qs'
import store from '../vuex/store'
import { Message } from 'element-ui'
let Base64 = require('js-base64').Base64;
var envConfig = require('./envConfig')

var paths = envConfig.getPaths();

import { addCookie,getCookie,delCookie} from './myCookie';
let tokenLock = false;
let tokenTime = 0;//最多30次
export const ajaxPost = function(url, params, callback, err) {
	params.ssid = envConfig.sid;
	checkToken().then(
		function(){
    		axios({
				method: 'post',
				url: url,
				data: params
			}).then(function(res) {
				callback(res);
			}).catch(function(error) {
				if(err) {
					callback('error');
				}
			});
		}
	)
};

export const ajaxPut = function(url, params, callback, err) {
	params.ssid = envConfig.sid;
	checkToken().then(
		function(){
    		axios({
				method: 'put',
				url: url,
				data:params
			}).then(function(res) {
				callback(res);
			}).catch(function(error) {
				if(err) {
					callback('error');
				}
			});
		}
	)
};

export const ajaxPostFile = function(url, params,callback, err) {
	checkToken().then(function(){
		let data = new FormData();
	    data.append('file',params.file);
	    data.append('sid',envConfig.sid);
	    axios({
			method: 'post',
			url: url,
			data: data,
			headers:{'Content-Type':'multipart/form-data'}
		}).then(function(res) {
			callback(res);
		}).catch(function(error) {
			if(err) {
				callback('error');
			}
		});
	})
};

export const ajaxGet = function(url, params, callback, err) {
	params.ssid = envConfig.sid;
	//获取验证码不需要最新的token
	if(url.indexOf('authImg') > -1){
		axios.get(url, {
			params: params
		}).then(function(res) {
			callback(res);
		}).catch(function(error) {
			if(err) {
				callback('error');
			}
		})
	}else{
		checkToken().then(function(){
    		axios.get(url, {
				params: params
			}).then(function(res) {
				callback(res);
			}).catch(function(error) {
				if(err) {
					callback('error');
				}
			})
		})
	}
};

export const ajaxGetFile = function(url, params,filename) {
	params.ssid = envConfig.sid;
	checkToken().then(function(){
		axios.get(url, {
			params: params,
			responseType:'arraybuffer'
		}).then(function(result) {
			var linkElement = document.createElement('a');
			try {
		        var blob = new Blob([result], { type: 'application/octet-stream' });
		        var url = window.URL.createObjectURL(blob);
		        linkElement.setAttribute('href', url);
		        linkElement.setAttribute("download", filename+'.xls');
		        var clickEvent = new MouseEvent("click", {
		            "view": window,
		            "bubbles": true,
		            "cancelable": false
		        });
		        linkElement.dispatchEvent(clickEvent);
			 } catch (ex) {
	            console.log(ex);
	        }
		}).catch(function(error) {
			
		});
	})
};

export const ajaxDelete = function(url, params, callback, err) {
	params.ssid = envConfig.sid;
	checkToken().then(function(){
		axios.delete(url, {
			params: params
		}).then(function(res) {
			callback(res);
		}).catch(function(error) {
			if(err) {
				callback('error');
			}
		});
	})
};

/**此方法只为登录使用**/
export const ajaxLogin = function(url, params, callback) {
	params.ssid = envConfig.sid;
	axios({
		method: 'post',
		url: url,
		data: Qs.stringify(params)
	}).then(function(res) {
		callback(res);
	}).catch(function(error) {
		callback(error);
	});
};

axios.defaults.timeout = 15000;

//判断是否需要重新获取token
export const checkToken =function (resolve, reject) {
	var p = new Promise(function(resolve, reject){
		if(resolve == void(0)) return;
       	let m_access_token = getCookie('m_access_token');
		let refresh_token = getCookie('m_refresh_token');
		if(m_access_token){
			resolve();
		}else if(!refresh_token){
			//返回登录
//			window.location.href = paths.loginpath + Base64.encodeURI(window.location.href)+'/'+Base64.encodeURI(envConfig.sid);
			window.location.href = paths.loginpath
		}else{
			//正在请求更新token时，其他接口等待
			if(tokenLock&&tokenTime<30){
		        setTimeout(function(){
		        	tokenTime++;
		            checkToken().then(resolve)
		        },500)
		    }else if(tokenTime>30){
		    	Message.error('登录信息过期请重登录');
				delCookie('m_access_token');
				delCookie('m_refresh_token');
//				window.location.href = paths.loginpath + Base64.encodeURI(window.location.href)+'/'+Base64.encodeURI(envConfig.sid);
		    	window.location.href = paths.loginpath
		    }else{
		    	tokenLock = true;
		    	axios({
					method: 'post',
					url:paths.ssopath+ '/v1/login/refreshToken',
					data: Qs.stringify({refresh_token:refresh_token})
				}).then(function(res) {
					tokenLock = false;
					tokenTime = 0;
					addCookie('m_access_token', res.data.access_token,res.data.access_time);
					addCookie('m_refresh_token', res.data.refresh_token,res.data.refresh_time);
					resolve();
				}).catch(function(error) {
					reject();
				});
		   }
		}
    });
    return p;
};

//请求拦截器
axios.interceptors.request.use(function(config) {
	//判断是不是登录接口，如果是登录接口 不需要token 继续请求；如果不是，阻止请求
	if(config.url.indexOf(paths.ssopath) > -1) {
		//continue
	} else {
		config.headers['Content-Type'] = 'application/json;charset=UTF-8';
		let m_access_token = getCookie('m_access_token')
		if(m_access_token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.Authorization = m_access_token;
		} else {
			return Promise.reject();
		}
	}
	if(envConfig.showLogs === 1) {
		console.log("接口地址-->" + config.url);
		if(config.params) {
			console.log("传入参数-->" + JSON.stringify(config.params));
		} else {
			console.log("传入参数-->" + JSON.stringify(config.data));
		}
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});

//响应拦截器
axios.interceptors.response.use(
	response => {
		if(envConfig.showLogs === 1) {
			console.log("返回数据-->" + JSON.stringify(response.data));
		}
		if(response.config.url.indexOf(paths.ssopath) > -1) {//如果是登录接口，不处理异常
			if(response.data.msg.indexOf('请重新登录')>-1){
//						window.location.href = paths.loginpath + Base64.encodeURI(window.location.href)+'/'+Base64.encodeURI(envConfig.sid);
				window.location.href = paths.loginpath;
			}
		}else{
			var  code= response.data.code;
			if(code && code !== 200) {
				if(code === 401) { //401 未登录
					delCookie('m_access_token');
					setTimeout(function(){
//						window.location.href = paths.loginpath + Base64.encodeURI(window.location.href)+'/'+Base64.encodeURI(envConfig.sid);
						window.location.href = paths.loginpath;
					},2000);
				} else {
					if(response.data.msg.indexOf('请重新登录')>-1){
//						window.location.href = paths.loginpath + Base64.encodeURI(window.location.href)+'/'+Base64.encodeURI(envConfig.sid);
						window.location.href = paths.loginpath;
					}else{
						Message.error(response.data.msg);
					}
				}
				return Promise.reject(response.data);
			}
		}
		return response.data;
	},
	error => {
		if(error&&error.response){
			Message.error(error.response.data.msg);
		}else{
			Message.error("系统开小差了，要不再试试")
		}
		return Promise.reject(error)
	});