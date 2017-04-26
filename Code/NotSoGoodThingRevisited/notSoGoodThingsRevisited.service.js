/**
 * Created by ejhen on 3/2/2017.
 */






angular.module('app').service('notSoGoodThingsRevisitedService',notSoGoodThingsRevisitedService);


function notSoGoodThingsRevisitedService (){

    //stores the users answers to The Good Things About Drinking Questionnaire
    var defaultAnswers = [
        {
            response: "It affects my relationships with others",
            dragID: "drag1",
        },
        {
            response: "Health-related problems",
            dragID: "drag2"
        },
        {
            response: "Money Problems",
            dragID: "drag3"
        },
        {
            response: "Memory blackouts",
            dragID: "drag4"
        },
        {
            response: "Make poor decisions",
            dragID: "drag5"
        },
        {
            response: "Feel guilty or ashamed",
            dragID: "drag6"
        },
        {
            response: "Miss class or work the next day",
            dragID: "drag7"
        },
        {
            response: "Affecting my school or work performance",
            dragID: "drag8"
        },
        {
            response: "Shamed or embarrassed someone",
            dragID: "drag9"
        },
        {
            response: "Neglecting responsibilities",
            dragID: "drag10"
        },
        {
            response: "Need to drink more for the same effect",
            dragID: "drag11"
        },
        {
            response: "Passing out or fainting suddenly",
            dragID: "drag12"
        },
        {
            response: "Feeling dependent on alcohol",
            dragID: "drag13"
        },
        {
            response: "Being a poor role model for my kids when I drink",
            dragID: "drag14"
        },
        {
            response: "DWI/DUIs",
            dragID: "drag15"
        },
        {
            response: "Other legal problems",
            dragID: "drag16"
        }

    ];

    //stores the users answers to What I Like About Drinking in The Good Things Revisited Survey
    //need to grab these responses from the database
    var usersAnswers = [];

    return{
        defaultAnswers: defaultAnswers,
        addUsersAnswer: function (answer) {
            var addIndex = usersAnswers.length;
            usersAnswers[addIndex] = answer;

        },
        removeUsersAnswer: function (elemIndex){
            usersAnswers.splice(elemIndex, 1);
        },
        getUsersAnswers: function (){
            return usersAnswers;
        }

    };
}