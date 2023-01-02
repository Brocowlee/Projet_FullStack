const express = require("express");
const thread_controller = require("../controllers/thread_controller.js");
const post_controller = require("../controllers/post_controller.js");
const {isUserAuthenticated, checkUserNotAlreadyAuthenticated, isSuperUser, isUserAsking} = require("../middlewares");
const user_controller = require("../controllers/user_controller.js");

// On crée le router de l'api
const threadRouter = express.Router();

/**
 * Création d'un thread
 */
threadRouter.post('/',isUserAuthenticated, async (req, res) => {
    res.json(await thread_controller.createThread(req.body,req.session.userId));
});

/**
 * Récupère tous les thread
 */
threadRouter.get('/', async (req, res) => {
    res.json(await thread_controller.readAllThread());
});


/**
 * Récupère un thread et ses posts
 */
threadRouter.get('/:thread',isUserAuthenticated, async (req, res) => {
    const userId = req.session.userId

    const [threadResult, postResult,adminResult] = await Promise.all([
        thread_controller.readThread(req.params.thread),
        post_controller.readAllPost_Thread(req.params.thread),
        thread_controller.isSuperUserThread(userId,req.params.thread)
      ]);
      
      res.json({
        thread: threadResult,
        posts: postResult,
        admin : adminResult
      });
      
});

/**
 * Supprime un thread
 */
threadRouter.delete('/:thread',isUserAuthenticated, async (req, res) => {
    res.json(await thread_controller.deleteThread(req.params.thread));
});

/**
 * Creation d'un post
 */
threadRouter.post('/:thread',isUserAuthenticated, async (req, res) => {
    res.json(await post_controller.createPost(req.body,req.params.thread));
});


module.exports = threadRouter;