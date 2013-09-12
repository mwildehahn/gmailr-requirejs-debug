require.config({
    baseUrl: chrome.extension.getURL('src/js/'),
    paths: {
        jquery: '../../lib/js/bower_components/jquery/jquery.min',
        underscore: '../../lib/js/bower_components/underscore/underscore-min',
        backbone: '../../lib/js/bower_components/backbone/backbone',
        gmailr: '../../lib/js/vendor/gmailr/chrome/lib/gmailr',
        jquery_bbq: '../../lib/js/vendor/gmailr/chrome/lib/jquery-bbq/jquery.ba-bbq.min',
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'gmailr': {
            deps: ['jquery', 'jquery_bbq'],
            exports: 'Gmailr'
        },
    }
});

require([
    'app',
], function(App){
    App.init();
});
