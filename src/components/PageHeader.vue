<template>
	<div class="header">
		<div class="menu">
			<ul>
				<a href="/index.html"><img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.JyOfG6ve9KImBjJATZgRWwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="90px" width="90px" alt=""></a>
				<li><a>豆荚官网</a></li>
				<li><a>全部分类</a></li>
				<li><a>老人机专区</a></li>
				<li><a>服 务</a></li>
			</ul>
		</div>

		<!-- 搜索框 -->
		<div class="search">
			<input type="text" placeholder="请输入要查询的商品">
			<button type="button" aria-label="search"><img src="https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico" alt=""></button>
		</div>
	</div>
</template>


<style>
body{
	margin: 0;
	background-color: rgb(247 247 247);
	}

	.header {
		height: 100px;
		position: relative;
		margin-bottom: 10px;
		background-color: white;
		/* left: 9px; */
		width: 1519.2px;
	}
	
	li{
		display: inline;
		left: 15px;
	}
	.menu {
		display: inline-block;
		margin:0;
		}
	.menu ul li {
		margin: 0 30px;
		font-size: larger;
		position: relative;
		bottom: 30px;
	}
	
	.menu ul li a{
		font-size: large;
		color: revert;
		cursor: pointer;
	}
	.menu ul li a img{
		position: relative;
		top: 0;
		z-index: 10;
		margin: 0;
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
	
	/* 搜索框 */
	.search {
		width: 441px;
		height: 60px;
		position: inherit;
		top: -71px;
		/* margin: auto; */
		left: 900px;
		display: inline-block;
	}
	.search input {
		width: 365px;
		height: 42px;
		border: 1px solid rgb(37, 255, 251);
		float: left;
		font-size: 14px;
		padding-left: 25px;
	}
	.search button {
		width: 36px;
		height: 44px;
		border: 1px solid rgb(37, 255, 251);
		border-left: 0px;
		float: left;
		background-color: white;
		/* left: 0px; */
		cursor: pointer;
	}
	.search button i {
		font-family: icomoon;
		font-style: normal;
		color: rgb(37, 255, 251);
	}



</style>