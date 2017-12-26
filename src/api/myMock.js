// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

const Users = [];
//
//for (let i=0; i < 100; i++) {
//	Users.push(Mock.mock({SS
//  	'id|+1': 2,
//  	mbname: Mock.Random.cword(6,10),
//		fr: Mock.Random.cname,
//		'status|0-3': 1,
//		'age|0-100': 1,
//		rqStart: Mock.Random.date(),
//		rqStart2: Mock.Random.date(),
//		dq1name: Mock.Random.province(),
//		dqname: Mock.Random.city()
//	}));
//}

const Menbers = Mock.mock({
	'menbers|100': [
		{
			'id|+1': 1,
			'hydm|10000-99999': 1,
			mbname: Mock.Random.cword(6,10),
			fr: Mock.Random.cname,
			'status|0-3': 1,
			'age|0-100': 1,
			rqStart: Mock.Random.date(),
			rqStart2: Mock.Random.date(),
			dq1name: Mock.Random.province(),
			dqname: Mock.Random.city()
		}
	]
})

export { Users, Menbers }