const router = require("express").Router();
const userRoutes = require("./userRoutes");
const waterConsumptionRoutes = require("./waterConsumptionRoutes");

router.use("/users", userRoutes);
router.use("/waterConsumption", waterConsumptionRoutes);

module.exports = router;
