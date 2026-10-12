const router = require("express").Router();
const { registerUser, LoginUser } = require("../controllers/AuthController");

router.post("/register", registerUser);
router.post("/login", LoginUser);

module.exports = router;