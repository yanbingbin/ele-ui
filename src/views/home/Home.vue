<template>
  <div>
	<div class="body-left">
		<el-menu
			clsss="el-menu-vertical"
			default-active="1"
			background-color="#545c64"
		    text-color="#fff"
		    active-text-color="#ffd04b"
		    style="border: none;"
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
					<el-menu-item index="2-1"  @click="$router.push('/userTable')">用户表</el-menu-item>
					<el-menu-item index="2-2"  @click="$router.push('/userTable')">表格二</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span slot="title">echarts</span>
				</template>	
				<el-menu-item-group>
					<el-menu-item index="3-1" @click="$router.push('/userCharts')">用户年龄分布</el-menu-item>
					<el-menu-item index="3-2" @click="$router.push('/userCharts')">年龄分布</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>

	<div class="body-right">
		<router-view></router-view>
	</div>
  </div>
</template>
<script>
export default {
  data() {
  	return {
  		searchContent: '',
  		currentPage: 3
  	}
  },
  methods: {
  	querySearch(queryString, callbackFn) {
  		var persons = this.persons;
  		var results = queryString ? persons.filter(this.createFilter(queryString)) : persons;
  		callbackFn(results);
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
	
	.body-left {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 200px;
		height: 100%;
		background-color: #424f63;
	
	}
	
	.body-right {
		margin-left: 200px;
	}
}


</style>
