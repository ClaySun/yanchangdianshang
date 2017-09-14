//图片滚动列表 mengjia 070816
var Speed = 1; //速度(毫秒)
var Space = 5; //每次移动(px)
var PageWidth = 183; //翻页宽度
var fill = 0; //整体移位
var MoveLock = false;
var MoveTimeObj;
var Comp = 0;
var AutoPlayObj = null;
/*GetObj('ISL_Cont').scrollLeft = fill;
GetObj("ISL_Cont").onmouseover = function(){clearInterval(AutoPlayObj);}
GetObj("ISL_Cont").onmouseout = function(){AutoPlay();}
*///AutoPlay();
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay(){ //自动滚动
// clearInterval(AutoPlayObj);
// AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();',3000); //间隔时间
}
function ISL_GoUp(){ //上翻开始
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 MoveTimeObj = setInterval('ISL_ScrUp();',Speed);
}
function ISL_StopUp(){ //上翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0){
  Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrUp(){ //上翻动作
 if(GetObj('ISL_Cont').scrollLeft <= 0){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth}
 GetObj('ISL_Cont').scrollLeft -= Space ;
}
function ISL_GoDown(){ //下翻
 clearInterval(MoveTimeObj);
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 ISL_ScrDown();
 MoveTimeObj = setInterval('ISL_ScrDown()',Speed);
}
function ISL_StopDown(){ //下翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0 ){
  Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrDown(){ //下翻动作
 if(GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth;}
 GetObj('ISL_Cont').scrollLeft += Space ;
}
function CompScr(){
 var num;
 if(Comp == 0){MoveLock = false;return;}
 if(Comp < 0){ //上翻
  if(Comp < -Space){
   Comp += Space;
   num = Space;
  }else{
   num = -Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft -= num;
  setTimeout('CompScr()',Speed);
 }else{ //下翻
  if(Comp > Space){
   Comp -= Space;
   num = Space;
  }else{
   num = Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft += num;
  setTimeout('CompScr()',Speed);
 }
}
/*tab切换*/
function setTab(name,cursel,n,hcla,cla){
	var cla = 'd';
	for(i=1;i<=n;i++)
	{
  		var menu=document.getElementById(name+i);
		menu.className=i==cursel?hcla:cla;


  		var con=document.getElementById("con_"+name+"_"+i);  		
  		con.style.display=i==cursel?"block":"none";
 	}
}
function setTab2(name,cursel,n,hcla,cla){
	for(i=1;i<=n;i++)
	{
  		var menu=document.getElementById(name+i);
  		var con=document.getElementById("con_"+name+"_"+i);
  		con.style.display=i==cursel?"block":"none";
 	}
}
/*设计师内页左右滚动*/

$(document).ready(function(){
	var al = 16;
	var ml = 0;var mc = 0;
	$('.minus').click(function(){
		$('.list2 img').css('margin-left','-130px');
		ml = (ml < al - 4) ? ml + 1 : al - 4;
		mc = ml + 4;
		$('.list2').animate({marginLeft:-ml*130},function(){$('#m'+mc).css('margin-left','0px')});
	})						  
	$('.plus').click(function(){
		$('.list2 img').css('margin-left','-130px');
		ml = (ml > -3) ? ml - 1 : -3;
		mc = ml + 4;
		$('.list2').animate({marginLeft:-ml*130},function(){$('#m'+mc).css('margin-left','0px')});	
	})
	
	$('.list2 img').hover(function(){
		$(this).css('margin-left','0px');		
	},function(){
		$(this).css('margin-left','-130px');						  
		$('#m'+mc).css('margin-left','0px');		
	})
})


