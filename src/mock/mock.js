import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// MockAdapter 模拟后台请求
import { Users, LoginUser } from './data/user';

export default {
	
	bootstarp() {
		// 定义一个mock adapter实例
		let mock = new MockAdapter(axios);
		
		mock.onGet('/success').reply(200, {
			msg: 'success'
		});
		
		mock.onGet('/error').reply(500, {
			msg: 'failure'
		});
		
		// arguments for reply are (status, data, headers)
		// 登录
		mock.onPost('./login').reply(config => {
			let {username, pwd} = JSON.parse(config.data);
			return new Promise(function(resolve, reject) {
				let user = null;
				setTimeout(() => {
					let hasUser = LoginUser.some(u => {
						if (u.username === username && u.password === pwd) {
							user = JSON.parse(JSON.stringify(u));
							user.password = undefined;
							return true;
						}
					});
					
					if (hasUser) {
						resolve([200, {code: 200, msg: '登录成功' }]);
					} else {
						reject([200, {code: 500, msg: '账号或者密码错误'}]);
					}
				},500)
			})
		})
	}
	
}
