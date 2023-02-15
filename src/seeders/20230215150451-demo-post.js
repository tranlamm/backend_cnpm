'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Posts', [
      {
        ID_Post: 1,
        ID_User: 1,
        title: 'Title 1',
        content: 'This is content of post 1',
        likes: 120,
        status: 'APPROVE'
      },
      {
        ID_Post: 2,
        ID_User: 1,
        title: 'Title 2',
        content: 'This is content of post 2',
        likes: 120,
        status: 'APPROVE'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
