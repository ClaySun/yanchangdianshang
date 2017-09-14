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
