const personRoute = require('./person');
const siteController = require('./site');

function route(app){
    app.use('/person', personRoute);
    app.use('/', siteController);
}

module.exports = route;