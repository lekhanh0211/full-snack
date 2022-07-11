let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
}
let getCatePage = (req, res) => {
    return res.render('product/catePage.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getCatePage:getCatePage,
}
// let getContactPage = (req, res) => {
//     return res.render('contactPage.ejs');
// }

// module.exports = {
//     getContactPage: getContactPage,
// }
// let getContactPage = (req, res) => {
//     return res.render('contactPage.ejs');
// }

// module.exports = {
//     getContactPage: getContactPage,
// }