/**
 * PropiedadController
 *
 * @description :: Server-side logic for managing propiedads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function (req, res) {
		// Поиск в модели Post
		// Propiedad.find().exec(function (err, prop) {
		// 	if (!prop) return res.send(404);
		// 	if (err)   return res.send(500);
		// 	res.view('propiedad/listar',{
		// 		prop: prop
		// 	});
		// 	});

		Propiedad.find({ownerID:req.session.me}).exec(function (err, propiedades){
  if (err) {
    return res.serverError(err);
  }
	sails.log('la id que buscar en owner es %d :',req.session.me );
  sails.log('Wow, there are %d propiedades.  Check it out:', propiedades.length, propiedades);
	res.view('propiedad/listar',{
	 		propiedades: propiedades
	 	});
});
},
test: function (req, res) {
        return res.view('/');
    },

create: function(req, res){

	var propiedadObj = {
			ownerID : req.param('owner'),
      name: req.param('name'),
      address: req.param('address'),
      description: req.param('description')
      // value: req.param('value')
		};
		Propiedad.create(propiedadObj).exec(function (err, propiedad) {
			if (err) {
    return res.serverError(err);
  	}
		return res.redirect('/');

});

}, //fin propiedad create
show: function (req, res) {
    Propiedad.findOne(req.param('id')).exec(function(err, prop) {
      if (!prop) return res.send(404);
      if (err) return res.send(500);
      res.view('propiedad/watch',{
        propiedad: prop
      });
    });
},

edit: function (req, res) {
	// var fs = require('fs');
	// var obj=JSON.parse(fs.readFileSync('./events.json','utf8'));
	// console.log(obj)

    Propiedad.findOne(req.param('id')).exec(function(err, prop) {
      if (!prop) return res.send(404);
      if (err) return res.send(500);
      res.view('propiedad/edit',{
        propiedad: prop
      });
    });
},


updatename: function (req, res) {


		// var name= req.param('name');

			sails.log('id es '+ req.param('id'));
			sails.log('name es '+req.param('name'));

		Propiedad.update({id:req.param('id')}, {name:req.param('name')}).exec(function (err,updated) {
			if (err) return res.send(500);
			sails.log('Updated propiedad to have name ' + updated[0].name);

			Propiedad.findOne(req.param('id')).exec(function(err, prop) {
	      if (!prop) return res.send(404);
	      if (err) return res.send(500);
	      res.view('propiedad/edit',{
	        propiedad: prop
	      });
	    });
		});

},


}
