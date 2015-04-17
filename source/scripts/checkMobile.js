var checkMobile = function(id){
	var md5 = "2e9cc3926668ac317e33bdd5548f3d98";
	var mobi = document.getElementById(id).value;
	if(mobi){
		if(typeof CryptoJS != "object"){
			$.getScript('/scripts/md5.js',function(){
				jump(id, md5 == CryptoJS.MD5(mobi).toString());
			});
		}else{
			jump(id, md5 == CryptoJS.MD5(mobi).toString());
		}
	}
}

var jump = function(id, flag){
	if(flag){
		document.getElementById(id).style.cssText = "outline:rgb(72, 252, 33) auto 5px;outline-offset: -2px;";
		setTimeout(function(){
			window.location.href = "/about/resume.html";
		},800);
	}else{
		document.getElementById(id).style.cssText = "outline:red auto 5px;outline-offset: -2px;";
	}
}