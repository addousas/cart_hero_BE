
module.exports.cron = {
  myFirstJob: {
    schedule: '* * * * * *',
    onTick: async function () {
// iterate oover cartcontent record 
// 
console.log('cron: started',Date.now())
await Cartcontent.stream(
 {
  recover_email_sent : false
  //,createdAt: { '>': Date.now() - 1000*60*2 }
 }
)
.eachRecord(async (cart, next)=>{
  
  console.log('cart:' , cart)
  await sails.helpers.sendTemplateEmail.with({
        to: cart.cart_owner || 'addous.assim@example.com' ,
        subject: cart.item_title || 'Blah Blah',
        template: 'email-reset-password',
        templateData: { fullName: 'Assim Adddous', token: '1234' }
      });  
  
  await Cartcontent.update({id : cart.id})
    .set({recover_email_sent: true});

  return next();
});

 // {
 //    "createdAt": 1525140488499,
 //    "updatedAt": 1525140488499,
 //    "id": 25,
 //    "store_base_url": "",
 //    "left_page": false,
 //    "exit_intent": false,
 //    "cart_owner": "",
 //    "cart_url": "",
 //    "item_id": "",
 //    "item_title": "SHIT this SHIT",
 //    "item_price": "123",
 //    "item_line_price": "",
 //    "item_quantity": "",
 //    "item_sku": "",
 //    "item_grams": "",
 //    "item_vendor": "",
 //    "item_properties": "",
 //    "item_variant_id": "",
 //    "item_gift_card": false,
 //    "item_url": "",
 //    "item_image": "",
 //    "item_handle": "",
 //    "item_requires_shipping": false,
 //    "item_product_title": "",
 //    "item_product_description": "",
 //    "item_product_type": "",
 //    "item_variant_title": "",
 //    "item_variant_options": ""
 //  },






    }
  }
};
