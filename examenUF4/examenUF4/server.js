require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./Database/Connection.js");
const app = express();

app.use(express.json());
app.use(cors());
const Vol = require("./Routes/Vol.js")
const Bitllet = require("./Routes/Bitllet.js")
app.use('/Api/Vol', Vol);
app.use('/Api/Bitllet',Bitllet)

const port = "3000";
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
client.connect();