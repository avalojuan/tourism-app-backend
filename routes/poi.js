const errorWrapper = require('../middlewares/errorWrapper');
const express = require('express');
const router = express.Router();
const poiController = require('../controllers/poi');
const { verifyToken } = require('../middlewares/tokenHandler');

router.post(
  '/create',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const poiAttributes = {
      userId: req.user.user.id,
      title: req.body.title,
      imageURL: req.body.imageURL,
      description: req.body.description,
      address: req.body.address,
      latitude: req.body.lat,
      longitude: req.body.lng,
      cost: req.body.cost,
      schedule: req.body.schedule,
      contact: req.body.contact,
      others: req.body.others,
    };

    const newPoi = await poiController.create(poiAttributes);
    res.status(201).json({ response: newPoi });
  })
);

router.get(
  '/',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const pois = await poiController.list();
    res.status(200).json({ response: pois });
  })
);

router.post(
  '/:id/comment',
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { comment } = req.body;
    console.log(req.user);
    const userId = req.user.user.id;
    const poiId = req.params.id;
    const newComment = await poiController.addComment(userId, poiId, comment);
    res.status(201).json({ response: newComment });
  })
);

router.post(
  '/:id/rate',
  errorWrapper(async (req, res) => {
    const { userId, rate } = req.body;
    const poiId = req.params.id;
    const newRate = await poiController.addRate(userId, poiId, rate);
    res.status(201).json({ response: newRate });
  })
);

module.exports = router;
