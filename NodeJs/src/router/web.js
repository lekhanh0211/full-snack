import express from "express";
import homeController from '../controller/homeController'
import aboutController from '../controller/aboutController'
import contactController from '../controller/contactController'


let router = express.Router();
let initWebRouter = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello world with Le Duy Khanh');
    });
    //Rest API

    router.get('/home', homeController.getHomePage);
    router.get('/about', aboutController.getAboutPage);
    router.get('/contact', contactController.getContactPage);
    router.get('/product', homeController.getCatePage);


    return app.use("/", router);
}
module.exports = initWebRouter;