const express = require('express');
const db = require('../database');
const userModel=require('./user_model');

/**
 * Crée un post
 */
async function createPost(post,thread,userId,callback){
    const date=new Date().toISOString().slice(0, 10);

    const user = await userModel.getUser(userId)
    let mana = user[0].mana + 5
    const updatemana = await userModel.updateManaUser(mana,userId)

    db.query("INSERT INTO `post`(`titre`, `contenu_post`, `date_post`,`id_thread`,`id_utilisateur`) VALUES ?",[[[post.titre,post.contenu_post,date,thread,post.id_utilisateur]]],function (err, result) {
      if (err) throw err;
      return callback(result);
    });
}

/**
 * Supprime un post ainsi que ces messages
 */
async function deletePost(idPost,callback){

  const sql = "SELECT `id_message` FROM `message` WHERE `id_post` = ?";

  try{
        db.query(sql,[idPost], function (err, result) {
          if (err) throw err;
          result.forEach(function(element){
            db.query("DELETE FROM `message` WHERE `id_message` =?",[element.id_message], function (err, result) {
              if (err) throw err;
            });
          });
        });
  }
  catch(e){
    console.log(e.message);
    return "erreur";
  }

  db.query("DELETE FROM `post` WHERE `id_post` =?",[idPost], function (err, result) {
    if (err) throw err;
    return callback(result);
  });

}

/**
 * Lit un post
 */
async function readPost(idPost){
  const sql = "SELECT `titre`, `contenu_post`, `date_post`, `id_thread`, `id_utilisateur` FROM `post` WHERE `id_post` = ?";
  try{
    return await new Promise((resolve, reject) => {
      db.query(sql,[idPost], function (err, result) {
        if (err) {
          return reject(err)
        };
        return resolve(result);
      });
    })
  }
  catch(e){
    console.log(e.message);
    return "erreur";
  }
}

/**
 * Lit tous les posts d'un thread
 */
async function readAllPost_Thread(idThread){
    const sql = "SELECT * FROM `post` WHERE `id_thread`= ?";
    try{
      return await new Promise((resolve, reject) => {
        db.query(sql,[idThread], function (err, result) {
          if (err) {
            return reject(err)
          };
          return resolve(result);
        });
      })
  }
  catch(e){
    console.log(e.message);
    return "erreur";
  }
}

module.exports={
  createPost: createPost,
  readPost: readPost,
  deletePost: deletePost,
  readAllPost_Thread: readAllPost_Thread
}



