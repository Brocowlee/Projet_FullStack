const db=require('../database');
const post_model=require('../models/post_model')

/**
 * Créer un utilisateur
 * @param user L'utilisateur à créer
 * @returns L'utilisateur crée
 */
 async function createPost(post,thread) {
    post_model.createPost(post,thread,function(data){
        //res.redirect('/');
        console.log("post created successfully!");
    });
}

/**
 * Lire un utilisateur par son id unique créé par MongoDB
 * @param threadId L'identifiant de l'utilisateur à lire
 * @returns L'utilisateur trouvé
 */
async function readPost(PostId) {
    return await post_model.readPost(PostId)
}


/**
 * Supprime un utilisateur
 * @param threadId L'identifiant de l'utilisateur à supprimer
 * @returns L'utilisateur qui vient d'être supprimé
 */
async function deletePost(PostId) {
    post_model.deletePost(PostId,function(data){
        //res.redirect('/');
        console.log("post deleted successfully!");
    });
}


/**
 * Récupère TOUS les utilisateurs depuis la base de données
 */
async function readAllPost() {
    return await post_model.readAllPost()
}

// On exporte les modules
module.exports = {
    createPost: createPost,
    readPost: readPost,
    deletePost: deletePost,
    readAllPost: readAllPost
}