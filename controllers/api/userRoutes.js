const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hashed_password) => {
        try {
            await User.create({
                username: req.body.username,
                email: req.body.email,
                hashed_password: hashed_password,
            });

            const userData = await User.findOne({ where: { username: req.body.username } });

            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.redirect("/");
        } catch (err) {
            res.status(400).json(err);
        }
    });
});

router.post("/login", async (req, res) => {
    try {
        let userData;

        if (req.body.username) {
            userData = await User.findOne({ where: { username: req.body.username } });
        } else if (req.body.email) {
            userData = await User.findOne({ where: { email: req.body.email } });
        }

        if (!userData) {
            res.status(400).json({ message: "Incorrect email, username, or password, please try again" });
        }

        const validPass = await bcrypt.compare(req.body.password, userData.hashed_password);

        if (validPass) {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(req.session.user_id);
            res.status(200).send("signed in successfully!");
        } else {
            res.status(400).json({ message: "Incorrect email, username, or password, please try again" });
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/logout", (req, res) => {
    console.log(req.session.user_id);
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).redirect("/");
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
