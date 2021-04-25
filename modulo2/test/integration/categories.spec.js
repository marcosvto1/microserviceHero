const sinon = require('sinon');
const { assert } = require('chai');

const CategorieModel = require('../../schemas/categorie');

describe('Test CategoryModel', () => {

  beforeEach( () => {
    sinon.stub(CategorieModel.prototype, 'save')
  })

  it('test save Category', async () => {
    const _doc = new CategorieModel({name: 'Brazil'});
    await _doc.save();

    assert(_doc.isNew);
  })
});
