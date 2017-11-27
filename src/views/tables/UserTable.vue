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
			<el-button type="danger" @click="removeSel" :disabled="this.sels.length === 0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col> 
		
		<!--编辑界面-->
		<el-dialog title="编辑信息" :visible="editFormVisible" :close-on-click-modal="false" :show-close="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="editForm.age" :min="0" :max="140"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker v-model="editForm.birth" type="date" placeholder="请选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>
		
		<!--新增界面-->
		<el-dialog title="新增信息" :visible="addFormVisible" :close-on-click-modal="false" :show-close="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="addForm.name"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="addForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="addForm.age" :min="0" :max="140"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker v-model="addForm.birth" type="date" placeholder="请选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="addForm.addr" type="textarea"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import { Users } from '../../mock/data/user'
	export default {
		data() {
			return {
				search: {
					name: ''
				},
				users: [], // 用户数据
				total: 0, 
				page: 1,
				listLoading: false,
				sels: [], // 列表选中列
				editFormVisible: false, // 编辑界面显示控制
				editLoading: false, // 编辑加载效果
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},
				addFormVisible: false,
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}
			}
		},
		methods: {
			// 性别格式化转换
			formatSex(row, column) {
				return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知';
			},
			getUsers() {
				let para = {
					page: this.page,
					name: this.search.name
				};
//				this.listLoading = true;
				this.users = Users;
			},
			handleAdd() {
				this.addFormVisible = true; console.log(this.addFormVisible + '  ' + 1)
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}
			},
			handleEdit(index, row) {
				this.editFormVisible = true;
				this.editForm = row;
			},
			removeSel() {
				
			},
			handleCurrentChange() {
				
			},
			handleClose() {
			}
		},
		mounted() {
			this.getUsers();
		}
	}
</script>

<style>
</style>