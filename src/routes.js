const express = require("express");
const routes = express.Router();
const adminController = require("./app/controllers/adminController");
const userController = require("./app/controllers/userController");
const palestraController = require("./app/controllers/palestraController");

const auth = require("./app/middleware/auth");

routes.post("/admin", adminController.signIn);

routes.post("/user", auth, userController.store);
routes.get("/user", auth, userController.show);

routes.post("/palestra", auth, palestraController.store);
routes.get("/palestra", palestraController.show);
routes.put("/palestra/:id", auth, palestraController.update);
routes.delete("/palestra/:id", auth, palestraController.destroy);

module.exports = routes;
