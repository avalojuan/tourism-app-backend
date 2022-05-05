const errorWrapper = require('../middlewares/errorWrapper');
const express = require('express');
const router = express.Router();

router.post(
  '/register',
  errorWrapper(async (req, res) => {
    const { name, email, password } = req.body;
  })
);

module.exports = router;
