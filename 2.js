window.onload=init;

function init(){
 var div3=document.getElementById("div3");
 var imgs=div3.getElementsByTagName("img");

 imgs[0].onmouseover=function() {
        move(0);
 };
imgs[1].onmouseover=function (){
        move(-500);
 };
imgs[2].onmouseover=function() {
        move(-1000);
 };
 imgs[3].onmouseover=function (){
        move(-1500);
 };
}

var step=25;
var time=null;
function move(endx){
window.clearTimeout(time);
var div2=document.getElementById("div2");
var x=parseInt(div2.style.left);

if(x>endx){
	//x=x-step;
	x=x-Math.ceil(Math.abs(x-endx)/10);
}

if(x<endx){
	//x=x+step;
		x=x+Math.ceil(Math.abs(x-endx)/10);
}
div2.style.left=x+"px";
time=window.setTimeout("move("+endx+")",20);

}
