const express = require("express");
const message_controller = require("../controllers/message_controller.js");

// On crée le router de l'api
const messageRouter = express.Router();

/**
 * Récupère un message
 */
messageRouter.get('/:message', async (req, res) => {
    res.json(await message_controller.readMessage(req.params.message));
});

/**
 * Supprime un message
 */
messageRouter.delete('/:message', async (req, res) => {
    res.json(await message_controller.deleteMessage(req.params.message));
});

module.exports = messageRouter;