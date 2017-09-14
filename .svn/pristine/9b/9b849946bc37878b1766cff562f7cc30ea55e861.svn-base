<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>	
<title>保密协议</title>
	<link rel="stylesheet" type="text/css"
		href="http://files.ourebuy.com/webresource/style/cgnc/base.css" />
	<link href="../css/tradaccount.css" rel="stylesheet" type="text/css">
	</head>
	<body class="view_body">

		<div>
			<input type="hidden" id="fphm" name="fphm" value="HT16092200003">
	<div class="pendders_iframe">
		<h2>
				<a style="text-decoration: none;" class="iframetita" href="javascript:;">保密协议</a>
			</h2>
		<div class="fl view_con" id="print_">
		<div style="background-color: #FFFFFF">
			<div class="view_li view_last">
				<div class="preveven_wo">
				<dl class="zb_ddinfocm"><dt style="text-align:center;font-size: 18px;">复印机保密协议</dt><br><dd>甲方：买家0001</dd><dd>乙方：卖家0003</dd><br><dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甲方从乙方购买涉密复印机并进行安装，根据国家有关保密要求，经双方友好协商，达成协议如下：</dd><dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、甲方在委托乙方进行设备安装时，应明确告知乙方工作范围，乙方应确认并履行相关安装手续。 </dd><dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、在设备安装期间，甲方人员全程旁站陪同，监督乙方工作，甲方有权就安装事宜向乙方提问，乙方应做明确的回答，不得回避问题。 </dd><dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、乙方不得将甲方设备或介质中的涉密信息存储到甲方设备以外的地方。如安装过程中需要将涉密信息存储到甲方设备以外的地方，乙方应向甲方说明，由甲方决定数据存储位置。</dd><dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、乙方不得查看，留存甲方数据以及系统相关信息。因乙方原因泄露国家秘密而给国家造成危害和损失的，乙方应承担相应的法律责任。</dd></dl></div>
			</div>
			</div>
		</div>
		<div align="center" class="contract_bottom contrdet">
			<ul>
				<!-- 是否已经确认过 0：未确认 1：乙确认 -->
					<li class="view_lia">
					<a style="text-decoration:none;" href="javascript:;" onclick="doPrint();">打印</a>
				</li>
				<li class="view_lic">
					<a style="text-decoration:none;" href="javascript:;" onclick="parent.layer_close();">关闭</a>
				</li>
			</ul>
		</div>
	</div>
	<!-- 该页面是用来存放打印控件的 -->
	<!-- 
	  仅支持页面打印，不支持套打(如果套打，可以用DIV+CSS做一个套打模板，再用这个打印)
	  
	  对于LODOP控件的下载及其使用方法，详见 http://mtsoftware.v053.gokao.net/download.html
-->
	<object id="LODOP" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width="0" height="0">
		<embed id="LODOP_EM" type="application/x-print-lodop" width="0" height="0">
	</object>
	<script src="http://files.ourebuy.com/script/jquery-1.7.min.js" type="text/javascript"></script>
	<script src="http://files.ourebuy.com/script/LodopFuncs.js" type="text/javascript"></script>
	<script src="http://files.ourebuy.com/script/getDivHtml.js" type="text/javascript"></script>

	<script>
	function doPrint() {
		printDivHTML("打印", 20, 60, 698, 1000, "print_",
				true);
	}
<!--
	/*
	 * 打印DIV(打印div内的html内容)
	 * 需要设置 name-打印任务名称  
	 *		  top-起点y坐标 left-起点x坐标
	 *        width-页面输出宽度 heigth-页面输出高度
	 *        divHtml-要打印的div的ID值
	 *        isView-是否预览
	 */
	function printDivHTML(name,top,left,width,heigth,divHtml,isView){
		var lodop =	CheckIsInstall();
		lodop.PRINT_INIT(name);
		var strBodyStyle = "<div style=\"text-align:center;background-color: #FFFFFF\"><img src=\"http://files.ourebuy.com/images/cngc/zb_logo.jpg\" /></div>";
		var strFormHtml = strBodyStyle + jQuery("#"+divHtml).getDivHtml();
		lodop.ADD_PRINT_HTM(top,left,width,heigth,strFormHtml);
		if(isView)
			lodop.PREVIEW();
		else
		    lodop.PRINT();
	}
	/*
	 * 检查打印控件是否可用
	 */
	function CheckIsInstall() {	
		return getLodop(document.getElementById('LODOP'),document.getElementById('LODOP_EM'));
	}
-->
</script>
</div>
		<script>
		$(function() {
			$("form").attr("autocomplete", "off");
			$("input[type='text']").attr("autocomplete", "off");
			if($("input:visible").length > 0) {
				$("input:visible").eq(0).focus();
			}
		});
		</script>
	

</body>
</html>
