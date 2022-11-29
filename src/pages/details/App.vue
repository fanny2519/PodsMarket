<template>
	<div id="app">
        <myTop/>
		<myHeader/>
		<div class="container">
			<div class="left">
				<div class="leftSymbol"></div>
				<div class="mycolor">
				</div>
				<div class="rightSymbol"></div>
				<div class="smallImg">
					<ul>
						<li>
							<img src="https://img11.360buyimg.com/n5/s54x54_jfs/t1/204869/3/25259/146916/6371d808E635ca3b6/d62e0b0e607bbad2.jpg" alt="">
							<img src="https://img11.360buyimg.com/n5/s54x54_jfs/t1/121280/31/27493/429746/6291e364Ed141f71d/79ff5b370bed0399.jpg" alt="">
							<img src="https://img11.360buyimg.com/n5/s54x54_jfs/t1/103232/25/22460/452603/6291e364Ee5c2b24f/a4037670a400837c.jpg" alt="">
							<img src="https://img11.360buyimg.com/n5/s54x54_jfs/t1/88647/17/23329/376629/6291e364Ed32a0e0f/1a0a5fd415ee8f10.jpg" alt="">
							<img src="https://img11.360buyimg.com/n5/s54x54_jfs/t1/132914/10/22717/322471/6291e364E6cfe794f/f3253406865c42ed.jpg" alt="">
						</li>
						
					</ul>
				</div>
			</div>
	
			<div class="right">
				<div class="hots">
					<h2>
						天语（K-Touch）T2 老人手机语音播报移动2G直板按键大字大声大屏超长待机老年学生备用功能手机 金色
					</h2>
				</div>
				<div class="news">
					自营/热销爆款/一年换新/语音播报/双卡双待/持久待机/亲情号码/收音机/强光手电/一键SOS电信卡点击购买电信版 <a>查看</a>
				</div>
				<div class="price">
					<span>￥99.00</span><del>￥169.00</del>
				</div>
				<div class="address">
					<i></i>北京北京市海淀区清河街道 <a>修改</a>
					<p>有现货</p>
				</div>
	
				<div class="selectColor">
					<span>选择颜色</span>
					<ul>
						<li>
							<a href=""><img src="https://img11.360buyimg.com/n9/s40x40_jfs/t1/204869/3/25259/146916/6371d808E635ca3b6/d62e0b0e607bbad2.jpg" alt=""><span>金色</span></a>
						</li>
						<li>
							<a href=""><img src="https://img14.360buyimg.com/n9/s40x40_jfs/t1/2129/25/17401/449531/62834598E3aa99767/dc9d4b0485d3743e.jpg" alt=""><span>红色</span></a>
						</li>
						<li>
							<a href=""><img src="https://img12.360buyimg.com/n9/s40x40_jfs/t1/182825/20/24582/356309/628346b0E5c2d79a4/db865a203b88f781.jpg" alt=""><span>黑色</span></a>
						</li>
					</ul>
				</div>
	
				<div class="buy-add-on">
					<div class="buy">
						<input aria-label="buy-num" type="number" v-bind:value="buyNum" readonly="true">
						<button v-on:click="addNum()" id="buy-num-add" type="button">+</button>
						<button v-on:click="delNum()"  id="buy-num-del" type="button">-</button>
					</div>
	
					<div class="Add-ons">
						<h2>加入购物车</h2>
					</div>
	
				</div>
			</div>
	
		</div>

		<myFooter/>
	</div>
</template>
<script>
import myTop from '@/components/TopNavigation.vue'
import myHeader from '@/components/PageHeader.vue'
import myFooter from '@/components/PageFooter.vue'

export default({
	name:"App",
	components: {
        'myTop':myTop,
		'myHeader':myHeader,
		'myFooter':myFooter
	},
	methods: {
				addNum(){
						return this.buyNum++;
					},
				delNum(){
					if(this.buyNum >= 2){
						return this.buyNum--
					}
				}
			},
	data(){
		return{
			buyNum:1
		}
	}
})
</script>


<style>
	
@keyframes mycolor{
    0% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/204869/3/25259/146916/6371d808E635ca3b6/d62e0b0e607bbad2.jpg);background-size: 100% 100%;}
    2% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/204869/3/25259/146916/6371d808E635ca3b6/d62e0b0e607bbad2.jpg);background-size: 100% 100%;}


    30% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/121280/31/27493/429746/6291e364Ed141f71d/79ff5b370bed0399.jpg);background-size: 100% 100%;}
    40% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/121280/31/27493/429746/6291e364Ed141f71d/79ff5b370bed0399.jpg);background-size: 100% 100%;}


    50% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/103232/25/22460/452603/6291e364Ee5c2b24f/a4037670a400837c.jpg);background-size: 100% 100%;}
    60% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/103232/25/22460/452603/6291e364Ee5c2b24f/a4037670a400837c.jpg);background-size: 100% 100%;}

   
    70% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/88647/17/23329/376629/6291e364Ed32a0e0f/1a0a5fd415ee8f10.jpg);background-size: 100% 100%;}
   80% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/88647/17/23329/376629/6291e364Ed32a0e0f/1a0a5fd415ee8f10.jpg);background-size: 100% 100%;}

   90% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/132914/10/22717/322471/6291e364E6cfe794f/f3253406865c42ed.jpg);background-size: 100% 100%;}
   95% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/132914/10/22717/322471/6291e364E6cfe794f/f3253406865c42ed.jpg);background-size: 100% 100%;}
   
   100% {background:url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/204869/3/25259/146916/6371d808E635ca3b6/d62e0b0e607bbad2.jpg);background-size: 100% 100%;}
}

.mycolor{
    background: url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/204869/3/25259/146916/6371d808E635ca3b6/d62e0b0e607bbad2.jpg),
    url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/121280/31/27493/429746/6291e364Ed141f71d/79ff5b370bed0399.jpg),
    url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/103232/25/22460/452603/6291e364Ee5c2b24f/a4037670a400837c.jpg),
    url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/88647/17/23329/376629/6291e364Ed32a0e0f/1a0a5fd415ee8f10.jpg),
    url(https://img11.360buyimg.com/n1/s450x450_jfs/t1/132914/10/22717/322471/6291e364E6cfe794f/f3253406865c42ed.jpg);
    animation: mycolor 15s linear;
    animation-iteration-count: infinite;
    width: 500px;
    position: relative;
    display: inline-block;
    height: 500px;
    left: 70px;
    margin-top: 20px;
}

.smallImg{
    display: inline-block;
    margin: 10px;
    position: relative;
    left: 93px;
}
.smallImg ul li a:visited {
    border: 1px solid orange;
}

.smallImg ul li img{
    margin: 10px;
}

.leftSymbol{
    background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -84px 50%;
    left: 15px;
    right: auto;
    position: absolute;
    top: 50%;
    width: 41px;
    height: 69px;
    margin-top: -35px;
    z-index: 10;
    cursor: pointer;
    outline: none;
}

.rightSymbol{
    background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -124px 50%;
    right: auto;
    position: absolute;
    top: 50%;
    width: 41px;
    left: 585px;
    height: 69px;
    margin-top: -35px;
    z-index: 10;
    cursor: pointer;
    outline: none;
}
.leftSymbol:hover{background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat 0 50%;}

.left .rightSymbol:hover{
    background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -42px 50%;;
    z-index: 12;
    right: auto;
    position: absolute;
    top: 50%;
    width: 41px;
    left: 585px;
    height: 69px;
    margin-top: -35px;
    cursor: pointer;
    outline: none;
}
.left{
    width: 640px;
    display: inline-block;
}
.left .right{
    display: inline-block;
}

.right{
    position: absolute;
    left: 650px;
    width: 700px;
    height: 600px;
    display: inline-block;
}

.hots{
    position: relative;
}

.news{
    line-height: 1.5em;
    color: rgb(255, 99, 79);
    height: 60px;
}
.price{
    border-bottom: 1px solid #6a6a6a;
    padding: 20px;
}


.price span{
    color: red;
    font-size: 40px;
}
del{
    color: #6a6a6a;
}

.address{
    padding: 41px;
    background-color: #ececec;
    margin-top: 25px;
}

.address i{
    font-family: icomoon;
    font-style: normal;
}

.address p{
    color: orange;
}
.selectColor{
    margin: 20px;
}


.selectColor span{
    position: relative;
    left: 5px;
}
.selectColor ul{
    display: inline-block;
    position: relative;
    left: 20px;
    top: 10px;
}
.selectColor ul li{
    display: inline-block;
    padding: 4px;
    border: 1px solid #ffe5e5;
    margin: 0 5px;
}

.selectColor ul li a:visited{
    border: 1px solid rgb(255, 94, 30);
}
.selectColor ul li:hover{
    border: 1px solid rgb(255, 94, 30);
}

.selectColor ul li.active{
    border: 1px solid rgb(255, 94, 30);
}
.selectColor ul li a{
    margin: 0 10px;
}

.selectColor ul li a span{
    bottom: 12px;
}
.buy{
    height: 61px;
    width: 91px;
    display: inline-block;
    border: 1px solid #a8a8a8;
}

.buy input{
    height: 61px;
    border-radius: inherit;
    width: 60px;
    border-right: 1px solid #a8a8a8;
    text-align: center;
}

#buy-num-add,#buy-num-del{
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: unset;
}

#buy-num-add{
    position: relative;
    border-bottom: 1px solid #a8a8a8;
    left: 0px;
    bottom: 16px;
    cursor: pointer;
    height: 31px;
}

#buy-num-del{
    position: relative;
    left: 61px;
    top: -30px;
    cursor: pointer;
}

.buy-add-on{
    margin-top: 50px;
}

.Add-ons{
    display: inline-block;
    left: 100px;
    position: relative;
    bottom: 40px;
    background: red;
    width: 250px;
    cursor: pointer;
}

.Add-ons h2{
    color: rgb(255, 255, 255);
    text-align: center;
}
</style>
