const { createContainer, asClass, asValue, asFunction } = require('awilix');// asclasss/value/funtion inyecta un objeto como una clase, valor o funcion
//config
const config = require('../config');
const app = require('.');
//Services
const { HomeService, UserService, IdeaService, CommentService, AuthService } = require('../services');
//controller
const { HomeController, UserController, IdeaController, CommentController, AuthController } =require('../controllers');
//routes
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes');
const Routes = require('../routes');
//models
const {comment, idea, user} = require('../models');
//Repositories
const {CommentRepository, IdeaRepository, UserRepository} = require('../repositories');

const container= createContainer();
container.register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(), 
    IdeaService: asClass(IdeaService).singleton(), 
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
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