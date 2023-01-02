const db=require('../database');
const thread_model=require('../models/thread_model')

/**
 * Créer un utilisateur
 * @param user L'utilisateur à créer
 * @returns L'utilisateur crée
 */
 async function createThread(thread,userId) {
    thread_model.createThread(thread,userId,function(data){
        console.log("thread created successfully!");
    });
}

/**
 * Lire un utilisateur par son id unique créé par MongoDB
 * @param threadId L'identifiant de l'utilisateur à lire
 * @returns L'utilisateur trouvé
 */
async function readThread(threadId) {
    return await thread_model.readThread(threadId)
}


/**
 * Supprime un utilisateur
 * @param threadId L'identifiant de l'utilisateur à supprimer
 * @returns L'utilisateur qui vient d'être supprimé
 */
async function deleteThread(threadId) {
    thread_model.deleteThread(threadId,function(data){
        console.log("thread deleted successfully!");
    });
}


/**
 * Récupère TOUS les utilisateurs depuis la base de données
 */
async function readAllThread() {
    return await thread_model.readAllThread()
}

/**
 * Récupère la valeur la valeur admin d'un utilisateur sur un thread
 */
async function isSuperUserThread(idUser,idThread) {
    return await thread_model.isSuperUserThread(idUser,idThread)
}

// On exporte les modules
module.exports = {
    createThread: createThread,
    readThread: readThread,
    deleteThread: deleteThread,
    readAllThread: readAllThread,
    isSuperUserThread : isSuperUserThread,
}