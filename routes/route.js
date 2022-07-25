const errorWrapper = require("../middlewares/errorWrapper");
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/tokenHandler");
const routeController = require("../controllers/route");

router.post(
  "/create",
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
  "/",
  [verifyToken],
  errorWrapper(async (req, res) => {
    const routes = await routeController.list();
    res.status(200).json({ response: routes });
  })
);

router.get(
  "/:id",
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { id } = req.params;
    const route = await routeController.search(id);
    res.status(200).json({ response: route });
  })
);

router.post(
  "/:id/comment",
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { comment } = req.body;
    console.log(req.user);
    const userId = req.user.user.id;
    const routeId = req.params.id;
    const newComment = await routeController.addComment(
      userId,
      routeId,
      comment
    );
    res.status(201).json({ response: newComment });
  })
);

router.post(
  "/:id/rate",
  [verifyToken],
  errorWrapper(async (req, res) => {
    const { rate } = req.body;
    const userId = req.user.user.id;
    const routeId = req.params.id;
    const newRate = await routeController.addRate(userId, routeId, rate);
    res.status(201).json({ response: newRate });
  })
);

module.exports = router;
