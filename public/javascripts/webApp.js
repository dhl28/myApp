/**
 * Created by dhl on 2016/9/22.
 */
define(['jquery','angular','angularAMD','uiRouter'], function ($,angular,angularAMD) {
    'use strict';
    //angular.element(document).ready(function() {
    //    angular.bootstrap(document, ['myApp']);
    //});
    var myApp = angular.module('myApp', ['ui.router']);
    angularAMD.bootstrap(myApp);
    return myApp;
});