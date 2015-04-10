title: "Draw a Phone with CSS & HTML"
date: 2015-04-10 23:29:38
tags: CSS3 HTML JS Vue.js
---
用CSS画个手机

脑洞突发 画个手机玩～

其实一直想试试自己在CSS HTML JS方面的造(zao)诣(<span style="text-decoration:line-through">zhi</span>)如何 于是就趁着有空玩一玩～

首先这个手机是我自己目前在用的 全部的细节力争符合实际情况 当然啦……其实有些地方画的不好的说

然后作为一个非专业前端开发者 真心希望能够抛砖引玉 并得到大家指点

以下正片 我会按照我实际的绘画过程讲述

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

面板被我分成三个部分，分别是：顶部元件，中部触摸屏，底部控制栏。

首先是顶部元件，从左至右分别是距离感应？，摄像头，听筒，光线感应？

其实两个感应器挺好画的，一个圆+一个颜色即可。

摄像头有一个明暗及颜色变化，而且是渐变式的，因此采用了
```CSS
box-shadow: inset 0 0 0px 2px rgba(255, 255, 255, 0.05),inset -1px 1px 10px rgba(255, 255, 255, 0.07)
```
进行两个圆圈的绘制工作

---

先写到这里吧……女朋友叫我睡觉惹……


