//帮助中心
$(document).ready(function(){
	 $('.help_title').live('click',function(){
	 $(this).toggleClass("help_titlecur").parent().siblings("").children().removeClass("help_titlecur");
	 $(this).siblings(".help_menu").slideToggle(500).parent().siblings("").children(".help_menu").slideUp(500);
     }); 
})


//分类更多
$(function() {
//    	 			$('#fenlei_more').click(function(){
//    	 				 $("#fenlei_ul_more").slideToggle("slow");
//    	 			});
//    	 			$('#fenlei_more2').click(function(){
//    	 				 $("#fenlei_ul_more2").slideToggle("slow");
//    	 			})
$(".more_box").live("click",function() {
		$(this).toggleClass("more_icon");
		$(".screen_con dl").eq($(".more_box").index($(this))).toggleClass("auto_height");
	});
	$('.select-all').live("click",function(){
	   $(this).addClass("selected").siblings().removeClass("selected");
	   $(this).next().children().removeClass("selected");
    });  
	$('.screen_con li dl dd').live("click",function(){
	   $(this).addClass("selected").siblings().removeClass("selected");
	   $(this).parent().prev().removeClass("selected");
     }); 
      	 		})




//banner的动画滚动
$(function(){
	var banner_swiper = new Swiper('.banner .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        autoplay : 3000,
    });
    
    var banner_swiper = new Swiper('.box1_left .swiper-container', {
        pagination: '.box1_left .swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
    });
    
    var banner_swiper = new Swiper('.box2_left .swiper-container', {
        pagination: '.box1_left .swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
    });
      var banner_swiper = new Swiper('.ybh_img_list .swiper-container', {
        pagination: '.swiper-paginationa',
        paginationClickable: true,
        autoplay : 3000,
    });
})

//box1的横向滚动
$(function(){
$("#pic_list_1").cxScroll();
$("#pic_list_2").cxScroll();
$("#pic_list_3").cxScroll();
});

$('.changci_fenlei_ul li').live("click",function(){
	  $(this).addClass("selected").siblings().removeClass("selected");
    });


///*可伸缩侧边栏 及tab切换*/
//$(document).ready(function(){
//   $('.more_box').live('click',function(){
//	 $(this).toggleClass("more_icon");
//	 $(this).closest('.select-list').siblings().children('.more_box').removeClass("more_icon");
//	 $(".more_content").eq($('.more_box').index(this)).slideToggle(500)
//}); 
// 
//})

///*左侧悬浮出现认证信息*/
//$(document).ready(function(){
//	$('.idcard').live('mouseover',function(){
//	 $(".id_alter").hide('').eq($('.idcard').index(this)).show('')
//   });
//	$('.idcard').live('mouseleave',function(){
//	 $(".id_alter").hide('')
//   });
//})
///*微信悬浮出现*/
//$(document).ready(function(){
//	$('.hedwx_img a').live('mouseover',function(){
//	 $(".wx_box").hide('').eq($('.hedwx_img a').index(this)).show('')
//   });
//	$('.hedwx_img').live('mouseleave',function(){
//	 $(".wx_box").hide('')
//   });
//})

/*产品内页滚动*/
(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:66 //每行的高度
	};
	
	var opts = $.extend({}, defaults, options),intId = [];
	
	function marquee(obj, step){
	
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);
$(document).ready(function(){
	$('.recode_scoll li:even').addClass('lieven');
})
$(function(){
	$("div.recode_scoll").myScroll({
		speed:60, //数值越大，速度越慢
		rowHeight:66 //li的高度
	});
});

//阳光采购
$(function() {
	$(".select-box-all").click(function(){
		$(this).toggleClass('select-open')
	}).mouseleave(function(){
		$(this).removeClass('select-open')
	})
})
//$(function() {
//	$(".select-box-all").click(function(){
//		$(this).addClass('select-open')
//	})
//	$("body").click(function(){
//		$(this).removeClass('select-open')
//	})
//})
