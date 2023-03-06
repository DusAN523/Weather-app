"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "trial@email.com",
        password: "Password1",
        createdAt: "2023-02-01 00:00:01",
        updatedAt: "2023-02-01 00:00:01",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
