angular.module('app').service('goodThingsRevisitedService',goodThingsRevisitedService);


function goodThingsRevisitedService ($http){

    //stores the users answers to The Good Things About Drinking Questionnaire
    var usersAnswersTGTAD = [
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

    //stores the users answers to What I Like About Drinking in The Good Things Revisited Survey
    var usersAnswersWILAD = [];

    return{
        usersAnswersTGTAD: usersAnswersTGTAD,
        addUsersAnswersWILAD: function (answer) {
            var addIndex = usersAnswersWILAD.length;
            usersAnswersWILAD[addIndex] = answer;

            $http.post('/api/users/answer/', usersAnswersWILAD)
                .then(
                    function(data) {
                        if(data.success)
                            console.log("No problems");
                        else
                            console.log("Got problems");
                    },
                    function(err) {
                        console.log("Server is down!");
                    })

        },
        removeUsersAnswersWILAD: function (elemIndex){
            usersAnswersWILAD.splice(elemIndex, 1);
        },
        getUsersAnswersWILAD: function (){
            return usersAnswersWILAD;
        }

    };
}