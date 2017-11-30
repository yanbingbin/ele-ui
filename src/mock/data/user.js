import Mock from 'mockjs'

// 数据模板定义: 属性名 name   生成规则 rule   属性值 value
// 'name|rule': value
// 数据占位符定义
// 

let Users = {};

//for (let i=0; i < 100; i++) {
//	Users.push(Mock.mock({
//  	'id|+1': 2,
//		name: '@CNAME',
//		sex: '@integer(0,1)',
//		'age|0-100': 1,
//		birth: '@date',
//		addr: '@county(true)'
//	}));
//}

// 这里Users是一个对象,使用数据模板返回的是对象,使用占位符返回的是基本数据类型
Users = Mock.mock({
	'users|100': [
		{
			'id|+1': 2,
			name: '@CNAME',
			sex: '@integer(0,1)',
			'age|0-100': 1,
			birth: '@date',
			addr: '@county(true)'
		}
	]
})

export { Users }
