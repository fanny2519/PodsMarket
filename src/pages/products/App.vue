<template>
	<div id="app">
		<myTop/>
		<myHeader/>
		<div class="container">
			<div v-for="(detail,index) in products_details" :key="index">
				<a :href="detail.lin">
					<img :src="detail.img" alt="">
					<div>
						<p class="money">￥{{detail.money}}  <strike>{{detail.stri}}</strike></p>
						<p class="keyWord">{{detail.keyword}}</p>
						<p class="shopName">{{detail.name}}</p>
						<p class="comments">{{detail.comment}}</p>
					</div>
				</a>
			</div>
		</div>
		<myFooter/>
	</div>
</template>

<script>
import myTop from '@/components/TopNavigation.vue';
import myHeader from '@/components/PageHeader.vue'
// import { component } from 'vue/types/umd'
import myFooter from '@/components/PageFooter.vue'

export default({
	name:"App",
	components: {
		'myTop':myTop,
		'myHeader':myHeader,
		'myFooter':myFooter
	},
	data(){
		return{
			products_details:
                [
            {
			"lin":"/details.html",
            "img":require("./productImage/1.jpg"),
            "money":"99.00",
            "stri":"￥169.00",
            "keyword":"天语（K-Touch）T2 老人手机语音播报移动2G直板按键大字大声大屏超长待机老年学生备用功能手机 金色",
            "comment":"100w+条评价",
            "name":"天语手机手机官方旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/2.jpg"),
            "money":"228.00",
            "stri":"￥223.00",
            "keyword":"飞利浦 PHILIPS E536 骑士黑 4G全网通老人手机 双卡双待超长待机 大字大声大按键老年机 学生儿童备用功能机",
            "comment":"5w+条评价",
            "name":"飞利浦手机旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/3.jpg"),
            "money":"198.00",
            "stri":"",
            "keyword":"纽曼 L8S三防老人机移动 联通 电信4G全网通大字大声大屏直板按键功能机备用老年人手机超长待机 绿色【4G全网通】",
            "comment":"200w+条评价",
            "name":"思拓帆手机专营店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/4.jpg"),
            "money":"139.00",
            "stri":"￥178.00",
            "keyword":"飞利浦（PHILIPS）E163K 陨石黑 老年人手机大按键 双卡双待超长待机 移动联通2G 老人机智能 儿童学生功能机",
            "comment":"20w+条评价",
            "name":"飞利浦手机官方旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/5.jpg"),
            "money":"79.00",
            "stri":"",
            "keyword":"纽曼（Newman）T12全网通4G 2.4英寸三防老人手机移动联通电信按键电霸老年机大声音抗摔 黑金色【移动版】",
            "comment":"2w+条评价",
            "name":"纽曼手机官方旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/6.jpg"),
            "money":"169.00",
            "stri":"￥299.00",
            "keyword":"飞利浦 PHILIPS E258S 移动/联通2G 宝石蓝 直板按键 老人机老人手机 老年功能手机学生手机功能机备用机",
            "comment":"50w+条评价",
            "name":"飞利浦手机官方旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/7.jpg"),
            "money":"169.00",
            "stri":"￥299.00",
            "keyword":"天语（K-Touch）S6 老人手机 4G全网通 移动联通电信版 超长待机 双卡双待 学生老年手机 功能机 幻夜黑",
            "comment":"20w+条评价",
            "name":"天语手机官方旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/8.jpg"),
            "money":"99.00",
            "stri":"",
            "keyword":"新款金立V5老人手机语音播报4G全网通移动联通电信版直板按键大字大声大屏超长待机老年学生备用功能手机 红色 2.4英寸-移动双卡升级版",
            "comment":"2w+条评价",
            "name":"金立手机官方旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/9.jpg"),
            "money":"249.00",
            "stri":"",
            "keyword":"纽曼 Newman W69 酒红色 2.8英寸4G全网通翻盖老人手机 双屏双卡双待大字大声音大按键老年机 学生备用功能机",
            "comment":"1000+条评价",
            "name":"纽曼手机官方旗舰店"
        },{
            "lin":"/details.html",
            "img":require("./productImage/10.jpg"),
            "money":"226.00",
            "stri":"",
            "keyword":"飞利浦（PHILIPS）E568 宝石蓝 老年人手机智能 移动联通电信全网通4G 直板按键 儿童学生备用功能机4G老人机",
            "comment":"2w+条评价",
            "name":"飞利浦手机官方旗舰店"
		}
	]
		}
	}
})
</script>


<style>
.container{
	width: 1300px;
	position: relative;
	left: 45px;
	display: inline-block;
}
.container div{
	display: inline-block;
}
.container a{
	position: relative;
	display: inline-flex;
	height: 345px;
	width: 250px;
	background-color: white;
	margin-left: 7px;
	margin-bottom: 20px;
	border-radius: 15px;
	border: 1px solid rgb(255 250 250);
	padding: 0px;
	left: 26px;
	flex-direction: row;
	flex-wrap: wrap;
	}
	
	.container a:hover {
	border: 1px solid rgb(255, 128, 0);
	}
	.container a img {
	position: absolute;
	top: 10px;
	left: 10px;
	border-radius: 15px;
	}
	
	
	.container a img {
	position: absolute;
	/* top: 10px; */
	left: 20px;
	border-radius: 15px;
	}
	.container a div {
	position: absolute;
	bottom: 5px;
	right: 10px;
	float: right;
	}
	.container a div p {
	margin-left: 10px;
	}
	.container a div .money {
	/* position: absolute; */
	/* bottom: -25px; */
	left: 0%;
	color: #fd3f31;
	font-size: 16px;
	}
	
	strike{
	color: #555;
	font-family: serif;
	}
	
	.keyWord{
	overflow: hidden;
	color: #3a3a3a;
	height: 33px;
	font-size: small;
	}
	
	.comments{
	font-size: smaller;
	position: relative;
	left: 161px;
	color: burlywood;
	}
	
	.shopName{
	color: rgb(255, 112, 55);
	padding-bottom: 7px;
	border-bottom: 1px solid #d5d5d5;
	font-size: larger;
	padding-top: 5px;
	}

</style>
