const cote = require('cote')
const CategorieService = new cote.Responder({name: 'Categorie'})
const CategorieModel = require('./schemas/categorie');

CategorieService.on('categorie.create', async ({data}, cb) => {
  const { name } = data;
  const res = new CategorieModel({ name });
  await res.save();
  cb(res);
});

CategorieService.on('categorie.update', async ({id, data}, cb) => {
  const  { name } = data;
  const categorieFound = await CategorieModel.findByIdAndUpdate(id, { name });
  cb(categorieFound);
});

CategorieService.on('categorie.delete', async ({id, data}, cb) => {
  const res = await CategorieModel.deleteOne({_id: id});
  cb(res);
});

CategorieService.on('categorie.listAll', async ({id, data}, cb) => {
  console.log(data);
  const categories = await CategorieModel.find({});
  cb(categories);
})