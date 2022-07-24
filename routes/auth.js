const errorWrapper = require("../middlewares/errorWrapper");
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post(
  "/register",
  errorWrapper(async (req, res) => {
    const { name, email, password, pictureUrl } = req.body;
    const newUser = await authController.register(
      name,
      email,
      password,
      pictureUrl
    );
    res.status(201).json({ message: newUser });
  })
);

router.post(
  "/login",
  errorWrapper(async (req, res) => {
    const { email, password } = req.body;
    const loggedUser = await authController.login(email, password);
    res.status(201).json({ message: loggedUser });
  })
);

module.exports = router;
