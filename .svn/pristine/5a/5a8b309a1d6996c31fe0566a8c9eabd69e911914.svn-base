/* 左侧导航 start
------------------------------------------------------------------- */
/*$(function() {
   $('.product_nav li h3').click(function(){
	  if(!$(this).next().is(':visible')){
		  $(this).parent().addClass('product_navcur').siblings().removeClass('product_navcur');
		   $(this).parent().siblings().find('dl').slideUp();
		  $(this).next().slideDown();
      }else{
	    $(this).parent().removeClass('product_navcur').siblings().removeClass('product_navcur');
		$(this).next().slideUp().parent().siblings().find('dl').slideUp();	 
	  }
   }); 
});*/
 var proLia = $('.product_nav li').length
 for(var i=0;i<proLia;i++){
	if($('.product_nav li').eq(i).find('dl').length>0){
		$('.product_nav li').eq(i).addClass('proav');
	}
}
/* 左侧导航 end
------------------------------------------------------------------- */
$(window).scroll(function(){
if($.browser.msie && $.browser.version=="8.0"){$('.pro_abso').addClass('pro_absoa');};
b();
});
$(function(){
	$('.pro_filter li:last').css('border','0');
	$('.pro_list li').hover(function(){
	$(this).addClass('pro_licur');
	},function(){
	$(this).removeClass('pro_licur');
	});
	
	
	$(".product_top").click(function(){
	$('html, body').animate({scrollTop: $(".header").offset().top});
	});
});
$(function(){
	var aLl = $('.pro_filter li').length;
	for(var i=0;i<aLl;i++){
		if($('.pro_filter li').eq(i).find('dd:first').height() <= 26){
			$('.pro_filter li').eq(i).find('dd.pro_filtera').hide();
		}
	};
	b();
});

function paraPa(a){
	if($(a).attr('class') == 'ddb_cur' || $(a).attr('class') == 'ddb_cheap ddb_cur' ){
		if($(a).parents('dl').find('.ddb_cur').length > 1){
			$(a).removeClass('ddb_cur');
		}else{
			alert('至少要选择一个');
		};
	}else {
		$(a).addClass('ddb_cur');
	}
};
function paraPb(a){
	$(a).addClass('ddb_cur').parent().siblings().find('a').removeClass('ddb_cur');
};
function paraPc(a){
	if($(a).attr('class') == 'ddb_cur' || $(a).attr('class') == 'ddb_cheap ddb_cur' ){
			$(a).removeClass('ddb_cur');
	}else {
		$(a).addClass('ddb_cur');
	}
};
	
function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('.product_top').show();
	}else{
		$('.product_top').hide();
	}
}

function filterA(a){
	if($(a).parent().attr('class') == '' || $(a).parent().attr('class') == undefined){
		if($(a).prev().height() > 26){
			$(a).text('收起').parent().addClass('filterDl');
		}
	}else{
		$(a).text('展开').parent().removeClass('filterDl');
	}
};

/* 详细页 start
------------------------------------------------------------------- */
function proTab(a,b){
	$(a).addClass('pro_tabcur').siblings().removeClass('pro_tabcur');
	$('#'+b).show().siblings().hide();
}
/* 详细页 end
------------------------------------------------------------------- */
