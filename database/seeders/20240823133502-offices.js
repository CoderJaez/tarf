"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Offices", [
      {
        name: "LOCAL GOVERNMENT CAPACITIVE DEVELOPMENT DIVISION",
        acronym: "LGCDD",
      },
      {
        name: "LOCAL GOVERNMENT MONITORING AND EVALUATION DEVELOPMENT",
        acronym: "LGMED",
      },
      {
        name: "OFFICE OF REGIONAL DIRECTOR",
        acronym: "ORD",
      },
      {
        name: "FINANCE AND ADMINISTRATIVE DIVISION",
        acronym: "FAD",
      },
      {
        name: "PROJECT DEVELOPMENT AND MANAGEMENT UNIT",
        acronym: "PDMU",
      },
      {
        name: "LEGAL UNIT",
        acronym: "LU",
      },
      {
        name: "BUDGET SECTION",
        acronym: "BUDGET",
      },
      {
        name: "ACCOUNTING SECTION",
        acronym: "ACCOUNTING",
      },
      {
        name: "COMMISSION ON AUDIT",
        acronym: "COA",
      },
      {
        name: "ZAMBOANGA DEL SUR PROVINCIAL OFFICE",
        acronym: "ZDS_PO",
      },
      {
        name: "ZAMBOANGA DEL NORTE PROVINCIAL OFFICE",
        acronym: "ZDN_PO",
      },
      {
        name: "ZAMBOANGA SIBUGAY PROVINCIAL OFFICE",
        acronym: "ZS_PO",
      },
      {
        name: "ZAMBOANGA DEL SUR FIELD OFFICE",
        acronym: "ZDS_FO",
      },
      {
        name: "ZAMBOANGA DEL NORTE FIELD OFFICE",
        acronym: "ZDN_FO",
      },
      {
        name: "ZAMBOANGA SIBUGAY FIELD OFFICE",
        acronym: "ZS_FO",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
