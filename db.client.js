const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://root:5JBdRQzAZCyEPTcNNTBv6xSHzFql9hVu@dpg-cn29o2n109ks7394i6v0-a.frankfurt-postgres.render.com/root_86w4', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;