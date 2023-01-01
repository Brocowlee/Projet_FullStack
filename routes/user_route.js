const express = require("express");
const user_controller = require("../controllers/user_controller.js");
const {isUserAuthenticated, checkUserNotAlreadyAuthenticated, isSuperUser, isUserAsking} = require("../middlewares");

// On crée le router de l'api
const userRouter = express.Router();


/**
 * Créer un utilisateur
 */
userRouter.post('/', async (req, res) => {
    try {
    res.json(await user_controller.createUser(req.body));
    } catch (e) {
        res.status(500).send(e.message);
    }
});

/**
 * Récupère un utilisateur par rapport à son id
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 */
userRouter.get('/:userId',isUserAuthenticated, async (req, res) => {
    res.json(await user_controller.readUser(req.params.userId));
});


/**
 * Supprime un utilisateur par rapport à son id
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 * @middleware isSuperUser: Seul un super utilisateur a le droit d'accéder à cet endpoint
 */
userRouter.delete('/:userId', isUserAuthenticated, isSuperUser, async (req, res) => {
    console.log(req.params.userId);
    res.json(await user_controller.deleteUser(req.params.userId));
});

/**
 * Récupère tous les utilisateurs4
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 */
userRouter.get('/users', isUserAuthenticated, async (req, res) => {
    res.json(await user_controller.readAllUsers());
});

/**
 * Modifie le pseudo d'un utilisateur
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 * @middleware isUserAsking: Seul un super utilisateur a le droit d'accéder à cet endpoint
 */
userRouter.put('/pseudo', isUserAuthenticated, isUserAsking, async (req, res) => {
    console.log("test");
    res.json(await user_controller.updatePseudoUser(req.body.newPseudo,req.body.userId));
});

/**
 * Modifie le mot de passe d'un utilisateur
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 * @middleware isUserAsking: Seul un super utilisateur a le droit d'accéder à cet endpoint
 */
userRouter.put('/mdp', isUserAuthenticated, isUserAsking, async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateMdpUser(req.body.newMdp,req.body.userId));
});

/**
 * Modifie l'âge d'un utilisateur
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 * @middleware isUserAsking: Seul un super utilisateur a le droit d'accéder à cet endpoint
 */
userRouter.put('/age', isUserAuthenticated, isUserAsking, async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateAgeUser(req.body.newAge,req.body.userId));
});

/**
 * Modifie le mana d'un utilisateur
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 */
userRouter.put('/mana', isUserAuthenticated, async (req, res) => {
    console.log("test");
    res.json(await user_controller.updateManaUser(req.body.newMana,req.body.userId));
});


module.exports = userRouter;