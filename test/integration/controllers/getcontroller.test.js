var PropiedadController = require('../../../api/controllers/PropiedadController'),
    sinon = require('sinon'),
    assert = require('assert');

describe('El controlador de propiedad', function () {
    describe('Cuando cargamos test', function () {
        it ('Deberia entregar la vista home', function () {
            var view = sinon.spy();
            PropiedadController.test(null, {
                view: view
            });
            assert.ok(view.called);
        });
    });
});
