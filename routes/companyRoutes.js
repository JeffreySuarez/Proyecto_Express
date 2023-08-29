const { Router } = require("express");

const crearCompany = require("../controllers/companyController");
const router = Router();
router.post("/company", crearCompany);

module.exports = router;
