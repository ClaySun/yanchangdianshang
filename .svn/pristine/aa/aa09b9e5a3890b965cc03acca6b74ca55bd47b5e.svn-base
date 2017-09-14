/*********************************************************************
	File	: global-public.js
	des		: 前后台通用脚本
*********************************************************************/
var gScript = {}
/**
 * 全局变量
 */
gScript.FLAG_DEBUG = false;
gScript.MSG_NET_EXCEPTION = "与服务器通信异常,请检查网络是否通畅,返回内容是否合法!";
gScript.PATH_BASE = window.location.protocol + "//" + window.location.host + "/";// 域名


/** ********************* */

/**
 * 输出调试信息的函数
 */
gScript.debug = function(msg) {
	if (jHolder.FLAG_DEBUG) {
		window.prompt("调试信息", msg);
	}
};
/*
 * 为String类构造trim方法
 */
gScript.trim = function(str) {
	return $.trim(str);
}
/********************************************************
* function	: getMessage
* author	: flotage
* create	: 2012.07.09
* des		: 要求用户输入拒绝理由
********************************************************/
gScript.getMessage = function(rootpath){
	var width = "300";
	var height = "200";
	
	var top = (window.screen.height - height)/2;
	var left = (window.screen.width - width)/2;
	
	var pageUrl = rootpath + "/pages/util/input.jsp";
	var ret = showModalDialog(pageUrl,window,"scrollbars:no;status:no;resizable:no;center:yes;scroll:no;status:no;dialogLeft:"+left+";dialogTop:"+top+";;dialogHeight:"+height+"px;dialogWidth:"+width+"px;unadorne:yes");
	if (undefined == ret){
		ret = window.returnValue;
	}
	if (ret == undefined)return ret;
	if (!ret)return ret;
	return gScript.trim(ret); 
}

/********************************************************
* function	: getMessage
* author	: hanglong
* create	: 2015.01.14
* des		: 要求用户输入拒绝理由(中兵项目使用)
********************************************************/
gScript.getNewMessage = function(rootpath,title){
	var width = "440px";
	var height = "365px";
	
	var pageUrl = rootpath + "/pages/util/inputNew.jsp";
	showDialog(title,pageUrl,width,height);
}

//非IE浏览器时为false 
gScript.ieBrowser = function (){
	var agt=navigator.userAgent.toLowerCase();
	return (agt.indexOf("msie")!=-1 && document.all);
}

gScript.ieVersion = function(){
	var browser=navigator.appName
	var b_version=navigator.appVersion
	var version=b_version.split(";");
	if(browser=="Microsoft Internet Explorer"){
		var trim_Version=version[1].replace(/[ ]/g,"");
		if(trim_Version=="MSIE7.0"){
		    return 7;
		} else if (trim_Version=="MSIE6.0"){
		    return 6;
		} else if (trim_Version=="MSIE8.0"){
			return 8;
		} else if (trim_Version=="MSIE9.0"){
			return 9;
		} else if (trim_Version=="MSIE10.0"){
			return 10;
		}
	}
	return 0; // unkown
}

/********************************************************
* function	: pubSelectPage
* author	: flotage
* create	: 2012.07.09
* des		: 弹出会员选择界面（后台使用）
* url		: 只能填资金平台项目根地址或者基础平台项目根地址
* parm		:
*	curapp		: 当前应用的根路径
* 	rootPath	: 远程应用的根路径
*	method		: 远程应用的方法名
*   params      : 参数
********************************************************/
gScript.pubSelectPage = function(rootPath,method,curapp,params){
	var url = rootPath + "/admin/publicfun/"+method+".do";
	if(params != null){
		var paramStr = ""; // 参数，目前就后台物流商认证时用到
		for(var p in params){
			paramStr += "&" + p + "=";
			paramStr += params[p];
		}
		paramStr = paramStr.substring(1);
		url += "?" + paramStr;
	}
	return gScript.pubUrlSelectPage(url,curapp);
};

/********************************************************
* function	: pubSelectPage
* author	: flotage
* create	: 2012.07.09
* des		: 弹出会员选择界面（前台使用）
* url		: 只能填资金平台项目根地址或者基础平台项目根地址
* parm		:
*	curapp		: 当前应用的根路径
* 	rootPath	: 远程应用的根路径
*	method		: 远程应用的方法名
*   params      : 参数
********************************************************/
gScript.pubMarketSelectPage = function(rootPath,method,curapp,params){
	var url = rootPath + "/market/publicfun/"+method+".do";
	if(params != null){
		var paramStr = ""; // 参数，如直销中心选择会员是用到
		for(var p in params){
			paramStr += "&" + p + "=";
			paramStr += params[p];
		}
		paramStr = paramStr.substring(1);
		url += "?" + paramStr;
	}
	return gScript.pubUrlSelectPage(url,curapp);
};

gScript.pubMarketSelectPageL = function(rootPath,method,curapp,params){
	var url = rootPath + "/exp/product/market/"+method+".do";
	if(params != null){
		var paramStr = ""; // 参数，如直销中心选择会员是用到
		for(var p in params){
			paramStr += "&" + p + "=";
			paramStr += params[p];
		}
		paramStr = paramStr.substring(1);
		url += "?" + paramStr;
	}
	return gScript.pubUrlSelectPage(url,curapp);
};

/********************************************************
* function	: pubSelectPage
* author	: flotage
* create	: 2012.07.09
* des		: 弹出会员选择界面（后台使用）
* url		: 只能填资金平台项目根地址或者基础平台项目根地址
********************************************************/
gScript.pubUrlSelectPage = function(url,curapp){
	url = encodeURI(url);
	
	var width = "550";
	var height = "452";
	
	if (this.ieVersion()==6){
		// 如果是IE6的话
		width = "550";
		height = "480";
	} 
	
	var cmdurl = "";
	if (curapp==undefined||curapp==""){
		curapp = ROOT_PATH;
	}else{
		// 用于解决跨越问题，传值回调者地址
		if(url.indexOf("?")!=-1){
			// 判断url中是否带了参数
			cmdurl="&cmdurl="+curapp+"/pages/util/iframe_command.jsp";
		}else{
			cmdurl="?cmdurl="+curapp+"/pages/util/iframe_command.jsp";
		}
	}
	
	var pageUrl = curapp+"/pages/util/iframe.jsp?&url="+url+cmdurl;
	var ret = showModalDialog(pageUrl,window,"scrollbars:no;status:no;resizable:no;center:yes;scroll:no;status:no;dialogHeight:"+height+"px;dialogWidth:"+width+"px;unadorne:yes");
	// 兼容火狐
	if (undefined == ret){
		ret = window.returnValue;
	}
	if (ret == undefined) {
		return ret;
	}
	if (!ret)return ret;
	for (var i=0;i<ret.length;i++){
		if (typeof ret[i] == "string") {
			ret[i] = gScript.trim(ret[i]);
		}
	}
	return ret; 
};
/********************************************************
* function	: marketSelectPage
* author	: flotage
* create	: 2012.07.09
* des		: 弹出会员选择界面（前台使用）
* url		: 只能填资金平台项目根地址或者基础平台项目根地址
********************************************************/
gScript.marketSelectPage = function(rootPath,method,title){
	var url = rootPath + "/market/publicfun/"+method+".do";
	var width = "550px";
	var height = "452px";
	
	showDialog(title,url,width,height);
	
	
	return null;
};

/********************************************************
* function	: pubMarketSelectNewPage
* author	: hanglong
* create	: 2015.01.14
* des		: 弹出会员选择界面（前台使用）
* url		: 只能填资金平台项目根地址或者基础平台项目根地址
* parm		:
* 	rootPath	: 远程应用的根路径
*	method		: 远程应用的方法名
*   title       : 标题
*   params      : 参数
*   width       : dialog宽度
*   height      : dialog高度
********************************************************/
gScript.pubMarketSelectNewPage = function(rootPath,method,title,params,width,height){
	var url = rootPath + "/market/publicfun/"+method+".do";
	if(params != null){
		var paramStr = ""; // 参数，如直销中心选择会员是用到
		for(var p in params){
			paramStr += "&" + p + "=";
			paramStr += params[p];
		}
		paramStr = paramStr.substring(1);
		url += "?" + paramStr;
	}
	if(!width){
		width = "650px";
	}
	if(!height){
		height = "550px";
	}
	
	showDialog(title,url,width,height);
};

/********************************************************
* function	: pubAdminSelectNewPage
* author	: hanglong
* create	: 2015.01.14
* des		: 弹出会员选择界面（后台使用）
* url		: 只能填资金平台项目根地址或者基础平台项目根地址
* parm		:
* 	rootPath	: 远程应用的根路径
*	method		: 远程应用的方法名
*   title       : 标题
*   params      : 参数
*   width       : dialog宽度
*   height      : dialog高度
********************************************************/
gScript.pubAdminSelectNewPage = function(rootPath,method,title,params,width,height){
	var url = rootPath + "/admin/publicfun/"+method+".do";
	if(params != null){
		var paramStr = ""; // 参数，如直销中心选择会员是用到
		for(var p in params){
			paramStr += "&" + p + "=";
			paramStr += params[p];
		}
		paramStr = paramStr.substring(1);
		url += "?" + paramStr;
	}
	if(!width){
		width = "650px";
	}
	if(!height){
		height = "500px";
	}
	
	showDialog(title,url,width,height);
};

// 去左空格;
gScript.trimLeft=function(s) {
	return s.replace(/^\s*/, "");
}
// 去右空格;
gScript.trimRight=function(s) {
	return s.replace(/\s*$/, "");
}
/**
 * 包含一个页面到容器中
 * 
 */
gScript.include = function(elementId, url) {
	$('#' + elementId).html("loading...");
	$('#' + elementId).load(url);
}
/**
 * 修改container中的内容
 */
gScript.update = function(container, url, method, pars) {
	jHolder.ajax(method, url, pars, include);
	function include(res) {
		var oContainer = $("#" + container);
		oContainer.html(res);
	}
}
/**
 * 转换到json对象
 */
gScript.evalToJson = function(str) {
	var json = null;
	if (str == null || str == "") {
		str = "{}";
	}
	json = eval("(" + str + ")");
	return json;
}
/**
 * 当某个标签内容加载完成时调用
 */
gScript.onTagReady = function(sTagId, invokeFunction) {
	sTagId = "#" + sTagId;
	$(sTagId).ready(invokeFunction);
}

/**
 * 获得页面上的元素
 */
gScript.$G = function(id) {
	return document.getElementById(id);
}

/**
 * 获得页面上输入对象的值
 */
gScript.$F = function(id) {
	var oCtrl = jHolder.$G(id);
	if (typeof (oCtrl.value) != "undefined") {
		return oCtrl.value;
	}
}
/**
 * 注册：页面装载时调用函数
 * 
 */
gScript.onReady = function(invokeFunction) {
	$(document).ready(invokeFunction);
}
/**
 * $H 把Json对象转成 Hash 对象 Hash 对象 有 keys 和 values 两个重要的方法
 */
gScript.$H = function(json) {
	var arrKeys = new Array();
	var arrValues = new Array();
	var i = 0;
	$.each(json, function(key, value) {
		arrKeys[i] = key;
		arrValues[i] = value;
		i++;
	})
	return {
		keys : function() {
			return arrKeys;
		},
		values : function() {
			return arrValues;
		},
		get : function(key) {
			for ( var index = 0; index < arrKeys.length; index++) {
				if (key == arrKeys[index]) {
					return arrValues[index];
				} else {
					return "";
				}
			}
		}
	}
}
/**
 * 取URL参数
 */
gScript.queryString = function(pname) {
	var s = unescape(window.location.href);
	var arr = s.match(pname + "=([^&]*)");
	if (arr == null) {
		return null;
	} else {
		return arr[1];
	}
}
/*************************************************
 * function	: checkNumber
 * author	: flotage
 * create	: 2012.07.31
 * des		: 判断数字输入及小数位
 * parm
 * 		id - 输入对象的ID
 *		len - 小数位长度
 *		name - 对象名称（用于提示）
 *      isnull - true - 允许空， false - 不允许空
 ************************************************/
gScript.checkNumber = function (id,len,name,isnull){
	if (id.substring(0,1)!="#")id="#"+id;
	var value = $(id).val();
	if (isnull != undefined && isnull && gScript.isNull(value)) {
		return true;
	}
	if (!gScript.checkIsInput(id,name))return false;
	
	if (isNaN(value)){
    	gAlert(name+'请输入数字');
    	return false;
    }
    if (parseFloat(value)<=0){
    	gAlert(name+'必须是大于0的数字');
    	return false;
    }
    var mm0 = "^[0-9]*[1-9][0-9]*$"
	var mm1 = "^[0-9]+(.[0-9]{0,1})?$"
    var mm2 = "^[0-9]+(.[0-9]{0,2})?$"
    var mm3 = "^[0-9]+(.[0-9]{0,3})?$"
    var res = null;
    if (len==0){
    	res = value.match(mm0);
    }else if (len==1){
    	res = value.match(mm1);
    }else if (len==2){
    	res = value.match(mm2);
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
/*************************************************
 * function	: checkIsInput
 * author	: flotage
 * create	: 2012.07.31
 * des		: 判断值是否输入
 * parm
 * 		id - 输入对象的ID
 *		name - 对象名称（用于提示）
 *      len - 输入了表示需要长度校验
 *		isnull - 是否允许为空 true 允许 false 不允许 
 ************************************************/
gScript.checkIsInput = function (id,name,size,isnull){
	if (id.substring(0,1)!="#")id="#"+id;
	var val = $(id).val();
	if (gScript.isNull(val) && isnull != undefined && isnull) {
		return true;
	}
	if (gScript.isNull(val)){
    	gAlert(name+'必须填写');
    	return false;
    }
    // 没有输入len 表示方法需要结束
    if (size == undefined) {
    	return true;
    }
    // 获取长度
	var len = gScript.getLength(id);
	// 判断长度是否合法
	if (len > size) {
		gAlert(name+"长度不能超过[" + size + "]个字符。");
		return false;
	}
    return true;
}

/*************************************************
 * function	: getLength
 * author	: zhangsiwei
 * create	: 2013.12.23
 * des		: 获取字符串长度
 * parm
 * 		obj - 输入对象的ID 或者直接输入值
 	注：包括空格长度
 ************************************************/
gScript.getLength = function(obj) {
	var id = obj;
	if (id.substring(0,1)!="#")id="#"+id;
	var val = $(id).val();
	if (gScript.isNull(val)) {
		val = obj;
	}
	if (gScript.trim(val)==""){
    	return 0;
    }
    var len = 0;
    // 累计长度
    for (var i=0; i<val.length; i++) {   
		var c = val.charCodeAt(i);   
		//单字节加1   
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {   
			len++;   
		}  else {   
			len+=2;   
		}   
	}
	return len;
}

/*************************************************
 * function	: isNull
 * author	: zhangsiwei
 * create	: 2013.12.05
 * des		: 判断值是否为空 
 * parm     : val - 值
 * return   : null - true  not null - false
 ************************************************/
gScript.isNull = function (val){
	if (val == undefined || val == null || gScript.trim(val) == ""){
    	return true;
    }
    return false;
}

/*************************************************
 * function	: isNotNull
 * author	: zhangsiwei
 * create	: 2013.12.09
 * des		: 判断值是否不为空 
 * parm     : val - 值
 * return   : null - false  not null - true
 ************************************************/
gScript.isNotNull = function (val){
	if (val == undefined || val == null || gScript.trim(val) == ""){
    	return false;
    }
    return true;
}

/*****
* 判断图片类型
*/
gScript.checkImageType = function (id){
	if (id.substring(0,1)!="#")id="#"+id;
    var gs = ["bmp","png","gif","jpeg","jpg","BMP","PNG","GIF","JPEG","JPG"];
	var flag = false;
	var value = $(id).val();
	var values=value.split(".");
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
		gAlert("图片格式不正确,限定bmp、png、gif、jpg、jpeg格式的图片", id);
		return false;
	}
	return true;
}

/*************************************************
 * function	: getPwdRandom
 * author	: ysq
 * create	: 2012.09.19
 * des		: 获得密码随机数, 同步
 * parm
 * 		rootPath
 *		typ - 1 前台， 2 后台
 ************************************************/
gScript.getPwdRandom = function(rootPath,typ){
	var url = "";
	if(typ == "1"){
		url = rootPath + "/market/syscode/publicfun/getPwdRandom.do";
	}else{
		url = rootPath + "/admin/syscode/publicfun/getPwdRandom.do";
	}
	var random = "";
	$.ajax({  
		type : "post",  
		url : url,  
        async : false,  
        dataType: "text",
        success : function(data){
        	random = data;
        }  
	}); 
	return random;
}

/*************************************************
 * function	: getPwdRandom
 * author	: ysq
 * create	: 2012.09.19
 * des		: 将密码加密后再和随机数加密后返回
 * parm
 * 		pwd   密码
 *		rootPath
 *		typ - 1 前台， 2 后台
 ************************************************/
gScript.getPwdMd5 = function(pwd,rootPath,typ){
	var random = gScript.getPwdRandom(rootPath,typ);
	pwd = hex_md5(pwd);
	pwd = hex_md5(pwd + random);
	return pwd;
}

/**
* 判断2个日期的大小
* @parm id1 开始时间输入框的ID
* @parm id2 介绍时间输入框的ID
* @Parm name  对象名称（用于提示）
* @return 
* 		true 
*		false 开始时间大于结束时间
*/
gScript.compareToRq = function (id1,id2,name){
	if (id1.substring(0,1)!="#")id1="#"+id1;
	if (id2.substring(0,1)!="#")id2="#"+id2;
	var value1 = $(id1).val();
	var value2 = $(id2).val();
	
	// 两个日期都不为空的时候才判断
	if(value1 == null || value1 == '' || value1 == 'undefined'){
		return true;
	}
	
	if(value2 == null || value2 == '' || value2 == 'undefined'){
		return true;
	}
	
	if(value1 > value2){
		gAlert(name+'：开始时间不能大于结束时间');
		return false;
	}
    return true;
}

/**
* 判断2个日期的大小
* @parm id1 开始时间输入框的ID
* @parm id2 介绍时间输入框的ID
* @Parm name  对象名称（用于提示）
* @return 
* 		true 
*		false 开始日期大于结束日期
*		日期
*/
gScript.compareToRq3 = function (id1,id2,name){
	if (id1.substring(0,1)!="#")id1="#"+id1;
	if (id2.substring(0,1)!="#")id2="#"+id2;
	var value1 = $(id1).val();
	var value2 = $(id2).val();
	
	// 两个日期都不为空的时候才判断
	if(value1 == null || value1 == '' || value1 == 'undefined'){
		return true;
	}
	
	if(value2 == null || value2 == '' || value2 == 'undefined'){
		return true;
	}
	
	if(value1 > value2){
		gAlert(name+'：开始日期不能大于结束日期');
		return false;
	}
    return true;
}

/**
* 两个数相加
*
*/
gScript.accAdd = function(arg1,arg2){
	arg1=Number(arg1);
	arg2=Number(arg2);
	var r1, r2, m, n;   
    try {   
       r1 = arg1.toString().split(".")[1].length;   
    }catch (e) {   
       r1 = 0;   
    }   
    try {   
        r2 = arg2.toString().split(".")[1].length;   
    }catch (e) {   
        r2 = 0;   
    }   
    m = Math.pow(10, Math.max(r1, r2));   
     //动态控制精度长度   
    n = (r1 >= r2) ? r1 : r2;   
    if(n > 2) {
    	n = 2;
    }
    return ((arg1 * m + arg2 * m) / m).toFixed(n); 
}

/**
* 两个数相减
*
*/
gScript.accSubtr = function(arg1, arg2) { 
	arg1=Number(arg1);
	arg2=Number(arg2);
    var r1, r2, m, n;   
    try {   
        r1 = arg1.toString().split(".")[1].length;   
    }   
    catch (e) {   
        r1 = 0;   
    }   
    try {   
        r2 = arg2.toString().split(".")[1].length;   
   	}   
    catch (e) {   
        r2 = 0;   
    }   
    m = Math.pow(10, Math.max(r1, r2));   
    //动态控制精度长度   
    n = (r1 >= r2) ? r1 : r2;   
    if(n > 2) {
    	n = 2;
    }
    return ((arg1 * m - arg2 * m) / m).toFixed(n);   
}

/**
* 两个数相乘
*
*/
gScript.accMul = function accMul(arg1, arg2) {  
	arg1=Number(arg1);
	arg2=Number(arg2);
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString(); 
    try {   
        m += s1.split(".")[1].length;   
    }catch (e) {
    
    }   
   	try {   
        m += s2.split(".")[1].length;   
    }catch (e) {   
    
    }   
    return (Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)).toFixed(2);   
}  

/**
* 两个数相除
*
*/
gScript.accDiv = function(arg1, arg2) {  
	arg1=Number(arg1);
	arg2=Number(arg2);
    var t1 = 0, t2 = 0, r1, r2;   
    try {   
        t1 = arg1.toString().split(".")[1].length;   
    }   
    catch (e) {   
    }   
    try {   
        t2 = arg2.toString().split(".")[1].length;   
    }   
    catch (e) {   
    }   
    with (Math) {   
        r1 = Number(arg1.toString().replace(".", ""));   
        r2 = Number(arg2.toString().replace(".", ""));   
        return ((r1 / r2) * pow(10, t2 - t1)).toFixed(2);   
    }   
}

// 解决IE7里offsetTop不对的问题
gScript.getTop = function(e){
	var offset=e.offsetTop;
	if(e.offsetParent!=null){
		offset+=gScript.getTop(e.offsetParent);
	}
	return offset;
}

gScript.getLeft = function(e){
	var offset=e.offsetLeft;
	if(e.offsetParent!=null){
		offset+=gScript.getLeft(e.offsetParent);
	}
	return offset;
}

// 初始化高度
gScript.initHeight = function(id){
	var talHeight = document.documentElement.clientHeight;
	var obj = document.getElementById(id);
	if (!obj)return;
	var talTop = gScript.getTop(obj);
	obj.style.height = (talHeight - talTop - 1)+"px"; 
}

// 初始化宽度
gScript.initWidth = function(id){
	var talWidth = document.documentElement.clientWidth;
	var obj = document.getElementById(id);
	if (!obj)return;
	var talLeft = gScript.getLeft(obj);
	obj.style.width = (talWidth - talLeft - 1)+"px"; 
}

/**
* 判断电话号码格式，并给出提示
*/
gScript.checkTel = function(id, name, focusId){
	if (id.substring(0,1)!="#")id="#"+id;
	var value = $(id).val();
	var reg = /^((0\d{2,3})-)(\d{6,8})(-(\d{1,}))?$/
	if(!reg.test($.trim(value))){
		if (undefined == focusId || null == focusId || focusId == ""){
			focusId = id;
		}
		gAlert("您填写的“"+name+"”格式不正确，请重新填写。", focusId);
		return false;
	}
	return true;
}

/**
* 判断手机格式，并给出提示
*/
gScript.checkMobile = function(id, name){
	if (id.substring(0,1)!="#")id="#"+id;
	var value = $(id).val();
	var reg =/^0{0,1}(13[0-9]|15[0-9]|18[0-9])[0-9]{8}$/; 
	if(!reg.test($.trim(value))){
		gAlert("您填写的“"+name+"”格式不正确，请重新填写。", id);
		return false;
	}
	return true;
}

/**
* 邮箱验证
*/
gScript.checkEmail = function(id, name){
	if (id.substring(0,1)!="#")id="#"+id;
	var value = $(id).val();
	//var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	var reg = /^([a-zA-Z0-9_-_\.])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(!reg.test($.trim(value))){
		gAlert("您填写的“"+name+"”格式不正确，请重新填写。", id);
		return false;
	}
	return true;
}

/**
 * 
 *拼装各种字符串
 *@author         杨乔召 2013-08-29
 *@parm str0      源拼接字符串
 *@parm str2      被拼接字符串
 *@Parm character 分隔字符
 *@return 
 **/     
gScript.assembeCharacterSplit = function(str0,str2,character){
      //处理组装源
      if (null == str0 || "" == str0) { 
          str0 = "";  
      } 
      //组装的数据信息        
      if (null == str2 || "" == str2) {
        str0 = str0;
	  } else {
        if( "" == str0){
          str0 =  str2;
        }else{
          str0 += character + str2;
        }
	 }
   //返回组装信息
   return str0;
} 

/**
* 判断2个日期的大小
* @parm id1 开始时间输入框的ID
* @parm id2 介绍时间输入框的ID
* @Parm name  对象名称（用于提示）
* @return 
* true 
* false 开始日期大于结束日期
*/
/**
* 判断2个日期的大小
* @parm id1 开始时间输入框的ID
* @parm id2 介绍时间输入框的ID
* @Parm name  对象名称（用于提示）
* @Parm name2  对象名称（用于提示）
* @Parm type1   1:'不能小于' 0:'必须大于'
* @return 
* true 
* false 开始日期大于结束日期
*/
gScript.compareToRq2 = function (id1,id2,name,name2,type1){

	if (id1.substring(0,1)!="#")id1="#"+id1;
	if (id2.substring(0,1)!="#")id2="#"+id2;
	var value1 = $(id1).val();
	var value2 = $(id2).val();
	// 两个日期都不为空的时候才判断
	if(value1 == null || value1 == '' || value1 == 'undefined'){
		return true;
	}
	if(value2 == null || value2 == '' || value2 == 'undefined'){
		return true;
	}

    if(type1 == '1'){ 
       if(value1 < value2){
	    gAlert(name+'不能小于'+name2);
	    return false;
	   }
	   
	}else if(type1 == '2'){ 
       if(value1 > value2){
	    gAlert(name+'必须小于等于'+name2);
	    return false;
	   }
	   
	}else if(type1 == '3'){ 
       if(value1 <= value2){
	    gAlert(name+'必须大于'+name2);
	    return false;
	   }
	   
	}else{
	 if(value1 <= value2){
	   gAlert(name+'必须晚于'+name2);
	   return false;
	 }
	}
    return true;
}



//**********************网站倒计时插件***************************
//作者：JSMuYan(2013-02-21)
//版本：1.0

//说明：倒计时插件

//参数设置：
//tPart                     倒计时显示位置
//sDate                     开始时间  字符串形式 且为yyyy/MM/dd HH:mm:ss 格式
//eDate                     结束时间  字符串形式 且为yyyy/MM/dd HH:mm:ss 格式
//task                      名称 用于显示“**已结束”
//href                      结束后是否跳转地址
//**********************网站倒计时插件*************************
var _sh;
function timeCountdown(tPart,sDate,eDate,task, href){
	var nowDate = new Date(sDate);//开始时间
	var endDate = new Date(eDate);//截止时间

	function _fresh(){
		nowDate.setSeconds(nowDate.getSeconds()+1);
		var totalS  = parseInt((endDate.getTime() - nowDate.getTime()) / 1000);//总秒数
		_day = parseInt(totalS / 3600 / 24);
		_hour = parseInt((totalS / 3600) % 24);
		_minute = parseInt((totalS / 60) % 60);
		_second = parseInt(totalS % 60);
		if (_day <= 9) {
			_day = "0"+_day;
		}
		if (_hour <= 9) {
			_hour = "0"+_hour;
		}
		if (_minute <= 9) {
			_minute = "0"+_minute;
		}
		if (_second <= 9) {
			_second = "0"+_second;
		}
		timeCountdownText(totalS,_day,_hour,_minute,_second,tPart,task);
	}
	_fresh();
	_sh = setInterval(_fresh,990);
}
// add 倒计时插件显示方法，根据不同的页面去复写这个方法就可以了。 by zhangsiwei on 20130524
// 倒计时还是要调用 timeCountdown(tPart,sDate,eDate,task) 方法
function timeCountdownText(_totalS,_day,_hour,_minute,_second,tPart,task){
	var result=tPart.split(",");
    jQuery("#"+result[0]).html(_day);
    jQuery("#"+result[1]).html(_hour);
    jQuery("#"+result[2]).html(_minute);
    jQuery("#"+result[3]).html(_second);
	//jQuery("#"+tPart).html("" +task+"结束倒计时:"+ _day +"天" + _hour + "小时" + _minute + "分" + _second + "秒");
	if( _totalS <= 0){
		clearInterval(_sh);
		window.location.href = window.location.href;
		//jQuery("#"+result[4]).html("该"+task+"已结束");
	}
}

function timeCountdown1(tPart,sDate,eDate,task,root_path,boutid){
	var nowDate = new Date(sDate);//开始时间
	var endDate = new Date(eDate);//截止时间

	function _fresh(){
		nowDate.setSeconds(nowDate.getSeconds()+1);
		var totalS  = parseInt((endDate.getTime() - nowDate.getTime()) / 1000);//总秒数
		_day = parseInt(totalS / 3600 / 24);
		_hour = parseInt((totalS / 3600) % 24);
		_minute = parseInt((totalS / 60) % 60);
		_second = parseInt(totalS % 60);
		if (_day <= 9) {
			_day = "0"+_day;
		}
		if (_hour <= 9) {
			_hour = "0"+_hour;
		}
		if (_minute <= 9) {
			_minute = "0"+_minute;
		}
		if (_second <= 9) {
			_second = "0"+_second;
		}
		timeCountdownText1(totalS,_day,_hour,_minute,_second,tPart,task,root_path,boutid);
	}
	_fresh();
	_sh = setInterval(_fresh,1000);
}
// add 倒计时插件显示方法，根据不同的页面去复写这个方法就可以了。
// 倒计时还是要调用 timeCountdown(tPart,sDate,eDate,task) 方法
function timeCountdownText1(_totalS,_day,_hour,_minute,_second,tPart,task,root_path,boutid){
	var result=tPart.split(",");
    jQuery("#"+result[0]).html(_day);
    jQuery("#"+result[1]).html(_hour);
    jQuery("#"+result[2]).html(_minute);
    jQuery("#"+result[3]).html(_second);
	if( _totalS <= 0){
		clearInterval(_sh);
		//Ajax更新状态
		$.post(root_path+"/exp/auction/autofreshstatus/autoStartAuctionAjax.do",{"boutid":boutid},function(result){
			if(result.mes=="success"){
				window.location.href = window.location.href;
			}
		},"json");
	}
}

/**
* 格式化数字，把数字按3个一组用逗号分开，四舍五入为n位
* s	 --需要格式化的数字
* n  --小数的后保留的位数，范围是[0,20]	
*/
gScript.formatNumber = function(s, n){
	if(n < 0 || n > 20){
		alert("小数点位数不合法");
		return;
	}
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse();
   	r = s.split(".")[1];
   	t = "";
   	for(i = 0; i < l.length; i ++ ){
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
   	}
   	if(n == 0){
   		return t.split("").reverse().join("");
   	}
	return t.split("").reverse().join("") + "." + r;
}