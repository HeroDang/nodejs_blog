class PersonController{
    index(req, res){
        res.render('person');
    }
    show(req, res){
        res.send('PERSON DETAIL');
    }
}

module.exports = new PersonController;