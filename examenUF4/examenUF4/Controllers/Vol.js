const { query } = require("express");
const client = require("../Database/Connection.js");
const { v4: uuid } = require("uuid");
const DATE = new Date().toLocaleString("es-Es")
const CrearNouVol = (req, res) => {
    const value = [
        req.body.id = uuid(),
        req.body.origen,
        req.body.desti,
        req.body.dataEnlairament,
        req.body.modelAvio,
        req.body.duradaTrajecte,
        req.body.updatedAt = DATE,
        req.body.createdAt = DATE,
    ];

    const query = `INSERT INTO Vol (ID, origen, desti, dataEnlairament, modelAvio, duradaTrajecte, updatedAt, createdAt)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`;

    client.query(query, value, (err) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut afegir el Vol" + err });
        } else {
            res.status(200).json({ message: "Vol afegit correctament" });
        }
    });

}
const ObtenriVol = (req, res) => {
    const query = `SELECT * FROM Vol`;
    client.query(query, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir els Vols" });
        } else {
            res.status(200).json(result.rows);
        }
    });
}
const EsborrarVol = (req, res) => {
  
    const value = [req.params.id];
    
       
        const query = `DELETE FROM Bitllet WHERE ID = $1`;
        client.query(query, value, (err) => {
            if (err) {
                res.status(404).json({ error: "No s'ha pogut eliminar el Vol" });
            } else {
                res.status(200).json({ message: "Vol eliminat correctament" });
            }
        });
    }

module.exports = {
    CrearNouVol,
    ObtenriVol,
    EsborrarVol
}