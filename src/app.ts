class AppController {

    static $inject = ['$scope'];

    brand = 'tiny-x';

    constructor($scope) {

    }
}

angular.module('app', [
    'ngRoute'
])
    .controller('AppController', AppController);