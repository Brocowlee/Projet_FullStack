const db = require('../database');


async function createThread(thread,callback){
    const date=new Date().toISOString().slice(0, 10);
    db.query("INSERT INTO `thread`(`titre`, `description`, `limite_age`,`date_thread`) VALUES ?",[[[thread.titre,thread.description,thread.limite_age,date]]],function (err, result) {
        if (err) throw err;
        return callback(result);
      });
}

async function deleteThread(idThread,callback){
    db.query("DELETE FROM `thread` WHERE `id_thread` =?",[idThread], function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

async function readThread(idThread){
  const sql = "SELECT `titre`, `description`, `limite_age`, `date_thread` FROM `thread` WHERE `id_thread` =?";
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

  async function readAllThread(idUser){
    const sql = "SELECT `pseudo`, `mdp`, `age`, `date_creation_compte`, `mana`, `admin` FROM `utilisateur` WHERE `id_utilisateur` = ?";
    try{
        return await new Promise((resolve, reject) => {
          db.query(sql,[idUser], function (err, result) {
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
    readAllThread: readAllThread
}



