const express = require("express");
const post_controller = require("../controllers/post_controller.js");
const message_controller = require("../controllers/message_controller.js");

// On crée le router de l'api
const postRouter = express.Router();

/**
 * Récupère un post et ses messages
 */
postRouter.get('/:post', async (req, res) => {
    const [postResult, messageResult] = await Promise.all([
        post_controller.readPost(req.params.post),
        message_controller.readAllMessage_Post(req.params.post)
      ]);
      
      res.json({
        post: postResult,
        messages: messageResult
      });
});

/**
 * Supprime un post
 */
postRouter.delete('/:post', async (req, res) => {
    res.json(await post_controller.deletePost(req.params.post));
});

/**
 * Creation d'un message
 */
postRouter.post('/:post', async (req, res) => {
    res.json(await message_controller.createMessage(req.body,req.params.post));
});

module.exports = postRouter;