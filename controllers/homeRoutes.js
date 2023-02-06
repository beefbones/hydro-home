const router = require('express').Router();
const { User, ForumPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/forum', withAuth, async (req, res) => {
  try {
    console.log("Serve forum template")
    const postData = await ForumPost.findAll({
      attributes: [
        "id",
        "user_id",
        "post_title",
        "content",
        "vote_total",
      ],
      include: {
        model: User,
        attributes: ["username"]
      },
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "user_id",
            "post_id",
            "content",
            "vote_total",
          ],
          include: { model: User, attributes: ["username"] },
        }
      ]
    });
    

    const forumPosts = postData.map((posts) =>
    posts.get({plain: true})
    );
    console.log(forumPosts)
    res.render('forum', {forumPosts});

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/signup', withAuth, async (req, res) => {
  try {
    
    const users = userData.map((project) => project.get({ plain: true }));

    res.render('signup', {
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router;