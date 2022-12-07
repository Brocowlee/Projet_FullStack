const db = require('../database');


async function createUser(user,callback){
    const date=new Date().toISOString().slice(0, 10);
    const sql="INSERT INTO utilisateur(pseudo, mdp, age, date_creation_compte) VALUES ?";
    const values=[[user.pseudo,user.mdp,user.age,date]];
    console.log(values);
    db.query(sql,[values], function (err, result) {
      if (err) throw err;
      return callback(result);
    });
}

async function deleteUser(){
    db.query("INSERT INTO utilisateur(pseudo, mdp, age, date_creation_compte) VALUES (pseudo,mdp,age,date)", function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

async function getUser(){
    db.query("INSERT INTO utilisateur(pseudo, mdp, age, date_creation_compte) VALUES (pseudo,mdp,age,date)", function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }

async function updateUser(){
    db.query("INSERT INTO utilisateur(pseudo, mdp, age, date_creation_compte) VALUES (pseudo,mdp,age,date)", function (err, result) {
        if (err) throw err;
        return callback(result);
      });
  }


module.exports={
    createUser: createUser,
    getUser: getUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    //readAllUsers: readAllUsers
}



