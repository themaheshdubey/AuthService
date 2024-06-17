const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');

const UserRepository = require('../repository/user-repository');

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user , JWT_KEY , {expiresIn: '1h'});
        } catch (error) {
            console.log('something went wrong at token creation');
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token , JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something wrong in token verification" , error);
            throw error;
        }
    }

    checkPassword(userInputPassword , encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPassword , encryptedPassword);
        } catch (error) {
            console.log('Something wrong at password comparison');
            throw error;
        }
    }

}

module.exports = UserService;