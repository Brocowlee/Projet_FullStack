const express = require("express");
const {printSession} = require("../middlewares/index.js");
const user_controller = require("../controllers/user_controller.js");
const thread_controller = require("../controllers/thread_controller.js");
const {isUserAuthenticated, checkUserNotAlreadyAuthenticated, isSuperUser, isUserAsking} = require("../middlewares");

// On crée le router de l'api
const apiRouter = express.Router();

/**
 * Route ping où on ajoute le middleware qui va nous montrer ce qu'il y a dans la session
 */
apiRouter.get('/ping', printSession, function (req, res) {
    res.json({
        status: "OK",
        timestamp: (new Date()).getTime()
    });
});

/**
 * La route pour que l'utilisateur se connecte
 */
apiRouter.get('/login', checkUserNotAlreadyAuthenticated, async (req, res) => {

    try {
        // On récupère le login et le mot de passe du header
        const b64auth = (req.headers.authorization || '').split(' ')[1] || '';

        // On essaye de connecter l'utilisateur
        const result = await user_controller.logInUser(b64auth);
        // On veut stocker des informations dans la session
        req.session.userId = result.userId;
        req.session.pseudo = result.pseudo;
        req.session.isSuperUser = result.isSuperUser;

        // On renvoie le résultat
        res.json(result);
    }

        // Si on attrape une erreur, on renvoie un code HTTP disant que l'utilisateur n'a pas pu se connecter (Unauthorized)
    catch (e) {
        res.status(401).send(e.message);
    }
});

/**
 * on déconnecte l'utilisateur
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 */
apiRouter.delete('/logout', isUserAuthenticated, async (req, res) => {

    // On détruit la session
    try {
        await req.session.destroy();
    } catch (e) {
        res.status(401).send(e.message);
    }

    // On enlève le cookie (même si ça doit se faire tout seul, on sait jamais...)
    res.clearCookie("connect.sid");

    res.end("La session a été détruite");
});

/**
 * On récupère la donnée de l'utilisateur actuel
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 */
apiRouter.get('/userdata', isUserAuthenticated, async (req, res) => {

    // On essaye de faire la requête et s'il y a une erreur, on la renvoie avec un code d'erreur
    try {
        res.json(await user_controller.readUser(req.session.userId));
    } catch (e) {

        // On renvoie l'erreur avec un code 500 (Internal Server Error)
        res.status(500).send(e.message);
    }
});

/**
 * On regarde si l'utilisateur est connecté
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 */
apiRouter.get('/authenticated', isUserAuthenticated, async (req, res) => {

    // Comme le router fait foi que l'utilisateur est connecté on sait que si l'on retourne quelque chose alors c'est parce qu'il est connecté
    res.json({
        isUserLogged: true,
        isSuperUser: req.session.isSuperUser === true
    })
});

/**
 * On regarde si l'utilisateur est admin d'un thread
 * @middleware isUserAuthenticated: Seul un utilisateur connecté peut accéder à cet endpoint
 */
apiRouter.get('/isSuperUserThread/:idUser/:idThread', isUserAuthenticated, async (req, res) => {
    
    // Comme le router fait foi que l'utilisateur est connecté on sait que si l'on retourne quelque chose alors c'est parce qu'il est connecté
    res.json(await thread_controller.isSuperUserThread(req.params.idUser,req.params.idThread));
});


// On exporte seulement le router
module.exports = apiRouter;