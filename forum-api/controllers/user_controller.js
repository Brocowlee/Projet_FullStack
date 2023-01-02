const crypto = require("crypto");
const db=require('../database');
const userModel=require('../models/user_model')


/**
 * Créer un utilisateur
 * @param user L'utilisateur à créer
 */
 async function createUser(user) {

    try {
        userModel.createUser(user,function(data){
            console.log("user created successfully!");
        });
    } catch (e) {
        res.status(401).send(e.message);
    }

}

/**
 * Lire un utilisateur par son id unique
 * @param userId L'identifiant de l'utilisateur à lire
 * @returns L'utilisateur trouvé
 */
async function readUser(userId) {
    return await userModel.getUser(userId)
}

/**
 * Lire un utilisateur par son id unique
 * @param pseudo pseudo de l'utilisateur à lire
 * @param mdp mdp de l'utilisateur à lire
 * @returns L'utilisateur trouvé
 */
async function getUserFromPseudo_Mdp(pseudo,mdp){
    return await userModel.getUserFromPseudo_Mdp(pseudo,mdp)
}

async function readUserFromPseudo(pseudo){
    return await userModel.getUserFromPseudo(pseudo)
}

/**
 * Supprime un utilisateur
 * @param userId L'identifiant de l'utilisateur à supprimer
 * @returns L'utilisateur qui vient d'être supprimé
 */
async function deleteUser(userId) {
    userModel.deleteUser(userId,function(data){
        console.log("user deleted successfully!");
    });
}

async function updatePseudoUser(pseudo,userId) {
    userModel.updatePseudoUser(pseudo,userId,function(data){
        console.log("user updated successfully!");
    });
}

async function updateMdpUser(mdp,userId) {
    userModel.updateMdpUser(mdp,userId,function(data){
        console.log("user updated successfully!");
    });
}

async function updateAgeUser(age,userId) {
    userModel.updateAgeUser(age,userId,function(data){
        console.log("user updated successfully!");
    });
}

async function updateManaUser(mana,userId) {
    userModel.updateManaUser(mana,userId,function(data){
        console.log("user updated successfully!");
    });
}

/**
 * On essaye de connecter l'utilisateur
 * @param headerAuthorization Le header authorization
 */
const logInUser = async (headerAuthorization) => {

    // On récupère le mot de passe et l'email du header authorization
    let [pseudo, password] = Buffer.from(headerAuthorization, 'base64').toString().split(':');
    // On hash le mot de passe avec l'algorithme SHA256 et on veut le résultat en hexadecimal
    let passwordToCheck = crypto.createHash('sha256').update(password).digest("hex");

    // On cherche le compte qui a cet email avec le mot de passe.
    let accountFound = await getUserFromPseudo_Mdp(pseudo.toLowerCase(),passwordToCheck);
    // Si le compte existe alors on renvoie ses données
    if (accountFound != "") {

        return {
            userId: accountFound[0].id_utilisateur,
            pseudo: accountFound[0].pseudo,
            isSuperUser: accountFound[0].admin
        };
    }

    // Sinon on veut renvoyer une erreur
    throw new Error("Aucun compte n'a été trouvé avec ces identifiants");
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
    getUserFromPseudo_Mdp, getUserFromPseudo_Mdp,
    readUserFromPseudo, readUserFromPseudo,
    updatePseudoUser: updatePseudoUser,
    updateMdpUser: updateMdpUser,
    updateAgeUser: updateAgeUser,
    updateManaUser: updateManaUser,
    deleteUser: deleteUser,
    readAllUsers: readAllUsers,
    logInUser : logInUser
}