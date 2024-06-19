const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');

const {PORT} = require('./config/serverConfig');

const db = require('./models/index');


const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api' , apiRoutes);

    app.listen(PORT , () =>  {
        console.log(`Server started on port ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }
    })
}

prepareAndStartServer();