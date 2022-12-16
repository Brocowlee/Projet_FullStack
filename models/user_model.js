const db = require('../database');


async function createUser(user,callback){
    const date=new Date().toISOString().slice(0, 10);
    const sql="INSERT INTO utilisateur(pseudo, mdp, age, date_creation_compte) VALUES ?";
    const values=[[user.pseudo,user.mdp,user.age,date]];
    db.query(sql,[values], function (err, result) {
      if (err) throw err;
      return callback(result);
    });
}

async function deleteUser(idUser,callback){
  const sql = "DELETE FROM utilisateur WHERE id_utilisateur =?";
    db.query(sql,[idUser], function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

async function getUser(idUser){
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

async function updatePseudoUser(pseudo,idUser,callback){
    db.query("UPDATE `utilisateur` SET `pseudo`= ? WHERE `id_utilisateur`= ?",[pseudo,idUser], function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

  async function updateMdpUser(mdp,idUser,callback){
    db.query("UPDATE `utilisateur` SET `mdp`= ? WHERE `id_utilisateur`= ?",[mdp,idUser], function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

  async function updateAgeUser(age,idUser,callback){
    db.query("UPDATE `utilisateur` SET  `age`= ? WHERE `id_utilisateur`= ?",[age,idUser], function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

  async function updateManaUser(mana,idUser,callback){
    db.query("UPDATE `utilisateur` SET  `mana`= ? WHERE `id_utilisateur`= ?",[mana,idUser], function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

module.exports={
    createUser: createUser,
    getUser: getUser,
    updatePseudoUser: updatePseudoUser,
    updateMdpUser: updateMdpUser,
    updateAgeUser: updateAgeUser,
    updateManaUser: updateManaUser,
    deleteUser: deleteUser,
    //readAllUsers: readAllUsers
}



