//引入express
const express = require('express');

//创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('hello ajax');
});
//延时响应
app.get('/delay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('hello ajax');
    }, 3000);
});

app.post('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('hello ajax post');
});

app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    const data ={
        name:'atguigu'
    };
    // const str = JSON.stringify(data);
    response.send(data);
});

//jquery服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    const data = {name :'tianchang'};
    response.send(JSON.stringify(data));
});

//axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    const data = {name :'tianchang'};
    response.send(JSON.stringify(data));
});

//fectch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    const data = {name :'tianchang'};
    response.send(JSON.stringify(data));
});

//4.端口监听服务启动
app.listen(8080,()=>{
    console.log("服务已经启动，8080端口监听中......");
})

