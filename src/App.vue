<template>
  <div id="app">
		<div class="body-left">
			<el-menu
				clsss="el-menu-vertical"
				default-active="1"
				background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b"
				>
				<el-menu-item index="1">
					<i class="el-icon-menu"></i>
					<span slot="title">首页</span>
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-tickets"></i>
						<span slot="title">表格</span>
					</template>	
					<el-menu-item-group>
						<el-menu-item index="2-1">表格一</el-menu-item>
						<el-menu-item index="2-2">表格二</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span slot="title">设置</span>
					</template>	
					<el-menu-item-group>
						<el-menu-item index="3-1">系统设置</el-menu-item>
						<el-menu-item index="3-2">权限设置</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</div>

		<div class="body-right">
			<div class="right-header">
				<div class="search">
					<el-autocomplete
					  popper-class="my-autocomplete"
					  :fetch-suggestions="querySearch"
					  placeholder="请输入内容">
					  <i
					    class="el-icon-search el-input__icon"
					    slot="suffix">
					  </i>
					</el-autocomplete>
				</div>
				<div class="user-info">
					<el-dropdown>
						<el-button>
							加多宝<i class="el-icon-arrow-down el-icon--right"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item><el-button @click="showMessage">饮料信息</el-button></el-dropdown-item>
							<el-dropdown-item><el-button @click="changeMessage">信息修改</el-button></el-dropdown-item>
							<el-dropdown-item><el-button @click="loginOut">安全退出</el-button></el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div class="right-content">
				<el-row>
					<el-col :span="24">
						<div class="panel">
							
							<div class="panel-title">
								<span>成员信息</span>
								<div class="table-operate">
									<el-button size="small" icon="el-icon-refresh"></el-button>
									<el-button size="small" icon="el-icon-plus" type="primary">添加</el-button>
								</div>
							</div>
							
							<div class="panel-body">
								<el-table								
									:data="persons"
									highlight-current-row
									border
									tooltip-effect="dark"
									style="width:100%;">
									<el-table-column type="selection"></el-table-column>
									<el-table-column prop="id" label="ID"></el-table-column>
									<el-table-column prop="value" label="姓名"></el-table-column>
									<el-table-column prop="sex" label="性别"></el-table-column>
									<el-table-column prop="age" label="年龄"></el-table-column>
									<el-table-column label="地址">
										<template slot-scope="scope">{{ scope.row.address }}</template>
									</el-table-column>
									<el-table-column 
										prop="tag" 
										label="筛选" 
										:filters="[{text: '公司', value: '公司'},{text: '学校', value: '学校'}]"
										:filter-method="filterTag"
										filter-placement="bottom-end">
										<template slot-scope="scope">
											<el-tag
												:type="scope.row.tag === '公司' ? 'primary' : 'success'"
												close-transition>{{ scope.row.tag }}</el-tag>
										</template>
									</el-table-column>
								</el-table>
								
								<div class="bottom-toolbar">
									<el-row>
										<el-col :span="24">
											<div class="delete-btn">
												<el-button @click="deleteMsg" icon="el-icon-delete">删除</el-button>
											</div>
											<div class="pagination">
												<el-pagination
													:current-page="currentPage"
										      :page-sizes="[100, 200, 300, 400]"
										      :page-size="100"
										      layout="total, sizes, prev, pager, next, jumper"
										      :total="400"></el-pagination
													current-page="4"
												></el-pagination>
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  data() {
  	return {
  		persons: [
				{ "id": 1, "value": "马丽", "sex": '女', "age": 23, "address": "长宁区新渔路144号", "tag": "学校" },
	      { "id": 2, "value": "钱涛", "sex": '男', "age": 48, "address": "上海市长宁区淞虹路661号", "tag": "公司" },
	      { "id": 3, "value": "杨秀英", "sex": '女', "age": 15, "address": "上海市普陀区真北路988号创邑金沙谷6号楼113", "tag": "学校" },
	      { "id": 4, "value": "泷千家", "sex": '男', "age": 23, "address": "天山西路438号", "tag": "公司" },
	      { "id": 5, "value": "龚静", "sex": '女', "age": 48, "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101", "tag": "学校" },
	      { "id": 6, "value": "贡茶", "sex": '男', "age": 17, "address": "上海市长宁区金钟路633号", "tag": "公司" },
	      { "id": 7, "value": "吕敏", "sex": '女', "age": 28, "address": "上海市嘉定区曹安公路曹安路1685号", "tag": "学校" },
	      { "id": 8, "value": "万芳", "sex": '男', "age": 10, "address": "上海市普陀区同普路1435号", "tag": "公司" }
  		],
  		currentPage: 3
  	}
  },
  methods: {
  	querySearch(queryString, callbackFn) {
  		let persons = this.persons;
  		let results = queryString ? persons.filter(this.createFilter(queryString)) : persons;
  		callbackFn(results);
  	},
  	showMessage() {
  		const ELEMENT = this.$createElement;
  		this.$notify({
  			title: '信息',
  			message: '我是一瓶加多宝,持续2000ms',
  			duration: 2000,
  			iconClass: 'el-icon-success'
  		});
  	},
  	changeMessage() { 
  		this.$notify({
          title: '修改信息',
          message: '这是一条警告的提示消息',
          type: 'warning',
          showClose: false
        });
  	},
  	loginOut() {
  		this.$confirm('此操作将会退出登录,是否继续?','提示',{
  			confirmButtonText: '确定',
  			cancelButtonText: '取消',
  			type: 'warning'
  		}).then(() => {
  			this.$message({
  				type: 'success',
  				message: '退出成功'
  			});
  		}).catch(() => {
  			this.$message({
  				type: 'info',
  				message: '取消退出'
  			});
  		});
  	},
  	filterTag(value, row) {
  		return row.tag === value;
  	},
  	deleteMsg() {
  		this.$confirm('你确定要删除选中的项?','警告',{
  			confirmButtonText: '确定',
  			cancelButtonText: '取消',
  			type: 'warning'
  		}).then(() => {
  			this.$message({
  				type: 'success',
  				message: '删除成功'
  			});
  		}).catch(() => {
  			this.$message({
  				type: 'info',
  				message: '取消删除'
  			});
  		});
  	}
  }
}


</script>
	
<style lang="scss">
* {
	margin: 0;
	padding: 0;
}

body,html {
	width: 100%;
	height: 100%;
	
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  width: 100%;
		height: 100%;
		
		.body-left {
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			width: 200px;
			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;
			background-color: #424f63;
		}
		
		.body-right {
			margin-left: 200px;
			z-index: 2;
			
			.right-header {
				position: fixed;
				top: 0;
				width: 1150px;
				height: 50px;
				background-color: #fff;
				border-bottom: 1px solid #ccc;
				z-index: 99;
				
				.search {
					margin: 6px 10px;
					float: left;
					width: 220px;
					height: 35px;
					font-size: 14px;
				}
				
				.user-info {
					float: right;
					margin: 6px 10px;
				}
				
			}
			
			.right-content {
				box-sizing: border-box;
				width: 100%;
				margin-top: 50px;
				padding: 15px;
				background-color: rgba(0,0,0,.1);
				
				.panel {
					background-color: #fff;
					border-radius: 5px;
					
					.panel-title {
						padding: 0 15px;
						height: 45px;
						line-height: 45px;
						font-size: 16px;
						font-weight: 600;
						border-bottom: 1px solid rgba(0,0,0,.2);
						
						.table-operate {
							float: right;
						}
					}
					
					.panel-body {
						
						.bottom-toolbar {
							width: 100%;
							height: 60px;
							
							.delete-btn {
								float: left;
								margin: 10px 15px;
							}
							
							.pagination {
								float: right;
								margin: 15px 15px;
							}
							
						}
					}
				}
			}
		}
	}
}


</style>
