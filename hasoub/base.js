var right = function(container){
  container.addClass('right');
};
var left = function(container){
  container.addClass('left');
};
var getFirstThumb = function(){
	return $(".thumb").first();
}
var getLastThumb = function(){
	return $(".thumb").last();
};
var getNext = function(){
	var current = $(".thumb.active");
	var next ;
	if( current.length ){
		next = $(current).next(".thumb");
		if( next.length ){ return next; } else { return getFirstThumb().addClass("active") };
	}else{
		return getFirstThumb().addClass("active");
	};
};
var getPrev = function(){
	var current = $(".thumb.active");
	var prev ;
	if(current.length){
		prev = $(current).prev(".thumb");
		if( prev.length ){ return prev; } else { return getLastThumb().addClass("active") };
	}else{
		return getLastThumb().addClass("active");
	}
};
var drawThumbs = function(pathes){
	if(pathes.length < 2){
		$("#thumbs").css("height",0);
		$(".direction-action").hide();
	};
};
var slide = function(that){
	$(".img-container").find("img").attr("src",$(that).find("img").attr("src"));
	$(".title").text($(that).attr("data-title"));
	$(".desc").text($(that).attr("data-desc"));
	$(".thumb").removeClass("active");
	$(that).addClass("active");
};
var forword = function(){
	var next = getNext();
	$(".thumb.active").removeClass("active");
	next.addClass("active");
	slide(next);
};
var backword = function(){
	var prev = getPrev();
	console.log(prev);
	$(".thumb.active").removeClass("active");
	prev.addClass("active");
	slide(prev);
};
$.fn.extend({
	"hasoup": function(){
		var pathes = [];
		var thumbs = $(this).find(".thumb");
		console.log(typeof(thumbs));
		for (var i = 0; i < thumbs.length; i++) {
			pathes.push($(thumbs[i]).find("img").attr("src"));
		};
		drawThumbs(pathes);
		$(".thumb").click(function(){slide(this)});
		slide(getFirstThumb());
	}
});
$("document").ready(function(){
  $("#thumbs").hasoup();
	$(".slide").swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData){
      if(direction == "right"){forword();return ;}
      if(direction == "left"){backword();return ;}
    }
  });
  $("#right").click(function(){
  	backword();
  	return false;
  });
  $("#left").click(function(){
  	forword();
  	return false;
  });
});