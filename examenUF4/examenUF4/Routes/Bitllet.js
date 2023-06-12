require("dotenv").config();
const expres = require('express');
const router = expres.Router();
const BitlletController = require('../Controllers/Bitllet.js')
router.post("", BitlletController.CrearNouBitllet);
router.get("/:id", BitlletController.ObteniBitllet);
router.patch("/:id", BitlletController.EditarBitllet);
router.delete("/:id", BitlletController.EsborrarBitllet);
module.exports = router;
