import * as type from 'store/getters/type'

export default {
	[type.GET_USER_INFO]: state => {
		return state.user_info
	}
}
