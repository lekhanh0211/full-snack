let getAboutPage = (req, res) => {
    return res.render('aboutPage.ejs');
}

module.exports = {
    getAboutPage: getAboutPage,
}