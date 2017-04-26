angular.module('app').controller('gamePlanController', gamePlanController);

gamePlanController.$inject = ['$scope', 'notSoGoodThingsAboutDrinkingService', 'gamePlanService'];

function gamePlanController($scope, notSoGoodThingsAboutDrinkingService, gamePlanService){


    $scope.userResponses = gamePlanService.usersAnswers;
    $scope.notSoGoodList = notSoGoodThingsAboutDrinkingService.getUsersAnswers();


    $scope.saveAnswer = function (index, usrRes) {
        $scope.userResponses[index].response = usrRes;
        console.log($scope.userResponses);
    };

    $scope.insertList = function () {
        var len = $scope.notSoGoodList.length;
        var str = "";
        console.log(len);
        for(i = 0; i < len; i++){
            str += $scope.notSoGoodList[i].response;
            if((len > 1) && (i < (len-1))){
                str += "\n";
            }
        }
        $scope.usrResponse = str;
    };


}