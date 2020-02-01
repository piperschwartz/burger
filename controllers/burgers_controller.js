var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    console.log("sup dave");
    console.log(req.body);

    burger.insertOne([
      "burger_name", "devoured" 
    ], 
      [
      req.body.burger_name, false
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
      {
        devoured: true
      },
      condition,
      function(result) {
      // if (result.changedRows == 0) {
      //   // If no rows were changed, then the ID must not exist, so 404
      //   return res.status(404).end();
      // } else {
       return res.status(200).end();
      // }
      }
    );
  });

 
    
  // Export routes for server.js to use.
  module.exports = router;