const express = require("express");
const routes = express.Router();
const adminController = require("./app/controllers/adminController");
const userController = require("./app/controllers/userController");
const palestraControler = require("./app/controllers/palestraController");

const auth = require("./app/middleware/auth");

routes.post("/admin", adminController.signIn);

routes.post("/user", userController.store);
routes.post("/palestra", auth, palestraControler.store);

module.exports = routes;
