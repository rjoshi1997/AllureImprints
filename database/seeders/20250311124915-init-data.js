'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      // Create default user
      await queryInterface.bulkInsert("users", [
        {
          username: "ravi@allureimprints.com",
          firstName: "Ravi",
          lastName: "Joshi",
          isActive: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      console.log("Seeding completed successfully");  
    } catch (error) {
      console.error("Seeding failed:", error);
      throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete("users", null, {});  
    } catch (error) {
      console.error("Cleanup failed:", error);
      throw error;
    }
  }
};
