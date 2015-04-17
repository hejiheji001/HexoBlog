title: "Draw a Phone with CSS & HTML"
date: 2015-04-10 23:29:38
tags: [CSS3,HTML,JS,Vue.js]
---
脑洞突发 画个手机玩～ 地址在[这里](https://github.com/hejiheji001/fPhone)

其实一直想试试自己在CSS HTML JS方面的造(zao)诣(<span style="text-decoration:line-through">zhi</span>)如何 于是就趁着有空玩一玩～

首先这个手机是我自己目前在用的 全部的细节力争符合实际情况 当然啦……其实有些地方画的不好的说

然后作为一个非专业前端开发者 真心希望能够抛砖引玉 并得到大家指点 先放图（其实脑洞还没结束

关屏状态
![Screen off](/images/fPhone/off.png)
锁屏状态
![Screen lock](/images/fPhone/lock.png)

以下正片 我会按照我实际的绘画过程讲述

 <!--more-->
---

#金属边框

所谓的金属“边框”其实是一大块的圆角矩形，再覆盖上黑色的手机面板以造成一种类似
```CSS
border: 4px #DBDCDE;
```
的效果，但是实际上来说金属边框是有色泽变化的，因此设定一个固定的颜色会让我这个强迫症患者受不了，于是便采用了现在的方式，
```CSS
background: -moz-linear-gradient(-45deg, rgb(232, 231, 230) 0%, rgb(236, 237, 239) 50%, rgb(237, 238, 240) 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgb(232, 231, 230)), color-stop(50%, rgb(236, 237, 239)), color-stop(100%, rgb(237, 238, 240))); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(-45deg,  rgb(232, 231, 230) 0%, rgb(236, 237, 239) 50%, rgb(237, 238, 240) 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(-45deg,  rgb(232, 231, 230) 0%, rgb(236, 237, 239) 50%, rgb(237, 238, 240) 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(-45deg, rgb(232, 231, 230) 0%, rgb(236, 237, 239) 50%, rgb(237, 238, 240) 100%); /* IE10+ */
background: linear-gradient(135deg, rgb(232, 231, 230) 0%, rgb(236, 237, 239) 50%, rgb(237, 238, 240) 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#DBDCDE', endColorstr='#EDEEF0',GradientType=1 ); /* IE6-8 fallback on horizontal gradient */
```
PS：虽然看起来和直接设定固定颜色差别不大＝。＝

---

#屏幕

屏幕是玻璃做的，因此是会反光的。

```CSS
background: -moz-linear-gradient(195deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
background: -webkit-gradient(linear,102.7 98, 99 99, color-stop(0%, rgba(255, 255, 255, 0.1)), color-stop(1%, rgb(0, 0, 0)), color-stop(100%, rgba(255, 255, 255, 0)));
background: -webkit-linear-gradient(195deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
background: -o-linear-gradient(195deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
background: -ms-linear-gradient(195deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
background: linear-gradient(-105deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
```

其实上述样式有一个问题，说实话我至今也不明就里。

webkit有两个写法 老式的-webkit-gradient(linear, ......)和新版的-webkit-linear-gradient(......) 新版的参数与W3C标准一致，同时也与其他浏览器一致(-moz-/-o-/-ms-)

在实际测试中，可以发现放大5倍后，Chrome使用新版或W3C写法会出现[锯齿]（图一及图二）而老式写法（图三）不会。 这个[锯齿]问题并不会在Firefox中重现（图四），希望能够得到大神解答。

PS: 1～4倍时 Chrome不会出现[锯齿]

图一
![Chrome W3C](/images/fPhone/a.png)
图二
![Chrome New](/images/fPhone/b.png)
图三
![Chrome Old](/images/fPhone/c.png)
图四
![Firefox W3C](/images/fPhone/d.png)

---

#面板

面板被我分成三个部分，分别是：顶部元件、中部触摸屏、底部控制栏。

##顶部元件

从左至右分别是距离感应？，摄像头，听筒，光线感应？

其实两个感应器挺好画的，一个圆+一个颜色即可。

摄像头有一个明暗及颜色变化，而且是渐变式的，因此采用了
```CSS
box-shadow: inset 0 0 0px 2px rgba(255, 255, 255, 0.05),inset -1px 1px 10px rgba(255, 255, 255, 0.07)
```
进行两个圆圈的绘制工作

##底部控制栏

从左至右分别是 菜单、主页、返回

菜单键我一共采用了3个方案

**1 利用 ||| 并搭配样式对其进行旋转**

由于以下几个问题而抛弃了

一个是字符的长度（或者说旋转后应该叫宽度）不好控制，难以匹配另外两个按钮的大小。

另一个问题是字符间距不好控制，不同屏幕下的间距会有差异。

最后一个问题是线条宽度，用粗体太宽，不用粗体又太细惹

**2 设置border并搭配样式的方案**

同样因为在不同屏幕下显示效果不一而舍弃

**3 设置多重box-shadow，这也是目前采用的方式**

>（box-shadow的禁忌之双重存在Daze）

首先长度问题很好控制，把width设置好就OK了。

其次是线条间隔，通过设置box-shadow的属性也可以很方便的实现，并且测试在不同屏幕下显示效果都是一致的。

最后的线条宽度也很好办，设置好height就好啦~

```CSS
.menu:after {
	position: absolute;
	content: '';
	display: block;
	width: 10px;
	height: 1.1px;
	background: rgb(135, 21, 22);
	box-shadow: rgb(135, 21, 22) 0px 4px 0px, rgb(135, 21, 22) 0px 8px 0;
	margin-top: 2.6em;
	left: -7.38em;
}
```

##中部触摸屏

触摸屏分为几个部分 单独拿出来讲

---

#触摸屏

触摸屏分为顶栏和主屏幕

##顶栏

从左至右依次是  信号、电池、时间

**信号的实现和菜单键的实现类似，4G信号是用CSS缩小的**

> box-shadow的四重存在~

```CSS
.network{
	top: -0.8em;
	right: 1.5em;
	-moz-transform:scale(0.4, 0.4);
	-webkit-transform:scale(0.4, 0.4);
	-o-transform:scale(0.4, 0.4);
	-ms-transform:scale(0.4, 0.4);
	transform:scale(0.4, 0.4);
}

.signal:after {
	content: '';
	display: block;
	width: 2px;
	height: 12px;
	background: rgba(255, 255, 255, 0.5);
	box-shadow: white -4px 2px 0px, white -8px 4px 0, white -12px 6px 0, white -16px 8px 0;
}
```

**电是会逐渐减少的**

```HTML
<span class="battery" id="empty"></span>
<span class="battery" id="full" v-style="width: w + 'px',background: c"></span>
```

此处利用了Vue对id为full的span进行样式调整，随着时间变化修改其宽度及背景色，实现电量动态减少的效果

**时间是会变化的**

```HTML
<span class="clock" id="clock" v-text="date | dateToTime 1"></span>
```

此处利用了Vue对date参数进行修改，同步系统时间。 dateToTime函数可以把时间格式化成HH:mm格式，1表示中间的冒号不闪烁

##主屏幕

由Canvas标签组成背景、Section标签组成的锁屏界面构成、Table标签组成App容器。Canvas下面放了个Img标签 兼容嘛~

**背景**

背景一共经历了三个阶段

**img标签**

没啥好说的 就一个图而已

**canvas标签 读图**

在canvas内部放个img，用canvas读取后再显示出来，效果和直接用img是一样的

**canvas表情 绘图**

自己做了个CanvasUtil， 用以实现几个功能

> 配合CSS 实现淡入淡出，设置opacity属性
> 绘制椭圆，当然也可以绘制正圆
> 绘制点A到点B的路径，可选直线和曲线两个形式

于是目前使用的背景图是先绘制了一个渐变

```JavaScript
var image = document.getElementById('bgi');
var cvsW = image.width;
var cvsH = image.height;

// Create LinearGradient on canvas
var linerBGI = canvas.getContext('2d').createLinearGradient(0, 0, cvsW, cvsH);
linerBGI.addColorStop(0, "#A6C0AF");
linerBGI.addColorStop(1, "#A3B8A8");

var screenCanvas = new canvasUtils(canvas, {
	type: "2d",
	cvsAttr: {
		width: cvsW,
		height: cvsH
	},
	cvsStyle: {
		opacity: 0
	},
	ctxAttr: {
		fillStyle: linerBGI
	},
	method: {
		name: "fillRect",
		args: [0, 0, cvsW, cvsH]
	}
});

screenCanvas.init();
screenCanvas.execute();
```

然后再绘制了几个曲线式A点到B点的路径

```JavaScript
// Add some half ellipse
var separation = cvsW * 0.5;
var points = {
	A: {
		x: separation * 0,
		y: cvsH
	},
	B: {
		x: separation * 2,
		y: cvsH
	},
	throughPoint: {
		x: separation * 1,
		y: -50
	}
};

var ellipseStyle = canvas.getContext('2d').createLinearGradient(cvsW / 2, 0, cvsW / 2, cvsH);
ellipseStyle.addColorStop(0, "rgba(41, 255, 0, 0.3)");
ellipseStyle.addColorStop(0.5, "rgba(0, 139, 255, 0.3)");
ellipseStyle.addColorStop(1, "rgba(161, 0, 255, 0.3)");

var args = {
	ctxAttr: {
		fillStyle: ellipseStyle,
		strokeStyle: "rgba(0, 0, 0, 0)"
	}
};

// ctx.translate(100,0);
// ctx.setTransform(a,b,c,d,e,f);
// 参数	描述
// a	水平缩放绘图
// b	水平倾斜绘图
// c	垂直倾斜绘图
// d	垂直缩放绘图
// e	水平移动绘图
// f	垂直移动绘图
ctx.setTransform(1,0,0,1,200,0);
screenCanvas.pointA2B(points, "curve", args);

ctx.setTransform(1,0,0,1,-200,0);
screenCanvas.pointA2B(points, "curve", args);

ctx.setTransform(1,0,0,1,100,0);
screenCanvas.pointA2B(points, "curve", args);

ctx.setTransform(1,0,0,1,-100,0);
screenCanvas.pointA2B(points, "curve", args);
```

**锁屏界面**

锁屏界面同上，大号的时间原理同上。

额外加入了日期显示，通过另一个过滤器对时间进行格式化，显示出DD/MM Day的格式

```HTML
<p class="date" v-text="date | dateToDate"></p>
```

**App容器**

用table对整个屏幕进行分割，做成了4X8的一堆格子，以后拿来放APP（虽然现在一个都没有

---

#脑洞中的其他物件

##计算器
##秒表
##相机
##录音机

不知何时能完工呢