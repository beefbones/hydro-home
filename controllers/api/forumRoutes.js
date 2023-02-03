const router = require("express").Router();
const { ForumPost, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", async (req, res) => {
    try {
      const postData = await ForumPost.findAll({
        attributes: ["id", "post_title", "content", "vote_total"],
        order: [["vote_total", "DESC"]],
        include: [
          { model: User, attributes: ["username"] },
          {
            model: Comment,
            attributes: [
              "id",
              "user_id",
              "post_title",
              "content",
              "vote_total",
            ],
            include: { model: User, attributes: ["username"] },
          },
        ],
      });
      res.status(200).json(postData.reverse());
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post("/", withAuth, async (req, res) => {
    try {
      const newPost = await ForumPost.create({
        ...req.body,
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const postData = await ForumPost.findOne({
        where: { id: req.params.id },
        attributes: ["id", "post_title", "content", "vote_total"],
        order: [["vote_total", "DESC"]],
        include: [
          { model: User, attributes: ["username"] },
          {
            model: Comment,
            attributes: [
                "id",
                "user_id",
                "post_title",
                "content",
                "vote_total",
            ],
            include: { model: User, attributes: ["username"] },
          },
        ],
      });
      if (!postData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.put("/:id", withAuth, async (req, res) => {
    try {
      const updatePost = await ForumPost.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if (!updatePost) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
  
      res.json(updatePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete("/:id", withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!postData) {
        res.status(404).json({
          message: "No post owned by this user",
        });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;