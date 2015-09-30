$(function(){
	$(".hint").hover(function(e){
		var showId = $(this);
		var hintTarget = $("[target='" + showId[0].id + "']");
		var height = hintTarget.height();
		hintTarget[0].style.top = $(this).offset().top - hintTarget.parent().offset().top + "px";
		hintTarget.fadeIn();
	});

	$(".hint").mouseout(function(e){
		var showId = $(this)[0];
		var hintTarget = $("[target='" + showId.id + "']");
		hintTarget.fadeOut();
	});
});