angular.module('app').controller('gettingWhatYouWantController', gettingWhatYouWantController);

gettingWhatYouWantController.$inject = ['$scope', 'gettingWhatYouWantService'];

function gettingWhatYouWantController ($scope, gettingWhatYouWantService){
    $scope.defaultResponses =gettingWhatYouWantService.defaultAnswers;
    $scope.userResponses = gettingWhatYouWantService.getUsersAnswers();

    $scope.addItem = function () {
        var dragID = "drag-" + ($scope.userResponses.length + 1);
        var obj = {
            response: $scope.newResponse,
            dragID: dragID
        };

        $scope.userResponses.push(obj);
        $scope.newResponse = '';
    };

    $scope.moveToUserResponses = function (elementIndex){

        $scope.userResponses.push($scope.defaultResponses[elementIndex]);
        $scope.defaultResponses.splice(elementIndex, 1);

    };

    $scope.moveToDefault = function (elementIndex){
        var obj = $scope.userResponses[elementIndex];

        $scope.defaultResponses.push(obj);
        $scope.userResponses.splice(elementIndex, 1);
    };

}