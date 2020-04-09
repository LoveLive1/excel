<template>
	<div>
		<el-row :gutter="20" class="row-one">
			<el-col :span="3" :offset="2">
				<div class="div-one">
					<div class="div-one-headDiv">
						<span><img class="div-one-headDiv-image" src="../../assets/head/allGoods.png"/></span>
						<span class="div-one-headDiv-text">全部商品分类</span>
					</div>
					<div>
						<div>
							<ul class="div-one-smallDiv-ul">
								<li>
									<div class="div-one-smallDiv">
										<ul class="div-one-smallDiv-ul-ul">
											<li class="div-one-smallDiv-ul-ul-li-first">
												<div class="">
													<img src="../../assets/type/fangxiangpan.png" />
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-two">
												<div>
													<span>整车</span>
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-last">
												<div>
													<i class="el-icon-arrow-right"></i>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<div class="div-one-smallDiv">
										<ul class="div-one-smallDiv-ul-ul">
											<li class="div-one-smallDiv-ul-ul-li-first">
												<div style="margin-left: -30px;">
													<img src="../../assets/type/peijian.png" />
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-two">
												<div>
													<span>配件</span>
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-last">
												<div>
													<i class="el-icon-arrow-right"></i>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<div class="div-one-smallDiv">
										<ul class="div-one-smallDiv-ul-ul">
											<li class="div-one-smallDiv-ul-ul-li-first">
												<div style="margin-left: 0px;">
													<img src="../../assets/type/chilun.png" />
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-two">
												<div>
													<span>材料</span>
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-last">
												<div>
													<i class="el-icon-arrow-right"></i>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<div class="div-one-smallDiv">
										<ul class="div-one-smallDiv-ul-ul">
											<li class="div-one-smallDiv-ul-ul-li-first">
												<div style="margin-left: -30px;">
													<img src="../../assets/type/other.png" />
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-two">
												<div>
													<span>其他物料</span>
												</div>
											</li>
											<li class="div-one-smallDiv-ul-ul-li-last">
												<div>
													<i class="el-icon-arrow-right"style="margin-left: -30px;"></i>
												</div>
											</li>
										</ul>
									</div>
								</li>
							</ul>

						</div>

					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="div-two">
					<!--<img src="../../assets/lunbotu/lunbotu1.jpg" />-->
					<el-carousel height="400px">
						<el-carousel-item v-for="k in item" :key="k.key">
							<img :src="k.url" />
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-col>
			<el-col :span="5">
				<div class="div-three">
					<div>
						<el-avatar class="div-three-headImage" :size="70" :src="circleUrl"></el-avatar>
					</div>
					<div class="div-three-greetsb">
						<span>Hi,欢迎来到天府经开产业<br />互联网平台</span>
					</div>
					<div>
						<el-button class="div-three-bottom">登录</el-button>
						<el-button class="div-three-bottom" type="primary">注册</el-button>
					</div>

					<div class="div-trhee-div3">
						<span>点击立马查看我的额度</span>
					</div>

					<div class="div-three-div4">
						<span>其他登录方式</span>
					</div>

					<div class="div-three-div5">
						<img src="../../assets/tenxun/weixin.png" />
						<img class="div-three-div5-image" src="../../assets/tenxun/QQ.png" />
					</div>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="20" class="row-two">
			<!--
				
				人气店铺
			-->
			<el-col :span="5" :offset="2">
				<div class="rowTwo-div-one">
					<div class="rowTo-one-div-div">
						<span class="rowTwo-div-one-title1">人气店铺</span>
						<span class="rowTwo-div-one-title2">排名每天凌晨更新</span>
						<span class="rowTwo-div-one-title3">更多</span>
					</div>
					<div>
						<div class="hotmall-div-one">
							<img class="hotmall-div-one-logon1" src="../../assets/hotmall/编组 24.png" />
							<img class="hotmall-div-one-logon2" src="../../assets/hotmall/位图.png" />
							<ul class="hotmall-div-one-ul">
								<li class="hotmall-div-one-li1">凡畅车品专营店</li>
								<li class="hotmall-div-one-li2">周人气值：1209</li>
							</ul>
							<div class="hotmall-go">
								<span>进入</span>
							</div>
						</div>
						<div class="hotmall-div-one">
							<img class="hotmall-div-one-logon1" src="../../assets/hotmall/编组 25.png" />
							<img class="hotmall-div-one-logon2" src="../../assets/hotmall/位图备份.png" />
							<ul class="hotmall-div-one-ul">
								<li class="hotmall-div-one-li1">艾默车品专营店</li>
								<li class="hotmall-div-one-li2">周人气值：1119</li>
							</ul>
							<div class="hotmall-go">
								<span>进入</span>
							</div>
						</div>
						<div class="hotmall-div-one">
							<img class="hotmall-div-one-logon1" src="../../assets/hotmall/编组 26.png" />
							<img class="hotmall-div-one-logon2" src="../../assets/hotmall/位图备份.png" />
							<ul class="hotmall-div-one-ul">
								<li class="hotmall-div-one-li1">艾默车品专营店</li>
								<li class="hotmall-div-one-li2">周人气值：1119</li>
							</ul>
							<div class="hotmall-go">
								<span>进入</span>
							</div>
						</div>
						<div class="hotmall-div-one">
							<img class="hotmall-div-one-logon1" src="../../assets/hotmall/编组 27.png" />
							<img class="hotmall-div-one-logon2" src="../../assets/hotmall/位图备份.png" />
							<ul class="hotmall-div-one-ul">
								<li class="hotmall-div-one-li1">艾默车品专营店</li>
								<li class="hotmall-div-one-li2">周人气值：1119</li>
							</ul>
							<div class="hotmall-go">
								<span>进入</span>
							</div>
						</div>
						<div class="hotmall-div-one">
							<img class="hotmall-div-one-logon1" src="../../assets/hotmall/编组 28.png" />
							<img class="hotmall-div-one-logon2" src="../../assets/hotmall/位图备份.png" />
							<ul class="hotmall-div-one-ul">
								<li class="hotmall-div-one-li1">艾默车品专营店</li>
								<li class="hotmall-div-one-li2">周人气值：1119</li>
							</ul>
							<div class="hotmall-go">
								<span>进入</span>
							</div>
						</div>
					</div>
				</div>
			</el-col>

			<!--
				
				求购状态
			-->
			<el-col :span="9">
				<div class="col-two-div">
					<div class="col-tow-head-div">
						<span class="col-tow-head-div-title1">求购状态</span>
						<span class="col-tow-head-div-title2">买家求购，卖家快速报价</span>
						<span class="col-tow-head-div-title3">我要求购</span>
					</div>
					<ul class="col-two-div-ul">
						<li class="col-two-div-li-frist">
							<div>
								<ul class="col-tow-main-div-ul">
									<li>
										<div class="col-tow-main-div-ul-li1-div-frist">
											<ul class="col-tow-main-div-ul">
												<li>
													<span class="col-tow-main-div-ul-li1">冷轧平板&nbsp;4.0*1500L&nbsp;1件</span>
													<div class="col-tow-main-div-ul-li1-tag">
														<span class="col-tow-main-div-ul-li1-tag-text">已完成</span>
													</div>
												</li>
												<li class="col-tow-main-div-ul-li2"><span>04-01&nbsp;11:30</span></li>
												<li class="col-tow-main-div-ul-li2"><span>无锡市启庆不...289远/件</span><span class="col-tow-main-div-ul-li2-address">无锡</span></li>
											</ul>
										</div>
									</li>

									<li>
										<div class="col-tow-main-div-ul-li1-div">
											<ul class="col-tow-main-div-ul">
												<li>
													<span class="col-tow-main-div-ul-li1">冷轧平板&nbsp;4.0*1500L&nbsp;1件</span>
													<div class="col-tow-main-div-ul-li1-tag">
														<span class="col-tow-main-div-ul-li1-tag-text">已完成</span>
													</div>
												</li>
												<li class="col-tow-main-div-ul-li2"><span>04-01&nbsp;11:30</span></li>
												<li class="col-tow-main-div-ul-li2"><span>无锡市启庆不...289远/件</span><span class="col-tow-main-div-ul-li2-address">无锡</span></li>
											</ul>
										</div>
									</li>
									<li>
										<div class="col-tow-main-div-ul-li1-div">
											<ul class="col-tow-main-div-ul">
												<li>
													<span class="col-tow-main-div-ul-li1">冷轧平板&nbsp;4.0*1500L&nbsp;1件</span>
													<div class="col-tow-main-div-ul-li1-tag">
														<span class="col-tow-main-div-ul-li1-tag-text">已完成</span>
													</div>
												</li>
												<li class="col-tow-main-div-ul-li2"><span>04-01&nbsp;11:30</span></li>
												<li class="col-tow-main-div-ul-li2"><span>无锡市启庆不...289远/件</span><span class="col-tow-main-div-ul-li2-address">无锡</span></li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li class="col-two-div-li-two">
							<div>
								<ul class="col-tow-main-div-ul">
									<li>
										<div class="col-tow-main-div-ul-li1-div-frist">
											<ul class="col-tow-main-div-ul">
												<li>
													<span class="col-tow-main-div-ul-li1">冷轧平板&nbsp;4.0*1500L&nbsp;1件</span>
													<div class="col-tow-main-div-ul-li1-tag">
														<span class="col-tow-main-div-ul-li1-tag-text">已完成</span>
													</div>
												</li>
												<li class="col-tow-main-div-ul-li2"><span>04-01&nbsp;11:30</span></li>
												<li class="col-tow-main-div-ul-li2"><span>无锡市启庆不...289远/件</span><span class="col-tow-main-div-ul-li2-address">无锡</span></li>
											</ul>
										</div>
									</li>

									<li>
										<div class="col-tow-main-div-ul-li1-div">
											<ul class="col-tow-main-div-ul">
												<li>
													<span class="col-tow-main-div-ul-li1">冷轧平板&nbsp;4.0*1500L&nbsp;1件</span>
													<div class="col-tow-main-div-ul-li1-tag">
														<span class="col-tow-main-div-ul-li1-tag-text">已完成</span>
													</div>
												</li>
												<li class="col-tow-main-div-ul-li2"><span>04-01&nbsp;11:30</span></li>
												<li class="col-tow-main-div-ul-li2"><span>无锡市启庆不...289远/件</span><span class="col-tow-main-div-ul-li2-address">无锡</span></li>
											</ul>
										</div>
									</li>
									<li>
										<div class="col-tow-main-div-ul-li1-div">
											<ul class="col-tow-main-div-ul">
												<li>
													<span class="col-tow-main-div-ul-li1">冷轧平板&nbsp;4.0*1500L&nbsp;1件</span>
													<div class="col-tow-main-div-ul-li1-tag">
														<span class="col-tow-main-div-ul-li1-tag-text">已完成</span>
													</div>
												</li>
												<li class="col-tow-main-div-ul-li2"><span>04-01&nbsp;11:30</span></li>
												<li class="col-tow-main-div-ul-li2"><span>无锡市启庆不...289远/件</span><span class="col-tow-main-div-ul-li2-address">无锡</span></li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>

				</div>
			</el-col>

			<!--
				
				成交动态
			-->
			<el-col :span="6">
				<div class="col-three-div">
					<div class="col-three-div-head-div">
						<span class="col-three-div-head-title">成交动态</span>
					</div>
					<div class="col-three-main-div">
						<ul class="col-three-div-ul">
							<li class="col-three-div-li-first">
								<ul class="col-three-div-ul">
									<li><span class="col-three-div-li-text1">车载吸尘无线充电</span><span class="col-three-div-li-text2">2198</span></li>
									<li class="col-three-div-li2"><span class="col-three-div-li-text3">无锡</span><span class="col-three-div-li-text4">04-01&nbsp;11:30</span></li>
								</ul>
							</li>
							<li class="col-three-div-li">
								<ul class="col-three-div-ul">
									<li><span class="col-three-div-li-text1">车载吸尘无线充电</span><span class="col-three-div-li-text2">2198</span></li>
									<li class="col-three-div-li2"><span class="col-three-div-li-text3">无锡</span><span class="col-three-div-li-text4">04-01&nbsp;11:30</span></li>
								</ul>
							</li>
							<li class="col-three-div-li">
								<ul class="col-three-div-ul">
									<li><span class="col-three-div-li-text1">车载吸尘无线充电</span><span class="col-three-div-li-text2">2198</span></li>
									<li class="col-three-div-li2"><span class="col-three-div-li-text3">无锡</span><span class="col-three-div-li-text4">04-01&nbsp;11:30</span></li>
								</ul>
							</li>
							<li class="col-three-div-li">
								<ul class="col-three-div-ul">
									<li><span class="col-three-div-li-text1">车载吸尘无线充电</span><span class="col-three-div-li-text2">2198</span></li>
									<li class="col-three-div-li2"><span class="col-three-div-li-text3">无锡</span><span class="col-three-div-li-text4">04-01&nbsp;11:30</span></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
		</el-row>

		<!--
			
			天府数据
		-->

		<el-row :gutter="20">
			<el-col :span="20" :offset="2">
				<div class="data-report-div">
					<div class="data-report-head">
						<span class="data-report-head-title">天府数据</span>
						<span class="data-report-head-span1">产业指数</span>
						<span class="data-report-head-span1">交易指数</span>
						<span class="data-report-head-span1">经开指数</span>
						<span class="data-report-head-time">更新时间：04月01日&nbsp;10:00</span>
					</div>
					<div>
						<el-divider></el-divider>
					</div>
					<div>
						<ul class="data-report-main-ul">
							<li class="data-report-main-ul-allli">
								<div>
									<div>
										<span class="data-report-main-ul-li1-head-title">城市成交量走势</span>
									</div>
									<div class="data-report-main-ul-li1-main-tagdiv">
										<el-tag class="data-report-main-ul-li1-main-tag1">
											<span class="data-report-main-ul-li1-main-tag1-span">本周累积量:&nbsp;3579件</span>
										</el-tag>
										<el-tag class="data-report-main-ul-li1-main-tag2">
											<span class="data-report-main-ul-li1-main-tag2-span">上周同期:&nbsp;4398件</span>
										</el-tag>
										<el-tag class="data-report-main-ul-li1-main-tag2">
											<span class="data-report-main-ul-li1-main-tag2-span">上周总量:&nbsp;7977件</span>
										</el-tag>
									</div>
									<div ref="chart" class="data-report-main-ul-li1-main-echarts"></div>
								</div>
							</li>
							<li class="data-report-main-ul-allli">
								<div>
									<ul class="data-report-main-ul">
										<li class="open-li">
											<div>
												<ul class="data-report-main-ul data-report-main-ul-other">
													<li>
														<span class="openPan-title-span1">车载吸尘器无线充电</span>
														<span class="openPan-title-span2">指南车</span>
													</li>
													<li class="open-li1">
														<span class="openPan-title-span3">收盘价</span>
														<span class="openPan-title-span3 openPan-title-span4">较开盘</span>
													</li>
													<li class="open-li2">
														<span class="openPan-title-span5">4392</span>
														<span class="openPan-title-span6">-10</span>
													</li>
													<li class="open-li3">
														<span class="openPan-title-span7">成都</span>
														<span class="openPan-title-span7 openPan-title-span8">2020-04-01&nbsp;&nbsp;11:30</span>
													</li>
												</ul>
											</div>
										</li>
										<li class="open-li-two">

										</li>

										<li class="open-li">
											<div>
												<ul class="data-report-main-ul data-report-main-ul-other">
													<li>
														<span class="openPan-title-span1">车载吸尘器无线充电</span>
														<span class="openPan-title-span2">指南车</span>
													</li>
													<li class="open-li1">
														<span class="openPan-title-span3">收盘价</span>
														<span class="openPan-title-span3 openPan-title-span4">较开盘</span>
													</li>
													<li class="open-li2">
														<span class="openPan-title-span5">4392</span>
														<span class="openPan-title-span6">-10</span>
													</li>
													<li class="open-li3">
														<span class="openPan-title-span7">成都</span>
														<span class="openPan-title-span7 openPan-title-span8">2020-04-01&nbsp;&nbsp;11:30</span>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
		</el-row>

		<!--
			
			商家推荐
		-->
		<el-row :gutter="20" class="row-two">

			<el-col :span="20" :offset="2">
				<div class="mall-recommend-div">
					<div class="data-report-head">
						<span class="data-report-head-title">商家推荐</span>
						<span class="mall-recommend-head-genduo">查看更多</span>
					</div>
					<div>
						<el-divider></el-divider>
					</div>
					<div>
						<ul class="mall-recommend-ul">
							<li>
								<ul class="mall-recommend-ul">
									<li class="mall-recommend-ul-li-frist">
										<img src="../../assets/mallrecommend/5780403_0_0.png" />
									</li>
									<li class="mall-recommend-ul-li">
										<img src="../../assets/mallrecommend/5820467_0_0.png" />
									</li>
									<li class="mall-recommend-ul-li">
										<img src="../../assets/mallrecommend/5824819_0_0.png" />
									</li>
									<li class="mall-recommend-ul-li">
										<img src="../../assets/mallrecommend/5843090_0_0.png" />
									</li>
								</ul>
							</li>
							<li>
								<ul class="mall-recommend-ul">
									<li class="mall-recommend-ul-li-frist">
										<img class="mall-recommend-ul-li-image" src="../../assets/mallrecommend/5854608_0_0.png" />
									</li>
									<li class="mall-recommend-ul-li">
										<img class="mall-recommend-ul-li-image" src="../../assets/mallrecommend/5917661_0_0.png" />
									</li>
									<li class="mall-recommend-ul-li">
										<img class="mall-recommend-ul-li-image" src="../../assets/mallrecommend/5919119_0_0.png" />
									</li>
									<li class="mall-recommend-ul-li">
										<img class="mall-recommend-ul-li-image" src="../../assets/mallrecommend/5945592_0_0.png" />
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
		</el-row>

		<!--
			
			现货交易
		-->
		<el-row :gutter="20" class="row-two">
			<el-col :span="20" :offset="2">
				<div class="spot-transactions-div">
					<div class="data-report-head">
						<span class="data-report-head-title">现货交易</span>
						<span class="spot-transactions-head-more">查看更多</span>
					</div>
					<div>
						<el-divider></el-divider>
					</div>
					<div>
						<ul style="list-style: none;">
							<li style="float: left;background: #C2DEFE;margin-left: -20px;">
								<div style="width: 276px;height: 398px;text-align: center;">
									<div style="padding-top: 30px;">
										<span style="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;">企业汇采</span>
									</div>
									<ul style="list-style: none;padding-top:25px;">
										<li style="float: left;">
											<div style="width: 76px;height: 34px;background: #6AAEFE;text-align: center;">
												<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
											</div>
										</li>
										<li style="float: left;padding-left: 40px;">
											<div style="width: 76px;height: 34px;background: #6AAEFE;text-align: center;">
												<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
											</div>
										</li>
									</ul>
									<ul style="list-style: none;padding-top:52px;">
										<li style="float: left;">
											<div style="width: 76px;height: 34px;background: #6AAEFE;text-align: center;">
												<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
											</div>
										</li>
										<li style="float: left;padding-left: 40px;">
											<div style="width: 76px;height: 34px;background: #6AAEFE;text-align: center;">
												<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
											</div>
										</li>
									</ul>
									<div style="text-align: center;padding-top: 78px;">
										<img src="../../assets/SpotPurchasing/96af35c8e7f4aecf095c82b10a838ca2.png" />
									</div>
								</div>
							</li>
							<li style="float: left;">
								<div>
									<ul style="list-style: none;">
										<li style="height: 208px;">
											<div style="margin-left: -52px;">
												<ul style="list-style: none;">
													<li style="float: left;">
														<div style="width: 276px;height: 190px;background: #FCEBBD;text-align: center;">
															<div style="padding-top: 27px;">
																<span style="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;">小单定制</span>
															</div>
															<ul style="list-style: none;padding-top:28px;">
																<li style="float: left;">
																	<div style="width: 76px;height: 34px;background: #FCD467;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
																<li style="float: left;padding-left: 40px;">
																	<div style="width: 76px;height: 34px;background: #FCD467;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
															</ul>

															<ul style="list-style: none;padding-top:50px;">
																<li style="float: left;">
																	<div style="width: 76px;height: 34px;background: #FCD467;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
																<li style="float: left;padding-left: 40px;">
																	<div style="width: 76px;height: 34px;background: #FCD467;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
															</ul>
														</div>
													</li>
													<li style="float: left;margin-left: 28px;">
														<div>
															<img src="../../assets/SpotPurchasing/501104587_banner.png" />
														</div>
													</li>
												</ul>
											</div>
										</li>
										<li>
											<div style="margin-left: -52px;">
												<ul style="list-style: none;">
													<li style="float: left;">
														<div style="width: 276px;height: 190px;background: #C2EEFB;text-align: center;">
															<div style="padding-top: 27px;">
																<span style="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;">小单定制</span>
															</div>
															<ul style="list-style: none;padding-top:28px;">
																<li style="float: left;">
																	<div style="width: 76px;height: 34px;background: #6CDDFE;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
																<li style="float: left;padding-left: 40px;">
																	<div style="width: 76px;height: 34px;background: #6CDDFE;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
															</ul>

															<ul style="list-style: none;padding-top:50px;">
																<li style="float: left;">
																	<div style="width: 76px;height: 34px;background: #6CDDFE;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
																<li style="float: left;padding-left: 40px;">
																	<div style="width: 76px;height: 34px;background: #6CDDFE;text-align: center;">
																		<span style="line-height: 34px;font-family: PingFangSC-Medium;font-size: 13px;color: #FFFFFF;">发票保障</span>
																	</div>
																</li>
															</ul>
														</div>
													</li>
													<li style="float: left;">
														<div style="margin-left: 27px;">
															<img src="../../assets/SpotPurchasing/501189152.png" />
														</div>
													</li>
													<li style="float: left;">
														<div style="margin-left: 22px;">
															<img src="../../assets/SpotPurchasing/500256911.png" />
														</div>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
		</el-row>

		<!--
			
			全产品链接服务
		-->
		<el-row :gutter="20" class="row-two">
			<el-col :span="20" :offset="2">
				<div class="link-service-div">
					<div class="data-report-head">
						<span class="data-report-head-title">现货交易</span>
						<span class="spot-transactions-head-more">查看更多</span>
					</div>
					<div>
						<el-divider></el-divider>
					</div>

					<div>
						<div>
							<ul class="link-service-main-ul">
								<li class="link-service-main-ul-li">
									<div class="link-service-main--ul-li1-div">
										<div class="link-service-main--ul-li1-div-div1">
											<span class="link-service-main--ul-li1-div-textHead">供应链金融服务</span>
										</div>
										<div class="link-service-main--ul-li1-div-div2">
											<span>
												为了满足产业链接客户对账期和货物的需求，基于用户<br />
												真实交易场景逐步打造了供应链服务产----帮你采，<br />
												随你压，任你花，订单融，帮助上下游企业解决了货物<br />
												与账期难题
											</span>
										</div>
									</div>
								</li>
								<li class="link-service-main-ul-li">
									<div>
										<ul class="link-service-main-ul">
											<li style="height: 198px;">
												<div>
													<ul class="link-service-main-ul">
														<li class="link-service-main-ul-li">
															<div id="logisticsService">
																<span class="link-service-span">物流服务</span>
															</div>
														</li>
														<li>
															<div id="processService">
																<span class="link-service-span">加工服务</span>
															</div>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<div>
													<ul class="link-service-main-ul">
														<li class="link-service-main-ul-li">
															<div id="dataService">
																<span class="link-service-span">数据分析</span>
															</div>
														</li>
														<li>
															<div id="platformService">
																<span class="link-service-span">平台助手</span>
															</div>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>

		<!--
			
			底部信息栏
		-->
		<el-row>
			<div style="width: 100%;height:178px; background: #282828; margin-top: 10px;text-align: center;">
				<div class="foot-bottom-first">
					<span>新手指南</span>
					<el-divider direction="vertical"></el-divider>
					<span>买家入门</span>
					<el-divider direction="vertical"></el-divider>
					<span>卖家入门</span>
					<el-divider direction="vertical"></el-divider>
					<span>买家服务</span>
					<el-divider direction="vertical"></el-divider>
					<span>卖家服务</span>
					<el-divider direction="vertical"></el-divider>
					<span>其他服务</span>
					<el-divider direction="vertical"></el-divider>
					<span>友情链接</span>
				</div>
				<div class="foot-bottom">
					<span>投诉举报</span>
					<el-divider direction="vertical"></el-divider>
					<span>关于我们</span>
					<el-divider direction="vertical"></el-divider>
					<span>商家入驻</span>
					<el-divider direction="vertical"></el-divider>
					<span>交易安全</span>
					<el-divider direction="vertical"></el-divider>
					<span>买家防骗</span>
					<el-divider direction="vertical"></el-divider>
					<span>卖家防骗</span>
					<el-divider direction="vertical"></el-divider>
					<span>交易维权</span>
					<el-divider direction="vertical"></el-divider>
					<span>帮助中心</span>
				</div>
				<div class="foot-bottom">
					<span>2020-2010  Banksteel.com,All Rights Reserved.</span>
				</div>
				<div class="foot-bottom">
					<span>上海申冉数字科技有限公司  版权所有  增值电信业务经营许可证沪</span>
				</div>
			</div>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data: function() {
			return {
				item: [{
						url: require("../../assets/lunbotu/lunbotu1.jpg"),
						key: "1"
					},
					{
						url: require("../../assets/lunbotu/lunbotu2.jpg"),
						key: "2"
					},
					{
						url: require("../../assets/lunbotu/lunbotu3.jpg"),
						key: "3"
					}
				],
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				option: {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							crossStyle: {
								color: '#999'
							}
						}
					},
					toolbox: {
						feature: {
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					legend: {
						data: ['上周', '本周', '平均订单']
					},
					color: ['#6AAEFE', '#FFBA00'],
					xAxis: [{
						type: 'category',
						data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
						axisPointer: {
							type: 'shadow'
						}
					}],
					yAxis: [{
							type: 'value',
							name: '成交量',
							min: 0,
							max: 250,
							interval: 50,
							axisLabel: {
								formatter: '{value} k'
							}
						},
						{
							type: 'value',
							name: '订单数（笔）',
							min: 0,
							max: 4000,
							interval: 1000,
							axisLabel: {
								formatter: '{value}'
							}
						}
					],
					series: [{
							name: '上周',
							type: 'bar',
							data: [120.0, 154.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
						},
						{
							name: '本周',
							type: 'bar',
							data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
						},
						{
							name: '平均订单',
							type: 'line',
							yAxisIndex: 1,
							data: [1200.0, 1500.2, 1300.3, 1500.5, 2999.3, 555.2, 1220.3, 23.4, 23.0, 16.5, 12.0, 6.2]
						}
					]
				}

			}
		},
		methods: {
			initEcharts() {
				let myChart = this.$echarts.init(this.$refs.chart);
				myChart.setOption(this.option);
			},
		},
		mounted() {
			this.initEcharts();
		}
	}
</script>

<style>
	/*<!--<el-image
							      class="div-one-headDiv-logo"
							      :src="require('../../assets/type/fangxiangpan.png')"
							      :fit="fit"></el-image>-->*/
	
	.row-one {
		margin-top: 10px;
	}
	/*
	 全部商品分类
	 * */
	
	.div-one {
		background: #FFFFFF;
		width: 220px;
		height: 400px;
		margin-left: 10px;
	}
	
	.div-one-headDiv {
		text-align: center;
		width: 100%;
		height: 42px;
		background: #1C84FF;
	}
	
	.div-one-headDiv-text {
		line-height: 42px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		margin-left: 11px;
		color: #FFFFFF;
		margin-left: 12px;
	}
	
	.div-one-headDiv-image {
		height: 12px;
		width: 19px;
	}
	
	.div-one-headDiv-logo {
		height: 30px;
		width: 30px;
	}
	
	
	.div-one-smallDiv-ul {
		width: 200px;
		height: 500px;
		margin-left:-40px;
		margin-top: 10px;
		list-style: none;
	}
	
	.div-one-smallDiv-ul-ul {
		list-style: none;
	}
	
	.div-one-smallDiv-ul-ul-li {
		float: left;
	}
	
	.div-one-smallDiv-ul-ul-li-first {
		float: left;
		padding-top: 8px;
	}
	
	.div-one-smallDiv-ul-ul-li-two {
		float: left;
		padding-left: 10px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
	}
	
	.div-one-smallDiv-ul-ul-li-last {
		float: left;
		padding-left: 60px;
		font-size: 20px;
	}
	
	.div-one-smallDiv {
		height: 70px;
		line-height: 70px;
	}
	
	.div-one-smallDiv-text {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		padding-left: 12px;
	}
	/*
	 ；轮播图
	 * */
	
	.div-two {
		width: 713px;
		height: 400px;
		margin-left: 48px;
		background: #FFFFFF;
	}
	/*
	 登录模块
	 * */
	
	.div-three {
		text-align: center;
		width: 290px;
		height: 400px;
		background: #FFFFFF;
	}
	
	.div-three-headImage {
		margin-top: 30px;
	}
	
	.div-three-greetsb {
		margin-top: 20px;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #333333;
		text-align: center;
	}
	
	.div-three-bottom {
		margin-top: 23px;
		width: 110px;
		height: 35px;
	}
	
	.div-trhee-div3 {
		margin-top: 30px;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #1C84FF;
		text-align: center;
	}
	
	.div-three-div4 {
		margin-top: 30px;
		font-family: PingFangSC-Regular;
		font-size: 13px;
		color: #B2B2B2;
	}
	
	.div-three-div5 {
		margin-top: 30px;
	}
	
	.div-three-div5-image {
		margin-left: 64px;
	}
	/*
	 	人气店铺模块
	 * */
	
	.row-two {
		margin-top: 10px;
	}
	
	.rowTo-one-div-div {
		padding-top: 20px;
	}
	
	.rowTwo-div-one {
		width: 327px;
		height: 408px;
		background-color: #FFFFFF;
		margin-left: 10px;
		text-align: center;
	}
	
	.rowTwo-div-one-title1 {
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #FFBA00;
	}
	
	.rowTwo-div-one-title2 {
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #999999;
		margin-left: 20px;
	}
	
	.rowTwo-div-one-title3 {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
		margin-left: 59px;
		font-weight: 550;
	}
	
	.hotmall-div-one {
		margin-top: 10px;
		height: 60px;
	}
	
	.hotmall-div-one-logon1 {
		margin-top: 10px;
		margin-left: -200px;
	}
	
	.hotmall-div-one-logon2 {
		margin-top: 10px;
		margin-left: 13px;
	}
	
	.hotmall-div-one-ul {
		list-style: none;
		margin-top: -45px;
		margin-left: -15px;
	}
	
	.hotmall-div-one-li1 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
	}
	
	.hotmall-div-one-li2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		margin-top: 4px;
	}
	
	.hotmall-go {
		margin-top: -45px;
		margin-left: 270px;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #1C84FF;
	}
	/*
	 求购状态
	 * */
	
	.col-two-div {
		height: 408px;
		width: 607px;
		background: #FFFFFF;
		margin-left: 25px;
	}
	
	.col-tow-head-div {
		padding-top: 20px;
		padding-left: 20px;
	}
	
	.col-two-div-ul {
		list-style: none;
		margin-left: -38px;
		margin-top: -0px;
	}
	
	.col-two-div-li-frist {
		float: left;
	}
	
	.col-two-div-li-two {
		float: left;
		margin-left: 22px;
	}
	
	.col-tow-head-div-title1 {
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #1C84FF;
	}
	
	.col-tow-head-div-title2 {
		font-family: PingFangSC-Medium;
		font-size: 12px;
		padding-left: 20px;
		color: #999999;
	}
	
	.col-tow-head-div-title3 {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #1C84FF;
		padding-left: 250px;
	}
	
	.col-tow-main-div-ul {
		list-style: none;
	}
	
	.col-tow-main-div-ul-li1 {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
	}
	
	.col-tow-main-div-ul-li1-div-frist {
		margin-left: -40px;
		width: 300px;
		margin-left: -60px;
		margin-top: 30px;
	}
	
	.col-tow-main-div-ul-li1-div {
		margin-left: -40px;
		width: 300px;
		margin-left: -60px;
		margin-top: 39px;
	}
	
	.col-tow-main-div-ul-li1-tag {
		width: 52px;
		height: 25px;
		background: #1C84FF;
		text-align: center;
		margin-left: 200px;
		margin-top: -22px;
	}
	
	.col-tow-main-div-ul-li1-tag-text {
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #FFFFFF;
		line-height: 25px;
	}
	
	.col-tow-main-div-ul-li2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		margin-top: 8px;
	}
	
	.col-tow-main-div-ul-li2-address {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		margin-left: 70px;
	}
	/*
	 成交动态
	 * */
	
	.col-three-div {
		margin-left: 63px;
		width: 291px;
		height: 408px;
		background: #FFFFFF;
	}
	
	.col-three-div-head-title {
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #E1251B;
	}
	
	.col-three-div-head-div {
		padding-top: 20px;
		padding-left: 20px;
	}
	
	.col-three-main-div {
		margin-left: -60px;
	}
	
	.col-three-div-ul {
		list-style: none;
	}
	
	.col-three-div-li-first {
		margin-top: 25px;
	}
	
	.col-three-div-li {
		margin-top: 30px;
	}
	
	.col-three-div-li-text1 {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
	}
	
	.col-three-div-li-text2 {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #D31111;
		margin-left: 85px;
	}
	
	.col-three-div-li2 {
		margin-top: 12px;
	}
	
	.col-three-div-li-text3 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
	}
	
	.col-three-div-li-text4 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		margin-left: 132px;
	}
	/*
	 天府数据
	 * */
	
	.data-report-div {
		height: 362px;
		width: 1242px;
		background: #FFFFFF;
		margin-top: 10px;
		margin-left: 10px;
	}
	
	.data-report-head {
		padding-top: 20px;
		padding-left: 21px;
	}
	
	.data-report-head-title {
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #333333;
	}
	
	.data-report-head-span1 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #858585;
		margin-left: 46px;
	}
	
	.data-report-head-time {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #858585;
		margin-left: 628px;
	}
	
	.data-report-main-ul {
		list-style: none;
	}
	
	.data-report-main-ul-other {
		margin-top: 70px;
	}
	
	.data-report-main-ul-allli {
		float: left;
	}
	
	.data-report-main-ul-li1-head-title {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		font-weight: 550;
	}
	
	.data-report-main-ul-li1-main-tag1 {
		background: rgba(255, 186, 0, 0.10);
		border-radius: 11px;
		border-radius: 11px;
	}
	
	.data-report-main-ul-li1-main-tagdiv {
		margin-top: 10px;
	}
	
	.data-report-main-ul-li1-main-tag1-span {
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFBA00;
		font-weight: 550;
	}
	
	.data-report-main-ul-li1-main-tag2 {
		margin-left: 40px;
	}
	
	.data-report-main-ul-li1-main-tag2-span {
		font-weight: 550;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #1C84FF;
	}
	
	.data-report-main-ul-li1-main-echarts {
		width: 500px;
		height: 220px;
		margin-top: 12px;
	}
	/*
	 天府数据右边
	 * */
	
	.openPan-title-span1 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
	}
	
	.openPan-title-span2 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		margin-left: 70px;
	}
	
	.openPan-title-span3 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		margin-left: 40px;
	}
	
	.openPan-title-span4 {
		margin-left: 70px;
	}
	
	.openPan-title-span5 {
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: #1C84FF;
		margin-left: 30px;
	}
	
	.openPan-title-span6 {
		font-family: PingFangSC-Regular;
		font-size: 20px;
		color: #FFBA00;
		margin-left: 60px;
	}
	
	.openPan-title-span7 {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
	}
	
	.openPan-title-span8 {
		margin-left: 87px;
	}
	
	.open-li1 {
		margin-top: 30px;
	}
	
	.open-li2 {
		margin-top: 10px;
	}
	
	.open-li3 {
		margin-top: 40px;
	}
	
	.open-li {
		float: left;
	}
	
	.open-li-two {
		float: left;
		margin-left: 40px;
		margin-top: 50px;
	}
	
	.aline {
		height: 50px;
	}
	/*
	 商家推荐
	 * */
	
	.mall-recommend-div {
		height: 350px;
		width: 1242px;
		background: #FFFFFF;
		margin-left: 10px;
		margin-top: -30px;
	}
	
	.mall-recommend-head-genduo {
		margin-left: 1035px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #858585;
	}
	
	.mall-recommend-ul {
		list-style: none;
		margin-left: -20px;
	}
	
	.mall-recommend-ul-li-frist {
		float: left;
	}
	
	.mall-recommend-ul-li {
		float: left;
		margin-left: 20px;
	}
	
	.mall-recommend-ul-li-image {
		height: 102px;
		width: 275px;
		margin-top: 20px;
	}
	/*
	 现货交易
	 * */
	
	.spot-transactions-div {
		height: 504px;
		width: 1242px;
		background: #FFFFFF;
		margin-left: 10px;
		margin-top: 00px;
	}
	
	.spot-transactions-head-more {
		margin-left: 1030px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #858585;
	}
	
	.spot-transactions-main-leftDiv {
		width: 276px;
		height: 398px;
		background: #C2DEFE;
		margin-left: 20px;
		text-align: center;
	}
	
	.spot-transactions-main-leftDiv-top {
		font-family: PingFangSC-Medium;
		font-size: 20px;
		color: #333333;
		padding-top: 30px;
	}
	
	.spot-transactions-main-leftDiv-main-div1 {
		height: 60px;
		margin-top: 20px;
	}
	
	.spot-transactions-main-leftDiv-main-div1-ul {
		list-style: none;
		margin-top: 2px;
	}
	
	.spot-transactions-main-leftDiv-main-div1-ul-li1 {
		float: left;
	}
	
	.spot-transactions-main-leftDiv-main-div1-ul-li1-div {
		width: 76px;
		height: 34px;
		background: #6AAEFE;
		line-height: 36px;
		font-family: PingFangSC-Medium;
		font-size: 13px;
		color: #FFFFFF;
	}
	
	.spot-transactions-main-leftDiv-main-div1-ul-li2 {
		float: left;
		margin-left: 42px;
	}
	
	.spot-transactions-main-leftDiv-main-div2 {
		height: 60px;
		margin-top: -27px;
	}
	
	.spot-transactions-main-leftDiv-foot-image {
		text-align: center;
		margin-top: 35px;
	}
	/*
	 全铲平链接服务
	 * */
	
	.link-service-div {
		height: 476px;
		width: 1242px;
		background: #FFFFFF;
		margin-top: 10px;
		margin-left: 10px;
	}
	
	.link-service-main-ul {
		list-style: none;
	}
	
	.link-service-main-ul-li {
		float: left;
	}
	
	.link-service-main--ul-li1-div {
		background-image: url(../../assets/link-service/500600745_3_0.png);
		width: 571px;
		height: 370px;
		margin-left: -20px;
		text-align: center;
		/*-webkit-filter: grayscale(50%);*/
		/*filter: grayscale(0.8);*/
		/*-webkit-filter: brightness(95%);
    	filter: brightness(95%);*/
	}
	
	.link-service-main--ul-li1-div-div1 {
		padding-top: 102px;
	}
	
	.link-service-main--ul-li1-div-div2 {
		padding-top: 20px;
		font-family: PingFangSC-Medium;
		font-size: 20px;
		color: #FFFFFF;
	}
	
	.link-service-main--ul-li1-div-div2 {
		font-family: PingFangSC-Medium;
		font-size: 20px;
		color: #FFFFFF;
	}
	
	.link-service-main--ul-li1-div-textHead {
		font-family: PingFangSC-Semibold;
		font-size: 24px;
		color: #FFFFFF;
	}
	
	#logisticsService {
		background-image: url(../../assets/link-service/501272483_3_0.png);
		width: 276px;
		height: 176px;
		margin-left: -40px;
		text-align: center;
	}
	
	#processService {
		background-image: url(../../assets/link-service/500003019_3_0.png);
		width: 276px;
		height: 176px;
		margin-left: 255px;
		text-align: center;
	}
	
	#dataService {
		background-image: url(../../assets/link-service/500511158_3_0.png);
		width: 276px;
		height: 176px;
		text-align: center;
		margin-left: -40px;
	}
	
	#platformService {
		background-image: url(../../assets/link-service/500462115_3_0.png);
		width: 276px;
		height: 176px;
		margin-left: 255px;
		text-align: center;
	}
	
	.link-service-span {
		font-family: PingFangSC-Semibold;
		font-size: 24px;
		color: #FFFFFF;
		line-height: 176px;
	}
	
	.foot-bottom-first {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		padding-top: 40px;
	}
	
	.foot-bottom {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		padding-top: 10px;
	}
</style>