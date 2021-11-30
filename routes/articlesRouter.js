const express = require("express");
const router = express.Router();
const {
  getArticle,
  getArticles,
  patchArticle,
  getArticleComments,
} = require("../controllers/articles.controller");

router.route("/").get(getArticles);
router.route("/:article_id").get(getArticle).patch(patchArticle);
router.route("/:article_id/comments").get(getArticleComments);

module.exports = router;