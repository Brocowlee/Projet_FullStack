const express = require("express");
const thread_controller = require("../controllers/thread_controller.js");
const post_controller = require("../controllers/post_controller.js");

// On crée le router de l'api
const threadRouter = express.Router();

/**
 * Création d'un thread
 */
threadRouter.post('/', async (req, res) => {
     if(req.params.thread === 'all'){
        res.status(400).send({error : "Invalid title value"});
        return;
    }
    res.json(await thread_controller.createThread(req.body));
});

/**
 * Récupère un thread
 */
threadRouter.get('/:thread', async (req, res) => {
    if(req.params.thread === 'all'){
        res.json(await thread_controller.readAllThread());
        return;
    }
    res.json(await thread_controller.readThread(req.params.thread));
});

/**
 * Récupère tous les thread
 */
// threadRouter.get('/all', async (req, res) => {
//     res.json(await thread_controller.readAllThread());
// });

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

/**
 * Supression d'un post
 */
threadRouter.delete('/:thread', async (req, res) => {
    res.json({});
});


module.exports = threadRouter;