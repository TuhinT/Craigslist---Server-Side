const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Home = db.Home;
const Cats = db.Cats;

module.exports = {
    getAll,
    getAllcats,
    deleteProduct,
    getById,
    createProduct,
    updateProduct
};

async function getAll() {
    return await Home.find();
}

async function getAllcats() {
    return await Cats.find();
}

async function deleteProduct(id) {
    await Home.findByIdAndRemove(id);
}

async function getById(id) {
    return await Home.findById(id);
}

async function createProduct(prodParam) {
    const prod = new Home(prodParam);
    await prod.save();
}

async function updateProduct(id, prodParam) {
    const prod = await Home.findById(id);

    Object.assign(prod, prodParam);

    await prod.save();
}