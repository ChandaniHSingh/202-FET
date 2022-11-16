var myApp = angular.module('myModuleApp', []);
myApp.controller('myController', function($scope){
    $scope.allList = [];
    $scope.add = function(){
        $scope.allList.push($scope.item);
        //$scope.allList.push(document.querySelector("#text").value);
    } 
});