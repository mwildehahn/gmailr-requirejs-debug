scripts = document.getElementsByTagName('head')[0].getElementsByTagName('script');
var baseURL = null;
for(var i =0,l=scripts.length; i <l;i++) {
    var matches = /(.*?)src\/js\/foo\.js$/.exec(scripts[i].src);
    if(matches) {
        baseURL = matches[1];
        break;
    }
}
require.config({
    baseUrl: baseURL,
    paths: {
        jquery: 'lib/js/bower_components/jquery/jquery.min',
        underscore: 'lib/js/bower_components/underscore/underscore-min',
        backbone: 'lib/js/bower_components/backbone/backbone',
        gmailr: 'lib/js/vendor/gmailr/chrome/lib/gmailr',
        jquery_bbq: 'lib/js/vendor/gmailr/chrome/lib/jquery-bbq/jquery.ba-bbq.min',
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
    'src/js/app',
], function(App){
    App.init();
});
