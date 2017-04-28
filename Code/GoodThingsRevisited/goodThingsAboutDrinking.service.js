




angular.module('app').service('goodThingsAboutDrinkingService',goodThingsAboutDrinkingService);


function goodThingsAboutDrinkingService ($http){

    //stores the users answers to The Good Things About Drinking Questionnaire
    var defaultAnswers = [
        {
            response: "It helps me sleep",
            dragID: "drag1",
        },
        {
            response: "It helps me be more open socially",
            dragID: "drag2"
        },
        {
            response: "It helps me forget my problems",
            dragID: "drag3"
        },
        {
            response: "It helps me adjust my attitude",
            dragID: "drag4"
        },
        {
            response: "It helps me feel sexier or have better sex",
            dragID: "drag5"
        },
        {
            response: "I feel more creative when I drink",
            dragID: "drag6"
        },
        {
            response: "I like the high",
            dragID: "drag7"
        }

    ];

    //stores the users answers to What I Do Like About Drinking in What I Do Like About Drinking Survey
    //need to grab these responses from the database
    var usersAnswers = [
		{
            response: "It doesn't last forever.",
            dragID: "drag1",
        },
        {
            response: "Can't afford to drink as much as I would like to.",
            dragID: "drag2"
        }
	];

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