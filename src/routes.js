const express = require("express");
const routes = express.Router();
const adminController = require("./app/controllers/adminController");
const userController = require("./app/controllers/userController");
const palestraController = require("./app/controllers/palestraController");
const minicursoController = require("./app/controllers/minicursoController")

const auth = require("./app/middleware/auth");

routes.post("/admin", adminController.signIn);

routes.post("/user", auth, userController.store);
routes.get("/user", auth, userController.show);
routes.put("/user/:id", auth, userController.update);
routes.delete("/user/:id", auth, userController.destroy);

routes.post("/palestra", auth, palestraController.store);
routes.get("/palestra", palestraController.show);
routes.put("/palestra/:id", auth, palestraController.update);
routes.delete("/palestra/:id", auth, palestraController.destroy);

routes.post("/minicurso", auth, minicursoController.store)
routes.get("/minicurso", minicursoController.show)
routes.put("/minicurso/:id", auth, minicursoController.update)
routes.delete("/minicurso/:id", auth, minicursoController.destroy)

routes.post("/minicurso/:id/cadastrar", auth, adminController.cadastrar)

module.exports = routes;
