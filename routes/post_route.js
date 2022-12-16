const express = require("express");
const thread_controller = require("../controllers/thread_controller.js");
const post_controller = require("../controllers/post_controller.js");

// On crée le router de l'api
const postRouter = express.Router();

/**
 * Récupère tous les messages
 */
postRouter.get('/thread/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Supprime d'un message
 */
postRouter.delete('/thread/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Creation d'un message
 */
postRouter.post('/thread/:thread/:post', async (req, res) => {
    res.json({});
});

module.exports = postRouter;