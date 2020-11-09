const express = require('express');
const LivroController = require('./controllers/livroController');

const route = express.Router();

route.get('/', LivroController.index);
route.post('/', LivroController.create);
route.get('/:id', LivroController.details);
route.put('/:id', LivroController.update);
route.delete('/:id', LivroController.delete);

module.exports = route;