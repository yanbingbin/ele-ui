import Mock from 'mockjs'



const Users =[];

for (let i=0; i < 100; i++) {
	Users.push(Mock.mock({
    	'id|+1': 2,
		name: Mock.Random.cname(),
		sex: Mock.Random.integer(0,1),
		'age|0-100': 1,
		birth: Mock.Random.date(),
		addr: Mock.mock('@county(true)'),
	}));
}

export { Users }
