const controller = require('../controllers/example.controller');
const routePath = '/api/examplePathRoute';

module.exports = function (app) {
    // >> Método de retorno usando status e json (Recomendado)
    // <base_url>/examplePathRoute/example/get/json :: Method GET
    app.route(routePath + '/example/get/json').get(controller.exampleGetJson);
    // <base_url>/examplePathRoute/example/post/json :: Method POST
    app.route(routePath + '/example/post/json').post(controller.examplePostJson);


    // >> Método simples de retorno
    // <base_url>/examplePathRoute/example/get :: Method GET
    app.route(routePath + '/example/get').get(controller.exampleGet);
    // <base_url>/examplePathRoute/example :: Method POST
    app.route(routePath + '/example/post').post(controller.examplePost);


    // <base_url>/examplePathRoute/example/query :: Method GET
    app.route(routePath + '/example/query').get(controller.exampleQuery);
}