//creamos la logica de las rutas del navegador

const { Router } = require("express"); //usaremos la funcionabilidad router
const crearUsuario = require("../controllers/userController");
const router = Router();

//crear mi primera endpoint

router.post("/user", crearUsuario);

module.exports = router;
