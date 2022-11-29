
<template>
    <div id="app">
        <myTop/>
        <div class="header">
        
            <div class="logo">
            <!-- <h1> -->
                <a aria-label="Read more about Seminole's new baby mayor" href="#">
                    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.JyOfG6ve9KImBjJATZgRWwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="120px" width="120px" alt="">
                </a>
            <!-- </h1> -->
            </div>
            <!-- 搜索框 -->
            <div class="search">
            <input type="text" placeholder="请输入要查询的商品">
            <button aria-label="search"><i><img src="https://dsfs.oppo.com/oppo/shop-pc-v2/main/img/1a74504.svg" alt=""></i></button>
            </div>
            <!-- 交易框 -->
            <div class="trade">
                <img src="./images/购物车.png" height="100px" width="100px" alt="">
            
            </div>
            <!-- 关键词 -->
            <div class="hotworlds">
            <a href="#">手机 </a>
            <a href="#">电脑 </a>
            <a href="#">零食 </a>
            <a href="#">鞋 </a>
            <a href="#">文具 </a>
            <a href="#">手表 </a>
            <a href="#">外套 </a>
            <a href="#">耳机 </a>
            <a href="#">内衣 </a>
            </div>
            <!-- 小导航 -->
            <div class="navitems">
            <ul>
                <li><a href="#">品牌</a></li>
                <li><a href="#">秒杀</a></li>
                <li><a href="#">超市</a></li>
                <li><a href="#">拍卖</a></li>
                <li class="space"></li>
                <li><a href="#">优惠券</a></li>
                <li><a href="#">生鲜</a></li>
                <li><a href="#">会员</a></li>
            </ul>
            </div>

	    </div>

	    <!-- 中间部分 -->
        <div class="content">
        <!-- 主题部分 -->
        <div class="gride">
            <!-- 左侧边栏 -->
            <div id="vue-2" class="left-navigation fl">
            <h2>分类</h2>
            <ul>
                <li> <a href="#">手机<span>/</span>运营商<span>/</span>数码</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus1" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
                <li> <a href="#">家居<span>/</span>家装<span>/</span>厨具</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus2" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
                <li> <a href="#">男装<span>/</span>女装<span>/</span>童装</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus3" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
                <li> <a href="#">男鞋<span>/</span>女鞋<span>/</span>运动</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus4" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
                <li> <a href="#">母婴<span>/</span>玩具乐器</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus5" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
                <li> <a href="#">食品<span>/</span>酒类<span>/</span>生鲜</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus6" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
                <li> <a href="#">图书<span>/</span>文娱<span>/</span>教育</a><span>/</span><a href="#">电子书</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus7" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
                <li> <a href="#">安装<span>/</span>维修<span>/</span>清洗</a><span>/</span><a href="#">二手</a>
                    <div class="navigationer">
                        <a v-for="menu,index in menus8" href="" :key="index">
                            <img :src="menu.imgs" alt="">
                            <span>{{menu.text}}</span>
                        </a>
                    </div>
                </li>
            </ul>
            </div>
            
            <!-- 轮播图 -->
            <div class="leftSymbol"></div>
            <div class="banner"></div>
            <div class="rightSymbol"></div>
            

        </div>
        </div>

        <!-- 商品展示部分 -->
        <div id="vue-1" class="w shop">
                <div v-for="s in products" :key="s.index">
                    <a v-bind:href="s.hre">

                        <img v-bind:src="s.imgs" alt="" height="130px" width="130px">
                        <div>
                            <p class="hots">{{s.text}}</p>
                            <p class="money">￥{{s.money}}</p>
                        </div>
                    </a>
                </div>
        </div>

        <myFooter/>
    </div>
    
</template>


<script>
import myTop from '@/components/TopNavigation.vue';
import myFooter from '@/components/PageFooter.vue';

    export default {
        components:{
            'myTop':myTop,
            'myFooter':myFooter
        },
        data() {
            return {
                menus1:[
				{"imgs":"https://img10.360buyimg.com/n5/s54x54_jfs/t1/87400/22/24585/130257/622867baE8f860c00/60574bb382d1cd67.jpg","text":"Apple iPhone 13"},
				{"imgs":"https://img12.360buyimg.com/n5/s54x54_jfs/t1/108650/24/33390/67788/6374efd2E8bf84f73/0ca186f743e4dede.jpg","text":"realme真我10 Pro+"},
				{"imgs":"https://img10.360buyimg.com/n5/s54x54_jfs/t1/85909/19/30256/27673/6323144aEddcd8e34/1dab3a0b6e310081.jpg","text":"荣耀X40"},
				{"imgs":"https://img12.360buyimg.com/n5/s54x54_jfs/t1/219387/1/2219/59402/617a5e1eE2e382a01/458b5005484c3e00.jpg","text":"Redmi Note 11 5G"},
				{"imgs":"https://img12.360buyimg.com/n5/s54x54_jfs/t1/208103/34/25830/29396/63070611Eed401a36/eaaa03c32aa7144f.jpg","text":"vivo iQOO"},
				{"imgs":"https://img11.360buyimg.com/n5/s54x54_jfs/t1/99542/29/27716/49463/635bb90eEdd20de26/9e7aca116e9bd23a.jpg","text":"华为智选 Hi nova"}
			],menus2:[
				{"imgs":"https://img11.360buyimg.com/n5/jfs/t1/111139/18/24665/117369/62518fb2Ee54722ec/2d340c239cd7ba99.jpg","text":"阿麦思（Amaisi）仿天然牛角痒痒挠"},
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/189259/12/10501/173511/60d89e16E343c0ac2/c44bae503380c5eb.jpg","text":"奥丽佳（Aolijia） 汗蒸房"},
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/138961/1/29751/54775/631db443Ebb566a2d/74007590bfbc48df.jpg","text":"舒肤佳味香水"},
				{"imgs":"https://img14.360buyimg.com/n5/jfs/t1/175814/19/31450/26069/6379f66bEc7647583/585c26d754571b15.jpg","text":"日本马桶刷"},
				{"imgs":"https://img11.360buyimg.com/n5/jfs/t1/24726/4/26320/88334/637090d2E14f63e92/f15bf0ca95ee138f.jpg","text":"脚踏铜钱七星袜子"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t1/57519/23/17075/99528/6360e39eE02248ea3/4bec0822ac25f0dc.jpg","text":"奕珩 破洞补丁贴"}
			],menus3:[
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t26047/236/536413565/285230/c53bb1bf/5b72f624Nd247d086.jpg","text":"Kalawa婴儿连体衣"},
				{"imgs":"https://img10.360buyimg.com/n5/s50x66_jfs/t1/170195/17/32699/105850/6380a615Ed8180d4f/0132f3e940f0bd8f.jpg!cc_50x66","text":"小马宝莉IP笛莎童装"},
				{"imgs":"https://img14.360buyimg.com/n5/jfs/t1/194773/34/9390/99079/60cffe62E64da447e/e5beee187518c00f.jpg","text":"MQD童装女童春秋瑜伽裤"},
				{"imgs":"https://img11.360buyimg.com/n5/s50x66_jfs/t1/46393/29/20152/65548/62c67635Efb5330ac/66c4bb50bb36c7a5.jpg!cc_50x66","text":"雅戈尔【DP免烫】衬衫男衬衣"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t1/69449/35/22562/79322/6348cb96Eb0375e68/a1888c51ccd173f3.jpg","text":"TFO 雷锋帽"},
				{"imgs":"https://img13.360buyimg.com/n5/s50x66_jfs/t1/189282/8/30645/89254/638270ccEb350ef62/c7ec7055823963e0.jpg!cc_50x66","text":"ONLY2022连帽气质套头卫衣"}
			],menus4:[
				{"imgs":"https://img14.360buyimg.com/n5/s50x66_jfs/t1/203219/3/27440/42749/63313d27Ec16d6a63/635610eabf41d8f2.jpg!cc_50x66","text":"Clarks其乐男士运动鞋"},
				{"imgs":"https://img12.360buyimg.com/n5/s50x66_jfs/t1/214555/37/23948/73425/6380e7e6E7aae60f7/98226276fbf59dd5.jpg!cc_50x66","text":"百丽休闲鞋男"},
				{"imgs":"https://img14.360buyimg.com/n5/s50x66_jfs/t1/70081/3/23338/23547/636df919Eebadaac7/f65aac288467df57.jpg!cc_50x66","text":"UGG 拖靴内衬"},
				{"imgs":"https://img11.360buyimg.com/n5/s50x66_jfs/t1/97125/19/30987/138116/62d656a7E53b47db2/7116e1fc45d41754.jpg!cc_50x66","text":"斯凯奇skechers老爹鞋子女士"},
				{"imgs":"https://img13.360buyimg.com/n5/s50x66_jfs/t1/200875/30/27891/25181/633295faE47de4570/d46c12c177a467ba.jpg!cc_50x66","text":"星期六（ST&SAT）短靴"},
				{"imgs":"https://img11.360buyimg.com/n5/jfs/t1/185092/31/28429/71090/631716c6E1a35f1f0/26a195ae4c33abdc.jpg","text":"卓诗尼单鞋女"}
			],menus5:[
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/191037/10/29968/59557/63748b9aEddddd883/0c11bbe398600dff.jpg","text":"华西珐玛婴儿修护霜"},
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/2540/37/16658/94107/637ecf23Eb3479923/b853f226637b4ecc.jpg","text":"小熊（Bear）恒温水壶"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t1/94785/35/20765/90254/633a5682E3f9ddc9b/8aec6b42b8812edf.jpg","text":"可心柔柔纸巾"},
				{"imgs":"https://img12.360buyimg.com/n5/jfs/t1/145686/25/29070/101789/62fda7ccE22429fe5/cb9d5f199e54f9bd.jpg","text":"奥克斯（AUX）奶瓶消毒器"},
				{"imgs":"https://img12.360buyimg.com/n5/jfs/t1/145686/25/29070/101789/62fda7ccE22429fe5/cb9d5f199e54f9bd.jpg","text":"奥克斯（AUX）奶瓶消毒器"},
				{"imgs":"https://img10.360buyimg.com/n5/s50x66_jfs/t1/158121/25/31131/22392/6343e02eE0f3d5ece/db0d7668ffae973b.jpg!cc_50x66","text":"小蓝象hinos婴儿夹棉连体衣"}
			],menus6:[
				{"imgs":"https://img14.360buyimg.com/n5/jfs/t1/149850/8/27979/425533/62875d1dE993ae613/b0ef220dcd57b386.jpg","text":"百草味 手撕面包"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t1/96965/35/35107/146388/6378b1f8E30ae1239/a4c6201a8b993c60.jpg","text":"沐斯尼 手工绿豆饼"},
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/129227/13/27259/111326/633244a7E48d12a5f/b06f760000c08820.jpg","text":"麦酥园饼干蛋糕"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t13180/335/2276217117/92205/481b407c/5a3a18a9N41b24093.jpg","text":"大凉山红颜奶油草莓"},
				{"imgs":"https://img12.360buyimg.com/n5/jfs/t2293/210/2140643262/571400/53e9e1fb/56f386e4Nd7f21845.jpg","text":"强新 温州冷冻精品鮸鱼"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t1/84705/35/8574/504204/5e0566e8E55dafba8/f6d258e3c886fba8.jpg","text":"进口牛油果"}
			],menus7:[
				{"imgs":"https://img14.360buyimg.com/n5/jfs/t1/143625/6/30396/45588/6376f3e4Ea3e9f9fe/f34141732f77b4d8.jpg","text":"今天也要对自己好一点"},
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/31982/16/17366/76858/62f61abdE0c1e443c/0770a8cc68f033da.jpg","text":"南怀瑾先生讲中国智慧系列全3册"},
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/42243/32/17269/101921/6319adf7Ef1322ea1/59b6f464d80a9e2d.jpg","text":"观我生：壁画上的中国史"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t1/201893/20/26473/105555/63159a02E2d8f7d8e/440773477d0ae5e3.jpg","text":"四五快算·名师导读版系列"},
				{"imgs":"https://img13.360buyimg.com/n5/jfs/t1/47179/19/22115/175883/6322bee0Eccf4a8f1/6499e640420bab43.jpg","text":"日本学研教育"},
				{"imgs":"https://img12.360buyimg.com/n5/jfs/t1/64488/14/19374/162915/62b013ceE62263f40/1197f9a5cc85ba0d.jpg","text":"给孩子的山海经神话绘本"}
			],menus8:[
				{"imgs":"https://img12.360buyimg.com/n5/s54x54_jfs/t1/215354/36/12369/217044/6208b9edEbebeb3dc/30a189d49d737b32.png","text":"vivo X27 升降摄像头"},
				{"imgs":"https://img11.360buyimg.com/n5/s54x54_jfs/t1/99100/16/28192/60421/636a2aa2E5922ed1d/b854ce85d06220e2.jpg","text":"vivo iQOO Neo6 二手手机"},
				{"imgs":"https://img12.360buyimg.com/n5/jfs/t1/14214/29/19584/160896/637c3596E4214a61e/4c81a22dcd7d0c8a.jpg","text":"鹿小井果蔬清洗剂"},
				{"imgs":"https://img14.360buyimg.com/n5/jfs/t1/35498/31/16940/137120/62e385feEbef4998f/c64703c7130de758.jpg","text":"【邻家快修】波轮滚筒洗衣机"},
				{"imgs":"https://img14.360buyimg.com/n5/jfs/t1/51479/39/20410/143264/62ea31c3Ecb9ffb08/8cd46348e9a184ef.jpg","text":"蓝月亮 洗衣机清洗剂"},
				{"imgs":"https://img10.360buyimg.com/n5/jfs/t1/130159/37/111/161290/5ec8d58bEee81df65/960e881310c69ad9.jpg","text":"三和（SANVO）清洁剂"}
			],
                products:[
                    {
                    "hre":"/products.html",
                    "text":"康佳（KONKA) U22 中国红 4G全网通老人手机双卡双待超长待机 大字大声音大按键老年机 学生儿童备用功能手机",
                    "imgs":require("./images/product_1.png"),
                    "money":"190"
                },{
                    "hre":"/products.html",
                    "text":"海信(Hisense)空调 自然风 新能效 变频冷暖 广域送风 自清洁 APP智能 立柜式客厅柜机 2匹KFR-50LW/EF19A3",
                    "imgs":require("./images/product_2.png"),
                    "money":"3699"
                },{
                    "hre":"/products.html",
                    "text":"罗蒙休闲裤男2022秋冬新款加绒加厚商务休闲男士修身长裤子中青年直筒保暖男裤子2010 黑色春秋 32【推荐2尺5腰围】",
                    "imgs":require("./images/product_3.png"),
                    "money":"78"
                },
                {
                    "hre":"/products.html",
                    "text":"休闲鞋男速到2022秋冬新款耐磨时尚男鞋软底软面透气板鞋男 定制款丨米灰单鞋丨B11 41",
                    "imgs":require("./images/product_4.png"),
                    "money":"109"
                },{
                    "hre":"/products.html",
                    "text":"INSAHO 婴儿衣服新生儿礼盒全棉春夏秋冬四季套装满月礼初生礼刚出生男女宝宝送礼物幼儿母婴用品 YEF083 保暖款萌萌兔（23件套）",
                    "imgs":require("./images/product_5.png"),
                    "money":"269"
                },{
                    "hre":"/products.html",
                    "text":"法丽兹 零食一整箱曲奇饼干早餐点心批发礼盒礼盒 2022g值两大箱",
                    "imgs":require("./images/product_6.png"),
                    "money":"119.8"
                },{
                    "hre":"/products.html",
                    "text":"得到 电子阅读器F7 智能大屏7.0英寸水墨屏电纸书读书器 2+64GB大内存电子书银河灰色",
                    "imgs":require("./images/product_7.png"),
                    "money":"1699"
                },{
                    "hre":"/products.html",
                    "text":"【邻家快修】水电维修马桶门窗水管维修电工维修管道疏通电路灯具浴霸花洒换锁芯开锁维修上门服务预付款 管道疏通维修 水电管道疏通维修",
                    "imgs":require("./images/product_8.png"),
                    "money":"19.9"
                }
            ]
        }
    }
}
</script>




















<style>

body{
    width: 100%;
}
    .header {
        height: 140px;
        position: relative;
        background-color: white;
    }
    
    .logo {
        position: absolute;
        left: 255px;
    }
    
    /* 搜索框 */
    .search {
        width: 550px;
        height: 60px;
        position: relative;
        top: 25px;
        /* margin: auto; */
        left: 515px;
    }
    .search input {
        width: 473px;
        height: 58px;
        border: 1px solid rgb(37, 255, 251);
        float: left;
        font-size: 14px;
        padding-left: 25px;
    }
    .search button {
        width: 49px;
        height: 60px;
        border: 1px solid rgb(37, 255, 251);
        border-left: 0px;
        float: left;
        background-color: white;
        /* left: 0px; */
    }
    .search button i {
        font-family: icomoon;
        font-style: normal;
        color: rgb(37, 255, 251);
        /* left: -65px; */
    }
    /* 交易 */
    .trade {
        width: 100px;
        height: 60px;
        /* border: 1px solid rgb(37, 255, 251); */
        position: absolute;
        top: 10px;
        right: 120px;
        font-size: 56px;
        left: 1130px;
    }
    
    .trade button i {
        font-family: 'icomoon';
        font-style: normal;
        color: rgb(255, 255, 255);
    }
    .trade img{
        cursor: pointer;
    }
    /* 关键词 */
    .hotworlds {
        position: absolute;
        top: 85px;
        left: 540px;
    }
    /* 小导航 */
    .navitems {
        width: 800px;
        height: 30px;
        line-height: 30px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 365px;
    }
    .navitems li {
        float: left;
        margin-left: 50px;
    }
    .navitems li a {
        font-size: 16px;
        font-weight: 700;
        color: #555;
    }
    .navitems li a:hover {
        color: rgba(238, 98, 98, 0.853);
    }
    .navitems .space {
        margin-left: 15px;
        margin-right: -15px;
    }
    

    /*中间部分*/
    

.content{
    margin: 10px 200px;
    width: 1044px;
  }
  
  .content::after {
      content: "";
      display: block;
      clear: both;
  }
  
  .content::before {
    content: "";
    display: block;
    clear: both;
  }
  
    


    /*轮播*/

    @keyframes mybanner{
        0% {background:url(https://img.alicdn.com/imgextra/i2/6000000001110/O1CN01rbanvT1K4QQe4nCpW_!!6000000001110-2-octopus.png);background-size: 100% 100%;}
        2% {background:url(https://img.alicdn.com/imgextra/i2/6000000001110/O1CN01rbanvT1K4QQe4nCpW_!!6000000001110-2-octopus.png);background-size: 100% 100%;}
      
      
        30% {background:url(https://img.alicdn.com/imgextra/i3/6000000003169/O1CN011X8yBI1ZHRvYFJzyc_!!6000000003169-2-octopus.png);background-size: 100% 100%;}
        40% {background:url(https://img.alicdn.com/imgextra/i3/6000000003169/O1CN011X8yBI1ZHRvYFJzyc_!!6000000003169-2-octopus.png);background-size: 100% 100%;}
      
      
        50% {background:url(https://img.alicdn.com/imgextra/i2/6000000000603/O1CN01yuhivj1GKDcaXG3mE_!!6000000000603-0-octopus.jpg);background-size: 100% 100%;}
        60% {background:url(https://img.alicdn.com/imgextra/i2/6000000000603/O1CN01yuhivj1GKDcaXG3mE_!!6000000000603-0-octopus.jpg);background-size: 100% 100%;}
      
       
        70% {background:url(https://img.alicdn.com/imgextra/i2/6000000007403/O1CN01JrK6CM24Ycrmc7LZ5_!!6000000007403-2-octopus.png);background-size: 100% 100%;}
       80% {background:url(https://img.alicdn.com/imgextra/i2/6000000007403/O1CN01JrK6CM24Ycrmc7LZ5_!!6000000007403-2-octopus.png);background-size: 100% 100%;}
      
       90% {background:url(https://img.alicdn.com/imgextra/i2/6000000005151/O1CN01CAAseN1nvCvhEoQmJ_!!6000000005151-2-octopus.png);background-size: 100% 100%;}
       95% {background:url(https://img.alicdn.com/imgextra/i2/6000000005151/O1CN01CAAseN1nvCvhEoQmJ_!!6000000005151-2-octopus.png);background-size: 100% 100%;}
       
       100% {background:url(https://img.alicdn.com/imgextra/i2/6000000001110/O1CN01rbanvT1K4QQe4nCpW_!!6000000001110-2-octopus.png);background-size: 100% 100%;}
      }
      
      .banner{
        background: url(https://img.alicdn.com/imgextra/i2/6000000001110/O1CN01rbanvT1K4QQe4nCpW_!!6000000001110-2-octopus.png),
        url(https://img.alicdn.com/imgextra/i3/6000000003169/O1CN011X8yBI1ZHRvYFJzyc_!!6000000003169-2-octopus.png),
        url(https://img.alicdn.com/imgextra/i2/6000000000603/O1CN01yuhivj1GKDcaXG3mE_!!6000000000603-0-octopus.jpg),
        url(https://img.alicdn.com/imgextra/i2/6000000007403/O1CN01JrK6CM24Ycrmc7LZ5_!!6000000007403-2-octopus.png),
        url(https://img.alicdn.com/imgextra/i2/6000000005151/O1CN01CAAseN1nvCvhEoQmJ_!!6000000005151-2-octopus.png);
        animation: mybanner 15s linear;
        animation-iteration-count: infinite;
        width: 890px;
        position: relative;
        display: inline-block;
        height: 470px;
        right: 10px;
      }
      
      
      .leftSymbol{
        background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -84px 50%;
        position: relative;
        width: 42px;
        right: 10px;
        bottom: 200px;
        display: inline-block;
        height: 69px;
        margin-top: -35px;
        z-index: 10;
        cursor: pointer;
        outline: none;
        width: 42px;
        height: 84px;
      }
      
      .rightSymbol{
        background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -124px 50%;
        position: relative;
        
        right: 10px;
        width: 41px;
        display: inline-block;
        bottom: 200px;
        margin-top: -35px;
        z-index: 10;
        cursor: pointer;
        outline: none;
        width: 42px;
        height: 84px;
      }
      .leftSymbol:hover{background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat 0 50%;}
      
      .rightSymbol:hover{
        background: url(https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -42px 50%;;
      
      }
    
    
    

    
    
    
    
    
    
    
    
    
    
    /* 主题部分 */
    .gride {
        height: 470px;
        margin-top: 15px;
        /* width: 1000px; */
        left: 0;
        width: 1221px;
        position: relative;
        left: -40px;
    }
    /* 左侧边栏部分 */
    .left-navigation {
        position: relative;
        float: left;
        width: 190px;
        height: 470px;
        background-color: rgb(255, 255, 255);
        color: rgb(75, 75, 75);
        font-size: 14px;
        margin-right: 10px;
    }
    .left-navigation a {
        color: rgb(87, 87, 87);
        font-size: 15px;
        margin-left: 3px;
    }
    .left-navigation a:hover {
        color: rgb(159, 69, 53);
    }
    
    
    .left-navigation li:hover .navigationer{
        display: block;
        background-color: #ffffff;
        position: absolute;
        left: 190px;
        top: 0;
        width: 932px;
        height: 471px;
        z-index: 12;
        box-shadow: 6px 4px 4px 4px rgb(0 0 0 / 20%);
    }
    
    .navigationer{
        display: none;
    }
    
    .navigationer a{
        display: inline-block;
        margin: 40px 50px;
        height: 80px;
        width: 350px;
    }
    
    .navigationer a span{
        display: inline-block;
        position: relative;
        left: 10px;
        bottom: 10px;
        width: 250px;
    }
    
    .left-navigation h2 {
        padding-top: 5px;
        padding-left: 12px;
    }
    .left-navigation ul {
        padding-bottom: 25px;
    }
    .left-navigation ul li {
        display: block;
        padding-left: 12px;
        height: 29px;
        line-height: 25px;
        padding: 10px;
    }
    .left-navigation ul li:hover {
        background-color: rgb(180, 180, 180);
    }
    .arrow-l,
    .arrow-r {
        position: absolute;
        top: 50%;
        width: 30px;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.1);
        transform: translateY(-50%);
        text-align: center;
        line-height: 60px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.6);
        font-family: arial;
        font-weight: normal;
    }
    .arrow-l {
        left: 0%;
    }
    .arrow-r {
        right: 0%;
    }
    .circle {
        width: 75px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0.3);
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        padding-left: 15px;
        border-radius: 10px;
    }
    .circle li {
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
        float: left;
        margin: 4px;
        cursor: pointer;
    }
    li.current {
        background-color: red;
    }
    
    .shop {
        /* margin-top: 15px; */
        width: 1200px;
        position: relative;
        left: 150px;
        height: 320px;
        /*margin: auto;*/
    }
    .hots{
        overflow: hidden;  /*内容会被修剪，并且其余内容是不可见的。*/
        text-overflow: ellipsis;  	/*显示省略符号来代表被修剪的文本*/
        height: 98px;
    }
    #vue-1 a{
        position: relative;
        height: 150px;
        float: left;
        width: 260px;
        background-color: rgb(255 255 255);
        margin: 10px;
        border-radius: 15px;
        border: 1px solid rgb(0 0 0 / 0%);
    }
    
    #vue-1 a:hover {
        border: 1px solid rgb(255, 128, 0);
        padding: 0;
    
    }
    #vue-1 a img {
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 15px;
    }
    
    #vue-1 a div {
        position: absolute;
        top: 15px;
        right: 10px;
        width: 40%;
        float: right;
    }
    #vue-1 a div p {
        margin-left: 10px;
    }
    #vue-1 a div .money {
        position: absolute;
        bottom: -30px;
        left: 0%;
        color: rgb(255, 0, 0);
        font-size: 19px;
    }
    .back {
        position: fixed;
        height: 40px;
        width: 80px;
        bottom: 50%;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.1);
        font-size: 16px;
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
    }
    

  
</style>





