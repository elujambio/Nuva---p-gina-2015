
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var $canvas=$("#canvas");
var canvasOffset=$canvas.offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
var scrollX=$canvas.scrollLeft();
var scrollY=$canvas.scrollTop();

var cw=canvas.width;
var ch=canvas.height;
var cx=50;
var cy=50;
var radius=35;
var PI2=Math.PI*2;

var img=new Image();
img.onload=function(){
    requestAnimationFrame(animate);
};
img.src=document.getElementById('source').src;


function draw(){
    ctx.clearRect(0,0,cw,ch);
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx,cy,radius,0,PI2);
    ctx.closePath();
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(img,0,0);
    ctx.restore();
}

function animate(time){
    if(cx-radius>cw || cy-radius>ch){return;}
    requestAnimationFrame(animate);
    cx+=0.2;
    cy+=0.2;
    draw();
}

function initialize() {
	var h = window.innerHeight;
	var w = window.innerWidth;

	document.getElementById('one').style.height = h + 'px';
	document.getElementById('content').style.top = h/2 -150 + 'px';
	//document.getElementById('content').style.left= w/3  + 'px';


	document.getElementById('two').style.height = h+200 + 'px';
	document.getElementById('two-one').style.height = h -100 + 'px';
	document.getElementById('two-two').style.height = h -100+ 'px';
	document.getElementById('two-one').style.width = w/2 -100 + 'px';
	document.getElementById('two-two').style.width = w/2 -100+ 'px';


	document.getElementById('three').style.height = h +200 + 'px';
	document.getElementById('three-one').style.height = h -100 + 'px';
	document.getElementById('three-two').style.height = h -100+ 'px';
	document.getElementById('three-one').style.width = w/2 -100 + 'px';
	document.getElementById('three-two').style.width = w/2 -100+ 'px';
	

	document.getElementById('four').style.height = h  + 'px';
	document.getElementById('four-one').style.height = h  + 'px';
	document.getElementById('four-two').style.height = h -100+ 'px';
	document.getElementById('four-one').style.width = w/2  + 'px';
	document.getElementById('four-two').style.width = w/2 -100+ 'px';

	document.getElementById('five').style.height = h +200 + 'px';
	document.getElementById('five-one').style.height = h -100 + 'px';
	document.getElementById('five-two').style.height = h -100+ 'px';
	document.getElementById('five-one').style.width = w/2 -100 + 'px';
	document.getElementById('five-two').style.width = w/2 -100+ 'px';


	document.getElementById('six').style.height = h +200 + 'px';
	document.getElementById('six-one').style.height = h -100 + 'px';
	document.getElementById('six-two').style.height = h -100+ 'px';
	document.getElementById('six-one').style.width = w/2 -100 + 'px';
	document.getElementById('six-two').style.width = w/2 -100+ 'px';

	document.getElementById('seven').style.height = h  + 'px';
	
	
	
	
	
	
}

