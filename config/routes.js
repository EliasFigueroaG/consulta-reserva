module.exports.routes = {

  // HTML Views
  '/': { view: 'homepage' },
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  'get /propiedad/new': {view: 'propiedad/new'},
  //'get /propiedad/listar': {view: 'propiedad/testing'},
  '/welcome': { view: 'user/welcome' },
  'get /listar': 'PropiedadController.index',
  'get /ejemplo' : {view: 'ejemplo'},
  'get /propiedad/edit/:id': 'PropiedadController.edit',
  'get /propiedad/watch/:id': 'PropiedadController.show',
  // Endpoints
  'post /listar': 'PropiedadController.index',
  'post /propiedad/updatename': 'PropiedadController.updatename',
  'post /listar': 'PropiedadController.index',
  'post /propiedad/create/': 'PropiedadController.create',
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
};
