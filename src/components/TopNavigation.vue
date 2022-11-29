<template>
	<div class="top-navigation">
		<ul class="fl earth">
			<li>
				<a href="#"><i class="red "></i>中国大陆</a>
					<div class="droplist">
						<a href="#">中国台湾</a>
						<a href="#">中国香港</a>
						<a href="#">中国澳门</a>
					</div>
			</li>
		
		</ul>
		<ul class="fr">
			<li>
				<a href="/login.html" class="green">登录</a>
				<a href="#" class="red">注册</a>
			</li>
			<li class="space"></li>
			<li>
				<a class="balance" href="#">我的天平
					<i></i>
				</a>
			</li>
			<li class="space"></li>
			<li>
				<a href="#">我的订单
				<!-- 下拉图标 -->
				<i></i>
			</a>
			</li>
			<li class="space"></li>
			<li>
				<a href="#">购物车</a>
			</li>
			<li class="space"></li>
			<li>
				<a href="#">提出建议</a>
			</li>
		
		</ul>

	</div>
</template>

<script>
export default {

}
</script>

<style>
    body{
	margin: 0;
	background-color: rgb(247 247 247);
	}
	/* 左浮动 */
	.fl {
		float: left;
	}
	/* 右浮动 */
	.fr {
		position: relative;
		float: right;
		right: 55px;
	}
	/* 导航栏样式 */
	.top-navigation {
		height: 30px;
		background-color: #e3e4e5;
		border-bottom: 1px solid #ddd;
		line-height: 30px;
		position: relative;
		width: 1519.2px;;
	}
	/* 下拉菜单 */
	.droplist {
		margin-top: 0px;
		background-color: #e3e4e5;
		display: none;
		position: absolute;
		top: 30px;
		left: 5px;
	}
	.earth li:hover .droplist {
		display: block;
	}
	.top-navigation .droplist a{
		margin-left: 5px;
	}
	.top-navigation .btli {
		width: 60px;
	}
	li{
		display: inline;
		left: 15px;
	}
	.menu {
		display: inline-block;
		margin: 40px 0;
		}
	.menu ul li {
		margin: 0 30px;
		font-size: larger;
	}
	
	.menu ul li a{
		font-size: large;
		color: revert;
		cursor: pointer;
	}
	
	
	.top-navigation ul li {
		position: relative;
		float: left;
		right: 25px;
	}
	.top-navigation i {
		font-family: 'icomoon';
		font-style: normal;
	}
	.earth {
		margin-left: 100px;
		margin-bottom: 0px;
		line-height: 30px;
		width: 60px;
		text-align: center;
		position: relative;
	}
	/* 竖线 */
	.space {
		width: 1px;
		height: 10px;
		background-color: #ccc;
		margin: 10px 12px 0;
	}
	.mobile {
		position: relative;
		margin-right: 11px;
	}
	.mobile img {
		position: absolute;
		left: -10px;
		top: 22px;
		border: 1px solid #ccc;
		padding: 3px;
	}
	.red {
		color: rgba(231, 127, 127, 0.948) !important;
	}
	.green {
		color: rgb(117, 204, 117);
	}
	.green:hover {
		color: rgb(51, 119, 51);
	}
	a {
		text-decoration: none;
		font-size: 12px;
		color: #999;
	}
	a:hover {
		color: rgb(255, 128, 0);
		cursor: pointer;
	}
	ul,
	h1,
	p,
	input,
	button {
		margin: 0;
		padding: 0;
	}
	
	.menu ul {
		display: inline;
	}
	input {
		border: 0;
		outline: none;
		border-radius: 50px 0 0 50px;
	}
	button {
		border: 0;
		outline: none;
		border-radius: 0 50px 50px 0;
	}
	ul {
		list-style: none;
	}
	/* 申明字体 */
	@font-face {
		font-family: "icomoon";
		src: url("../fonts/icomoon.eot?poq1sa");
		src: url("../fonts/icomoon.eot?poq1sa#iefix") format("embedded-opentype"),
		url("../fonts/icomoon.ttf?poq1sa") format("truetype"),
		url("../fonts/icomoon.woff?poq1sa") format("woff"),
		url("../fonts/icomoon.svg?poq1sa#icomoon") format("svg");
		font-weight: normal;
		font-style: normal;
		font-display: block;
	}
	
</style>