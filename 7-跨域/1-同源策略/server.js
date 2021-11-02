const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    //响应一个页面
    response.sendFile(__dirname + '/index.html'); //这里需要写一个绝对路径
    //不加下划线dirname就是绝对路径，加了就是相对路径
});

//加一个校验规则
app.get('/data', (request, response) => {
    response.send('用户数据');
});

//监听端口
app.listen(9000, () => {
    console.log("服务已经启动...");
});