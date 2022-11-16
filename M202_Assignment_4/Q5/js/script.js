let k = 1;
let arr = [];
var myApp = angular.module('myModuleApp', []);
myApp.controller('myController', function($scope){
    $scope.allList = [];
    for (var i of $scope.allList) {
            arr.push(i);
        }
    $scope.add = function(){
        let title = $scope.title;
        let rating = $scope.rating;
        let newlist = {"num":k,"title":title,"rating":rating};
        //let str = "<tr id='tr"+k+"'><td>"+title+"</td><td>"+rating+"</td><td><button type='submit' class='btn btn-danger' onClick='onDelete(tr"+k+")'>Delete</button></td></tr>";
        $scope.allList.push(newlist);
        k++;
        arr.push(newlist);
        
    } 
    
    $scope.delete = function(){
        
        //$scope.allList.pop();
    }
    
});

/*
function onDelete(){
    for(var i of arr){
       if(i["num"] == 1){
        
       }
    }
}

*/