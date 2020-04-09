<template>
	<div class="div-main">
		<!--<el-button type="success">导入</el-button>
		<el-button type="warning"  @click="download">导出</el-button>-->
		<a class='download' href='http://localhost:8082/excel/excelController/download' download=""  title="下载">下载</a>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data: function() {
			return {
				msg: 'Welcome to Your Vue.js App',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods:{
			download:function(){
				console.log("12121");
				let url=this.axios.urls.DOWNLOAD;
				this.axios.post(url,null).then(resp => {
					console.log(resp);
				}).catch();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
	.div-main {
		margin: 15px;
	}
</style>