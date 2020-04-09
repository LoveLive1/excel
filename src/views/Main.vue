<template>
	<el-container >
		<el-header class="head">
			<el-row :gutter="20">
				<el-col :span="20" :offset="2">
					<div class="head-div">
						<span class="head-font-city">城市:<span>成都</span></span>
						<span class="head-I-style-first">|</span>
						<span class="head-login-register">请登录</span>
						<span class="head-login-register">免费注册</span>
						<span class="head-fout-first">买家中心</span>
						<span class="head-I-style">|</span>
						<span class="head-fout">卖家中心</span>
						<span class="head-I-style">|</span>
						<span class="head-fout">我的额度</span>
						<span class="head-I-style">|</span>
						<span class="head-fout">供应链服务</span>
						<span class="head-I-style">|</span>
						<span class="head-fout">客户中心</span>
						<span class="head-I-style">|</span>
						<span class="head-fout">交易热线: 400-123-456</span>
					</div>
				</el-col>
			</el-row>	
		</el-header>
		
		<el-main>
			<div class="main-div">
				<el-row :gutter="20">
					<el-col :span="7" :offset="2">
						<div class="main-div-div">
							<span>
								<img src="../assets/home/logo.png" />
							</span>
						</div>
					</el-col>
					<el-col :span="13">
						<div class="main-sreach-div">
							<el-input style="margin-top: -50px;" class="main-sreach" placeholder="请输入内容" v-model="input3"></el-input>
							<el-button class="main-sreach-button" type="primary">搜索</el-button>
							<div class="main-card">
								<el-badge :value="1" :max="10" class="item" type="primary">
									<img src="../assets/head/gouwuche.png"/>
								</el-badge>
								<span class="main-card-text">我的购物车</span>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row :gutter="20" >
					<el-col :span="18" :offset="3">
						<el-menu router :default-active="$router.path"  active-text-color="#1C84FF" class="main-menu" mode="horizontal" @select="handleSelect" >
						  <el-menu-item class="main-el-menu-item" index="/home/Home">首页</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >采现货</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >采期货</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >客户询价</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >品牌商城</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >找资金</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >找物流</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >找仓库</el-menu-item>
						  <el-menu-item class="main-el-menu-item" >行情中心</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
				
				
				
				<!-- 变动模块 -->
				<el-row style="background-color: #F2F2F2;">
					<router-view/>
				</el-row>
			</div>
			
		</el-main>
		
		
		
		 <el-footer>
		 </el-footer>
		 	
		 
		 
	</el-container>
</template>

<script>
	// 导入组件
	// 导出模块
	export default {
		name: 'Main',
		data: function() {
			return {
				fit:'fill',
				input3:null,
				activeIndex: '1',
        		activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    }
		},
		created: function() {

		}
	};
</script>
<style scoped>
	
	.head{
		width: 100%;	
		height: 36px;
		background: #F3F3F3;
	}
	
	.head-div{
		width: 102%;
		font-size: 12px;
		margin-top: 20px;
	}
	
	.head-font-city{
		font-family: PingFangSC-Regular;
		color: #6C6C6C;
	}
	
	.head-login-register{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #1C84FF;
		margin-left: 14px;
	}
	
	.head-fout-first{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #6C6C6C;
		margin-left: 546px;
	}
	
	.head-fout{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #6C6C6C;
		margin-left: 14px;
	}
	
	.head-I-style{
		color: #E3E3E3;
	}
	.head-I-style-first{
		margin-left: 14px;
		color: #E3E3E3;
	}
	
	.main-div{
		width: 100%;
		height: 139px;
		position: absolute;
		left: 0;
		margin-top: -19px;
		background: #FFFFFF;
	}
	
	.main-div-div{
		margin-left: 15px;
		margin-top: 20px;
		height: 100%;
	}
	
	.main-sreach-div{
		margin-left: 50px;
		margin-top: 28px;
	}
	
	
	.main-sreach{
		width: 491px;
	}
	.main-sreach-button{
		margin-left: 50;
	}
	.main-card{
		width: 128px;
		height: 40px;
		margin-left: 627px;
		margin-top: -40px;
		text-align: center;
		line-height: 4px;
		background: #FFFFFF;
	}
	.item {
		margin-left: -15px;
	    margin-top: 13px;
 		margin-right: 30px;
 		font-size: 16px;
	}
	.main-card-text{
		margin-left: -20px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #1C84FF;
	}
	.main-menu{
		margin-left: 25px;
	}
	.main-el-menu-item{
		margin-left: 30px;
	}
	
	
	
	.main2-div{
  		background-color: #F2F2F2;
	}
	
	
</style>