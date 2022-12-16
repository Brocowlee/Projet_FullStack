const db=require('../database');
const userModel=require('../models/user_model')


/**
 * Créer un utilisateur
 * @param user L'utilisateur à créer
 * @returns L'utilisateur crée
 */
 async function createUser(user) {
    userModel.createUser(user,function(data){
        //res.redirect('/');
        console.log("user created successfully!");
    });
}

/**
 * Lire un utilisateur par son id unique créé par MongoDB
 * @param userId L'identifiant de l'utilisateur à lire
 * @returns L'utilisateur trouvé
 */
async function readUser(userId) {
    return await userModel.getUser(userId)
}

/**
 * Mettre à jour un utilisateur
 * @param userId L'id de l'utilisateur à mettre à jour
 * @param userToUpdate Les éléments de l'utilisateur à mettre à jour
 * @returns L'utilisateur modifié
 */
async function updateUser(userId, userToUpdate) {

}

/**
 * Supprime un utilisateur
 * @param userId L'identifiant de l'utilisateur à supprimer
 * @returns L'utilisateur qui vient d'être supprimé
 */
async function deleteUser(userId) {
    userModel.deleteUser(userId,function(data){
        //res.redirect('/');
        console.log("user deleted successfully!");
    });
}

async function updatePseudoUser(pseudo,userId) {
    userModel.updatePseudoUser(pseudo,userId,function(data){
        //res.redirect('/');
        console.log("user updated successfully!");
    });
}

async function updateMdpUser(mdp,userId) {
    userModel.updateMdpUser(mdp,userId,function(data){
        //res.redirect('/');
        console.log("user updated successfully!");
    });
}

async function updateAgeUser(age,userId) {
    userModel.updateAgeUser(age,userId,function(data){
        //res.redirect('/');
        console.log("user updated successfully!");
    });
}

async function updateManaUser(mana,userId) {
    userModel.updateManaUser(mana,userId,function(data){
        //res.redirect('/');
        console.log("user updated successfully!");
    });
}

/**
 * Récupère TOUS les utilisateurs depuis la base de données
 */
async function readAllUsers() {
    return "sakut";
}

// On exporte les modules
module.exports = {
    createUser: createUser,
    readUser: readUser,
    updatePseudoUser: updatePseudoUser,
    updateMdpUser: updateMdpUser,
    updateAgeUser: updateAgeUser,
    updateManaUser: updateManaUser,
    deleteUser: deleteUser,
    readAllUsers: readAllUsers
}