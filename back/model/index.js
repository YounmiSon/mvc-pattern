const Sequelize = require("sequelize");
const config = require("../config/config");

const Post = require("./posts");
const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {};

db.sequelize = sequelize;
db.Post = Post;

Post.init(sequelize);

module.exports = db;
