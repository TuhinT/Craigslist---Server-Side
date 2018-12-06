const express = require('express');
const router = express.Router();
const homeService = require('./home.service');


// routes
router.get('/', getAll);
router.get('/cat',getcats);
router.get('/:id', getProductById);
router.delete('/:id', _delete);
router.post('/register', addProduct);
router.put('/:id', updateProduct);

module.exports = router;

function getAll(req, res, next) {
    homeService.getAll()
        .then(products => res.json(products))
        .catch(err => next(err));
}

function getcats(req, res, next) {
    homeService.getAllcats()
        .then(categories => res.json(categories))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    homeService.deleteProduct(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
/////

function addProduct(req, res, next) {
    homeService.createProduct(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getProductById(req, res, next) {
    homeService.getById(req.params.id)
        .then(product => product ? res.json(product) : res.sendStatus(404))
        .catch(err => next(err));
}

function updateProduct(req, res, next) {
    homeService.updateProduct(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}