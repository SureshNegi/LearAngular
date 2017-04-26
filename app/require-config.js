require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        ngRoute: 'bower_components/angular-route/angular-route',
        uiRouter: 'bower_components/angular-route/angular-ui-router'
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "ngRoute": ['angular'],
        "uiRouter": ['angular']

    }
});

require(['js/app', 'js/controllers'],
    function (app) {
        app.init();
        //angular.bootstrap(document, ['F1FeederApp']);
    }
);
