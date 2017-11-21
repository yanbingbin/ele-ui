<template>
	<div>
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
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
    <br />
    <el-button @click="isShow = !isShow">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
    	<transition name="el-fade-in-linear">
    		<div v-show="isShow" class="transition-box">.el-fade-in-linear</div>
    	</transition>
    	<transition name="el-fade-in">
    		<div v-show="isShow" class="transition-box">.el-fade-in</div>
    	</transition>
    </div>
    <el-button @click="isShowCollapse = !isShowCollapse">Click Me</el-button>
    <div style="margin-top: 20px; height: 200px;">
    	<el-collapse-transition>
    	<div v-show="isShowCollapse">
    		<div class="transition-box">.el-collapse-transition</div>
    		<div class="transition-box">.el-collapse-transition</div>
    	</div>
    </el-collapse-transition>
    </div>
    <el-row>
    	<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row>
    	<el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
    	<el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row>
    	<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    	<el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    	<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row :gutter="10"> <!--gutter分栏间隔-->
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="8"><div class="grid-content bg-purple-dark"></div></el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="8"><div class="grid-content bg-purple-dark"></div></el-col>
		<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="4"><div class="grid-content bg-purple-dark"></div></el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="6" :offset="6"><div class="grid-content bg-purple-dark"></div></el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg">
		<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="center">
		<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="end">
		<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="space-between">
		<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row type="flex" class="row-bg" justify="space-around">
		<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row :gutter="10">
		<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
		<el-col :xs="4" :sm="6" :md="8" :lg="3" :xl="11"><div class="grid-content bg-purple"></div></el-col>
		<el-col :xs="4" :sm="6" :md="8" :lg="3" :xl="11"><div class="grid-content bg-purple"></div></el-col>
		<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	</div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
  	msg: 'it is message',
  	isShow: true,
  	isShowCollapse: true
  }),
  methods: {
  	startHacking () {
  		this.$notify({
  			title: 'It Works',
  			message: 'we hava laid the ground',
  			duration: 1000
  		})
  	}
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.transition-box {
	margin-bottom: 10px;
	width: 200px;
	height: 100px;
	border-radius: 4px;
	background-color: #409EFF;
	text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
 .el-row {
 		margin-top: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
