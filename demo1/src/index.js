
//导入api.js文件
var api=require('./api.js');

window.onload=function(){
	var result=api();
	//因为api return a+b=5
	console.log(result);//5
}
//在github 中执行npm run bulid一下就会
//在main.js 生成打包即压缩文件
