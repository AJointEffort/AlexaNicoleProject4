// CREATE NAME SPACE
const weedApp = {};

// CREATE VARIABLES
weedApp.init = function(){ 
    weedApp.submitClick();
    weedApp.moodSubmitClick();
}

// CREATE KEYS FOR URL AND APIKEY 
weedApp.apiKey = 'u3jgDMY';

// CREATE FUNCTION FOR AJAX CALL
const raceArray = weedApp.getRace = (userInput) => {
    $.ajax({
<<<<<<< HEAD
        url: `https://strainapi.evanbusse.com/${weedApp.apiKey}/strains/search/race/${userInput}` ,
=======
        url: `https://strainapi.evanbusse.com/${weedApp.apiKey}/strains/search/effect/${userInput}` ,
>>>>>>> df22fbada6df9c26fcc4d58c86b375f8fcf55d9c
        method: 'GET',
        
        datatype: 'json'
    }).then((res) => {
<<<<<<< HEAD
        // CALLING RANDOM STRAIN FUNCTION
        let singleRace = (res[Math.floor(Math.random() * res.length)]);

        // CALLING RESULTS FUNCTION
=======
        // CALL RANDOM STRAIN FUNCTION
        let singleStrain = (res[Math.floor(Math.random() * res.length)]);
        // console.log("printing the strain object",singleStrain);
        console.log(res);
        // console.log(singleStrain.race);

        // CALL RESULTS FUNCTION
>>>>>>> df22fbada6df9c26fcc4d58c86b375f8fcf55d9c
        $(".userResultsContainer").append(`<h2 class="userResultTitle">Try this!</h2>`)
        $(".userResultsContainer").append(`<img src="images/${userInput}.jpg">`);
        $(".userResultsContainer").append(`<p class="apiName"><span class="resultSpan">Strain:</span> ${singleRace.name}</p>`);
        $(".userResultsContainer").append(`<p class="apiRace"><span class="resultSpan">Race: </span> ${singleRace.race}</p>`);
       
    } 
)};
// create a function for first submit button to bring you to next question

<<<<<<< HEAD
weedApp.submitClick = function () {
    $('.moodForm').submit(function (event) {
        event.preventDefault();
        console.log('clicked!');

        const race = $("input[name=race]:checked").val();
=======
weedApp.moodSubmitClick = function() {
    $('.moodForm').submit(function (event){
        event.preventDefault();
        console.log("clicking the mood form submit");

        if($("input[name=strain]:checked").length){
            console.log("clicking strain submit");
            
            showActivityIndica();
        }
    });
}
// CREATE FUNCTION FOR ON SUBMIT BY USER
weedApp.submitClick = function () {
    $('.activityForm').submit(function (event) {
        event.preventDefault();
        console.log('clicked!');

        const strain = $("input[name=activity]:checked").val();
        // user input from mood question = true or matches a strain 

        animatedResults();
>>>>>>> df22fbada6df9c26fcc4d58c86b375f8fcf55d9c

        $('html, body').animate({
            scrollTop: $('.moodFormContainer').offset().top + $('.moodFormContainer').height()
        }, 400);

<<<<<<< HEAD
        if ($("input[name=race]:checked").length) {
            $('input[type=submit]', this).attr('disabled', 'disabled');
            animatedResults();
        } else if (!$("input[name=race]:checked").length) {
            alert(`Are you already HIGH?? Please select one option before submitting!`);
            $('input[type=submit]', this).attr('', '');
=======
        if ($("input[name=activity]:checked").length) {
            $('input[type=submit]', this).attr('disabled', 'disabled');
        } else if (!$("input[name=activity]:checked").length) {
            alert(`Are you already high? Must choose one option before submitting!`);
>>>>>>> df22fbada6df9c26fcc4d58c86b375f8fcf55d9c
        };

        weedApp.getRace(race);

    });
};

showActivityChoices = function(){
    $('.activityIndica').css('opcacity', '1').css('visibility', 'visible');
}
animatedResults = function(){
    $('.resultContainer').css('opacity', '1').css('display', 'flex');
}

$(document).ready(function(){
    weedApp.init();
});                              
