const router = require("express").Router();
const { Op } = require("sequelize");
const { WaterConsumption } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        const allWaterData = await WaterConsumption.findAll({
            where: { user_id: req.session.user_id },
        });

        res.json(allWaterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/weekly/:midnight", withAuth, async (req, res) => {
    try {
        /*
            Req Params:
            midnight: DATE (midnight this morning for client's timezone)

        returns all water consumption records from previous 168h (24h*7d), front end needs to sort data by time zone of browser
        */
        const weeklyWaterData = await WaterConsumption.findAll({
            where: { user_id: req.session.user_id, timestamp: { [Op.gte]: req.params.midnight - 1000 * 60 * 60 * 24 * 6 } },
        });

        res.json(weeklyWaterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/daily/:midnight", withAuth, async (req, res) => {
    try {
        /*
            Req Params:
            midnight: DATE (midnight this morning for client's timezone)

        returns all water consumption records from previous 24h, front end needs to sort data by time zone of browser
        */
        const dailyWaterData = await WaterConsumption.findAll({
            where: { user_id: req.session.user_id, timestamp: { [Op.gte]: Math.round(req.params.midnight) } },
        });

        res.json(dailyWaterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        /* 
    req body should look like:
    {
        amount_consumed: OPTIONAL water amount consumed (INTEGER),
        target_daily_consumption: OPTIONAL target consumption (INTEGER),
        //MUST HAVE ONE OF THE TWO FIELDS
    }
    */
        let target_daily_consumption;
        let amount_consumed;

        if (!(req.body.target_daily_consumption || req.body.amount_consumed)) {
            throw "Must have target consumption or new consumption record!";
        }

        if (!req.body.target_daily_consumption) {
            const userConsumptionData = await WaterConsumption.findAll({ where: { user_id: req.session.user_id } });
            const lastRecord = userConsumptionData.slice(-1)[0];
            target_daily_consumption = lastRecord.target_daily_consumption;
        } else {
            target_daily_consumption = req.body.target_daily_consumption;
        }

        if (!req.body.amount_consumed) {
            amount_consumed = 0;
        } else {
            amount_consumed = req.body.amount_consumed;
        }

        const newData = {
            user_id: req.session.user_id,
            target_daily_consumption,
            amount_consumed,
        };

        WaterConsumption.create(newData);
        res.status(200).send("New water consumption entry created successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
