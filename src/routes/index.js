const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index.js.js.tsx.ts.js.ts.ts", { title: "Express" });
});

module.exports = router;
