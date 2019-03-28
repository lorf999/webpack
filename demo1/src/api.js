
var a=2;
var b=3;
//只有设置了module才会暴露在外面，而其他如a,吧，不会暴露
module.exports=function(){
	 return a + b;
}
