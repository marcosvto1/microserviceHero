const cote = require('cote');
const client = new cote.Requester({name: 'broker'});

const { expect } = require('chai');

describe('Teste Service Categories', async () => {

  beforeEach(() => {
    require('../../index');
  })

  it('Test categories Service "categorie.create"', async () => {

    const categorie = await new Promise((resolve) => {
      client.send({ type: 'categorie.create', data: { name: 'Marcos' }}, res => {
        resolve(res);
      });
    });

    expect(categorie).to.eqls({ _id: categorie._id, name: categorie.name });

  });
});