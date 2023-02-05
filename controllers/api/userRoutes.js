const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hashed_password) => {
        try {
            /* 
        req body should look like:
        {
            username: (STRING),
            email: (STRING),
            password: (STRING)
        }
        */
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
        /* 
        req body should look like:
        {
            username: (STRING),
            email: (STRING),
            password: (STRING)
        }
        */

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
            res.status(200).send("signed in successfully!");
        } else {
            res.status(400).json({ message: "Incorrect email, username, or password, please try again" });
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send('Unable to log out')
            } else {
                res.send('Logout successful')
            }
        });
    } else {
        res.end()
    }
})

module.exports = router;
