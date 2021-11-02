//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    //设置响应体
    response.send('HELLO AJAX -2');
});

//可以接受任意类型的请求(get、push、post、options、delete等http的请求)
app.all('/server', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX POST');
});

//json响应
app.all('/json-server', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //目标：响应一个数据
    const data = {
        name: 'atguigu'
    }
    //对字符串进行转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});

//针对 IE 缓存
app.get('/ie', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    //设置响应体
    response.send('HELLO IE - 5');
});

//延时响应
app.all('/delay', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');  //这里必须加！！！
    //这里加一个定时器
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 1000)  //这里调得太大会影响响应
});

//jQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');  //这里必须加！！！
    const data = { name: '尚硅谷' };
    //这里作一个直接的响应
    // response.send('Hello jQuery AJAX');
    response.send(JSON.stringify(data));
});

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); 
    const data = { name: '尚硅谷' };
    //这里作一个直接的响应
    // response.send('Hello jQuery AJAX');
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); 
    const data = { name: '尚硅谷' };
    //这里作一个直接的响应
    // response.send('Hello jQuery AJAX');
    response.send(JSON.stringify(data));
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});