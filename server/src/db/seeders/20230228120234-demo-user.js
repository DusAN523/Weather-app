"use strict";

const bcrypt = require("bcrypt");
const password = "Password1";
const hashPassword = bcrypt.hashSync(password, 10);
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "trial@email.com",
        password: hashPassword,
        createdAt: "2023-02-01 00:00:01",
        updatedAt: "2023-02-01 00:00:01",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
