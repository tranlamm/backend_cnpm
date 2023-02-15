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

    await queryInterface.bulkInsert('Order_Details', [
      {
        ID_OD: 1,
        ID_Order: 1,
        ID_Product: 1,
        quantity : 1
      },
      {
        ID_OD: 1,
        ID_Order: 1,
        ID_Product: 2,
        quantity : 1
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
    await queryInterface.bulkDelete('Order_Details', null, {});
  }
};
