<template>
	<div>
		<div id="myChartPie" class="chart" :style="{width: '400px', height: '400px'}"></div>
		<div id="myChartLine" class="chart" :style="{width: '400px', height: '400px'}"></div>
		<div id="myChartBar" class="chart" :style="{width: '400px', height: '400px'}"></div>
	</div>
</template>

<script>
	import { Users } from '../../mock/data/user'
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'hi',
				users: [],
				userAge: [   // 存储年龄段分布
					{value: 0, name: '0-20岁'},
					{value: 0, name: '21-40岁'},
					{value: 0, name: '41-60岁'},
					{value: 0, name: '61-80岁'},
					{value: 0, name: '81-100岁'}
				]
			}
		},
		mounted() {
			this.getUsersAge();
			this.drawPie();
			this.drawLine();
			this.drawBar();
		},
		methods: {
			// 拿到用户数据的年龄段,0-20,21-40,41-60,61-80,81-100人数分布
			getUsersAge() {
				this.users = Users;
				this.users.forEach(item => {
					let age = item.age;
					let n = parseInt((age-1)/20);
					this.userAge[n].value++;
				})
			},
			drawPie() {
				// 基于准备好的dom,初始化echarts实例
				let myChartPie = this.$echarts.init(document.getElementById("myChartPie"))
				let option = {
					title: {
						text: '用户年龄段统计',
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['0-20岁','21-40岁','41-60岁','61-80岁','81-100岁']
					},
					series: [
						{
							name: '年龄段统计',
							type: 'pie',
							center: ['50%', '60%'],
							data: this.userAge,
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, .5)'
								}
							}
						}
					]
				}
				// 绘制图表
				myChartPie.setOption(option);				
			},
			drawLine() {
				let myChartLine = this.$echarts.init(document.getElementById("myChartLine"));
				let option = {
					title: {
						text: '用户年龄段分布'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['年龄分布']
					},
					toolbox: {
						show: true,
						feature: {
							dataZoom: {
								yAxisIndex: 'none'
							},
							dataView: {readOnly: false},
							magicType: {type: ['line', 'bar']},
							restore: {},
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['0-20岁','21-40岁','41-60岁','61-80岁','81-100岁']
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							formatter: '{value} %'
						}
					},
					series: [
						{
							name: '年龄段分布',
							type: 'line',
							data: this.userAge,
							markPoint: {
								data: [
									{type: 'max', name: '最大值'},
									{type: 'min', name: '最小值'}
								]
							},
							markLine: {
								data: [
									{type: 'average', name: '平均值'}
								]
							}
						}
					]
				};
				myChartLine.setOption(option);
			},
			drawBar() {
				let myChartBar = this.$echarts.init(document.getElementById("myChartBar"));
				let option = {
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {        // 坐标轴指示器,坐标轴触发有效
							type: 'shadow'    // 默认为直线,可选为: 'line' | 'shadow'
						}
					},
					grid: {
						containerLabel: true
					},
					xAxis: [
						{
							type: 'category',
							data: ['0-20岁','21-40岁','41-60岁','61-80岁','81-100岁'],
							axisTick: {
								alignWithLabel: true
							}
						}
					],
					yAxis: [
						{
							type: 'value'
						}
					],
					series: [
						{
							name: '年龄分布',
							type: 'bar',
							barWidth: '60%',
							data: this.userAge
						}
					]
				};
				myChartBar.setOption(option);
			}
		}
	}
</script>

<style>
	.chart {
		float: left;
		margin: 20px 0 0 80px;
	}
</style>