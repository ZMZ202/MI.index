var inp = document.querySelector(".topNav>input");
var spn = document.querySelector(".topNav>span");
inp.onmouseover = function() {
	spn.style.border = "1px solid #B0B0B0"
};
inp.onmouseout = function() {
	spn.style.border = "1px solid #eee"
};

//轮播图部分
var jpgs = ["img/bigimg1.jpg", "img/bigimg2.jpg", "img/bigimg3.jpg", "img/bigimg4.jpg", "img/bigimg5.jpg", "img/bigimg6.jpg", "img/bigimg7.jpg"];
var dd = $("<div></div>");
dd.css({
	width: "1226px",
	height: "460px",
	//	background: "lightblue",
	position: "absolute",
	top: 0,
	right: 0,
	"z-index": -10
});
$(".imgs").append(dd);
var fg = 0;
dd.css("background", "url(" + jpgs[0] + ")");
$(".rain>button").eq(0).css("background", "#333");

function play() {
	fg++;
	if(fg > jpgs.length - 1) {
		fg = 0
	}
	dd.fadeOut(1000, function() {
		dd.css({
			"background": "url(" + jpgs[fg] + ")"
		})
		dd.fadeIn();
	});
	$(".rain>button").css("background", "#B0B0B0")
	$(".rain>button").eq(fg).css("background", "#333")
}
var timer = setInterval(play, 3000);
$(".imgs").mouseover(function() {
	clearInterval(timer);
});

function next1() {
	fg++;
	if(fg > jpgs.length - 1) {
		fg = 0
	}
	dd.css({
		"background": "url(" + jpgs[fg] + ")"
	})
	$(".rain>button").css("background", "#B0B0B0")
	$(".rain>button").eq(fg).css("background", "#333")
}

function prev1() {
	fg--;
	if(fg < 0) {
		fg = jpgs.length - 1
	}
	dd.css({
		"background": "url(" + jpgs[fg] + ")"
	})
	$(".rain>button").css("background", "#EEEEEE")
	$(".rain>button").eq(fg).css("background", "#333")
}
$("#gt").click(next1);
$("#lt").click(prev1);
//轮播图部分结束

//明星单品开始
var i=0;
function starImg(){
	i++;
	if(i>1){
		i=0
	}
	$(".star>.starbtm>.div2").animate({"left":(0-1226*i)},1000)
	$(".star>.starbtm>.div1>button>span").css("border-color","#EEEEEE")
	$(".star>.starbtm>.div1 .jiantou").eq(i).css("border-color","#B0B0B0")
}
var time2=setInterval(starImg,3000)
$(".star>.starbtm").mouseover(function(){
	clearInterval(time2)
})
//$(".star>.starbtm").mouseout(function(){
//	setInterval(starImg,3000);
//})
$(".star>.starbtm>.div1>button").eq(1).click(function(){
	if(i<1){
		i++;		
	$(".star>.starbtm>.div2").animate({"left":(0-1226*i)},500)
	}
	if(i>1){
		$(this).attr("disabled","disabled")
	}
})
$(".star>.starbtm>.div1>button").eq(0).click(function(){
	if(i==1){
		i--;
	$(".star>.starbtm>.div2").animate({"left":(0-1226*i)},500)
	}
	if(i<0){
		$(this).attr("disabled","disabled")
	}
})
//明星单品结束

//为你推荐开始
var j=0
function next2(){
	j++;
	if(j<4){		
	$(".main2>div>.div2").animate({"left":(0-1226*j)},1000)
	}
	if(j>4){
      $(this).attr("disabled","disabled")
	}
}
function prev2(){
	if(j<=4&j>0){
		j--;
		$(".main2>div>.div2").animate({"left":(0-1226*j)},1000)
//		$(this).attr("disabled","disabled")
	}
	if(j<0){
		$(this).attr("disabled","disabled")
	}
}
$(".main2>div>.div1>button").eq(0).click(prev2);
$(".main2>div>.div1>button").eq(1).click(next2);

//内容部分开始
function next3(){
	j++;
	if(j<3){		
	$(".main4>div>.div2>.lunboDiv1>.imgsDiv").animate({"left":(0-296*j)},1000)
	}
	if(j>2){
      $(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv1>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv1>.rain3").eq(j).css("background", "#FF6700")
}
function prev3(){
	if(j<=3&j>0){
		j--;
		$(".main4>div>.div2>.lunboDiv1>.imgsDiv").animate({"left":(0-296*j)},1000)
//		$(this).attr("disabled","disabled")
	}
	if(j<0){
		$(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv1>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv1>.rain3").eq(j).css("background", "#FF6700")
}
$(".main4>div>.div2>.lunboDiv1>button").eq(0).click(prev3);
$(".main4>div>.div2>.lunboDiv1>button").eq(1).click(next3);

function next4(){
	j++;
	if(j<4){		
	$(".main4>div>.div2>.lunboDiv2>.imgsDiv").animate({"left":(0-296*j)},1000)
	}
	if(j>3){
      $(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv2>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv2>.rain3").eq(j).css("background", "#FF6700")
}
function prev4(){
	if(j<=4&j>0){
		j--;
		$(".main4>div>.div2>.lunboDiv2>.imgsDiv").animate({"left":(0-296*j)},1000)
//		$(this).attr("disabled","disabled")
	}
	if(j<0){
		$(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv2>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv2>.rain3").eq(j).css("background", "#FF6700")
}
$(".main4>div>.div2>.lunboDiv2>button").eq(0).click(prev4);
$(".main4>div>.div2>.lunboDiv2>button").eq(1).click(next4);

function next5(){
	j++;
	if(j<4){		
	$(".main4>div>.div2>.lunboDiv3>.imgsDiv").animate({"left":(0-296*j)},1000)
	}
	if(j>3){
      $(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv3>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv3>.rain3").eq(j).css("background", "#FF6700")
}
function prev5(){
	if(j<=4&j>0){
		j--;
		$(".main4>div>.div2>.lunboDiv3>.imgsDiv").animate({"left":(0-296*j)},1000)
//		$(this).attr("disabled","disabled")
	}
	if(j<0){
		$(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv3>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv3>.rain3").eq(j).css("background", "#FF6700")
}
$(".main4>div>.div2>.lunboDiv3>button").eq(0).click(prev5);
$(".main4>div>.div2>.lunboDiv3>button").eq(1).click(next5);

function next6(){
	j++;
	if(j<4){		
	$(".main4>div>.div2>.lunboDiv4>.imgsDiv").animate({"left":(0-296*j)},1000)
	}
	if(j>3){
      $(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv4>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv4>.rain3").eq(j).css("background", "#FF6700")
}
function prev6(){
	if(j<=4&j>0){
		j--;
		$(".main4>div>.div2>.lunboDiv4>.imgsDiv").animate({"left":(0-296*j)},1000)
//		$(this).attr("disabled","disabled")
	}
	if(j<0){
		$(this).attr("disabled","disabled")
	}
	$(".main4>div>.div2>.lunboDiv4>.rain3").css("background", "#B0B0B0")
	$(".main4>div>.div2>.lunboDiv4>.rain3").eq(j).css("background", "#FF6700")
}
$(".main4>div>.div2>.lunboDiv4>button").eq(0).click(prev6);
$(".main4>div>.div2>.lunboDiv4>button").eq(1).click(next6);
//内容部分结束
