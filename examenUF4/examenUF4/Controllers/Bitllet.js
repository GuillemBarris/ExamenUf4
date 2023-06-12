const client = require("../Database/Connection.js");
const {v4: uuid} = require("uuid");
const DATE = new Date().toLocaleString("es-Es")
const CrearNouBitllet = (req, res) => {
    const value =[
        req.body.vol,
        req.body.seientassignat,
        req.body.id = uuid(),
        req.body.dniTitular,
        req.body.nomCompletTitular,
        req.body.classe,
        req.body.updatedAt = DATE,
        req.body.createdAt = DATE
    ];
    console.log(value);
    const query = `INSERT INTO Bitllet (vol, seientAssignat, id, dniTitular, nomCompletTitular, classe, updatedAt,
        createdAt) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`;
        client.query(query, value, (err) => {
            if (err) {
                res.status(404).json({ error: "No s'ha pogut afegir el Bitllet" +err });
            } else {
                res.status(200).json({ message: "Bitllet afegit correctament" });
            }
        });

}
const ObteniBitllet = (req, res) => {
    const value = [req.params.id];
    console.log(value);
    const query = `SELECT * FROM Bitllet WHERE id = $1`;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir el Bitllet" });
        } else {
            res.status(200).json(result.rows);
        }
    });
};
const EditarBitllet = (req, res) => {
    const value = [
        
        req.params.id,
        req.body.seientassignat,
  
        req.body.dniTitular,
        req.body.nomCompletTitular,
        req.body.classe,
        
        req.body.updatedAt = DATE,
      
       
       
    ];
    console.log(value);
    const query = `UPDATE Bitllet  Set seientAssignat = $2,  dniTitular = $3,
     nomCompletTitular =$4, classe = $5,updatedAt = $6 WHERE id = $1 `;
    client.query(query, value, (err) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut actualitzar el Bitllet" + err });
        } else {
            res.status(200).json({ message: "Bitllet actualitzat correctament" });
        }
    });
}
const EsborrarBitllet = (req, res) => {
    const value = [req.params.id];
    const query = `DELETE FROM Bitllet WHERE ID = $1`;
    client.query(query, value, (err) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut eliminar el Bitllet" });
        } else {
            res.status(200).json({ message: "Bitllet eliminat correctament" });
        }
    });
    
}
const ObtenirVolBitllet = (req, res) => {
    const value = [req.params.id, ];
    console.log(value);
    const query = `SELECT * FROM Bitllet WHERE vol = $1 `;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir les bitllets" +err });
        } else {
            res.status(200).json(result.rows);
        }
    });
};
module.exports = {
    CrearNouBitllet,
    ObteniBitllet,
    EditarBitllet,
    EsborrarBitllet,
    ObtenirVolBitllet

}