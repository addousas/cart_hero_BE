
module.exports.cron = {
  myFirstJob: {
    schedule: '*/5 * * * * *',
    onTick: async function () {
    // 



await Cartcontent.stream(
 {
  recover_email_sent : false,
  client_id : 
 }
)
.eachRecord(async (user, next)=>{

//  if (Math.random() > 0.5) {
//    return next(new Error('Oops!  This is a simulated error.'));
//  }

  console.log(`Found a user ${user.id} named Finn.` , user );
  return next();
});

//await sails.helpers.sendTemplateEmail.with({
//      to: 'addous.assim@gmail.com',
//      subject: 'Password reset instructions',
//      template: 'email-reset-password',
//      templateData: {
//        fullName: 'Assim Adddous',
//        token: '1234'
//      }
//    });

    }
  }
};
