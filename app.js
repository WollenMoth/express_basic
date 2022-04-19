// Usando un objeto express
const express = require("express");
// App de Express
const app = express();
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Respondiendo text
// localhost:3000/launchx
app.get("/launchx", (req, res) => {
  res.send("Bienvenidos a Launch X");
});

// Regresando un objeto
// localhost:3000/explorersInNode
app.get("/explorersInNode", (req, res) => {
  const explorer = { name: "Explorer", msg: "Hello" };
  res.send(explorer);
});

// Query Params: Recibir parámetros por la url
// localhost:3000/explorers/andre
// req.params = { explorerName: "andre" }
app.get("/explorers/:explorerName", (req, res) => {
  res.send(req.params);
});

// Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
