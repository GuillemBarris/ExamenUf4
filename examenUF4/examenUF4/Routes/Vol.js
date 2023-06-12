require("dotenv").config();
const expres = require('express');
const router = expres.Router();
const VolController = require('../Controllers/Vol.js')
const BitlletController = require('../Controllers/Bitllet.js')
router.post("", VolController.CrearNouVol);
router.get("",VolController.ObtenriVol)
router.delete("/:id", VolController.EsborrarVol);
router.get('/:id/Bitllets', BitlletController.ObtenirVolBitllet)
module.exports = router;
