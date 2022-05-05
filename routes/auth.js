const errorWrapper = require('../middlewares/errorWrapper');
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post(
  '/register',
  errorWrapper(async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await authController.register(name, email, password);
    res.status(201).json({ message: newUser });
  })
);

module.exports = router;
