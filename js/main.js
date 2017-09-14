$(function(){
	//topbar
     $(".topbar li").each(function(){
 		$(this).mouseenter(function(){
 		    $(this).addClass("menu-hover");
 		})
 		$(this).mouseleave(function(){
 		    $(this).removeClass("menu-hover");
 		})
 	 });
     //header
     $('.search-triggers').hover(function(){
		$('.search-triggers').addClass("search-triggers-hover");},function(){
		$('.search-triggers').removeClass("search-triggers-hover");
	 });
     $('.header-nav-btn .mn-ico2').hover(function(){
	 	$(".cart-panel").show();},function(){
	 	$(".cart-panel").hide();
	 });
	 $('.header-nav-btn .cart-panel').hover(function(){
	 	$('.mn-ico2').addClass("m-nav-hover");$(".cart-panel").show();},function(){
	 	$('.mn-ico2').removeClass("m-nav-hover");$(".cart-panel").hide();
	 });
	//banner区导航
	  var str=$(".allsort-list").attr("data-type");
	 $(".nav-allsort").hover(function(){
			 $(".allsort-list").show();
	 },function(){
		 if(str!='home'){
			 $(".allsort-list").hide();
		 }
	 });
		 $(".page-index .nav-all").unbind();
	 $(".allsort-list .item-li").mouseenter(function(){
			 $(this).addClass("hover");	
	 });
	 $(".allsort-list .item-li").mouseleave(function(){
			 $(this).removeClass("hover");
	 });

});


/***	//登录缓存写读
	 userLogin();
	 function userLogin(){
		 var userId = getCookie("_login_uid");
		 if (userId)
		 {
		 	$(".logon").show();
		 	$(".unlogin").hide();
		 	$.ajax({
			    type: "POST",
			    url: "#",
			    dataType: 'jsonp',
			    jsonp:'callBack',
				data: { userId: userId },
			    success: function(result){
			     	var name = result.name;
			     	var tel = result.mobile;
			     	var purl = result.portraitUrl50;
			     	$(".user-name").text(name);
			     	$(".user-tel").text(tel);
			     	$(".content1-infor1").html('<img src="'+purl+'">');
			     	$(".side-login-icon").html('<img src="'+purl+'">');
			    }
			});
		 }
	 }

	 //设置cookie
	 function setCookie(c_name,value,expiredays)
	 {
	 	$.cookie(c_name, value, {expires: 30, domain:'banksteel.com', path: '/'});
	 }
	 //获取cookie
	 function getCookie(c_name)
	 {
	 	var cookieValue = $.cookie(c_name);
	 	
	 	if (!cookieValue)
	 	{
	 		cookieValue = "";
	 	}
	 	
	 	return cookieValue;
	 }
	 
	 //头部搜索传地区id
	 $.ajax({
		    type: "POST",
		    url: "#",
		    dataType: 'jsonp',
		    jsonp:'callBack',
		    success: function(result){
		    	var cityId = result.cityId;
				var cityName = result.cityName;
				$("#ci_code").val(cityId);
				if(cityName != ""){
					$("#cityName").text(cityName);
				}
		    }
		});
	 
	 //头部登录之后返回地址
	 $(".topbar-bd-r .user-login").attr('href','//login.banksteel.com/login.htm?mybackurl=' + window.location.href);
	 
});
var params={};
var param_br=params["sp"];
var param_br=params["ml"];
var param_br=params["br"];
var param_br=params["pi"];

function searchByParam(key1,value1,key2,value2){
	var body = $(document.body),
		form = $("<form method='post'></form>"),
		input;
		url="#";
	if(key2 != null){
		var input1 = $("<input type='hidden'>");
		if(value2=="51"){
			url="#";
		}else if(value2=="52"){
			url="#";
		}else if(value2=="53"){
			url="#";
		}else if(value2=="54"){
			url="#";
		}else if(value2=="55"){
			url="#";
		}else if(value2=="56"){
			url="#";
		}else if(value2=="57"){
			url="#";
		}else if(value2=="58"){
			url="#";
		}
		params[key2]=value2;
		input1.attr({"name":key2});
		input1.val(params[key2]);
		form.append(input1);
	}
	form.attr({"action":url});
	if(key1 != null){
		params[key1]=value1;
		var input = $("<input type='hidden'>");
		input.attr({"name":key1});
		input.val(params[key1]);
		form.append(input);
	}

	form.appendTo(document.body);
	form.submit();
	document.body.removeChild(form[0]);
}


//头部搜索方法
var flag = "";
function checkKwInput()
{
	var kwInput1 = $('#kwInput1');  // 展示的
	var kwInput2 = $('#kwInput2');  // 隐藏的
		var kwValue = $.trim(kwInput1.val());
	if (kwValue == '请输入关键词查询' || kwValue == '')
	{
		kwInput2.val("");
	}
	else
	{
		kwInput2.val(kwInput1.val());
	}
	kwInput2.val(escape(kwInput2.val()));  // 对隐藏域加密
	
	if(flag == "1" || flag == "")
	{
		$("#search").attr("action","#"+escape(kwValue));
	}
	
	return true;
}

//去购物车链接  小div内
function userLogin()
{
		var d;
			 d = dialog({
		                id: 'user-login',
		                title: '用户登录',
						url: '#',
		                width:'360',
						height:'375',
		                fixed:true
		    }); 
		            d.showModal();
		            return false;
}
**/