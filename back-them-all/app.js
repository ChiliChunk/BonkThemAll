const express = require('express')
require('dotenv').config();
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Monsters = require('./models/Monster');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.error('Erreur de connexion à MongoDB :', err));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/monster/:id', async (req, res) => {
    console.log(req.params.name);
    const result = await Monsters.findOne({ _id: req.params.id });
    res.send(result.toJSON());
})

app.get('/monsters', async (req, res) => {
    const result = await Monsters.find().select("name icon");;
    res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
