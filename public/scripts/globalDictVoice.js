
var init = function(){
	var hideIframe = document.createElement("iframe");
	hideIframe.style.display = "none";
	hideIframe.id = "speakIt";
	document.body.appendChild(hideIframe);
	handeler();
}

var speakIt = function(){
	var word = window.getSelection().toString();
	if(!word.match(/ /)){
		var hideIframe = document.getElementById('speakIt');
		hideIframe.src = "https://dict.youdao.com/dictvoice?audio=" + word + "&type=1";
	}
}

var handeler = function(){
	document.addEventListener("keydown", function(event){
		if(event.ctrlKey && event.keyCode == 83){
			speakIt();
		}
	}, false);
}

window.onload = function(){
	init();
};