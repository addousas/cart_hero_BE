module.exports = { 

sails.helpers.sendTemplateEmail.with({
      to: 'test@example.com',
      subject: 'Password reset instructions',
      template: 'email-reset-password',
      templateData: {
        fullName: userRecord.fullName,
        token: token
      }
    });

}
