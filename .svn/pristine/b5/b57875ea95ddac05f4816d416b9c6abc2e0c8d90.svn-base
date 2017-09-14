<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>	
		<link rel="stylesheet" type="text/css" href="http://files.ourebuy.com/webresource/style/cgnc/base.css" />
		<link href="http://files.ourebuy.com/webresource/style/cgnc/cart.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" type="text/css" href="http://files.ourebuy.com/webresource/style/cgnc/tradaccount.css" />
		<link href="http://files.ourebuy.com/webresource/style/cgnc/commerce-base.css" rel="stylesheet"
			type="text/css" />
		<link href="http://files.ourebuy.com/webresource/style/cgnc/commerce-common.css" rel="stylesheet"
			type="text/css" />
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="Cache-Control" content="no-store" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<link rel="icon" href="http://files.ourebuy.com/webresource/images/cngc/favicon.ico" mce_href="http://files.ourebuy.com/webresource/images/cngc/favicon.ico" type="image/x-icon" />
<link href="http://files.ourebuy.com/webresource/style/market/frame.css" rel="stylesheet" type="text/css" />
<link href="http://files.ourebuy.com/webresource/style/market/midder.css" rel="stylesheet" type="text/css" />
<link href="http://files.ourebuy.com/webresource/style/market/model.css" rel="stylesheet" type="text/css" />
<link href="http://files.ourebuy.com/webresource/style/market/right.css" rel="stylesheet" type="text/css" />
<link href="http://files.ourebuy.com/webresource/script/layer/skin/layer.css" type="text/css" rel="stylesheet"/>
<link href="http://files.ourebuy.com/webresource/style/public-style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="http://files.ourebuy.com/webresource/style/cgnc/zb_cssreset.css" />
<link rel="stylesheet" type="text/css" href="http://files.ourebuy.com/webresource/style/cgnc/zb_hyzx.css" />
<link rel="stylesheet" type="text/css" href="http://files.ourebuy.com/webresource/style/cgnc/zb_cggl.css" />
<script src="http://files.ourebuy.com/webresource/script/jquery-1.7.min.js" type="text/javascript"></script>
<script src="http://files.ourebuy.com/webresource/script/global-public.js" type="text/javascript"></script>
<script src="http://files.ourebuy.com/webresource/script/gScript.js" type="text/javascript"></script>
<script src="http://files.ourebuy.com/webresource/script/layer/layer.js" type="text/javascript"></script>
<script src="http://files.ourebuy.com/webresource/script/Map.js" type="text/javascript"></script>
<script src="http://files.ourebuy.com/webresource/script/gSelect.js" type="text/javascript"></script>
<script type="text/javascript">	
	var DOC_BASE_PATH = "http://files.ourebuy.com/webresource";
	var ROOT_PATH = "/arplatform";
	$(function(){
		//set document title
		var title = $.trim(window.document.title);
		if(title && title != ''){
			window.document.title = "" +  window.document.title;
		}else{
			window.document.title = "";
		}
	});
</script>
<script src="/arplatform/_DOMAIN.JS" type="text/javascript"></script><script src="http://files.ourebuy.com/webresource/script/TimerAsk.js" type="text/javascript"></script>
<script src="http://files.ourebuy.com/webresource/script/My97DatePicker/WdatePicker.js" type="text/javascript" ></script>
<script src="http://files.ourebuy.com/webresource/script/json2.js" type="text/javascript" ></script>


<link href="/arplatform/widgets/simpletable/simpletable.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="/arplatform/widgets/simpletable/simpletable.js"></script><title>修改库存</title>
	<link rel="stylesheet" type="text/css"
		href="http://files.ourebuy.com/webresource/style/cgnc/base.css" />
	<link rel="stylesheet" type="text/css"
		href="http://files.ourebuy.com/webresource/style/cgnc/tradaccount.css" />
	<style>
		.set_foinpf{
			float: left !important;
		}
	</style>
	<script>
		$(document).ready(function(){
			$("#submit").click(function(){
				var sl01 = $("#sl01").val();
				if (!checkNumberFormat(sl01+"", "商品库存", false, 0, 0, 1000000000, false, true)) {
					return false;
				}

				var arr = new Array();
				arr = sl01.split(".");
				var result = arr[0];
				
				$(window.parent.document).find("#returnurl").val('returnurl');
				$(window.parent.document).find("#sl01").val(result);
				$(window.parent.document).find("#gpls").val('GP0000012888');
				$(window.parent.document).find("#t").val();
				$(window.parent.document).find("#gform").attr("action", "/arplatform/exp/hangsource/sell/hangadmin/toEditKC.do");
				
				$(window.parent.document).find("#gform").submit();
				
				$(window.parent.document).find("#sl01").val('');
				$(window.parent.document).find("#gpls").val('');
				$(window.parent.document).find("#gform").attr("action", "/arplatform/exp/hangsource/sell/hangadmin/hang.do");
			});
		});
		
		
	</script>
<style type="">
			html,body{background:none;}
			body, button, input, select, textarea, li, dt, dd, div, td, p, span{
				font-family: "Microsoft YaHei" !important;
			}
			.set_form td input{
				line-height: 23px !important;
			}
			.page .current{
				text-decoration: none !important;
			}
			.page a{
				text-decoration: none !important;
			}
			.page a:hover{
				cursor: pointer !important;
			}
			.contract_m table td a{
				text-decoration: none !important;
				color: #28a3c2 !important;
			}
		</style>
	</head>
	<body class="view_body">
		<div id='_smanDisp'	style='width: 145px; position: absolute; display: none; z-index: 4000008; background: #FFFFFF; border: 1px solid #0066FF; font-size: 12px; cursor: default; color: #0033CC;'>
		</div>
		<div>
			<div class="set_form">
		<table width="100%">
			<tr>
				<td height="60" colspan="2"></td>
			</tr>
			<tr>
				<td height="25" width="135" align="left" valign="middle">
					<b style="margin: 10px;">库存设置</b>
				</td>
				<td></td>
			</tr>
			<tr>
				<td height="9" colspan="2"></td>
			</tr>
			<tr>
				<td height="25" width="135" align="right" valign="middle">
					<span>商品库存：</span>
				</td>
				<td>
					<input type="text" class="" id="sl01" name="sl01" value="200" />
				</td>
			</tr>
			<tr>
				<td height="15" colspan="2"></td>
			</tr>
			<tr>
				<td height="25" align="right" valign="middle"></td>
				<td>
					<input class="set_foinpa set_foinpf " id="submit" type="button" style="background: url(../images/tcpic/modit_inp1.png) scroll no-repeat; width: 64px; height: 26px; border: 0; cursor: pointer;" />
					<input class="set_foinpa set_foinpe" onclick="parent.layer_close();" type="button" style="background: url(../images/tcpic/modit_inp2.png) scroll no-repeat; width: 64px; height: 26px; border: 0; cursor: pointer; margin-left: 10px;" />
				</td>
			</tr>
		</table>
	</div>
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
