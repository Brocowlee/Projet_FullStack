const db=require('../database');
const post_model=require('../models/post_model')

/**
 * Créer un post
 */
 async function createPost(post,idThread,userId) {
    post_model.createPost(post,idThread,userId,function(data){
        console.log("post created successfully!");
    });
}

/**
 * Lire un post par son id
 */
async function readPost(PostId) {
    return await post_model.readPost(PostId)
}


/**
 * Supprime un post par son id
 */
async function deletePost(PostId) {
    post_model.deletePost(PostId,function(data){
        console.log("post deleted successfully!");
    });
}


/**
 * Récupère TOUS posts d'un thread
 */
async function readAllPost_Thread(idThread) {
    return await post_model.readAllPost_Thread(idThread)
}

// On exporte les modules
module.exports = {
    createPost: createPost,
    readPost: readPost,
    deletePost: deletePost,
    readAllPost_Thread: readAllPost_Thread
}