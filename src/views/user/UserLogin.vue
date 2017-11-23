<template>
	<div class="login-body">
		<div class="login-warp"
			v-loading="isLoading"
			element-loading-text="玩命加载中"
			element-loading-spinner="el-icon-loading"
			element-loading-background="rgba(0,0,0,.8)
			@keyup.enter="submitForm">
			<div class="login-title">
                <img src="./../../../static/login_logo.png" alt="">
            </div>
            <div class="login-form">
                <el-form ref="form" :model="form" :rules="rules" label-width="0">
                    <el-form-item class="login-item" prop="username">
                        <el-input class="form-input" v-model="form.username" :autofocus="true" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item class="login-item" prop="password">
                        <el-input class="form-input" v-model="form.password" type="password" placeholder="请输入账户密码"></el-input>
                    </el-form-item>
                    <el-form-item class="login-item">
                        <el-button class="form-submit" @click="submitForm" label="登陆"></el-button>
                    </el-form-item>
                </el-form>
            </div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import {port_user, port_code} from 'common/port_uri'
	import {SET_USER_INFO} from 'store/actions/type'
    export default{
        data() {
            return {
                form: {
                    username: null,
                    password: null
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码',trigger: 'blur' }
                    ]
                },
                isLoading: false
            }
        },
        methods: {
            ...mapAction({
                set_user_info: SET_USER_INFO
            }),
            submitForm() {
                // 对整个表单进行校验的方法
                this.refs.form.validate((valid) => {
                    if (!valid) {
                        return false
                    }
                    this.isLoading = true
                    this.$fetch.api_user.login(this.form)
                        .then(({data, msg}) => {
                            this.set_user_info({
                                user: data,
                                login: true
                            })
                            this.$message.success(msg)
                            setTimeout(this.$router.push({path: '/'}),500)
                        })
                        .catch(({code}) => {
                            this.isLoading = false
                            if (code === port_code.error) {
                                this.$notify.info({
                                    title: '提示信息',
                                    message: '账号和密码为admin'
                                })
                            }
                        })
                })
            }
        }
    }
</script>

<style lang="scss">
    .login-body {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(./../../../static/login_bg.jpg) center cover no-repeat;
        .login-wrap {
            width: 300px;
            padding: 25px 15px;
            margin: 100px auto;
            background-color: #fff;
            border-radius: 5px;
            .login-title {
                margin-bottom: 25px;
                text-align: center;
            }
            .login-item {
                .el-input_inner {
                    margin: 0 !important;
                }
            }
            .form-input {
                input {
                    margin-bottom: 15px;
                    font-size: 12px;
                    height: 40px;
                    border: 1px solid #eaeaea;
                    background: #eaeaea;
                    border-radius: 5px;
                    color: #555;
                }
            }
            .form-submit {
                width: 100%;
                color: #fff;
                border-color: #6bc5a4;
                background: #6bc5a4;
                &:active, &:hover {
                    border-color: #6bc5a4;
                    background: #6bc5a4;
                }
            }
        }
    }
</style>

























