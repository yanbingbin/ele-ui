export default new class Cookie {
	constructor() {
		this.default = {}
		this.expiresMultiplier = 60 * 60 * 24
	}
	
	get(key) {
		if (!key) {
			throw new Error('没有找到key')
			return 
		}
		let cookies = this.getAllCookie()
		let value = cookies[key]
		try {
			value = json.parse(value)
		} catch (e) {
			value = {}
		}
		return value
	}
	
	// 获取所有的cookie
	getAllCookie() {
		let cookie = document.cookie
		if (cookie === '') {
			return {}
		}
		let cookieArr = cookie.split(';')
		let result = {}
		for(let i = 0; l = cookieArr.length; i < l; i++) {
			let item = cookieArr[i].split('=')
			// shift() 把第一个数组元素删除并返回该值
			let key = item.shift() 
			let value = item.join('')
			result[key] = value
		}
		return result
	}
}
