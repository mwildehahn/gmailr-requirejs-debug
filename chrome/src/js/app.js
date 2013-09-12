define([
    'jquery',
    'underscore',
    'backbone',
    'gmailr',
], function($, _, Backbone, Gmailr) {

    'use strict';

    Gmailr.debug = true;

    var init = function() {
        console.log('loading extension...');

        Gmailr.init(function(G) {
            console.log('loading gmailr observers...');

            G.observe(Gmailr.EVENT_DRAFT_SAVE, function(details) {
                console.log('user saved draft', details);
            });

            G.observe(Gmailr.EVENT_COMPOSE, function(details) {
                console.log('user sent message', details);
            });

        });
    };

    return {
        init: init
    };

});
