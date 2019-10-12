

// 轮播图
$(function(){
    let page = 1;
    let i = 5; //每版放4个图片
    //向后 按钮
    $("#jiantr").click(function(){    //绑定click事件
   let box = $(".box"); 
   let lblist = $("#lblist");
   let v_width = box.width()/5;
   let len = box.find("li").length;
   let page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
   if( !lblist.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
     if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
    lblist.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
    page = 1;
     }else{
    lblist.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
    page++;
    }
   }
   });
    //往前 按钮
    $("#jiantl").click(function(){
      let box = $(".box"); 
   let lblist = $("#lblist");
   let v_width = box.width();
   let len = box.find("li").length;
   let page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
   if(!lblist.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
     if(page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
     lblist.animate({ left : '-='+v_width*(page_count-1) }, "slow");
    page = page_count;
   }else{
    lblist.animate({ left : '+='+v_width }, "slow");
    page--;
   }
  }
    });
});





// 小图滑动
	let index=0;
	$("#jiantrr").click(function rig() {
		
			$("#lblistt li").css({
				transform: 'translateX(' + (-355 * (++index)) + 'px)',
				transition: 'all 1s'
			})
		if(index==3){
			index=-1;
		}
		
	})
	$("#jiantll").click(function lef() {
		
			$("#lblistt li").css({
				transform: 'translateX(' + (-355 * (--index)) + 'px)',
				transition: 'all 1s'
			})
		if(index==1){
			index=0;
		}
		
	});



// $(function(){
//     let page = 1;
//     let i = 3; //每版放4个图片
//     //向后 按钮
//     $("#jiantrr").click(function(){    //绑定click事件
//    let boxx = $("#boxx"); 
//    let lblist = $("#lblistt");
//    let v_width = boxx.width();
//    let len = boxx.find("li").length;
//    let page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
//    if( !lblist.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
//      if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
//     lblist.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
//     page = 1;
//      }else{
//     lblist.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
//     page++;
//     }
//    }
//    });
//     //往前 按钮
//     $("#jiantll").click(function(){
//       let boxx = $("#boxx"); 
//    let lblist = $("#itemslistt");
//    let v_width = boxx.width();
//    let len = boxx.find("li").length;
//    let page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
//    if(!lblist.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
//      if(page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
//      lblist.animate({ left : '-='+v_width*(page_count-1) }, "slow");
//     page = page_count;
//    }else{
//     lblist.animate({ left : '+='+v_width }, "slow");
//     page--;
//    }
//   }
//     });
// });


// 滚动


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
//     function $(str){
//     if(str.charAt(0)=="#"){
//         return document.getElementById(str.substring(1));
//     }else if(str.charAt(0)=="."){
//         return document.getElementsByClassName(str.substring(1));
//     }else{
//         return document.getElementsByTagName(str);
//     }
// }   