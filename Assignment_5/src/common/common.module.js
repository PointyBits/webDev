(function() {
    'use strict';
    angular.module('common', [])
        .constant('APIBasePath', 'https://pointybits2.herokuapp.com')
        .config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();
