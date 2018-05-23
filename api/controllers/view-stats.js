module.exports = {


  friendlyName: 'View stats',


  description: 'Display "Stats" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/stats',
      locals: {
        layout: false
      }
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
