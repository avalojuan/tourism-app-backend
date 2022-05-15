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
      others: req.body.others,
    };

    const newPoi = await poiController.create(poiAttributes);
    res.status(201).json({ message: newPoi });
  })
);

module.exports = router;
