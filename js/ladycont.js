var scrollTop;
var tHeight;
var logoh;
$(window).scroll(function(){
	logoh=$("#logobox").height();
	tHeight =$("nav").height();
	scrollTop = $(document).scrollTop();
	if(scrollTop>tHeight){
		$("#titia").css({
			"position":"fixed",
			"marginTop":tHeight
		})
	}else{
		$("#titia").css({
			"position":"static",
		})
		
	}
})
$(".jiahao").click(function(){
	$("#spxq").css({
		"display":"block"
	})
})
$("#topcb").click(function(){
	$("#spxq").css({
		"display":"none"
	})
})



