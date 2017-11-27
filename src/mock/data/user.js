import Mock from 'mockjs'

const LoginUsers = [
	{
		id: 1,
		username: 'admin',
		password: '123456',
		avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511762555635&di=47f28983a2c72fee56c68ab6d66b3d57&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D465718887%2C2498062893%26fm%3D214%26gp%3D0.jpg',
		name: '七宝'	
	}
];

const Users =[];

for (let i=0; i < 50; i++) {
	Users.push(Mock.mock({
    	'id|+1': 2,
		name: Mock.Random.cname(),
		sex: Mock.Random.integer(0,1),
		'age|18-60': 1,
		birth: Mock.Random.date(),
		addr: Mock.mock('@county(true)'),
	}));
}

export { loginUsers, Users }
