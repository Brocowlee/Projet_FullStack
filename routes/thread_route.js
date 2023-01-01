const express = require("express");
const thread_controller = require("../controllers/thread_controller.js");
const post_controller = require("../controllers/post_controller.js");

// On crée le router de l'api
const threadRouter = express.Router();

/**
 * Création d'un thread
 */
threadRouter.post('/', async (req, res) => {
    /*if(req.params.thread === 'all'){
        res.status(400).send({error : "Invalid title value"});
        return;
    }*/
    res.json(await thread_controller.createThread(req.body));
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
threadRouter.get('/:thread', async (req, res) => {
    const [threadResult, postResult] = await Promise.all([
        thread_controller.readThread(req.params.thread),
        post_controller.readAllPost_Thread(req.params.thread)
      ]);
      
      res.json({
        thread: threadResult,
        posts: postResult
      });
      
});

/**
 * Supprime un thread
 */
threadRouter.delete('/:thread', async (req, res) => {
    res.json(await thread_controller.deleteThread(req.params.thread));
});

/**
 * Creation d'un post
 */
threadRouter.post('/:thread', async (req, res) => {
    res.json(await post_controller.createPost(req.body,req.params.thread));
});


module.exports = threadRouter;