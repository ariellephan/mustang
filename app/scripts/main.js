require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        map: 'map'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
            // exports: 'jquery'
        },
        ball: {
            deps: ['jquery', 'three.min']
        }
    }
});

require(['app', 'jquery', 'map', 'mapMustang', 'mustang', 'ball', 'bootstrap'], function (app, $, map, mapMustang, mustang) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
    console.log(map.color);
    mapMustang.logMap();
});
