//引入express
const express = require('express');

//创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/',(request,response)=>{
    //设置响应
    response.send('hello tianchang');
});

//4.端口监听服务启动
app.listen(8080,()=>{
    console.log("服务已经启动，8000端口监听中......");
})