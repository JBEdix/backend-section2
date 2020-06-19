const BaseRepository = require('./base.repository');
let _user = null;

class UserRepository extends BaseRepository {
    constructor({ user }){
        super(user);
        _user = user;
    }
    async getUserByUserName(username){
        return await _user.findOne({username});
    }

}

module.exports = UserRepository;