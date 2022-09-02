const db = require("../models/userModel");

function getUsers(req, res, next) {
    res.json(db.findUsers());
}

function getUserById(req, res) {
    const id = req.params.id;
    res.json(db.findUser(id));
}

function postUser(req, res) {
    const user = db.insertUser(req.body);
    res.status(201).json(user);
}

function putUser(req, res) {
    const id = req.params.id;
    const user = db.updateUser(id, req.body, true);
    res.status(200).json(user);
}

function patchUser(req, res) {
    const id = req.params.id;
    const user = db.updateUser(id, req.body, false);
    res.status(200).json(user);
}

function deleteUser(req, res) {
    const id = req.params.id;
    const user = db.deleteUser(id);
    res.status(200).json(user);
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUser,
    patchUser,
    deleteUser
}