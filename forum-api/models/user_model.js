const crypto = require("crypto");
const db = require('../database');


async function createUser(user,callback){
    
    // On fait des tests
    if (user.pseudo === undefined || user.pseudo === "") {
        throw new Error("Le pseudo doit être défini et non vide pour créer un compte");
    }

    if (user.mdp === undefined || user.mdp === "") {
        throw new Error("Le mot de passe doit être défini et non vide pour créer un compte");
    }

    if (user.age === undefined || user.age === "") {
      throw new Error("L'age doit être défini et non vide pour créer un compte");
    }
    
    if (user.age  < 13) {
      throw new Error("Vous devez avoir plus de 13 ans pour créer un compte");
    }

    const date=new Date().toISOString().slice(0, 10);
    // On regarde déjà si un compte n'existe pas à ce pseudo (pour ne pas en recréer un)
    const alreadyExistingAccount = await getUserFromPseudo(user.pseudo);
    if (alreadyExistingAccount != "") {
        throw new Error("Un compte existe déjà avec ce pseudo");
    }
    // On utilise le sha256 pour sécuriser le mot de passe dans la base de données
    const passwordEncrypted = crypto.createHash('sha256').update(user.mdp).digest("hex");

    const sql="INSERT INTO utilisateur(pseudo, mdp, age, date_creation_compte) VALUES ?";
    const values=[[user.pseudo,passwordEncrypted,user.age,date]];
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
  const sql = "SELECT `id_utilisateur`,`pseudo`, `mdp`, `age`, `date_creation_compte`, `mana`, `admin` FROM `utilisateur` WHERE `id_utilisateur` = ?";
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

async function getUserFromPseudo_Mdp(pseudo,mdp){
  const sql = 'SELECT `id_utilisateur`,`pseudo`, `mdp`, `age`, `date_creation_compte`, `mana`, `admin` FROM `utilisateur` WHERE `pseudo` = ? AND `mdp` = ?';
  try{
    return await new Promise((resolve, reject) => {
      db.query(sql,[pseudo,mdp], function (err, result) {
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

async function getUserFromPseudo(pseudo){
  const sql = 'SELECT `id_utilisateur`, `pseudo`, `mdp`, `age`, `date_creation_compte`, `mana`, `admin` FROM `utilisateur` WHERE `pseudo` = ?';
  try{
    return await new Promise((resolve, reject) => {
      db.query(sql,[pseudo], function (err, result) {
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
  // On regarde déjà si un compte n'existe pas à ce pseudo (pour ne pas en recréer un)
  const alreadyExistingAccount = await getUserFromPseudo(pseudo);
  if (alreadyExistingAccount != "") {
      throw new Error("Un compte existe déjà avec ce pseudo");
  }
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
  getUserFromPseudo_Mdp: getUserFromPseudo_Mdp,
  getUserFromPseudo: getUserFromPseudo,
  updatePseudoUser: updatePseudoUser,
  updateMdpUser: updateMdpUser,
  updateAgeUser: updateAgeUser,
  updateManaUser: updateManaUser,
  deleteUser: deleteUser,
  //readAllUsers: readAllUsers
}



