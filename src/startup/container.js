const { createContainer, asClass, asValue, asFunction } = require('awilix');// asclasss/value/funtion inyecta un objeto como una clase, valor o funcion
//config
const config = require('../config');
const app = require('.');
//Services
const { HomeService } = require('../services')
//controller
const { HomeController } =require('../controllers')
//routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');
//models
const {comment, idea, user} = require('../models');
//Repositories
const {CommentRepository, IdeaRepository, UserRepository} = require('../repositories');

const container= createContainer();
container.register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
}).register({
    comment:asValue(comment), 
    idea:asValue(idea), 
    user:asValue(user)
}).register({
    CommentRepository: asClass(CommentRepository).singleton(), 
    IdeaRepository: asClass(IdeaRepository).singleton(),
    UserRepository: asClass(UserRepository).singleton()
});

module.exports = container;