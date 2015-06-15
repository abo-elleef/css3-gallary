$(document).ready(function(){
	$("#drop-list").hide();
	$("#drop-list").css("left",$("#drop-toggler").offset().left-40);
	$("#drop-list").css("top",$("#drop-toggler").offset().top+70);

	$("#drop-toggler").click(function(){
		$("#drop-list").toggle(250);
		return false;
	});
	
});