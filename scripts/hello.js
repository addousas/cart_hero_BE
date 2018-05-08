module.exports = {


  friendlyName: 'Hello',


  description: 'Hello something.',


  inputs: {

  },


  fn: async function (inputs, exits) {




await sails.helpers.send-template-email.with({
      to: 'test@example.com',
      subject: 'Password reset instructions',
      template: 'email-reset-password',
      templateData: {
        fullName: 'Assim Adddous',
        token: '1234'
      }
    });



    // All done.
    return exits.success();

  }


};

