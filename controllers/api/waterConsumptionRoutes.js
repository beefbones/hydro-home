const router = require("express").Router();
const { Op } = require("sequelize");
const { WaterConsumption } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/weekly", withAuth, async (req, res) => {
    try {
        console.log(req.session.user_id);
        const weeklyWaterData = await WaterConsumption.findAll({
            where: { user_id: req.session.user_id, timestamp: { [Op.gte]: new Date() - 1000 * 60 * 60 * 24 * 5 } },
        });

        res.json(weeklyWaterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
