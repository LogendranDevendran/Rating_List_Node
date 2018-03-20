var express = require("express");
var router = express.Router();
// Default Mongo DB reference
var db = require("../db");

/* Default route option */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
  next();
});

/* Fetches Rating for the corresponding product ID from the Mongo DB and returns to the client. 
If the value for the particular product id is not available returns the error. */
router.get("/:productId", function(req, res, next) {
  let params = req.params;

  db
    .get()
    .collection("products")
    .find({ productId: params.productId })
    .toArray(function(err, docs) {
      if (err) {
        res.status(err.status || 500);
        res.json({ error: "There is some problem with fetching the rating" });
      }

      if (docs.length > 0) {
        res.status(200);
        res.json({ productId: docs[0].productId, rating: docs[0].rating });
      } else {
        res.status(404);
        res.json({ error: "There is some problem with fetching the rating" });
      }
    });
});

module.exports = router;
