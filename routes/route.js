const errorWrapper = require('../middlewares/errorWrapper');
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/tokenHandler');
const routeController = require('../controllers/route');

router.post(
  '/create',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const userId = req.user.user.id;
    const { title, description, pois } = req.body;
    const newRoute = await routeController.create(
      userId,
      title,
      description,
      pois
    );
    res.status(201).json({ response: newRoute });
  })
);
router.get(
  '/',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const routes = await routeController.list();
    res.status(200).json({ response: routes });
  })
);

module.exports = router;
