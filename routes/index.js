exports.index = function(req, res){
    res.render('index', {
        title: 'eyeOrcas Developers'
        , viewClass: 'landing'
        , ngController: 'landingController'
        , baseHref : '/'
    });
};

exports.coreApi = function(req, res){
    res.render('coreApi', {
        title: 'eyeOrcas Developers | Core API'
        , viewClass: 'core-api'
        , ngController: 'coreApiController'
        , baseHref : '/core-api'
    });
};

exports.portalApi = function(req, res){
    res.render('portalApi', {
        title: 'eyeOrcas Developers | Portal API'
        , viewClass: 'portal-api'
        , ngController: 'portalApiController'
        , baseHref : '/portal-api'
    });
};

exports.remoteManagementApi = function(req, res){
    res.render('remoteManagementApi', {
        title: 'eyeOrcas Developers | Remote Management API'
        , viewClass: 'remote-management-api'
        , ngController: 'remoteManagementApiController'
        , baseHref : '/remote-management-api'
    });
};

exports.lifecareApi = function(req, res){
    res.render('lifecareApi', {
        title: 'eyeOrcas Developers | LifeCare API'
        , viewClass: 'lifecare-api'
        , ngController: 'lifecareApiController'
        , baseHref : '/lifecare-api'
    });
};

exports.getStarted = function(req, res){
    res.render('getStarted', {
        title: 'eyeOrcas Developers | Get Started'
        , viewClass: 'get-started'
        , ngController: 'getStartedController'
        , baseHref : '/get-started'
    });
};

exports.helpers = function(req, res){
    res.render('helpers', {
        title: 'eyeOrcas Developers | Helpers'
        , viewClass: 'helpers'
        , ngController: 'helpersController'
        , baseHref : '/helpers'
    });
};