/**
 * Propiedad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ownerid: {
      type: 'integer'
    },
    name: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true
    },
    description:{
      type: 'string',
      required: true
    },
    value: {
      type: 'integer',

    },
    dorms:{
      type: 'integer',
      defaultsTo: '0'
    },
    baños:{
      type: 'integer',
      defaultsTo: '0'
    },
    superficieutil:{
      type: 'integer',
      defaultsTo: '0'
    },
    superficietotal:{
      type: 'integer',
      defaultsTo: '0'
    },
    telefono:{
      type:'integer',
      defaultsTo: '977746313'
    },
    estacionamiento:{
      type: 'integer',
      defaultsTo: '0'
    },
    tarifaminima: {
      type: 'string',
      defaultsTo: '$0',
      required:true
    },
    cupominimo:{
      type: 'integer',
      defaultsTo: 0,
      required: true
    },
    tarifaextra:{
      type: 'string',
      defaultsTo: '$0',
      required:true
    },
    cupomaximo:{
      type: 'integer',
      defaultsTo: 0,
      required: true
    },
    descriptionext:{
      type: 'text',
      defaultsTo:'Esta es la descripción por defecto, el propietario debe editar esta seccion segun sus necesidades. Recomendacion: explorar otras areas de la pagina apra no repetir informacion'
    }
}
};
