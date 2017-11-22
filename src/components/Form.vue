<template>
	<div>
		<el-radio v-model="radio" label="1">备选项</el-radio>
		<el-radio v-model="radio" label="2">备选项</el-radio>
		<br />
		<el-radio disabled v-model="radio1" label="ban">禁用</el-radio>
		<el-radio disabled v-model="radio1" label="ban-select">禁用并选中</el-radio>
		<br />
		<el-radio-group v-model="radio2">
			<el-radio :label="3">备选项</el-radio>
			<el-radio :label="6">备选项</el-radio>
			<el-radio :label="9">备选项</el-radio>
		</el-radio-group>
		<br />
		<el-radio-group v-model="radio3">
			<el-radio-button label="上海"></el-radio-button>
			<el-radio-button label="北京"></el-radio-button>
			<el-radio-button label="广州"></el-radio-button>
			<el-radio-button label="深圳"></el-radio-button>
		</el-radio-group>
		<br />
		<el-radio-group v-model="radio4" size="medium" style="margin-top: 20px;">
			<el-radio-button label="上海"></el-radio-button>
			<el-radio-button label="北京"></el-radio-button>
			<el-radio-button label="广州"></el-radio-button>
			<el-radio-button label="深圳"></el-radio-button>
		</el-radio-group>
		<br />
		<el-radio-group v-model="radio5" size="small" style="margin-top: 20px;">
			<el-radio-button label="上海"></el-radio-button>
			<el-radio-button label="北京"></el-radio-button>
			<el-radio-button label="广州"></el-radio-button>
			<el-radio-button label="深圳"></el-radio-button>
		</el-radio-group>
		<br />
		<el-radio-group v-model="radio6" size="mini" style="margin-top: 20px;">
			<el-radio-button label="上海"></el-radio-button>
			<el-radio-button label="北京"></el-radio-button>
			<el-radio-button label="广州"></el-radio-button>
			<el-radio-button label="深圳"></el-radio-button>
		</el-radio-group>
		<br />
		<div style="margin-top: 20px;">
			<el-radio v-model="radio7" label="1" border>备选项1</el-radio>
			<el-radio v-model="radio7" label="2" border>备选项2</el-radio>
		</div>
		<el-checkbox v-model="checked">备选项</el-checkbox>
		<el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
  		<el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
  		<br />
  		<el-checkbox v-model="checked3">复选框A</el-checkbox>
  		<el-checkbox v-model="checked4">复选框B</el-checkbox>
  		<el-checkbox v-model="checked5">复选框C</el-checkbox>
  		<el-checkbox disabled v-model="checked6">禁用</el-checkbox>
  		<el-checkbox disabled v-model="checked7">选中并禁用</el-checkbox>
  		<br />
  		<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  		<br />
  		<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
	  	  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
	 	</el-checkbox-group>
	 	<el-input v-model="input1" disabled placeholder="请输入内容"></el-input>
	 	<el-input
		  type="textarea"
		  :rows="2"
		  placeholder="请输入内容"
		  v-model="textarea">
		</el-input>
		<el-rate
		  v-model="value4"
		  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
		  void-icon-class="icon-rate-face-off"
		  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
		</el-rate>
		<el-rate
		  v-model="value5"
		  disabled
		  show-score
		  text-color="#ff9900"
		  score-template="{value}">
		</el-rate>
		<el-upload
		  class="upload-demo"
		  drag
		  action="https://jsonplaceholder.typicode.com/posts/"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
		
	</div>
</template>

<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		data () {
			return {
				radio: '1',
				radio1: 'ban-select',
				radio2: 3,
				radio3: '上海',
		        radio4: '上海',
		        radio5: '上海',
		        radio6: '上海',
		        radio7: '1',
		        radio8: '1',
		        radio9: '1',
		        radio10: '1',
		        checked: true,
		        checked1: false,
		        checked2: true,
		        checked3: false,
		        checked4: false,
		        checked5: false,
		        checked6: false,
		        checked7: true,
		        checkAll: false,
		        checkedCities: ['上海', '北京'],
		        cities: cityOptions,
		        isIndeterminate: true,
		        input1: '',
		        textarea: '',
		        value4: null,
		        value5: 3.7
			}
		},
		methods: {
			handleCheckAllChange(val) {
				this.checkedCities = val ? cityOptions : []
				this.isIndeterminate = false
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
		        this.checkAll = checkedCount === this.cities.length;
		        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			}
		}
	}
</script>

<style>
</style>