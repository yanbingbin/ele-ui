<template>
	<div>
		<i class="el-icon-edit"></i>
		<i class="el-icon-share"></i>
		<i class="el-icon-iconName"></i>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		<i class="el-icon-error"></i>
		<i class="el-icon-loading"></i>
		<div class="block">
	    <span class="demonstration">显示默认颜色</span>
	    <span class="wrapper">
		    <el-button type="success">成功按钮</el-button>
		    <el-button type="warning">警告按钮</el-button>
		    <el-button type="danger">危险按钮</el-button>
		    <el-button type="info">信息按钮</el-button>
	    </span>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">hover 显示颜色</span>
	    <span class="wrapper">
		    <el-button :plain="true" type="success">成功按钮</el-button>
		    <el-button :plain="true" type="warning">警告按钮</el-button>
		    <el-button :plain="true" type="danger">危险按钮</el-button>
		    <el-button :plain="true" type="info">信息按钮</el-button>
	    </span>
    </div>
	</div>
</template>

<script>
</script>

<style>
</style>