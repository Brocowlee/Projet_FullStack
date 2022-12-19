const express = require("express");
const thread_controller = require("../controllers/thread_controller.js");
const post_controller = require("../controllers/post_controller.js");
const message_controller = require("../controllers/message_controller.js");

// On crée le router de l'api
const postRouter = express.Router();

/**
 * Récupère un post
 */
postRouter.get('/:post', async (req, res) => {
    res.json(await post_controller.readPost(req.params.post));
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