const {User} = require('../models/index');

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("something wrong at repository layer");
            throw error;
        }
    }

}

module.exports = UserRepository;