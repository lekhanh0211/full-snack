import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRouter from './router/web';
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);

let port = process.env.PORT || 9002;
//nếu port bằng undefine tức là chưa đk khai báo trong file .env thì port sẽ được gán bằng 9002

app.listen(port, () => {
    //callback
    console.log("Backend NodeJs is running on the port : " + port);
})