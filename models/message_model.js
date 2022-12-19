const e = require('express');
const db = require('../database');


async function createMessage(message,idPost,callback){
    const date=new Date().toISOString().slice(0, 10);
    db.query("INSERT INTO `message`(`contenu_message`,`date_message`,`id_utilisateur`, `id_post`,`id_message_lien`) VALUES ?",[[[message.contenu_message,date,message.id_utilisateur,idPost,message.id_message_lien]]],function (err, result) {
        if (err) throw err;
        return callback(result);
      });
}


/**
 
TO DO
  |
  |
 \ /

 */
async function deleteMessage(idMessage,callback){
    //TO DO
  }

async function readMessage(idMessage){
    //TO DO
  }

  async function readAllMessage_Post(idPost){
    //TO DO
  }



module.exports={
    createMessage: createMessage,
    readMessage: readMessage,
    deleteMessage: deleteMessage,
    readAllMessage_Post: readAllMessage_Post
}



