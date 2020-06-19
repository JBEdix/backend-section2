class BaseRepository {
    constructor(model){
        this.model = model;
    }

    async get(id){
        return await this.model.findById(id);
    }
    //* pageSize: limita la cantidad de recursos o elementos de una coleccion que queremos traer desde mongodb.
    //* pageNum: es la pagina que queremos saber.
    async getAll(pageSize = 5, pageNum = 1){//Esto retorna 5 elementos de la primera pagina.
        //* skip: Le dice a mongoose cuantos elementos debe saltar para comenzar a buscar.
        //* Limit: lilmita de cantidad de elemento que debe retornar.
        const skips = pageSize * (pageNum - 1);
        return await this.model.find().skip(skips).limit(pageSize);
    }
    async create(entity){
        return await this.model.create(entity);
    }
    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity, {new: true});
    }
    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;