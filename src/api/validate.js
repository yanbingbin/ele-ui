/**
 * @validate 表单正则表达式校验
 * @author hezq 2017年5月3日
 * @version 1.0.0
 */

/**
 * 检查输入字符串是否为空或者是空格或者为undefined
 * @param str
 * @return 如果全是空返回true,否则返回false
 */
export const isNotNull = function(str) {
	var value;
	if(str != null && str != undefined) {
		value = str.trim();
	}
	if(undefined == value || value == '' || value == null) {
		return false;
	} else {
		return true;
	}
}
/**
 * 检查输入对象的值是否符合整数格式
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isInteger = function(str) {
	var regu = /^[-]{0,1}[0-9]{1,}$/;
	return regu.test(str);
}
/**
 * 检查输入字符串是否符合正整数格式
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isPositiveInt = function(str) {
	var regu = "^[0-9]+$";
	var re = new RegExp(regu);
	if(str.search(re) != -1) {
		return true;
	} else {
		return false;
	}
}
/**
 * 检查输入字符串是否是带小数的数字格式,可以是负数
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isDecimal = function(str) {
	if(gd.isInteger(str))
		return true;
	var re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;
	if(re.test(str)) {
		if(RegExp.$1 == 0 && RegExp.$2 == 0)
			return false;
		return true;
	} else {
		return false;
	}
}
/**
 * 检查输入字符串是否是带小数的数字格式，不可以是负数
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isPositiveDec = function(str) {
	if(gd.isInteger(str))
		return true;
	var re = /\^{0,1}(\d+)[\.]+(\d+)$/;
	if(re.test(str)) {
		if(RegExp.$1 == 0 && RegExp.$2 == 0)
			return false;
		return true;
	} else {
		return false;
	}
}

/**
 * 检查输入字符串是否是两位小数的价格
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isPrice = function(str) {
	var reg = /(^[+]?[1-9]\d*(\.\d{1,2})?$)|(^[+]?[0]{1}(\.\d{1,2})?$)/;
	if(!reg.test(str)) {
		return false;
	}
	return true;
}
/**
 * 校验ip地址的格式
 * @param str ip地址
 * @return 如果通过验证返回true,否则返回false；
 */
export const isIP = function(str) {
	if(isNull(str))
		return false;
	var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
	if(re.test(str)) {
		if(RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256)
			return true;
	}
	return false;
}
/**
 * 检查输入对象的值是否符合端口号格式
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isPort = function(str) {
	return(gd.isPositiveInt(str) && str < 65536);
}
/**
 * 检查输入手机号码是否正确
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const checkMobile = function(str) {
	var regu = /^[1][3-9][0-9]{9}$/;
	var re = new RegExp(regu);
	if(re.test(str)) {
		return true;
	} else {
		return false;
	}
}
/**
 * 检查输入的电话号码格式是否正确
 * @param strPhone 字符串
 * @return 如果通过验证返回true,否则返回false；
 */
export const checkPhone = function(strPhone) {
	var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
	var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
	if(strPhone.length > 9) {
		if(phoneRegWithArea.test(strPhone)) {
			return true;
		} else {
			return false;
		}
	} else {
		if(phoneRegNoArea.test(strPhone)) {
			return true;
		} else {
			return false;
		}
	}
}
/**
 * 检查输入字符串是否符合金额格式
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isMoney = function(str) {
	var regu = "^[0-9]+[\.][0-9]{0,3}$";
	var re = new RegExp(regu);
	if(re.test(str)) {
		return true;
	} else {
		return false;
	}
}
/**
 * 检查输入字符串是否是带小数的数字格式，不可以是负数,最多3位小数
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isPositiveDec3Most = function(str) {
	if(gd.isInteger(str))
		return true;
	var re = /(^[+]?[1-9]\d*(\.\d{1,3})?$)|(^[+]?[0]{1}(\.\d{1,3})?$)/;
	if(!re.test(str)) {
		return false;
	}
	return true;
}
/**
 * 检查输入字符串是否只由英文字母和数字和下划线组成
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isPositiveIntOr_Letter = function(str) {
	var regu = "^[0-9a-zA-Z\_]+$";
	var re = new RegExp(regu);
	if(re.test(str)) {
		return true;
	} else {
		return false;
	}
}
/**
 * 检查输入字符串是否只由英文字母和数字组成
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isPositiveIntOrLetter = function(str) {
	var regu = "^[0-9a-zA-Z]+$";
	var re = new RegExp(regu);
	if(re.test(str)) {
		return true;
	} else {
		return false;
	}
}
/**
 * 检查输入字符串是否只由汉字、字母、数字组成
 * @param str
 * @return 如果通过验证返回true,否则返回false；
 */
export const isChinaOrNumbOrLett = function(str) {
	var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
	var re = new RegExp(regu);
	if(re.test(str)) {
		return true;
	} else {
		return false;
	}
}
/**
 * 检查输入的Email信箱格式是否正确
 * @param strEmail 字符串
 * @return 如果通过验证返回true,否则返回false；
 */
export const checkEmail = function(strEmail) {
	var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if(emailReg.test(strEmail)) {
		return true;
	} else {
		return false;
	}
}
/*
根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位数字本体码和一位数字校验码组成。排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
地址码表示编码对象常住户口所在县(市、旗、区)的行政区划代码。
出生日期码表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。
顺序码表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。顺序码的奇数分给男性，偶数分给女性。
校验码是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。

出生日期计算方法。
15位的身份证编码首先把出生年扩展为4位，简单的就是增加一个19或18,这样就包含了所有1800-1999年出生的人;
2000年后出生的肯定都是18位的了没有这个烦恼，至于1800年前出生的,那啥那时应该还没身份证号这个东东，⊙﹏⊙b汗...
下面是正则表达式:
出生日期1800-2099  (18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])
身份证正则表达式 /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
15位校验规则 6位地址编码+6位出生日期+3位顺序号
18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位

校验位规则     公式:∑(ai×Wi)(mod 11)……………………………………(1)
公式(1)中：
i----表示号码字符从由至左包括校验码在内的位置序号；
ai----表示第i位置上的号码字符值；
Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。
i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1

*/
//身份证号合法性验证
//支持15位和18位身份证号
//支持地址编码、出生日期、校验位验证
export const checkIdentityCard = function(code) {
	var city = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江 ",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北 ",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏 ",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外 "
	};
	var pass = true;

	if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
		pass = false;
	} else if(!city[code.substr(0, 2)]) {
		pass = false;
	} else {
		//18位身份证需要验证最后一位校验位
		if(code.length == 18) {
			code = code.split('');
			//∑(ai×Wi)(mod 11)
			//加权因子
			var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			//校验位
			var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for(var i = 0; i < 17; i++) {
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if(parity[sum % 11] != code[17]) {
				pass = false;
			}
		}
	}
	return pass;
}