const BaseRepository = require('./base.repository');
let _user = null;

class UserRepository extends BaseRepository {
    constructor({ user }){
        super(user);
        _user = user;
    }
    async getUserByUserName(userName){
        return await _user.findOne({userName});
    }

}

module.exports = UserRepository;