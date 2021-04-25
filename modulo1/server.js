const cote = require('cote')
const CategorieService = new cote.Responder({name: 'Categorie'})
const Connection = require('./schemas/connection');
const CategorieModel = require('./schemas/categorie');

Connection.connect();

CategorieService.on('categorie.create', ({data}, cb) => {
  const { name } = data;

  const res = new CategorieModel({ name });
  res.save();
  console.log('res', res);

  cb(res);
});

CategorieService.on('categorie.update', async ({data}, cb) => {
  const  { id } = data;
  const foundCategorie = await CategorieModel.findOneAndUpdate({
    _id: id
  },
    {
      $set: data
    }
  )

  cb({ _id: foundCategorie._id, name: data.name });
});


CategorieService.on('categorie.listAll', async ({data}, cb) => {
  console.log(data);
  const categories = await CategorieModel.find({});
  cb(categories);
})