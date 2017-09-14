/*********************************************************************
	File	: global-public.js
	des		: 前后台通用脚本
*********************************************************************/
/**
 *	添加按下esc关闭弹出框功能
 */
$(document).keyup(function(event){
	if(event.keyCode == 27){
		if(parent.layer_close){
			parent.layer_close();
		}
	}
});
$(function(){
	try{
		if(BS_PATH && BS_PATH != ""){
			$.ajax({  
				type : "post",  
				dataType : "json",
				url : BS_PATH + "/login/loginok.do?jsoncallback=?"
			}); 
		}
	}catch(e){
		
	}
});
/*********************************************
* function 	: checkWebBrowse
* author 	: flotage
* des		: 判断浏览器
* return	: 0 - 未知 1 - IE 2 - 火狐
*********************************************/
function checkWebBrowse(){
	var bname = navigator.appName;
	
	if (bname.search(/microsoft/i) == 0) return 1;
	if (bname.search(/netscape/i) == 0) return 2; // 火狐
	
	return 0;
}
/********************************************************
* function	: selectMenberPage
* author	: flotage
* create	: 2012.07.09
* des		: 键按下事件（防止出现不可编辑文本框中按下删除键，导致浏览器后退）
* 功能在IE下未完成，需要调试
********************************************************/
function onEditKeyDown(ev){
   
}
function getKeyCode(ev){
	if (2==checkWebBrowse()){
		// FF
		return ev.which;
	}else{
		// IE
		return event.keyCode;
	}
}
/********************************************************
* function	: onEnterKeyDown
* author	: flotage
* create	: 2012.07.09
* des		: 全局函数，防止在文本框中，敲回车后，自动提交
********************************************************/
function onEnterKeyDown(ev){
	var keyCode = getKeyCode(ev);
	if (keyCode==13)return false;
	return true;
}

/********************************************************
* function	: gAlert
* author	: flotage
* create	: 2012.07.09
* des		: 通用提示信息窗口
********************************************************/
function gAlert(msg){
	$.layer({v_msgtype:9,v_offset:['15%','50%'],v_msg:msg});
}
//通用提示信息窗口点击按钮执行事件
function gAlertCallback(msg,yes){
	$.layer({v_msgtype:9,v_offset:['15%','50%'],v_msg:msg,yes:yes,v_showclose:false});
}
//如果有父窗口，则在父窗口弹出提示，否则去除阴影背景 前台短信订阅专用
function gAlert2(msg){
	if (window.parent){
		window.parent.$.layer({v_msgtype:9,v_offset:['15%','50%'],v_msg:msg});
	}else{
		$.layer({v_msgtype:9,v_offset:['10%','50%'],v_msg:msg,v_shade:false,v_move:false});
	}
}
/********************************************************
* function	: gAlertOk
* author	: flotage
* create	: 2012.07.09
* des		: 通用成功提示信息窗口
********************************************************/
function gAlertOk(msg){
	$.layer({v_msgtype:1,v_offset:['15%','50%'],v_msg:msg});
}
/********************************************************
* function	: gAlertErr
* author	: flotage
* create	: 2012.07.09
* des		: 通用错误提示信息窗口
********************************************************/
function gAlertErr(msg){
	$.layer({v_msgtype:5,v_offset:['15%','50%'],v_msg:msg});
}

/********************************************************
* function	: stopDefault
* author	: 
* create	: 2012.07.09
* des		: 阻止浏览器的默认行为
********************************************************/
function stopDefault(e) {
	// 阻止默认浏览器动作(W3C)
	if (e && e.preventDefault)
		e.preventDefault();
	// IE中阻止函数器默认动作的方式
	else
		window.event.returnValue = false;
	return false;
}

/********************************************************
* function	: stopBubble
* author	: 
* create	: 2012.07.09
* des		: 停止事件冒泡
********************************************************/
function stopBubble(e) {
	// 如果提供了事件对象，则这是一个非IE浏览器
	if (e && e.stopPropagation)
		// 因此它支持W3C的stopPropagation()方法
		e.stopPropagation();
	else
		// 否则，我们需要使用IE的方式来取消事件冒泡
		window.event.cancelBubble = true;
}

/**
 * 用法 String.format("Name:{0} Pass:{1}","xxname","1234");
 */
String.format = function(format) {
	var args = Array.prototype.slice.call(arguments, 1);
	return format.replace(/\{(\d+)\}/g, function(m, i) {
		return args[i];
	});
}


$(document).keydown(function(e){     
   var target = e.target ;     
   var tag = e.target.tagName.toUpperCase();     
   if(e.keyCode == 8){     
    if((tag == 'INPUT' && !$(target).attr("readonly"))||(tag == 'TEXTAREA' && !$(target).attr("readonly"))){     
     if((target.type.toUpperCase() == "RADIO") || (target.type.toUpperCase() == "CHECKBOX")){     
      return false ;     
     }else{     
      return true ;      
     }     
    }else{     
     return false ;     
    }     
   }     
 });
 /**
 *检查输入字符长度
 */
function checklength(str,len){
	var c = $(str).val().match(/[^ -~]/g);
	var slen=$(str).val().length + (c ? c.length : 0);
	if(slen>len){
		alert($(str).attr('alt')+"字段输入太长,不能超过"+len+"个字符(一个汉字两个字符)!");
		return false;
	}
	return true;
}

 /**
 *检查输入字符长度(以galert方式显示)
 */
function checklengthWithGalert(str,len){
	var c = $(str).val().match(/[^ -~]/g);
	var slen=$(str).val().length + (c ? c.length : 0);
	if(slen>len){
		gAlert($(str).attr('alt')+"字段输入太长,不能超过"+len+"个字符(一个汉字两个字符)!");
		return false;
	}
	return true;
}

 /**
 *过滤输入框前后空格，并把过滤后的值写会到输入框
 */
function gTrim(obj){
	obj.value = $.trim(obj.value);
}

 /**
 *验证电话号码
 */
function checkTel(str){
	var reg = /^((0\d{2,3})-)(\d{6,8})(-(\d{1,}))?$/ 
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}
/**
 *验证邮政编码
 */
function checkZipCode(str){
	var reg= /^[1-9][0-9]{5}$/
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}

 /**
 *验证邮箱
 */
function checkEmail(str){
	//var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	var reg = /^([a-zA-Z0-9_-_\.])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}

 /**
 *验证手机号
 */
function checkMobile(str){
	var reg =/^1[3|4|5|8|7][0-9]\d{8}$/
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}

 /**
 *验证数字
 */
function checkNumber(str){
	var reg=/^[0-9]*$/;
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}

/**
 * 验证数字(可验证长度,以galert方式显示)
 * 		id - 输入对象的ID
 * 		len - 小数位长度
 *		name - 对象名称（用于提示）
 */
function checkNumberWithLen(id,len,name,minnum,maxnum){
	if (id.substring(0,1)!="#")id="#"+id;
	var value = $(id).val();
	
	if (!gScript.checkIsInput(id,name))return false;
	
	if (isNaN(value)){
    	gAlert(name+'请输入数字');
    	return false;
    }
    if(null!=minnum){
    	if (parseFloat(value)<minnum){
	    	gAlert(name+'不能是小于'+minnum+'的数字');
	    	return false;
	    }	
    }
    if(null!=maxnum){
    	if (parseFloat(value)>maxnum){
	    	gAlert(name+'不能是大于'+maxnum+'的数字');
	    	return false;
	    }	
    }
    var mm0 = "^[0-9]*[0-9][0-9]*$"
	var mm1 = "^[0-9]+(.[0-9]{0,1})?$"
    var mm2 = "^[0-9]+(.[0-9]{0,2})?$"
    var mm3 = "^[0-9]+(.[0-9]{0,3})?$"
    var mm4 = "^[0-9]+(.[0-9]{0,4})?$"
    var mm6 = "^[0-9]+(.[0-9]{0,6})?$"
    var mm8 = "^[0-9]+(.[0-9]{0,8})?$"
    var res = null;
    if (len==0){
    	res = value.match(mm0);
    }else if (len==1){
    	res = value.match(mm1);
    }else if (len==2){
    	res = value.match(mm2);
    }else if (len==4){
    	res = value.match(mm4);
    }else if (len==6){
    	res = value.match(mm8);
    }else if (len==8){
    	res = value.match(mm8);
    }else{
    	res = value.match(mm3);
    }
    
    if (null==res){
    	if (len>0)
    		gAlert(name+'最多只能保留'+len+'位小数！');
    	else
    		gAlert(name+'必须是整数！');
    		
    	return false;
    }
    return true;
}

 /**
 *验证数字和字母
 */
function checkNotCharacters(str){
	var reg=/^[0-9a-zA-Z]*$/;
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}
 /**
 *验证字母（只允许输入字母）
 */
function checkOnlyEnglish(str){
	var reg=/^[a-zA-Z]*$/;
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}
/**
*检测非法字符 ~!@#$%^&*()_+-=|\{}[]:”;’<>?,./+*/
/**中的任意一个字符，视为非法*/
function checkIllegalChar(str){
	var reg=/[-_\+\\\~\!@#\$%\^&\*\.\,\=\;\:\?<>\(\)\[\]\{\}\/\|\'\"]+/g
	if(!reg.test($.trim(str))){
		return false;
	}
	return true;
}
 /**
 *转换大写金额
 */		
function convertCurrency(currencyDigits) {
	var MAXIMUM_NUMBER = 99999999999.99;
	var CN_ZERO = "\u96f6";
	var CN_ONE = "\u58f9";
	var CN_TWO = "\u8d30";
	var CN_THREE = "\u53c1";
	var CN_FOUR = "\u8086";
	var CN_FIVE = "\u4f0d";
	var CN_SIX = "\u9646";
	var CN_SEVEN = "\u67d2";
	var CN_EIGHT = "\u634c";
	var CN_NINE = "\u7396";
	var CN_TEN = "\u62fe";
	var CN_HUNDRED = "\u4f70";
	var CN_THOUSAND = "\u4edf";
	var CN_TEN_THOUSAND = "\u4e07";
	var CN_HUNDRED_MILLION = "\u4ebf";
	//var CN_SYMBOL = "￥:";
	var CN_SYMBOL = "";
	var CN_DOLLAR = "\u5143";
	var CN_TEN_CENT = "\u89d2";
	var CN_CENT = "\u5206";
	var CN_INTEGER = "\u6574";
	
// Variables:
	var integral;	// Represent integral part of digit number.
	var decimal;	// Represent decimal part of digit number.
	var outputCharacters;	// The output result.
	var parts;
	var digits, radices, bigRadices, decimals;
	var zeroCount;
	var i, p, d;
	var quotient, modulus;

	// Validate input string:
	//处理数值大的时候讲科学计数法变为数字，以免转换出错
	currencyDigits = new Number(currencyDigits);
	
	currencyDigits = currencyDigits.toString();
	
	// 处理负数的情况，红冲的时候有负数
	var fushu = "";
	if(parseFloat(currencyDigits)<0){
		currencyDigits = currencyDigits.substr(1);
		fushu = "负";
	}
	
	if (currencyDigits == "") {
		//alert("请输入要转换的数字!");
		return "";
	}
	if (currencyDigits.match(/[^,.\d]/) != null) {
		alert("\u6570\u5b57\u4e2d\u542b\u6709\u975e\u6cd5\u5b57\u7b26!");
		return "";
	}
	if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
		//alert("错误的数字格式!"); 
		return "";
	}
	
// Normalize the format of input digits:
	currencyDigits = currencyDigits.replace(/,/g, "");	// Remove comma delimiters.
	currencyDigits = currencyDigits.replace(/^0+/, "");	// Trim zeros at the beginning.
	// Assert the number is not greater than the maximum number.
	if (Number(currencyDigits) > MAXIMUM_NUMBER) {
		alert("\u8d85\u51fa\u8f6c\u6362\u6700\u5927\u8303\u56f4!");
		return "";
	}
	
// Process the coversion from currency digits to characters:
	// Separate integral and decimal parts before processing coversion:
	parts = currencyDigits.split(".");
	if (parts.length > 1) {
		integral = parts[0];
		decimal = parts[1];
		// Cut down redundant decimal digits that are after the second.
		decimal = decimal.substr(0, 2);
	} else {
		integral = parts[0];
		decimal = "";
	}
	// Prepare the characters corresponding to the digits:
	digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
	radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
	bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
	decimals = new Array(CN_TEN_CENT, CN_CENT);
	// Start processing:
	outputCharacters = "";
	// Process integral part if it is larger than 0:
	if (Number(integral) > 0) {
		zeroCount = 0;
		for (i = 0; i < integral.length; i++) {
			p = integral.length - i - 1;
			d = integral.substr(i, 1);
			quotient = p / 4;
			modulus = p % 4;
			if (d == "0") {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					outputCharacters += digits[0];
				}
				zeroCount = 0;
				outputCharacters += digits[Number(d)] + radices[modulus];
			}
			if (modulus == 0 && zeroCount < 4) {
				outputCharacters += bigRadices[quotient];
			}
		}
		outputCharacters += CN_DOLLAR;
	}
	// Process decimal part if there is:
	if (decimal != "") {
		for (i = 0; i < decimal.length; i++) {
			d = decimal.substr(i, 1);
			if (d != "0") {
				outputCharacters += digits[Number(d)] + decimals[i];
			}
		}
	}
	// Confirm and return the final output string:
	if (outputCharacters == "") {
		outputCharacters = CN_ZERO + CN_DOLLAR;
	}
	if (decimal == "") {
		outputCharacters += CN_INTEGER;
	}
	outputCharacters = CN_SYMBOL + outputCharacters;
	return fushu + outputCharacters;
}


 /**
 *转换重量金额
 */		
function convertWeight(currencyDigits) {
	var MAXIMUM_NUMBER = 99999999999.99;
	var CN_ZERO = "\u96f6";
	var CN_ONE = "\u58f9";
	var CN_TWO = "\u8d30";
	var CN_THREE = "\u53c1";
	var CN_FOUR = "\u8086";
	var CN_FIVE = "\u4f0d";
	var CN_SIX = "\u9646";
	var CN_SEVEN = "\u67d2";
	var CN_EIGHT = "\u634c";
	var CN_NINE = "\u7396";
	var CN_TEN = "\u62fe";
	var CN_HUNDRED = "\u4f70";
	var CN_THOUSAND = "\u4edf";
	var CN_TEN_THOUSAND = "\u4e07";
	var CN_HUNDRED_MILLION = "\u4ebf";
	//var CN_SYMBOL = "￥:";
	//var CN_SYMBOL = "";
	//var CN_DOLLAR = "\u5143";
	//var CN_TEN_CENT = "\u89d2";
	//var CN_CENT = "\u5206";
	//var CN_INTEGER = "\u6574";
	
	var CN_POINT = "\u70b9"; // 点
	var CN_TONS = "\u5428"; // 吨
	var CN_KG = "\u5343\u514b"; // 千克
	
	
// Variables:
	var integral;	// Represent integral part of digit number.
	var decimal;	// Represent decimal part of digit number.
	var outputCharacters;	// The output result.
	var parts;
	var digits, radices, bigRadices, decimals;
	var zeroCount;
	var i, p, d;
	var quotient, modulus;

// Validate input string:
	currencyDigits = currencyDigits.toString();
	if (currencyDigits == "") {
		//alert("请输入要转换的数字!");
		return "";
	}
	if (currencyDigits.match(/[^,.\d]/) != null) {
		alert("\u6570\u5b57\u4e2d\u542b\u6709\u975e\u6cd5\u5b57\u7b26!");
		return "";
	}
	if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
		//alert("错误的数字格式!"); 
		return "";
	}
	
// Normalize the format of input digits:
	currencyDigits = currencyDigits.replace(/,/g, "");	// Remove comma delimiters.
	currencyDigits = currencyDigits.replace(/^0+/, "");	// Trim zeros at the beginning.
	// Assert the number is not greater than the maximum number.
	if (Number(currencyDigits) > MAXIMUM_NUMBER) {
		alert("\u8d85\u51fa\u8f6c\u6362\u6700\u5927\u8303\u56f4!");
		return "";
	}
	
// Process the coversion from currency digits to characters:
	// Separate integral and decimal parts before processing coversion:
	parts = currencyDigits.split(".");
	if (parts.length > 1) {
		integral = parts[0];
		decimal = parts[1];
		// Cut down redundant decimal digits that are after the second.
		decimal = decimal.substr(0, 3);
	} else {
		integral = parts[0];
		decimal = "";
	}
	// Prepare the characters corresponding to the digits:
	digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
	radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
	bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
	//decimals = new Array(CN_TEN_CENT, CN_CENT);
	// Start processing:
	outputCharacters = "";
	// Process integral part if it is larger than 0:
	if (Number(integral) > 0) {
		zeroCount = 0;
		for (i = 0; i < integral.length; i++) {
			p = integral.length - i - 1;
			d = integral.substr(i, 1);
			quotient = p / 4;
			modulus = p % 4;
			if (d == "0") {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					outputCharacters += digits[0];
				}
				zeroCount = 0;
				outputCharacters += digits[Number(d)] + radices[modulus];
			}
			if (modulus == 0 && zeroCount < 4) {
				outputCharacters += bigRadices[quotient];
			}
		}
		//outputCharacters += CN_DOLLAR;
	}
	// Process decimal part if there is:
	if (decimal != "") {
		outputCharacters += CN_POINT;
		for (i = 0; i < decimal.length; i++) {
			d = decimal.substr(i, 1);
			outputCharacters += digits[Number(d)];
		}
	}
	// Confirm and return the final output string:
	if (outputCharacters == "") {
		outputCharacters = CN_ZERO + CN_TONS;
	}
	
	outputCharacters = outputCharacters + CN_TONS;
	return outputCharacters;
}

/**
*禁用相应ID的按钮
*/
function disableBt(id){
	$("#"+id).attr("disabled", true);
}

/**
* 刷新购物车后面的值
*/
function reflashShoppingCount(rootPath){
	$.post(rootPath+"/exp/hangsource/buy/shopping/getShoppingCount.do?jsoncallback=?",function (result){
		try{
			var msg = result[0];
			$("#gwc_button").html(msg);
		}catch(e){
		
		}
	},"json");
}

/**
* 刷新我的消息后面的值
*/
function reflashMessageCount(rootPath){
	$.post(rootPath+"/bsp/menber/msg/getMessageCount.do",function (result){
		try{
			var msg = result;
			$("#msg_button").html(msg);
		}catch(e){
		
		}
	},"text");
}
/**
 * 显示会员积分
 * path:
 *    scpath - 积分平台地址
 * 	  mbcode - 会员代码
 *	  id - 页面输出元素ID
 *    typ - 1 前台，2 后台
 **/
function showmbscore(scpath,mbcode,id,typ){
	var docpath = DOC_BASE_PATH+"/images/integral";
	var url = "";
	if(typ == null || typ == undefined || typ == ""){
		typ = "1";
	}
	if(typ == "1"){ // 前台
		url = scpath+"/scp/score/mbscore.do?jsoncallback=?";
	}else if(typ == "2"){ // 后台
		url = scpath+"/scm/score/mbscore.do?jsoncallback=?";
	}
	$.post(url,{"hydm":mbcode,"docpath":docpath},function (result){
		try{
			var msg = result[0];
			$("#"+id).html(msg);
		}catch(e){
		
		}
	},"json");
}

/**
 * 显示会员积分
 * path:
 *    scpath - 积分平台地址
 * 	  mbcode - 会员代码
 *	  id - 页面输出元素ID
 *    typ - 1 前台，2 后台
 *    flag   - 1卖家 2买家
 **/
function showmbscoreType(scpath,mbcode,id,typ,flag){
	var docpath = DOC_BASE_PATH+"/images/integral";
	var url = "";
	if(typ == null || typ == undefined || typ == ""){
		typ = "1";
	}
	if(typ == "1"){ // 前台
		url = scpath+"/scp/score/mbscore.do?jsoncallback=?";
	}else if(typ == "2"){ // 后台
		url = scpath+"/scm/score/mbscore.do?jsoncallback=?";
	}
	$.post(url,{"hydm":mbcode,"docpath":docpath,"flag":flag},function (result){
		try{
			var msg = result[0];
			$("#"+id).html(msg);
		}catch(e){
		
		}
	},"json");
}

/**
 * 将数字转为货币格式  xxx,xxx.xx
 * path:
 *    str - 数字（字符串）
 * 	  num - 保留的小数位>0
 **/
		function convert(str,num)
		{
		   str = str+"";
		   var pp=0;
		   var dd=0;
		   if(str.indexOf(".")>0){
			   	dd=str.indexOf(".",1)
			   	if(str.length-(num+1)>dd){
			   		var end=str.substring(dd+(num+1),dd+(num+2));
			   		var strend=str.substring(dd+num,dd+(num+1));
			   		str=str.substring(0,dd+num);
			   		if(end>4)
			   			strend=(parseInt(strend)+1);
			   		if(strend==10){
			   			for(var i=0;i<num;i++){
			   				strend = strend/10;
			   			}
			   			str=(parseFloat(str)+strend)+""
			   		}else
			   			str=str+strend;
			   	}else if(str.length-(num+1)<dd){
			   		var n=(num+dd+1)-str.length;
			   		for(var i=0;i<n;i++){
			   			str += "0";
			   		}
			   	}
		   }else{
		   		str = str + ".";
		   		for(var i=0;i<num;i++){
		   			str += "0";
		   		}
		   }
		   if(str.indexOf(",")>0){
		      pp=str.indexOf(",")
		   }else if(str.indexOf(".")>0){
		      pp=str.indexOf(".",1)
		   }else{
		      pp=str.length;
		   }
		   pp=pp-3;
		   if(pp<=0)
		   		return str;
		   var s=str.substring(0,pp);
		   var e=str.substring(pp,str.length);
		   var str1=s+","+e;
		   return convert(str1,num);
		}
/**在onkeyup事件中使用，自动控制textarea的最大长度**/
	function DjCheckMaxlength(oInObj) 
	{ 
		var iMaxLen = parseInt(oInObj.getAttribute('maxlength')); 
		var iCurLen = oInObj.value.length; 
		
		if ( oInObj.getAttribute && iCurLen > iMaxLen ) 
		{ 
			oInObj.value = oInObj.value.substring(0, iMaxLen); 
		} 
	}
/**
 * 按指定字符数截取字符串，超出部分用省略号代替
 * path:
 *    str - 传入截取字符
 * 	  num - 指定字符数,中文约算1.5个字符
 **/
function getBz(str,num) {
	     var len = str.length;
	     var reLen = 0;
	     var bz="";
	     for (var i = 0; i < len; i++) {        
	        if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126) {
	            reLen += 1.5;
	            if(reLen<=num){
	            	bz += str.charAt(i);
	            }else{
	            	bz +="...";
	            	return bz;
	            }
	         } else {
	             reLen++;
	             if(reLen<=num){
	            	bz += str.charAt(i);
	             }else{
	            	bz +="...";
	            	return bz;
	             }
	         }
	     }
	     return bz;    
	} 
	
	/**
	* 加入收藏
	*/
	function AddFavorite(sURL, sTitle) {
	
		try {
			window.external.addFavorite(sURL, sTitle);
		}
		catch (e) {
			try {
				window.sidebar.addPanel(sTitle, sURL, "");
			}
			catch (e) {
				//alert("加入收藏失败，请使用Ctrl+D进行添加");
			}
		}
	}


	/**
	* 设为首页
	*/
	function SetHome(obj, vrl) {
		try {
			obj.style.behavior = 'url(#default#homepage)';
			obj.setHomePage(vrl);
		}
		catch (e) {
			if (window.netscape) {
				try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				}
				catch (e) {
					alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
				}
				var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
				prefs.setCharPref('browser.startup.homepage', vrl);
			}
		}
	}
	function chg_tit(n)
	{
		var aA=document.getElementById("search_tit").getElementsByTagName('span');
		var aAction=new Array('/shangcheng/shopHangList.do','/xianhuo/index.do','/xianhuo/index.do','/xianhuo/index.do');
		for(var i=0,j=aA.length;i<j;i++)
		{
			aA[i].className='';
		}
		aA[n].className='on';
		document.getElementById("actionUrl").value=aAction[n];
		document.getElementById("snum").value=n;
		var s0='请按商品品牌、商品型号、货物所在地来搜索';
		var s1='请按商品品牌、商品型号、货物所在地来搜索';
		var s2='请输入牌号名,如：HI-121H';
		var s3='请输入牌号名,如：t30s';
		if(n==1)
		{
			if(document.getElementById("flag").value==s0||document.getElementById("flag").value==s2||document.getElementById("flag").value==s3)
			{
				document.getElementById("flag").value=s1;
			}
		}
		if(n==0)
		{	
			if(document.getElementById("flag").value==s1||document.getElementById("flag").value==s2||document.getElementById("flag").value==s3)
			{
				document.getElementById("flag").value=s0;
			}
		}
		if(n==2)
		{	
			if(document.getElementById("flag").value==s1||document.getElementById("flag").value==s0||document.getElementById("flag").value==s3)
			{
				document.getElementById("flag").value=s2;
			}
		}
		if(n==3)
		{
			if(document.getElementById("flag").value==s1||document.getElementById("flag").value==s2||document.getElementById("flag").value==s0)
			{
				document.getElementById("flag").value=s3;
			}
		}
	 }
	 
	 function search_onfocus(obj)
	 {
	 	var t_sStr='请按商品品牌、商品型号、货物所在地来搜索';
		var t_sStr1='请按商品品牌、商品型号、货物所在地来搜索';
		var t_sStr2='请输入牌号名,如：HI-121H';
		var t_sStr3='请输入牌号名,如：t30s';
	 	if(obj.value==t_sStr||obj.value==t_sStr1||obj.value==t_sStr2||obj.value==t_sStr3)
		{
			obj.value='';
			obj.style.color='#000';
		}
	 }
	 
	 function search_onblur(obj)
	 {
	 	var t_sStr='请按商品品牌、商品型号、货物所在地来搜索';
		var t_sStr1='请按商品品牌、商品型号、货物所在地来搜索';
		var t_sStr2='请输入牌号名,如：HI-121H';
		var t_sStr3='请输入牌号名,如：t30s';
	 	if(obj.value=='')
		{
			if(document.getElementById("snum").value == '0')
			{
				obj.value=t_sStr;
			}
			if(document.getElementById("snum").value == '1')
			{
				obj.value=t_sStr1;
			}
			if(document.getElementById("snum").value == '2')
			{
				obj.value=t_sStr2;
			}
			if(document.getElementById("snum").value == '3')
			{
				obj.value=t_sStr3;
			}
			obj.style.color='#BABABA';
		}
	 }
		
	 function checkUrl(url){
	     var match= /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/
	     if (match.test(url)){
	         return true;
	     }else{
	         gAlert("不合法的网址，请重新输入");
	         return false;
	     }
	}
	 
/**
 * 显示商铺资源
 * path:
 *    ecpath - 塑料交易地址
 * 	  hydm - 会员代码
 *	  id - 页面输出元素ID
 **/
function showShopSource(ecpath,hydm,pageSize,id){
	$.post(ecpath+"/exp/hangsource/buy/picksource/getShopSourceList.do?jsoncallback=?",{"hydm":hydm,"pageSize":pageSize},function (data){
		try{
			var shopSource = $("#"+id);
			shopSource.empty();
			if (null==data||!data) return;
			var list = data[0].result;
			for (var i=0;i<list.length;i++){
				var html = "<p>"
				html += "<span>";
				html += list[i].price00; 
				html += "</span>";
				html += list[i].pm;
				html += "/";
				html += list[i].cz;
				html += "/";
				html += list[i].sourceExt.wzstr00;
				html += "/";
				html += list[i].sourceExt.wzstr01;
				html += "/";
				html += list[i].cd;
				html += "</p>";
				shopSource.append(html);
			}
		}catch(e){
		
		}
	},"json");
}

/**
check文件后缀类型
**/
function checkPicType(fileValue)
 {
        var flag = false;
    	var gs = ["bmp","png","gif","jpeg","jpg","BMP","PNG","GIF","JPEG","JPG"];
		var values=fileValue.split(".");
		for(var j = 0;j < gs.length; j++)
		{
			if(values[values.length-1] == gs[j])
			{
				flag = true;
				break;
			}	
		}
		if(!flag)
		{
			gAlert("图片格式不正确,限定bmp、png、gif、jpg、jpeg格式的图片");
			return false;
		}
       return true;
 }
 
 //判断数字是否符合格式
//value	: 数值
//name	: 数值名称
//xsws	: 小数点位数
//minvalue : 最小值
//maxvalue : 最大值
//isallnull:是否允许为空 true - 可以为空  false - 不可为空，默认允许为空
//调用说明：
//checkNumberFormat(value,name) -- 判断是否是数字
//checkNumberFormat(value,name,isallnull) -- 判断是否是数字，并且该数字不允许空
//checkNumberFormat(value,name,isallnull,xsws) -- 判断是否是数字，并且该数字不允许空，并且小数位必须在xsws内
//checkNumberFormat(value,name,isallnull,xsws,minvalue) -- 判断是否是数字，并且该数字不允许空，并且小数位必须在xsws内，并且必须大于minvalue
//checkNumberFormat(value,name,isallnull,xsws,minvalue,maxvalue) -- 判断是否是数字，并且该数字不允许空，并且小数位必须在xsws内，并且必须大于minvalue，并且必须小于maxvalue
//checkNumberFormat(value,name,isallnull,xsws,minvalue,maxvalue,canmin) -- 判断是否是数字，并且该数字不允许空，并且小数位必须在xsws内，并且必须大于minvalue，并且必须小于maxvalue canmin 允许为最小值
//checkNumberFormat(value,name,isallnull,xsws,minvalue,maxvalue,canmin,canmax) -- canmax 允许为最大值（如果设为true, 最大值设为100 则100是允许的，只有大于100了才提示）
function checkNumberFormat(_value,_name,isallnull,xsws,minvalue,maxvalue, canmin, canmax){	
   	//如果传进来的数值是空的，则判断是否允许为空
   	if (""==_value||undefined==_value ){
   		if (isallnull!=undefined&&isallnull)return true;
   		if (undefined==isallnull)return true;
   		gAlert("请输入"+_name);
   		return false;
   	}else{
        if (gScript.trim(_value)=="" || gScript.trim(_value).length<_value.length){
          gAlert(_name+"输入有误不能包含空格，请重新输入");
          return false;
        }
    }
   	
	//判断是否数字
	if (isNaN(_value)){
		gAlert(_name + "请输入数字！");
		return false;
	}
	
	if(undefined!=canmin && canmin) {
		if(undefined!=minvalue&&parseFloat(_value) < parseFloat(minvalue)){
			gAlert(_name+"必须大于等于"+minvalue+"！");
			return false;
		}
	} else {
		if(undefined!=minvalue&&parseFloat(_value) <= parseFloat(minvalue)){
			gAlert(_name+"必须大于"+minvalue+"！");
			return false;
		}
	}
	
	if(undefined!=canmax && canmax) {
		if(undefined!=maxvalue&&parseFloat(_value) > parseFloat(maxvalue)){
			gAlert(_name+"必须小于等于"+maxvalue+"！");
			return false;
		}
	} else {
		if(undefined!=maxvalue&&parseFloat(_value) >= parseFloat(maxvalue)){
			gAlert(_name+"必须小于"+maxvalue+"！");
			return false;
		}
	}
	
	var mm = "^(0|[-|+]?[0-9]*[1-9][0-9]*)$";
	if (undefined!=xsws){
		if (xsws>0){
			mm = "^(0|[-|+]?[0-9]+(.[0-9]{0,"+xsws+"})?)$";
		}
		
		var res = _value.match(mm);
	 	
		
	 	if (null == res)
	 	{
	 		if (xsws > 0){
	 			gAlert(_name + "最多只能保留" + xsws + "位小数！");
	 		}else{
	 			gAlert(_name+"必须是整数！");
	 		}
	 		return false;
	 	}
	}
	return true;
}


function checkSpecial(){
	var obj = $('.checkSpecial');
	for(var i=0;i<obj.length;i++){
		if(checkIllegalChar(obj[i].value)){
			alert('检索项包含非法字符！');
			return false;
		}
	}
	return true;
}

/*wxd20141208---检测是否含有非法字符*/
function checkSpecial(mes){
	var obj = $('.checkSpecial');
	for(var i=0;i<obj.length;i++){
		if(checkIllegalChar(obj[i].value)){
			if(mes){
				gAlertErr(mes);
			}else{
				gAlertErr('检索项包含非法字符！');
			}
			return false;
		}
	}
	return true;
}
/**
 * @author wxd
 * date 2014/12/9 11:02:00
 * @param {} mes 提示信息
 * @param {} dosomething 如果type=submit则为表单id，反之为具体操作
 * @param {} title 提示框标题
 * @param {} type 操作类型
 */
function gConfirm(mes,dosomething,title,type){
	//确认操作对象
	var yes = "";
	//如果是提交表单，反之执行其他操作
	if(type=="submit"){
		//确认回调函数
		yes = function(){
			//表单提交
			$("#"+dosomething).submit();
			//关闭
			layer_close();
		}
	}else{
		yes = function(){
			//操作
			dosomething();
			if(type != "select"){
				//关闭
				layer_close();
			}
		}
	}
	//取消回调函数
	var no = function(){
		//关闭
		layer_close();
	}
	//调用layer询问确认函数
	layer_confirm(mes,yes,no,title);
}
//JSON转义数据,转义HTML大括号中括号
function escapeStrToHTML(s) {
	s = s.replace(/\&/g, "&amp;");
	s = s.replace(/\</g, "&lt;");
	s = s.replace(/\>/g, "&gt;");
	s = s.replace(/\'/g, "&apos;");
	s = s.replace(/\"/g, "&quot;");
	
	return s;
}
//HTML转义数据
function escapeHtmlToStr(s) {
	s = s.replace("&amp;","&");
	s = s.replace("&lt;","<");
	s = s.replace("&gt;",">");
	s = s.replace("&apos;", "'");
	s = s.replace("&quot;", "\\\"");
	return s;
}

/**
text文本长度验证
id:验证文本ID
spanid:反馈当前文本长度的值
**/
function contextCheck(id, spanid, max) {
	if (checkWebBrowse() == 1) {
		jQuery("#"+id).bind("keyup", function() {
			var len = jQuery(this).val().length;
			if (len > max) {
				jQuery(this).val(jQuery(this).val().substring(0, max));
			} else  {
				jQuery("#"+spanid).html(jQuery(this).val().length+'/'+max+'字');
			}
		});
	} else {
		jQuery("#"+id).bind("keyup", function() {
			var len = jQuery(this).val().length;
			if (len > max) {
				jQuery(this).val(jQuery(this).val().substring(0, max));
			} else  {
				jQuery("#"+spanid).html(jQuery(this).val().length+'/'+max+'字');
			}
		});
	}

}

//将数字转换成三位逗号分隔的样式 
function formatNum(money, flag) { 
 	 	if(/[^0-9\.]/.test(money)) {
 	 		return money; 
 	 	}  
        money = money.replace(/^(\d*)$/,"$1."); 
        if(flag != undefined){
        	money=(money+"000").replace(/(\d*\.\d\d\d)\d*/,"$1");
        }else{
        	money=(money+"00").replace(/(\d*\.\d\d)\d*/,"$1");
        }
        money=money.replace(".",","); 
        var re=/(\d)(\d{3},)/;  
        while(re.test(money)){   
          money=money.replace(re,"$1,$2");  
        }   
        if(flag != undefined){
        	money=money.replace(/,(\d\d\d)$/,".$1");
        }else{
        	money=money.replace(/,(\d\d)$/,".$1"); 
        }
        return money.replace(/^\./,"0.")   
} 

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

/**
* 将小写转大写
*/
function gUpper(obj){
	obj.value = obj.value.toUpperCase();
}
/**
* 将大写转小写
*/
function gLower(obj){
	obj.value = obj.value.toLocaleLowerCase();
}
/**
* 常用代码设置里，判断代码是否是数字
*/
function checkCodesNumber(id,name){
	if (id.substring(0,1)!="#")id="#"+id;
	var value = $(id).val();
	
	if (!gScript.checkIsInput(id,name))return false;
	
	if (isNaN(value)){
    	gAlert(name+'请输入数字');
    	return false;
    }
    
    if(parseFloat(value) < 0){
    	gAlert(name+'必须是大于等于0的整数');
    	return false;
    }
    
    var mm0 = "^[0-9]*[0-9][0-9]*$"
    var res = value.match(mm0);
    
    if (null==res){
    	gAlert(name+'必须是整数！');
    	return false;
    }
    // 将前面多余的0去掉，比如001--->1
    $(id).val(parseInt(value));
    return true;
}