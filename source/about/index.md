title: "about"
date: 2015-03-06 16:46:44
---

#About Me

A proudly Java programmer and Front-End engineer.

Always foolish, always hungry.

Fond of almost every interesting things.

Animation lover but not a otaku.

Not very skilled in basketball and swimming nor too bad.

Handsome?

PS: 对于全站英文 选择单词后按CTRL/CONTROL+S即可朗读该词w
_Enter my mobile to view my resume_
<input id="mobi_num" placeholder="My Mobile is?" onkeydown="if(event.keyCode==13){$('#verify').click();addRippleEffect(verify);}"></input><button id="verify" class="brand verify" onclick="$.getScript('/scripts/checkMobile.js',function(){checkMobile('mobi_num')})" ripple="0">Verify</button>
<body onload="console.clear();console.log('%c轻敲键盘 静候回音','background: black;color:white;padding:2px 10px 2px 10px;position:absolute;top:0px')"></body>
<style>
	#posts{
		text-align: center;
	}
	#verify{
		margin: 10px;
		background: #222;
		padding: 0px 5px 0px 5px;
	}
</style>