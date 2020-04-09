<template>
	<el-container  class="main-container">
		<el-aside class="main-aside">
			<LeftAside :left-collapsed="collapsed"></LeftAside>
		</el-aside>
		<el-container>
			<el-main class="main-center">
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	// 导入组件
	import LeftAside from '@/components/LeftAside.vue'

	// 导出模块
	export default {
		name:'Main',
		data:function(){
			return {
				collapsed:false
			};
		},
		methods:{
			openCollapsed:function(collapsed){
				this.collapsed=collapsed;
				console.log(this.collapsed);
			},
			
		},
		components:{
			LeftAside
		},
		created:function(){
		},
		computed:{
		}
	};
</script>
<style scoped>
	.main-container {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
	}

	.main-aside-collapsed {
		/* 在CSS中，通过对某一样式声明! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级 */
		width: 64px !important;
		height: 100%;
		background-color: #334157;
		margin: 0px;
	}

	.main-aside {
		width: 200px !important;
		height: 100%;
		background-color: #334157;
		margin-left: -8px;
	}

	.main-header,
	.main-center {
		padding: 0px;
		/*border-left: 2px solid #333;*/
		border-left: 0px solid #333;
	}
</style>
