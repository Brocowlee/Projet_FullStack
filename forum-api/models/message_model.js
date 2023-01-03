const e = require('express');
const db = require('../database');
const userModel=require('./user_model');


async function createMessage(message,idPost,userId,callback){
    const date=new Date().toISOString().slice(0, 10);

    const user = await userModel.getUser(userId)
    let mana = user[0].mana + 1
    const updatemana = await userModel.updateManaUser(mana,userId)

    db.query("INSERT INTO `message`(`contenu_message`,`date_message`,`id_utilisateur`, `id_post`,`id_message_lien`) VALUES ?",[[[message.contenu_message,date,message.id_utilisateur,idPost,message.id_message_lien]]],function (err, result) {
        if (err) throw err;
        return callback(result);
      });
}

async function deleteMessage(idMessage,callback){
  
  const sql = "SELECT `id_message` FROM `message` WHERE `id_message_lien` = ?";

  try{
        db.query(sql,[idMessage], function (err, result) {
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

  db.query("DELETE FROM `message` WHERE `id_message` =?",[idMessage], function (err, result) {
    if (err) throw err;
    return callback(result);
  });

  }

async function readMessage(idMessage){
  const sql = "SELECT `contenu_message`, `date_message`, `id_utilisateur`,`id_post`,`id_message_lien` FROM `message` WHERE `id_message` = ?";
  try{
      return await new Promise((resolve, reject) => {
        db.query(sql,[idMessage], function (err, result) {
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

  async function readAllMessage_Post(idPost){
    const sql = "SELECT * FROM `message` WHERE `id_post`= ?";
    const res=[];
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



module.exports={
    createMessage: createMessage,
    readMessage: readMessage,
    deleteMessage: deleteMessage,
    readAllMessage_Post: readAllMessage_Post
}



