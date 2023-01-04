const db=require('../database');
const thread_model=require('../models/thread_model')

/**
 * Créer un thread
 * @param thread Les informations du thread à créer
 * @param userId L'utilisateur qui crée le thread
 * @returns Le thread crée
 */
 async function createThread(thread,userId) {
    thread_model.createThread(thread,userId,function(data){
        console.log("thread created successfully!");
    });
}

/**
 * Lire un thread par son id
 * @param threadId L'identifiant du thread à lire
 * @returns Le thread trouvé
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
 * Récupère TOUS les thread depuis la base de données
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