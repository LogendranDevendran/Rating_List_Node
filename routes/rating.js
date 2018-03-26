var express = require("express");
var router = express.Router();
// Default Mongo DB reference
var db = require("../db");
var constants = require("../constants");

/* Default route option */
router.get("/", function(req, res, next) {
  res.send(constants.RESPOND_WITH_RESOURCE);
  next();
});

/* Fetches Rating for the corresponding product ID from the Mongo DB and returns to the client. 
If the value for the particular product id is not available returns the error. */
router.get("/:productId", function(req, res, next) {
  let params = req.params;

  db
    .get()
    .collection(constants.PRODUCTS_COLLECTION)
    .find({ productId: params.productId })
    .toArray(function(err, docs) {
      if (err) {
        res.status(err.status || 500);
        res.json({ error: constants.GENERIC_ERROR });
      }

      if (docs.length > 0) {
        res.status(200);
        res.json({ productId: docs[0].productId, rating: docs[0].rating });
      } else {
        res.status(404);
        res.json({ error: constants.GENERIC_ERROR });
      }
    });
});

module.exports = router;
