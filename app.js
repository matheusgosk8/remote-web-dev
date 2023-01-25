const express = require("express");
const mongoose = require("mongoose");

// view engine

// rotas
const home = require("./rotas/home");
const about = require("./rotas/about")



const app = express();



// implementação  das rotas 
app.use("/", home);
app.use("/about", about);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>  console.log(`Server aberto no PORT: ${PORT}`));
