<template>
	<section>
		<!--工具栏-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="search">
				<el-form-item>
					<el-input v-model="search.name" placeholder="请输入要查找的姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="getUsers" type="primary">查找</el-button>
				</el-form-item>
				<el-form-item>
					<el-button @click="handleAdd" type="primary">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		
		<!--表的内容-->
		<el-table :data="users" heightlight-current-row v-loading="listLoading" style="width: 100%">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column type="index" width="60"></el-table-column>
			<el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
			<el-table-column prop="sex" label="性别" width="100" sortable :formatter="formatSex"></el-table-column>
			<el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
			<el-table-column prop="birth" label="生日" width="120" sortable></el-table-column>
			<el-table-column prop="addr" label="地址" min-width="180" sortable></el-table-column>
			<el-table-column label="操作" width="150">
				<template slot-scope="scope">
					<el-button @click="handleEdit(scope.$index, scope.row)" size="small">编辑</el-button>
					<el-button @click="handleDel(scope.$index, scope.row)" size="small" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<!--<el-button type="danger>批量删除</el-button>-->
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col> 
		
		<!--编辑界面-->
		<el-dialog title="编辑信息" :visible="editFormVisible" :close-on-click-modal="false" :show-close="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm" status-icon>
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄" prop="age">
					<el-input-number v-model="editForm.age" :min="0" :max="140"></el-input-number>
				</el-form-item>
				<el-form-item label="生日" prop="birth">
					<el-date-picker v-model="editForm.birth" type="date" placeholder="请选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址" prop="addr">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit">提交</el-button>
			</div>
		</el-dialog>
		
		<!--新增界面-->
		<el-dialog title="新增信息" status-icon :visible="addFormVisible" :close-on-click-modal="false" :show-close="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm" status-icon>
				<el-form-item label="姓名" prop="name">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-radio-group v-model="addForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄" prop="age">
					<el-input-number v-model="addForm.age" :min="0" :max="140"></el-input-number>
				</el-form-item>
				<el-form-item label="生日" prop="birth">
					<el-date-picker v-model="addForm.birth" type="date" placeholder="请选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址" prop="addr">
					<el-input v-model="addForm.addr" type="textarea"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import { Users } from '../../mock/data/user'
	export default {
		data() {
			var checkName = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('姓名不能为空'));
				}
				
			};
			return {
				search: {
					name: ''
				},
				users: [], // 用户数据渲染到列表中的
				storeUsers: [], // 数据储存仓库,保存着数据的原本
				total: 0,  // 用户数量
				page: 1, // 当前页数
				listLoading: false, // 加载效果
				sels: [], // 列表选中列
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' },
						{ min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
					],
					age: [
						{ type: 'number', required: true, message: '请输入年龄', trigger: 'blur' }
					],
					birth: [
						{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
					],
					addr: [
						{ required: true, message: '请输入地址', trigger: 'blur' },
						{ min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur' }
					]
				},
				editFormVisible: false, // 编辑界面显示控制
				editForm: {
					id: 0,
					name: '',
					sex: 1,
					age: 0,
					birth: '',
					addr: ''
				},
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' },
						{ min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
					],
					age: [
						{ type: 'number', required: true, message: '请输入年龄', trigger: 'blur' }
					],
					addr: [
						{ required: true, message: '请输入地址', trigger: 'blur' },
						{ min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur' }
					]
				},
				addFormVisible: false,
				addForm: {
					name: '',
					sex: 1,
					age: 0,
					birth: '',
					addr: ''
				}
			}
		},
		mounted() {
			this.initUsers();
			this.getUsers();
		},
		methods: {
			// 用户数据初始化
			initUsers() {
				this.storeUsers = Users.users;
				this.users = Users.users;
			},
			// 性别格式化转换
			formatSex(row, column) {
				return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知';
			},
			// 获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					name: this.search.name
				};
				this.listLoading = true;
				this.getUserListPage(para);
			},
			// 分页
			getUserListPage(params) {
				let {page, name} = params; 
				 // 查找寻找的姓名
				let searchUsers = this.storeUsers.filter(user => {
					if (name && user.name.indexOf(name) === -1) {
						return false;
					} else {
						return true;
					}
				})
				this.total = searchUsers.length;
				this.users = searchUsers.filter((user, index) => {
					return index >= (page - 1) * 10 && index < page * 10;
				})
				this.listLoading = false;
			},
			// 添加用户
			handleAdd() {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: 1,
					age: 0,
					birth: '',
					addr: ''
				}
			},
			// 添加提交
			addSubmit() {
				// 对整个表单进行验证
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						let user = Object.assign({}, this.addForm);
						user.birth = this.format(new Date(user.birth), 'yyyy-MM-dd');
						this.storeUsers.unshift(user);
					} else {
						return false;
					}
					this.$refs['addForm'].resetFields();
					this.addFormVisible = false;
					this.getUsers();
				})
			},
			
			// 编辑用户
			handleEdit(index, row) {
				this.editFormVisible = true;
				this.editForm =  Object.assign({}, row);
			},
			// 编辑提交
			editSubmit() {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						let user = Object.assign({}, this.editForm);
						user.birth = this.format(new Date(user.birth), 'yyyy-MM-dd');
						let { id, name, addr, age, birth, sex } = user;
						this.storeUsers.some(user => {
							if (user.id === id) {
								user.name = name;
								user.addr = addr;
								user.age = age;
								user.birth = birth;
								user.sex = sex;
								return true;
							}
						});
					} 
					this.$refs['editForm'].resetFields();
					this.editFormVisible = false;
					this.getUsers();
				})
			},
			// 删除当前用户
			handleDel(index, row) {
				this.$confirm('确认删除' + row.name + '?','警告', { type: 'warning' })
					.then(() => {
						this.listLoading = true;
						this.storeUsers.splice(index, 1);
						this.getUsers();
					})
			},
			// 移除选中用户
			removeSel() {
				
			},
			// 改变当前页
			handleCurrentChange(currentPage) {
				this.page = currentPage;
				this.getUsers();
			},
			handleClose() {
			},
			// 日期格式化
			format(date, pattern) {
				return pattern.replace(/([yMd])(\1*)/g, function ($0) {
					switch ($0.charAt(0)) {
						case 'y': return date.getFullYear();
	                    case 'M': return date.getMonth() + 1;
	                    case 'd': return date.getDate();
					}
				})
			}
		}
	}
</script>

<style>
</style>