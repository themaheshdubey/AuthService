const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

module.exports = {
    PORT: process.env.Port,
    SALT: bcrypt.genSaltSync(10)
}
