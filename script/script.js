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
const strainArray = weedApp.getStrain = (userInput) => {
    $.ajax({
        url: `https://strainapi.evanbusse.com/${weedApp.apiKey}/strains/search/effect/${userInput}` ,
        method: 'GET',
        
        datatype: 'json'
    }).then((res) => {
        // CALL RANDOM STRAIN FUNCTION
        let singleStrain = (res[Math.floor(Math.random() * res.length)]);
        // console.log("printing the strain object",singleStrain);
        console.log(res);
        // console.log(singleStrain.race);

        // CALL RESULTS FUNCTION
        $(".userResultsContainer").append(`<h2 class="userResultTitle">Try this!</h2>`)
        $(".userResultsContainer").append(`<img src="images/${userInput}.jpg">`);
        $(".userResultsContainer").append(`<p class="apiName"><span class="resultSpan">Strain:</span> ${singleStrain.name}</p>`);
        $(".userResultsContainer").append(`<p class="apiRace"><span class="resultSpan">Race: </span> ${singleStrain.race}</p>`);
       
    } 
)};
// create a function for first submit button to bring you to next question

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

        $('html, body').animate({
            scrollTop: $('.moodFormContainer').offset().top + $('.moodFormContainer').height()
        }, 400);

        if ($("input[name=activity]:checked").length) {
            $('input[type=submit]', this).attr('disabled', 'disabled');
        } else if (!$("input[name=activity]:checked").length) {
            alert(`Are you already high? Must choose one option before submitting!`);
        };

        weedApp.getStrain(strain);

    });
};

showActivityChoices = function(){
    $('.activityIndica').css('opcacity', '1').css('visibility', 'visible');
}
animatedResults = function(){
    $('.resultContainer').css('opacity', '1').css('visibility', 'visible');
}

$(document).ready(function(){
    weedApp.init();
});                              
