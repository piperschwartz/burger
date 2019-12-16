var express = require("express");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
