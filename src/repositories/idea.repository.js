const BaseRepository = require('./base.repository');
let _idea = null;

class IdeaRepository extends BaseRepository {
    constructor({ idea }){
        super(idea);
        _idea = idea;
    }

    async getUserIdeas(author){
        return await _idea.find({author});
    }
}

module.exports = IdeaRepository;