<template>
	<el-menu router :default-active="$router.path" :unique-opened="false" class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b">
		<el-menu-item  index="2">
			<i class="el-icon-s-home"></i>
			<span slot="title">首页</span>
		</el-menu-item>
		<el-submenu index="1">
			<template slot="title">
				<span>交易</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/buyer/ShoppingCart">购物车</el-menu-item>
				<el-menu-item index="1-2">我的订单</el-menu-item>
				<el-menu-item index="1-3">我的发票</el-menu-item>
				<el-menu-item index="1-4-1">对账单</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-menu-item>
			<span slot="title">我的求购</span>
		</el-menu-item>
		<el-menu-item>
			<span slot="title">账户查看</span>
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">
				<span>供应链服务</span>
			</template>
			<el-menu-item-group>
				<el-menu-item index="2-1">我的额度</el-menu-item>
				<el-menu-item index="2-2">我的融资</el-menu-item>
				<el-menu-item index="2-3">平台代采</el-menu-item>
				<el-menu-item index="2-4">平台受信</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>
<script>
	export default {
		name: "LefterAside",
		data: function() {
			return {
				treeNodeLst: []
			};
		},
		created: function() {

		}
	}
</script>
<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 700px;
	}
	
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		border: none;
		text-align: left;
	}
	
	.el-menu-item-group__title {
		padding: 0px;
	}
	
	.el-menu-bg {
		background-color: #1f2d3d !important;
	}
	
	.el-menu {
		border: none;
	}
	
	.logobox {
		height: 40px;
		line-height: 40px;
		color: #9d9d9d;
		font-size: 20px;
		text-align: center;
		padding: 20px 0px;
	}
	
	.logoimg {
		height: 40px;
	}
</style>