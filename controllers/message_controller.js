const db=require('../database');
const message_model=require('../models/message_model')

/**
 * Crée un message
 */
 async function createMessage(message,idPost) {
    message_model.createMessage(message,idPost,function(data){
        console.log("message created successfully!");
    });
}

/**
 * Lit un message par son id
 */
async function readMessage(messageId) {
    return await message_model.readPost(messageId);
}


/**
 * Supprime un message par son id
 */
async function deleteMessage(messageId) {
    message_model.deleteMessage(messageId,function(data){
        //res.redirect('/');
        console.log("message deleted successfully!");
    });
}


/**
 * Récupère TOUS les messages d'un post
 */
async function readAllMessage_Post(idPost) {
    return await message_model.readAllMessage_Post(idPost)
}

// On exporte les modules
module.exports={
    createMessage: createMessage,
    readMessage: readMessage,
    deleteMessage: deleteMessage,
    readAllMessage_Post: readAllMessage_Post
}