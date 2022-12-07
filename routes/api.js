const express = require("express");
const user_controller = require("../controllers/user_controller.js");
const thread_controller = require("../controllers/thread_controller.js");

// On crée le router de l'api
const apiRouter = express.Router();


/**
 * Création d'un thread
 */
 apiRouter.post('/thread', async (req, res) => {
    res.json(await thread_controller.createThread(req.body));
});

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
    res.json(await thread_controller.deleteThread(req.params.thread));
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
    console.log(req.body)
    res.json(await user_controller.createUser(req.body));
});

/**
 * Récupère un utilisateur par rapport à son id
 */
apiRouter.get('/user/:userId', async (req, res) => {
    res.json(await user_controller.readUser(req.params.userId));
});


/**
 * Supprime un utilisateur par rapport à son id
 */
apiRouter.delete('/user/:userId', async (req, res) => {
    console.log(req.params.userId);
    res.json(await user_controller.deleteUser(req.params.userId));
});

/**
 * Récupère tous les utilisateurs
 */
apiRouter.get('/users', async (req, res) => {
    res.json(await user_controller.readAllUsers());
});

apiRouter.put('/user/pseudo', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updatePseudoUser(req.body.newPseudo,req.body.userId));
});

apiRouter.put('/user/mdp', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateMdpUser(req.body.newMdp,req.body.userId));
});

apiRouter.put('/user/age', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateAgeUser(req.body.newAge,req.body.userId));
});

apiRouter.put('/user/mana', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateManaUser(req.body.newMana,req.body.userId));
});


// On exporte seulement le router
module.exports = apiRouter;
