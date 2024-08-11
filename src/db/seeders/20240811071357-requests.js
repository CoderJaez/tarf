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
    await queryInterface.bulkInsert("Requests", [
      {
        type: "DESKTOP/LAPTOP REPAIR",
      },
      {
        type: "APPLICATION/SOFTWARE/SYSTEM ASSISTANCE",
      },
      {
        type: "INTERNET CONNECTIVITY",
      },
      {
        type: "HARDWARE INSTALLATION",
      },
      {
        type: "GOVMAIL ASSISTANCE",
      },
      {
        type: "POSTING/UPDATE OF INFORMATION IN DILG WEBSITE",
      },
      {
        type: "PRINTER/SCANNER/COPIER",
      },
      {
        type: "IP TELEPHONY",
      },
      {
        type: "OTHERS (please specify)",
      },
      //SubType for Desktop Laptop Repaid
      {
        type: "Hardware Related",
        requestId: 1,
      },
      {
        type: "Software Related",
        requestId: 1,
      },
      {
        type: "PC Reformat/Re-image",
        requestId: 1,
      },
      {
        type: "PC Tune-up/Windows update",
        requestId: 1,
      },
      {
        type: "Virus Scanning",
        requestId: 1,
      },

      //SubType for APPLICATION/SOFTWARE/ SYSTEM ASSISTANCE
      {
        type: "DILG Portal/System",
        requestId: 2,
      },
      {
        type: "Google Drive",
        requestId: 2,
      },
      {
        type: "Software Installation",
        requestId: 2,
      },
      {
        type: "Video Conferencing",
        requestId: 2,
      },
      {
        type: "Others (please specify)",
        requestId: 2,
      },

      //SubType for INTERNET CONNECTIVITY
      {
        type: "Installation/Relocation",
        requestId: 3,
      },
      {
        type: "Troubleshooting",
        requestId: 3,
      },
      {
        type: "Web Apps/Website Access",
        requestId: 3,
      },

      //SUBTYPE FOR HARDWARE INSTALLATION
      {
        type: "Desktop Assembly/PC Setup",
        requestId: 4,
      },
      {
        type: "Computer Parts Installation",
        requestId: 4,
      },
      {
        type: "Router/Access Point Installation",
        requestId: 4,
      },
      {
        type: "Network Switch Deployment",
        requestId: 4,
      },

      //SUBTYPE FOR GOVMAIL ASSISTANCE
      {
        type: "Create/Update/Delete Account",
        requestId: 5,
      },
      {
        type: "Password Reset/Unlock Account",
        requestId: 5,
      },

      //SUBTYPE FOR PRINTER/SCANNER/COPIER
      {
        type: "Installation/Setup",
        requestId: 7,
      },
      {
        type: "Networking/Sharing",
        requestId: 7,
      },
      {
        type: "Networking/Sharing",
        requestId: 7,
      },

      //SUBTYPE FOR IP TELEPHONY
      {
        type: "Installation/Relocation",
        requestId: 8,
      },
      {
        type: "Troubleshooting",
        requestId: 8,
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

    await queryInterface.bulkDelete("Requests", null, {});
  },
};
