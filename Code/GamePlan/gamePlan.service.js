/**
 * Created by ejhen on 3/23/2017.
 */

angular.module('app').service('gamePlanService',gamePlanService);


function gamePlanService() {

    //stores the users answers to What I Do Like About Drinking in What I Do Like About Drinking Survey
    //need to grab these responses from the database
    var usersAnswers = [
        {
            response: ""

        },
        {
            response: ""

        },
        {
            response: ""

        },
        {
            response: ""
        },
        {
            response: ""
        },
        {
            response: ""
        }
    ];

    return {
        usersAnswers: usersAnswers

    }
}

