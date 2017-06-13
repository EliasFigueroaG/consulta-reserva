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
      required: true
    }
  }

};
