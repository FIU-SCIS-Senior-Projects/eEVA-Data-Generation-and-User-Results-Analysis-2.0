/**
 * Created by ejhen on 3/2/2017.
 */


angular.module('app').controller('RatingProsConsController', RatingProsConsController);

function ratingProsConsController ($scope, notSoGoodThingsAboutDrinkingService, goodThingsAboutDrinkingService){
    $scope.userResponsesLikeAboutDrinking = goodThingsAboutDrinkingService.getUsersAnswers();
    $scope.userResponsesDontLikeAboutDrinking = notSoGoodThingsAboutDrinkingService.getUsersAnswers();

    $scope.shiftDown = function(elementIndex, listName) {

        if (listName === 'WILAD'){
            var len = $scope.userResponsesLikeAboutDrinking.length;
            if(elementIndex < len-1){
                var temp = $scope.userResponsesLikeAboutDrinking[elementIndex + 1];
                $scope.userResponsesLikeAboutDrinking[elementIndex + 1] = $scope.userResponsesLikeAboutDrinking[elementIndex];
                $scope.userResponsesLikeAboutDrinking[elementIndex] = temp;
                goodThingsAboutDrinkingService.updateUsersAnswersOrder($scope.userResponsesLikeAboutDrinking);
            }

        }else if (listName === 'WIDLAD'){
            var len = $scope.userResponsesDontLikeAboutDrinking.length;
            if(elementIndex < len-1){
                var temp = $scope.userResponsesDontLikeAboutDrinking[elementIndex + 1];
                $scope.userResponsesDontLikeAboutDrinking[elementIndex + 1] = $scope.userResponsesDontLikeAboutDrinking[elementIndex];
                $scope.userResponsesDontLikeAboutDrinking[elementIndex] = temp;
                goodThingsAboutDrinkingService.updateUsersAnswersOrder($scope.userResponsesLikeAboutDrinking);
            }
        }
    };
    $scope.shiftUp = function(elementIndex, listName) {
        if (listName === 'WILAD'){
            var len = $scope.userResponsesLikeAboutDrinking.length;
            if(elementIndex != 0 ){
                var temp = $scope.userResponsesLikeAboutDrinking[elementIndex - 1];
                $scope.userResponsesLikeAboutDrinking[elementIndex - 1] = $scope.userResponsesLikeAboutDrinking[elementIndex];
                $scope.userResponsesLikeAboutDrinking[elementIndex] = temp;
                notSoGoodThingsAboutDrinkingService.updateUsersAnswersOrder($scope.userResponsesDontLikeAboutDrinking);
            }

        }else if (listName === 'WIDLAD'){
            var len = $scope.userResponsesDontLikeAboutDrinking.length;
            if(elementIndex != 0 ){
                var temp = $scope.userResponsesDontLikeAboutDrinking[elementIndex - 1];
                $scope.userResponsesDontLikeAboutDrinking[elementIndex - 1] = $scope.userResponsesDontLikeAboutDrinking[elementIndex];
                $scope.userResponsesDontLikeAboutDrinking[elementIndex] = temp;
                notSoGoodThingsAboutDrinkingService.updateUsersAnswersOrder($scope.userResponsesDontLikeAboutDrinking);
            }
        }
    };

}