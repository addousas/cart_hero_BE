/**
 * Carttracker.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    store_base_url:{
        type: 'string'
    },
    left_page:{
        type: 'boolean',
        defaultsTo : false
    },
    exit_intent:{
        type: 'boolean',
        defaultsTo: false,
    },
    cart_owner: {
        type: 'string'
    },
    cart_url:{
        type: 'string'
    },
    item_id: {
        type: 'string'
    },
    item_title: {
        type: 'string'
    },
    item_price: {
        type: 'string'
    },
    item_line_price: {
        type: 'string'
    },
    item_quantity: {
        type: 'string'
    },
    item_sku: {
        type: 'string'},
    item_grams: {
        type: 'string'
    },
    item_vendor: {
        type: 'string'
    },
    item_properties:{
        type: 'string'
    },
    item_variant_id: {
        type: 'string'
    },
    item_gift_card: {
        type: 'boolean'
    },
    item_url: {
        type: 'string'
    },
    item_image: {
        type: 'string'
    },
    item_handle: {
        type: 'string'
    },
    item_requires_shipping: {
        type: 'boolean'
    },
    item_product_title: {
        type: 'string'
    },
    item_product_description: {
        type: 'string'
    },
    item_product_type: {
        type: 'string'
    },
    item_variant_title: {
        type: 'string'
    },
    item_variant_options:{
        type: 'string'
    }





    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

