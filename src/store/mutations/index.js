import * as type from 'store/mutations/type'
import { cookieStorage } from 'common/storage'

export default {
	// 设置用户信息和是否登录
	[type.SET_USER_INFO]: state => {
		return state.user_info
	}
}
