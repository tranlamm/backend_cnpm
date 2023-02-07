'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      ID_User: {
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      ID_Role: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "ID_Role"
        } 
      },
      fullname: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
      },
      phone_number: {
        type: Sequelize.STRING(45)
      },
      address: {
        type: Sequelize.STRING(45)
      },
      password: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      total_order: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};