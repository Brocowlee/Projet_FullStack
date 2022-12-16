// On importe les packages
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
const db = require('./database');

// On importe les fichiers avec les routes
const userRouter = require("./routes/user_route.js");
const threadRouter = require("./routes/thread_route.js");
const postRouter = require("./routes/post_route.js");

/* ========== PARTIE SERVEUR ========== */

// On crée l'application express
const app = express();

// On configure le server
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Crée un serveur HTTP
const server = http.createServer(app);

// On allume le serveur au port 3000
server.listen(3000);

// Quand le serveur est allumé on le log
server.on('listening', function () {
    console.log("Le serveur est allumé");
});

// Si il y a une erreur on la log
server.on('error', function (error) {
    console.error(error);
});


/* ========== DECLARATION DES ROUTES ========== */

// On déclare que la route de base '/api' sera utilisé comme base pour les routes du fichier routes/api.js
app.use('/api/user',userRouter)
app.use('/api/thread',threadRouter)
app.use('/api/thread/:thread/:post',postRouter)