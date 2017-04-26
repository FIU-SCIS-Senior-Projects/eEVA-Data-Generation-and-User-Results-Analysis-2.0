/**
 * Created by ejhen on 2/19/2017.
 */


angular.module('app').controller('TGTRevisitedController', TGTRevisitedController);

function TGTRevisitedController ($scope, goodThingsAboutDrinkingService){
    $scope.defaultResponses =goodThingsAboutDrinkingService.defaultAnswers;
    $scope.userResponses = [];

    $scope.addItem = function () {
        $scope.userResponses.push($scope.newResponse);
        goodThingsAboutDrinkingService.addUsersAnswer($scope.newResponse);
        //console.log(goodThingsAboutDrinkingService.getUsersAnswers());
        $scope.newResponse = '';
    };

    $scope.moveToUserResponses = function (elementIndex){
        $scope.userResponses.push($scope.defaultResponses[elementIndex].response);
        goodThingsAboutDrinkingService.addUsersAnswer($scope.defaultResponses[elementIndex].response);
        //console.log(goodThingsAboutDrinkingService.getUsersAnswers());
        $scope.defaultResponses.splice(elementIndex, 1);
        
    };

    $scope.moveToDefault = function (elementIndex){
        var obj = {
            response: $scope.userResponses[elementIndex],
            dragID: "drag-" + elementIndex
        };

        $scope.defaultResponses.push(obj);
        $scope.userResponses.splice(elementIndex, 1);
        goodThingsAboutDrinkingService.removeUsersAnswer(elementIndex);
        console.log(goodThingsAboutDrinkingService.getUsersAnswers());
    };

    $scope.allowDrop = function(ev) {
        ev.preventDefault();
    };

    $scope.drag = function(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };

    $scope.drop = function(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    };
}