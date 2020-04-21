/*
Import
*/
    const express = require('express');
    const mongoose = require('mongoose');

//

/*
Configuration
*/

    const app = express(); // Le serveur HTTP
    const port = 5000;
    const mongo_url = 'mongodb+srv://Alexis2:test@cluster0-pjtjz.mongodb.net/test?retryWrites=true&w=majority';

    mongoose.connect(mongo_url, {
        dbName: 'ma_super_bdd',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB bien connecté");
    }).catch((error) => {
        console.log(error);
    });


    // Le milddleware pour le json
    app.use(express.json());

    app.use('/api/users', require('./routes/users'));
    app.use('/api/event', require('./routes/event'))

//


/*
Start Server
*/
    app.listen(port,() => {
        console.log(`Server Listening on port ${port}`);
        console.log(`http://localhost:${port}`);
    });

