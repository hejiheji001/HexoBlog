
var makedie = function() {
	var bmd = document.getElementById('beforemakedie');
	var ICanMakeDie = /(song\?id=|song\/)(\d+)?/.exec(bmd.value);
	if(ICanMakeDie){
		bmd.setAttribute("style", "border: 1px solid #4CF74C;");
		stage1(ICanMakeDie[2]);
	}else{
		bmd.setAttribute("style", "border: 1px solid #F00;");
		bmd.setAttribute("placeholder", "I can't make it!");
	}
};

var stage1 = function(wakaaaa) {
	$.ajax({
		type: "get",
		async: false,
		url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%20%3D%20%22http%3A%2F%2Fmusic.163.com%2Fapi%2Fsong%2Fdetail%3Fids%3D%5B" + wakaaaa + "%5D%22&format=json&diagnostics=true&callback=stage2",
		dataType: "jsonp",
		jsonp: "callback",
		jsonpCallback:"stage2"
	});
};

var stage2 = function(wohoooo){
	var songs = wohoooo.query.results.json.songs;
	// var hMusic = songs.hMusic;
	// var mMusic = songs.mMusic;
	var lMusic = songs.lMusic;
	// var bestOne = hMusic || mMusic || lMusic;
	var bestOne = lMusic;

	if(bestOne){
		var url = songs.mp3Url;
		var bestMusicId = bestOne.dfsId;
		var fileName = songs.artists.name + " - " + songs.name + "." + bestOne.extension;
		stage4(fileName, url);
	}
};

// TODO implement MD5 update digest in JS
var stage3 = function(fireaway, letsburn) {
	var magic = getBytes("3go8&$8*3*3h0k(2)2");
	var boom = getBytes(fireaway);
	var magic_len = magic.length;
	var boom_len = boom.length;

	for (var i = 0; i < boom_len; i++) {
		boom[i] = boom[i] ^ magic[ i % magic_len];
	}

	var temp = [];
	for (var i = 0; i < boom_len; i++) {
		temp[i] = boom[i].toString(16);
	}


	console.log(boom.join(" "));
	console.log(temp.join(" "));
	// var result = CryptoJS.MD5(boom.join("")).toString();
	// console.log(result);
	// console.log(base64.encode(result));
}

var stage4 = function(boom, pia){
	var d = document.getElementById("yahoooo");
	d.style.display = "flex";

	var a = document.getElementById("Wohoooo") || document.createElement("a");
	a.id = "Wohoooo";
	a.innerHTML = "Wohoooo!";
	a.href = pia;
	a.className = "button";
	a.setAttribute("download", boom);
	a.setAttribute("ripple", "0");
	d.appendChild(a);

	document.getElementById("hint").innerHTML = boom + "<br> Only 128K available, if you want 320K please contact me. <br>Also need someone to write CSS for this page.";

	var m = document.getElementById("hoohawwwww");
	m.src = pia;
}

var getBytes = function(str){
	var bytes = [];
	for (var i = 0; i < str.length; ++i) {
		bytes.push(str.charCodeAt(i));
	}
	return bytes;
};

var md = document.getElementById('makedie');
md.addEventListener('click', makedie, false);



// [5,81,90,8,31,16,13,18,0,29,7,92,05,82,27,2]
// [ ,Q ,Z , ,  ,  ,  ,  , ,  , ,\ ,  ,R ,  , ]

// 5 51 5a 8 1f 10 d 12 0 1d 7 5c 5 52 1b 2

// boom.join("")

// 5  8  1  9  0  8  3  1  1  6  1  3  1  8  0  2  9  7  9  2  5  8  2  2  7  2

// 53 56 49 57 48 56 51 49 49 54 49 51 49 56 48 50 57 55 57 50 53 56 50 50 55 50

// CryptoJS.MD5(boom.join("")).toString()
// 	5870f2acadc3c0873a28a84e0df06f54


// NTg3MGYyYWNhZGMzYzA4NzNhMjhhODRlMGRmMDZmNTQ=


// Final
// 	yw07dn2HDCRRwUFCjw2v6A==
// 	UxtD7mo35aiYv2pj50o7fQ==
// Hex BeforeBas64
// 	531b43ee6a37e5a898bf6a63e74a3b7d

// 	cbd3b767d87c2451c141428fdafe8
// 	cb0d3b767d870c2451c141428f0dafe8
// 	cb0d3b767d870c2451c141428f0dafe8


// 	53 1b 43 ee 6a 37 e5 a8 98 bf 6a 63 e7 4a 3b 7d
// 	cb d3 b7 67 d8 7c 24 51 c1 41 42 8f da fe 8

// dec
// 	83 27 67 238 106