exports.index = function(req, res){
    res.render('index', {
        title: 'eyeOrcas Developers'
        , viewClass: 'landing'
        , ngController: 'landingController'
        , baseHref : '/'
    });
};