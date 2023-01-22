class SiteController{
    // Get home
    index(req, res){
        res.render('home');
    }
    // get search
    seach(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;