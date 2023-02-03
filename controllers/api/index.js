const router = require("express").Router();
const userRoutes = require("./userRoutes");
const waterConsumptionRoutes = require("./waterConsumptionRoutes");
const forumRoutes = require("./forumRoutes")

router.use("/users", userRoutes);
router.use("/waterConsumption", waterConsumptionRoutes);
router.use("/forum", forumRoutes)

module.exports = router;
