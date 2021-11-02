//1. 引入express
const { request, response } = require('express');
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
app.get('/delay', (request, response) => {
    //设置响应头 响应头名字 * (设置允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');  //这里必须加！！！
    //这里加一个定时器
    // setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    // }, 1000)  //这里调得太大会影响响应
});

//jsonp 服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷atguigu'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    //end不会发特殊响应头，为了方便拼接，我们用模板字符串``
    response.end(`handle(${str})`);
});

//用户检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    //end不会发特殊响应头，为了方便拼接，我们用模板字符串``
    response.end(`handle(${str})`);
});

//jquery-jsonp-server
app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷',
        city: ['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;
    //返回结果
    //end不会发特殊响应头，为了方便拼接，我们用模板字符串``
    response.end(`${cb}(${str})`);
});

//cors-server
app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*"); //加上头信息
    //另外是请求方法
    response.setHeader("Access-Control-Allow-Methods", "*");
    //这样的话，客户端在发送跨域请求时，你是哪个页面都行，头信息可以自定义，请求方法也可以自定义（get、post、put、delete、patch等）
    // response.setHeader('Access-Control-Allow-Origin', "http://127.0.0.1:5500");
    response.send('Hello CORS');
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});