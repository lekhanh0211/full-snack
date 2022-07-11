let getContactPage = (req, res) => {
    return res.render('contactPage.ejs');
}

module.exports = {
    getContactPage: getContactPage,
}