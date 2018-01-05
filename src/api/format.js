/**
*数据格式化
------------------------------------
日期格式化 formatDate(date, type)
type:1  yyyy-MM-dd
type:2  yyyy年MM月dd日
type:3  yy年MM月dd日
type:4  yyyy-MM-dd HH:mm:ss
type:5  yyyy-MM-dd HH:mm
type:6  MM
type:7  dd
type:8  HH:mm
type:9  yy
type:10  大写日期
type:11 时间戳
type:12 大写日期年
type:13 大写日期月
type:14 大写日期日
默认：yyyy-MM-dd
--------------------------------------
**/
export const formatDate = function(date, type) {
	// 如果日期为空值
	if(!date) {
		return '';
	}
	if(typeof data =='String'){
		if(date.indexOf(".") > 0) {
			date = date.split(".")[0];
		}
		date = date.replace(/-/g, "/");
	}else if(typeof data =='Number'){
		
	}
	// 返回格式化的日期
	var strDate = '';
	// 默认是yyyy-MM-dd
	var type = type ? type : 1;
	// 日期
	var timestamp = new Date(date);
	// 取得年yyyy
	var year = timestamp.getFullYear();
	// 取得月 MM
	var month = timestamp.getMonth() + 1;
	// 取得天
	var date = timestamp.getDate();
	// 取得小时HH
	var hour = timestamp.getHours();
	if(hour < 10) {
		hour = '0' + hour
	}
	// 取得分 mm
	var minute = timestamp.getMinutes();
	if(minute < 10) {
		minute = '0' + minute
	}
	// 取得秒 ss
	var second = timestamp.getSeconds();
	if(second < 10) {
		second = '0' + second
	}
	var yearStr = "";
	var yearS = year.toString();
	for(var i = 0; i < yearS.length; i++) {
		yearStr += turnCapital(yearS[i]);
	}
	var monthStr = "";
	switch(month) {
		case 1:
    		monthStr = "零壹";
            break;
        case 2:
    		monthStr = "零贰";
            break;
        case 3:
    		monthStr = "零叁";
            break;
        case 4:
    		monthStr = "零肆";
            break;
        case 5:
    		monthStr = "零伍";
            break;
        case 6:
    		monthStr = "零陆";
            break;
        case 7:
    		monthStr = "零柒";
            break;
        case 8:
    		monthStr = "零捌";
            break;
        case 9:
    		monthStr = "零玖";
            break;
        case 10:
    		monthStr = "壹拾";
            break;
        case 11:
    		monthStr = "壹拾壹";
            break;
        case 12:
    		monthStr = "壹拾贰";
            break;
	}
	var dayStr = "";
	var dayS = date.toString();
	if(date<10){
    	dayStr="零"+turnCapital(dayS);
    }else if(date<20){
    	dayStr="壹拾";
    	if(date!=10)dayStr+=turnCapital(dayS[1]);
    }else{
    	dayStr=turnCapital(dayS[0])+'拾';
    	if(dayS[1]!=0)dayStr+=turnCapital(dayS[1]);
    }
	switch(type) {
		case 1:
			strDate = year + "-" + month + "-" + date;
			break;
		case 2:
			strDate = year + "年" + month + "月" + date + "日";
			break;
		case 3:
			var newYear = "" + year + "";
			strDate = newYear.substring(2, 4) + "年" + month + "月" + date + "日";
			break;
		case 4:
			strDate = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
			break;
		case 5:
			strDate = year + "-" + month + "-" + date + " " + hour + ":" + minute;
			break;
		case 9:
			strDate = year;
			break;
		case 6:
			strDate = month;
			break;
		case 7:
			strDate = date;
			break;
		case 8:
			strDate = hour + ":" + minute;
			break;
		case 10:
			strDate = yearStr + '年' + monthStr + '月' + dayStr + '日';
			break;
		case 11:
           	return timestamp;
        case 12:
           	return yearStr;
        case 13:
           	return monthStr;
        case 14:
           	return dayStr;
		default:
			strDate = year + "-" + month + "-" + date;
			break;
	}
	return strDate;
}
/*
 转为大写
 输入数字 		string类型
 返回相应大写	string类型
 * */
export const turnCapital = function(val) {
	switch(val) {
		case '0':
    		return "零";
            break;
    	case '1':
    		return "壹";
            break;
        case '2':
    		return "贰";
            break;
        case '3':
    		return "叁";
            break;
        case '4':
    		return "肆";
            break;
        case '5':
    		return "伍";
            break;
        case '6':
    		return "陆";
            break;
        case '7':
    		return "柒";
            break;
        case '8':
    		return "捌";
            break;
        case '9':
    		return "玖";
            break;
	}
}
/**
*初始化显示时间
------------------------------------
日期格式化 initDate(type)
type:1  yyyy-MM-dd
type:2  yyyy年MM月dd日
type:3  yy年MM月dd日
type:4  yyyy-MM-dd HH:mm:ss
type:5  yyyy-MM-dd HH:mm
默认：yyyy-MM-dd
--------------------------------------
**/
export const initDate = function(type) {
	// 返回格式化的日期
	var strDate = '';
	// 默认是yyyy-MM-dd
	var type = type ? type : 1;
	// 日期
	var timestamp = new Date();
	// 取得年yyyy
	var year = timestamp.getFullYear();
	// 取得月 MM
	var month = timestamp.getMonth() + 1;
	// 取得天
	var date = timestamp.getDate();
	// 取得小时HH
	var hour = timestamp.getHours();
	// 取得分 mm
	var minute = timestamp.getMinutes();
	// 取得秒 ss
	var second = timestamp.getSeconds();
	switch(type) {
		case 1:
			strDate = year + "-" + month + "-" + date;
			break;
		case 2:
			strDate = year + "年" + month + "月" + date + "日";
			break;
		case 3:
			var newYear = "" + year + "";
			strDate = newYear.substring(2, 4) + "年" + month + "月" + date + "日";
			break;
		case 4:
			strDate = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
			break;
		case 5:
			strDate = year + "-" + month + "-" + date + " " + hour + ":" + minute;
			break;
		default:
			strDate = year + "-" + month + "-" + date;
			break;
	}
	return strDate;
}

/**
 * 格式化数字，把数字按3个一组用逗号分开，四舍五入为n位
 * s  --需要格式化的数字
 * n  --小数的后保留的位数，范围是[0,20]
 */
export const formatNumber = function(s, n) {
	if(n < 0 || n > 20) {
		alert("小数点位数不合法");
		return;
	}
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	// 取得整数
	var l = s.split(".")[0].split("").reverse();
	// 取得小数点
	r = s.split(".")[1];
	t = "";
	for(i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	if(n == 0) {
		return t.split("").reverse().join("");
	}
	return t.split("").reverse().join("") + "." + r;
}
/**
 * 大写金额转换
 * @author huangyang 2017年2月15日
 **/
export const amountConversion = function(money) {
	var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //汉字的数字  
	var cnIntRadice = new Array("", "拾", "佰", "仟"); //基本单位  
	var cnIntUnits = new Array("", "万", "亿", "兆"); //对应整数部分扩展单位  
	var cnDecUnits = new Array("角", "分", "毫", "厘"); //对应小数部分单位  
//	var cnInteger = "整"; //整数金额时后面跟的字符  
	var cnIntLast = "元"; //整型完以后的单位  
	var maxNum = 99999999.99; //最大处理的数字  

	var IntegerNum; //金额整数部分  
	var DecimalNum; //金额小数部分  
	var ChineseStr = ""; //输出的中文金额字符串  
	var parts; //分离金额后用的数组，预定义  
	var zeroCount, IntLen, n, p, q, m, decLen;
	if(money == "") {
		return "";
	}
	money = parseFloat(money);
	if(money >= maxNum) {
		$.alert('超出最大处理数字');
		return "";
	}
	if(money == 0) {
		//ChineseStr = cnNums[0]+cnIntLast+cnInteger;  
		ChineseStr = cnNums[0] + cnIntLast
		//document.getElementById("show").value=ChineseStr;  
		return ChineseStr;
	}
	money = money.toString(); //转换为字符串  
	if(money.indexOf(".") == -1) {
		IntegerNum = money;
		DecimalNum = '';
	} else {
		parts = money.split(".");
		IntegerNum = parts[0];
		DecimalNum = parts[1].substr(0, 4);
	}
	if(parseInt(IntegerNum, 10) > 0) { //获取整型部分转换  
		zeroCount = 0;
		IntLen = IntegerNum.length;
		for(var i = 0; i < IntLen; i++) {
			n = IntegerNum.substr(i, 1);
			p = IntLen - i - 1;
			q = p / 4;
			m = p % 4;
			if(n == "0") {
				zeroCount++;
			} else {
				if(zeroCount > 0) {
					ChineseStr += cnNums[0];
				}
				zeroCount = 0; //归零  
				ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
			}
			if(m == 0 && zeroCount < 4) {
				ChineseStr += cnIntUnits[q];
			}
		}
		ChineseStr += cnIntLast;
		//整型部分处理完毕  
	}
	if(DecimalNum != '') { //小数部分  
		decLen = DecimalNum.length;
		for(var i = 0; i < decLen; i++) {
			n = DecimalNum.substr(i, 1);
			if(n != '0') {
				ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
			}
		}
	} else {
		ChineseStr += '整';
	}
	if(ChineseStr == '') {
		//ChineseStr += cnNums[0]+cnIntLast+cnInteger;  
		ChineseStr += cnNums[0] + cnIntLast;
	}
	/* else if( DecimalNum == '' ){ 
	                ChineseStr += cnInteger; 
	                ChineseStr += cnInteger; 
	            } */
	return ChineseStr;
}
/**
 * 大写金额转换2
 * @author huangyang 2017年2月15日
 **/
export const amountConversion1 = function(val){
	var str = '';
	var num = [];
	var drawSum='';
	if(val)
		drawSum = val.toString(); //字符串类型
	if((!isNaN(drawSum)) && drawSum.length > 0) {
		if((drawSum.indexOf(".") != -1) && drawSum.length < 13) {
			//整数部分和小数部分分离
			var num = drawSum.split('.');
			
			//整数部分
			var integer = num[0];
			//整数部分反向
			var inte = integer.split("").reverse().join("");
			//小数部分
			var decimal = num[1];
			var deci = decimal.split("");
			var numarr = [];
			
//			for(var i=0;i<11;i++){
//				$("tbody .num").eq(i).html("");
//			}
			
			for(var i = 0; i < 9; i++) {
				numarr[8 - i] = inte[i];
				if(inte[i] || inte[i] == 0){
					num.push(inte[i]);
				}else{
					num.push('');
				}
//				$("tbody .inte").eq(8 - i).html(inte[i]);
			}
			for(var i = 0; i < 2; i++) {
				if(!parseInt(deci[i])){
					deci[i] = 0;
				}
				numarr[9+i] = deci[i];
				num.unshift(deci[i])
//				$("tbody .dec").eq(i).html(deci[i]);
			}
			rule(numarr);
			read(numarr);
			return str;
		}else if((drawSum.indexOf(".") == -1) && drawSum.length < 10) {
			var inte = drawSum.split("").reverse().join("");
			var numarr = [];
//			for(var i=0;i<11;i++){
//				$(".syxxje .num").eq(i).html("");
//				$(".yhxxje .num").eq(i).html("");
//			}
			for(var i = 0; i < 9; i++) {
				numarr[8 - i] = inte[i];
				if(inte[i] || inte[i] == 0){
					num.push(inte[i]);
				}else{
					num.push('');
				}
				$(".syxxje .inte").eq(8 - i).html(inte[i]);
				$(".yhxxje .inte").eq(8 - i).html(inte[i]);
			}
			for(var i = 0; i < 2; i++) {
				num.unshift(0)
//				$(".syxxje .dec").eq(i).html(0);
//				$(".yhxxje .dec").eq(i).html(0);
			}
			rule(numarr);
			read(numarr);
			return num;
		};;
	
	};
	//读连续两个及以上的零只读一个，万或元之前的零不读
	function rule(numarr) {
		for(var i = 0; i < numarr.length; ++i) {
			if(!numarr[i]) numarr[i] = 0;
		}
		for(var i = 4; i > 0; i--) {
			if(numarr[i] == 0) {
				numarr[i] = null;
			} else break;
		}
		var next0 = false;
		for(var i = 4; i > 0; i--) {
			if(numarr[i] == 0) {
				if(next0) numarr[i] = null;
				next0 = true;
			} else next0 = false;
		}
		for(var i = 8; i > 4; i--) {
			if(numarr[i] == 0) {
				numarr[i] = null;
			} else break;
		}
		var next0 = false;
		for(var i = 8; i > 4; i--) {
			if(numarr[i] == 0) {
				if(next0) numarr[i] = null;
				next0 = true;
			} else next0 = false;
		}
	
	}
	//最后读数
	//0亿 4万 8元 10分
	function read(numarr) {
		str = '';
		var start = false;
		for(var i = 0; i < 9; ++i) {
			var num = numarr[i];
			if((num && num != 0) || (start)) {
				start = true;
				var c = changeCapital(num);
				switch(i) {
					case 8:
						c = c + "元";
						break;
					case 7:
						if(num && num != 0) c = c + "拾";
						break;
					case 6:
						if(num && num != 0) c = c + "佰";
						break;
					case 5:
						if(num && num != 0) c = c + "仟";
						break;
					case 4:
						c = c + "万";
						break;
					case 3:
						if(num && num != 0) c = c + "拾";
						break;
					case 2:
						if(num && num != 0) c = c + "佰";
						break;
					case 1:
						if(num && num != 0) c = c + "仟";
						break;
					case 0: 
						c = c + "亿"; 
					break;
					default:
						c = '';
				}
				str += c;
			}
		}
		if((!numarr[9] || numarr[9] == 0) && (!numarr[10] || numarr[10] == 0)) {
			str += '整';
		} else {
			if(numarr[9] != 0) {
				str += changeCapital(numarr[9]) + '角';
			}
			if(numarr[10] != 0) {
				str += changeCapital(numarr[10]) + '分';
			}
		}
	}
	//传入数字，返回相应中文
	function changeCapital(num) {
		switch(parseInt(num)) {
			case 0:
				return "零";
			case 1:
				return "壹";
			case 2:
				return "贰";
			case 3:
				return "叁";
			case 4:
				return "肆";
			case 5:
				return "伍";
			case 6:
				return "陆";
			case 7:
				return "柒";
			case 8:
				return "捌";
			case 9:
				return "玖";
			default:
				return '';
		}
	}
}
export const formatStr = function(str, type,length) {
	var strF ='';
	if(str == ''||str == undefined ||str == null){
		return '';
	}
	if(str.length <= length){
		return str;
	}
	switch(type) {
		case 1:
			strF = str.substring(0,length) + '...';
			break;
		default:
			break;
	}
	return strF;
}

export const toDecimal2 = function(x) {    
    var f = parseFloat(x);    
    if (isNaN(f)) {    
        return false;    
    }    
    var f = Math.round(x*100)/100;    
    var s = f.toString();    
    var rs = s.indexOf('.');    
    if (rs < 0) {    
        rs = s.length;    
        s += '.';    
    }    
    while (s.length <= rs + 2) {    
        s += '0';    
    }    
    return s;    
}

export const bytesToSize = function(bytes) {   
	if( bytes === null ||bytes === undefined)
    	return '';
    if(bytes === 0 )
    	return '0 B';
    var k = 1024;  
    var sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];  
    var i = Math.floor(Math.log(bytes) / Math.log(k));  //1024560
    return new Number((bytes / Math.pow(k, i)).toPrecision(3))+ ' ' + sizes[i];   
}
//文件类型对应图标
var typeJson = [
	{'txt':'#icon-txt'},{'doc':'#icon-word'},
	{'docx':'#icon-word'},{'pdf':'#icon-pdf'},
	{'xls':'#icon-excel'},{'xlsx':'#icon-excel'},
	{'ppt':'#icon-ppt'},{'wps':'#icon-wps'},
	{'zip':'#icon-other'},{'rar':'#icon-other'},
	{'war':'#icon-other'},{'7z':'#icon-other'},
	{'jpg':''},{'jpeg':''},
	{'png':''},{'bmp':''},
	{'gif':''},{'rm':'#icon-shipin'},
	{'rmvb':'#icon-shipin'},{'wmv':'#icon-shipin'},
	{'avi':'#icon-shipin'},{'mp4':'#icon-shipin'},
	{'3gp':'#icon-shipin'},{'mkv':'#icon-shipin'},
	{'mpeg':'#icon-shipin'},{'flv':'#icon-shipin'}
];
export const filetypeToIcon = function(type) {
	var re = '';
	if(type === null || type === '' || type === undefined){//文件夹
		re ='#icon-wenjianjia';
	}else{
		for (var i = 0; i <typeJson.length; i++) {
			var typeObj = typeJson[i];
			if(typeObj[type]){
				re = typeObj[type];
				break;
			}
			continue;
		}
		if(re === ''){//其他未知类型
			re = '';
		}
	}
    return re;
}
