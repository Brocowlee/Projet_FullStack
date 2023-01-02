const express = require('express');
const db = require('../database');


async function createPost(post,thread,callback){
    const date=new Date().toISOString().slice(0, 10);
    db.query("INSERT INTO `post`(`titre`, `contenu_post`, `date_post`,`id_thread`,`id_utilisateur`) VALUES ?",[[[post.titre,post.contenu_post,date,thread,post.id_utilisateur]]],function (err, result) {
      if (err) throw err;
      return callback(result);
    });
}

async function deletePost(idPost,callback){
    db.query("DELETE FROM `post` WHERE `id_post` =?",[idPost], function (err, result) {
      if (err) throw err;
      return callback(result);
    });
}

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



