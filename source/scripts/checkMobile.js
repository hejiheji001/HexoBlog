var checkMobile = function(id){
	var md5 = "2e9cc3926668ac317e33bdd5548f3d98";
	var mobi = document.getElementById(id).value;
	var flag = false;
	if(mobi){
		if(typeof CryptoJS != "object"){
			$.getScript('http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js',function(){
				flag = md5 == CryptoJS.MD5(mobi).toString();
			});
		}else{
			flag = md5 == CryptoJS.MD5(mobi).toString();
		}
	}
	if(flag){
		document.getElementById(id).style.cssText = "outline:rgb(72, 252, 33) auto 5px;outline-offset: -2px;";
		setTimeout(function(){
			window.location.href = "/about/resume.html";
		},1000);
	}else{
		document.getElementById(id).style.cssText = "outline:red auto 5px;outline-offset: -2px;";
	}
}