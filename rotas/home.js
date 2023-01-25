const express = require();
const router = express.Router();

// Mongoose database 


router.get("/", (req, res) => {

res.render("home");

})

module.exports = router;