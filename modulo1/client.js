const cote = require('cote');
const client = new cote.Requester({name: 'Client'});
const polka = require('polka');
const { json } = require('@polka/parse');
const { response } = require('./utils/response');

const PORT = 3000;

polka()
  .use(json())
  .post('/', (req,res) => {
    client.send({ type: 'categorie.create', data: { name: 'Marcos' } }, (_response) => 
      response(res, _response)
    );
  })
  .put('/:id', (req, res) => {

    const payload = {
      id: req.params.id,
      name: req.body.name
    }

    client.send({ type: 'categorie.update', data: payload}, (_response) => {
      response(res, _response)
    })
  })
  .get('/', (req, res) => {
    client.send({ type: 'categorie.listAll' , data: {}}, (_response) => {
      response(res, _response)
    })
  })

  .listen(PORT, err => {
     if (err) throw err
     console.log(`http://localhost:${PORT}`)
  })