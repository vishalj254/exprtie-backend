var express = require("express");
const pool = require("./pool");
var router = express.Router();

/* GET home page. */
router.get("/display", function (req, res, next) {
  pool.query(`select * from shops`, function (err, result) {
    if (err) {
      res
        .status(500)
        .json({ status: false, message: "Server Error!", data: [] });
    } else {
      console.log(result);
      res
        .status(200)
        .json({ status: true, message: "Data Found!", data: result });
    }
  });
});

module.exports = router;
