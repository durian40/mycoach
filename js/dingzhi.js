var scrollTop;
var tHeight;
$(window).scroll(function(){
	
	//var tHeight =parseInt($(".top").css("height")) ;
	tHeight =$("nav").height();
	scrollTop = $(document).scrollTop();
	if(scrollTop>tHeight){
		$("header").css({
			display:"none"
		});	
		$("nav").css({
			"position":"fixed","top":0
		});
    	$("#dlogobox").css({
    		display:"block"
    	});
    	$("#ttubiao").css({
    		display:"block"
    	});
    	$('.zhanshi').css({
					marginTop:scrollTop+tHeight+"px",
				})
	}else{
		$("header").css({
			display:"block"
		});	
	$("nav").css({
		"position":"static"
	});
	$("#dlogobox").css({
    		display:"none"
    	});
    	$("#ttubiao").css({
    		display:"none"
    	});
    	$('.zhanshi').css({
					marginTop:0,
				})
	}
     })

// 滑过

$("#a1id").hover(
			function (over) {
				$('#a1zs').css({
					display:"block",
				});
				// $('#a1zs').css({
				// 	marginTop:scrollTop+tHeight+"px",
				// })
				// $('.zhanshi').css({
				// 	marginTop:scrollTop+tHeight+"px",
				// })
				},
			function (out) {
				$('#a1zs').css({
					display:"none"
				});
				}
		);
$("#a1zs").hover(
			function (over) {
				$('#a1zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a1zs').css({
					display:"none"
				});
				}
		);

$("#a2id").hover(
			function (over) {
				$('#a2zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a2zs').css({
					display:"none"
				});
				}
		);
$("#a2zs").hover(
			function (over) {
				$('#a2zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a2zs').css({
					display:"none"
				});
				}
		);

$("#a3id").hover(
			function (over) {
				$('#a3zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a3zs').css({
					display:"none"
				});
				}
		);
$("#a3zs").hover(
			function (over) {
				$('#a3zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a3zs').css({
					display:"none"
				});
				}
		);

$("#a4id").hover(
			function (over) {
				$('#a4zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a4zs').css({
					display:"none"
				});
				}
		);
$("#a4zs").hover(
			function (over) {
				$('#a4zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a4zs').css({
					display:"none"
				});
				}
		);

$("#a5id").hover(
			function (over) {
				$('#a5zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a5zs').css({
					display:"none"
				});
				}
		);
$("#a5zs").hover(
			function (over) {
				$('#a5zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a5zs').css({
					display:"none"
				});
				}
		);

$("#a6id").hover(
			function (over) {
				$('#a6zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a6zs').css({
					display:"none"
				});
				}
		);
$("#a6zs").hover(
			function (over) {
				$('#a6zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a6zs').css({
					display:"none"
				});
				}
		);

$("#a7id").hover(
			function (over) {
				$('#a7zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a7zs').css({
					display:"none"
				});
				}
		);
$("#a7zs").hover(
			function (over) {
				$('#a7zs').css({
					display:"block",
				});
				},
			function (out) {
				$('#a7zs').css({
					display:"none"
				});
				}
		);