const express = require("express");
const {createUser, deleteUser, readAllUsers, readUser, updateUser} = require("../controllers/users.js");

// On crée le router de l'api
const apiRouter = express.Router();



/**
 * Récupère tous les postes du thread
 */
apiRouter.get('/thread/:thread', async (req, res) => {
    res.json({test:"zef"});
});

/**
 * Récupère tous les messages et commentaires d'un poste
 */
apiRouter.get('/thread/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Like d'un messages
 */
apiRouter.post('/thread/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Supprime un like d'un message
 */
apiRouter.delete('/thread/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Upvote d'un post
 */
 apiRouter.post('/thread/:thread', async (req, res) => {
    res.json({});
});

/**
 * Supprime un upvote d'un post
 */
apiRouter.delete('/thread/:thread', async (req, res) => {
    res.json({});
});

/**
 * Downvote d'un post
 */
 apiRouter.post('/thread/:thread', async (req, res) => {
    res.json({});
});

/**
 * Supprime un Downvote d'un post
 */
apiRouter.delete('/thread/:thread', async (req, res) => {
    res.json({});
});

/**
 * Creation d'un post
 */
 apiRouter.post('/thread/:thread', async (req, res) => {
    res.json({});
});

/**
 * Supression d'un post
 */
 apiRouter.delete('/thread/:thread', async (req, res) => {
    res.json({});
});

/**
 * Creation d'un message
 */
 apiRouter.post('/thread/:thread/:post', async (req, res) => {
    res.json({});
});

/**
 * Supression d'un message
 */
 apiRouter.delete('/thread/:thread/:post', async (req, res) => {
    res.json({});
});




/**
 * Créer un utilisateur
 */
 apiRouter.post('/user', async (req, res) => {
    res.json(await createUser(req.body));
});

/**
 * Récupère un utilisateur par rapport à son id
 */
apiRouter.get('/user/:userId', async (req, res) => {
    res.json(await readUser(req.params.userId));
});

/**
 * Modifie un utilisateur par rapport à son id et le contenu de la requête
 */
apiRouter.put('/user/:userId', async (req, res) => {
    res.json(await updateUser(req.params.userId, req.body));
});

/**
 * Supprime un utilisateur par rapport à son id
 */
apiRouter.delete('/user/:userId', async (req, res) => {
    res.json(await deleteUser(req.params.userId));
});

/**
 * Récupère tous les utilisateurs
 */
apiRouter.get('/users', async (req, res) => {
    res.json(await readAllUsers());
});

// On exporte seulement le router
module.exports = apiRouter;
