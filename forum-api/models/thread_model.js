const e = require('express');
const db = require('../database');
const userModel=require('./user_model');
const postModel=require('./post_model');


async function createThread(thread,userId,callback){
  const date=new Date().toISOString().slice(0, 10);
  const alreadyExistingThread = await readThreadFromTitre(thread.titre);
    if (alreadyExistingThread != "") {
        throw new Error("Un Thread existe déjà avec ce titre");
    }
  db.query("INSERT INTO `thread`(`titre`, `description`, `limite_age`,`date_thread`) VALUES ?",[[[thread.titre,thread.description,thread.limite_age,date]]],function (err, result) {
      if (err) throw err;
  });

  const user = await userModel.getUser(userId)
  let mana = user[0].mana + 10
  const updatemana = await userModel.updateManaUser(mana,userId)

  const rthread = await readThreadFromTitre(thread.titre).then();
  db.query("INSERT INTO `utilisateur_thread`(`id_utilisateur`, `id_thread`, `suivre`,`admin`) VALUES ?",[[[userId,rthread[0].id_thread,1,1]]],function (err, result) {
    if (err) throw err;
    return callback(result);
});
}

async function deleteThread(idThread,callback){

  const sql = "SELECT `id_post` FROM `post` WHERE `id_thread` = ?";

  try{
        db.query(sql,[idThread], function (err, result) {
          if (err) throw err;
          result.forEach(function(element){
            postModel.deletePost(element.id_post,function(data){
              console.log("post deleted successfully!");
            });
          });
        });
  }
  catch(e){
    console.log(e.message);
    return "erreur";
  }

  
  db.query("DELETE FROM `utilisateur_thread` WHERE `id_thread` = ?",[idThread], function (err, result) {
    if (err) throw err;
  });

  db.query("DELETE FROM `thread` WHERE `id_thread` =?",[idThread], function (err, result) {
      if (err) throw err;
      return callback(result);
    });
}

async function readThread(idThread){
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

async function readThreadFromTitre(idThread){
  const sql = "SELECT * FROM `thread` WHERE `titre` = ?";
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

async function readAllThread(){
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

async function isSuperUserThread(idUser,idThread){
  const sql = "SELECT admin FROM `utilisateur_thread` WHERE `id_utilisateur`=" + idUser  + " AND id_thread =" + idThread;
  try{
    return await new Promise((resolve, reject) => {
      db.query(sql, function (err, result) {
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
  createThread: createThread,
  readThread: readThread,
  deleteThread: deleteThread,
  readAllThread: readAllThread,
  isSuperUserThread :isSuperUserThread,
}



