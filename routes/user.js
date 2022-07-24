const errorWrapper = require("../middlewares/errorWrapper");
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/tokenHandler");
const userController = require("../controllers/user");

router.get(
  "/",
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { id } = req.user.user;
    console.log(req.user);
    const user = await userController.search(id);
    res.status(200).json({ response: user });
  })
);

module.exports = router;
