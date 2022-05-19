const errorWrapper = require('../middlewares/errorWrapper');
const express = require('express');
const router = express.Router();
const poiController = require('../controllers/poi');

router.post(
  '/:userId/create',
  errorWrapper(async (req, res) => {
    const poiAttributes = {
      userId: req.params.userId,
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
  errorWrapper(async (req, res) => {
    const pois = await poiController.list();
    res.status(200).json({ response: pois });
  })
);

router.post(
  '/:id/comment',
  errorWrapper(async (req, res) => {
    const { userId, rate, comment } = req.body;
    const poiId = req.params.id;
    const newComment = await poiController.addComment(
      userId,
      poiId,
      rate,
      comment
    );
    res.status(201).json({ response: newComment });
  })
);

module.exports = router;
