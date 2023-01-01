const express = require("express");
const user_controller = require("../controllers/user_controller.js");

// On crée le router de l'api
const userRouter = express.Router();


/**
 * Créer un utilisateur
 */
userRouter.post('/', async (req, res) => {
    res.json(await user_controller.createUser(req.body));
});

/**
 * Récupère un utilisateur par rapport à son id
 */
userRouter.get('/:userId', async (req, res) => {
    res.json(await user_controller.readUser(req.params.userId));
});


/**
 * Supprime un utilisateur par rapport à son id
 */
userRouter.delete('/:userId', async (req, res) => {
    console.log(req.params.userId);
    res.json(await user_controller.deleteUser(req.params.userId));
});

/**
 * Récupère tous les utilisateurs
 */
userRouter.get('/users', async (req, res) => {
    res.json(await user_controller.readAllUsers());
});

/**
 * Modifie le pseudo d'un utilisateur
 */
userRouter.put('/pseudo', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updatePseudoUser(req.body.newPseudo,req.body.userId));
});

/**
 * Modifie le mot de passe d'un utilisateur
 */
userRouter.put('/mdp', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateMdpUser(req.body.newMdp,req.body.userId));
});

/**
 * Modifie l'âge d'un utilisateur
 */
userRouter.put('/age', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateAgeUser(req.body.newAge,req.body.userId));
});

/**
 * Modifie le mana d'un utilisateur
 */
userRouter.put('/mana', async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateManaUser(req.body.newMana,req.body.userId));
});


module.exports = userRouter;