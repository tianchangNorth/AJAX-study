//引入express
const express = require('express');

//创建应用对象
const app = express();

app.get('/delay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send()
    }, 3000);
});
app.listen(8080,()=>{
    console.log("服务已经启动，8080端口监听中......");
})