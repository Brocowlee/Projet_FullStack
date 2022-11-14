const express = require("express");

// On crée le router de l'api
const apiRouter = express.Router();

/**
 * Récupère tous les postes du thread
 */
apiRouter.get('/:thread', async (req, res) => {
    res.json({});
});

/**
 * Récupère tous les messages et commentaires d'un poste
 */
apiRouter.get('/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Like d'un messages
 */
apiRouter.post('/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Supprime un like d'un message
 */
apiRouter.delete('/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Upvote d'un post
 */
 apiRouter.post('/:thread', async (req, res) => {
    res.json({});
});

/**
 * Supprime un upvote d'un post
 */
apiRouter.delete('/:thread', async (req, res) => {
    res.json({});
});

/**
 * Downvote d'un post
 */
 apiRouter.post('/:thread', async (req, res) => {
    res.json({});
});

/**
 * Supprime un Downvote d'un post
 */
apiRouter.delete('/:thread', async (req, res) => {
    res.json({});
});

/**
 * Creation d'un post
 */
 apiRouter.post('/:thread', async (req, res) => {
    res.json({});
});

/**
 * Supression d'un post
 */
 apiRouter.delete('/:thread', async (req, res) => {
    res.json({});
});

/**
 * Creation d'un message
 */
 apiRouter.post('/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Supression d'un message
 */
 apiRouter.delete('/:thread/:post', async (req, res) => {
    res.json({});
});


/**
 * Récupère tous les utilisateurs
 */
apiRouter.get('/users', async (req, res) => {
    res.json({});
});

// On exporte seulement le router
module.exports = apiRouter;

// On exporte seulement le router
module.exports = apiRouter;