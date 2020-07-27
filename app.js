(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.name = '';
        $scope.anotherName = '';
        //$scope.items = tooMuchQues($scope.name);

        $scope.test = function()  {
            console.log("hello");
        };

        $scope.buttocks = function() {
            console.log("hello2");
        };

        $scope.tooMuchQues = function(){

            $scope.i = $scope.name.split(',').length;

            if($scope.name === '' || $scope.i == 0){
                $scope.anotherName = 'Please enter data first'
             }
            else if($scope.i<=3){
                $scope.anotherName = 'Enjoy!';
            }

            else if($scope.i >3){
                $scope.anotherName = 'Too much!';
            }
            console.log($scope.i);
            
        };

    }

})();