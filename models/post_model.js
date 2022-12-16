const e = require('express');
const db = require('../database');


async function createPost(post,thread,callback){
    const date=new Date().toISOString().slice(0, 10);
    db.query("INSERT INTO `post`(`titre`, `contenu_post`, `date_post`,`id_thread`,`id_utilisateur`) VALUES ?",[[[post.titre,post.contenu_post,date,thread,post.id_utilisateur]]],function (err, result) {
        if (err) throw err;
        return callback(result);
      });
}

async function deletePost(idThread,callback){
    db.query("DELETE FROM `thread` WHERE `id_thread` =?",[idThread], function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

async function readPost(idThread){
  const sql = "SELECT `titre`, `description`, `limite_age`, `date_thread` FROM `thread` WHERE `id_thread` = ?";
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

  async function readAllPost_Thread(){
    const sql = "SELECT * FROM `thread`";
    const res=[];
    try{
        return await new Promise((resolve, reject) => {
          db.query(sql, function (err, result) {
            if (err) {
              return reject(err)
            };
            result.forEach(function(element){
              res.push(element);
            });
            return resolve(res);
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



