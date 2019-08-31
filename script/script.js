// CREATE NAME SPACE
const weedApp = {};

// CREATE VARIABLES
weedApp.init = function(){
    weedApp.submitClick();
}

// CREATE KEYS FOR URL AND APIKEY
weedApp.apiKey = 'u3jgDMY';

// CREATE FUNCTION FOR AJAX CALL
const strainArray = weedApp.getStrain = (userInput) => {
    $.ajax({
        url: `http://strainapi.evanbusse.com/${weedApp.apiKey}/strains/search/race/${userInput}` ,
        method: 'GET',
        datatype: 'json'
    }).then((res) => {
        // CALL RANDOM STRAIN FUNCTION
        let singleStrain = (res[Math.floor(Math.random() * res.length)]);
        console.log("printing the strain object",singleStrain);
        console.log(singleStrain.name);
        console.log(singleStrain.race);
        // CALL RESULTS FUNCTION
        $(".userResultsContainer").append(`<h2 class="userResultTitle">Try this!</h2>`)
        $(".userResultsContainer").append(`<img src="images/${userInput}.jpg">`);
        $(".userResultsContainer").append(`<p class="apiName"><span class="resultSpan">Strain:</span> ${singleStrain.name}</p>`);
        $(".userResultsContainer").append(`<p class="apiRace"><span class="resultSpan">Race: </span> ${singleStrain.race}</p>`);
       
    } 
)};

// CREATE FUNCTION FOR ON SUBMIT BY USER
weedApp.submitClick = function () {
    $('form').submit(function (event) {
        event.preventDefault();
        console.log('clicked!');

        const strain = $("input[name=strain]:checked").val();
        
        animatedResults();

        $('html, body').animate({
            scrollTop: $('.formContainer').offset().top + $('.formContainer').height()
        }, 400);

        if ($("input[name=strain]:checked").length) {
            $('input[type=submit]', this).attr('disabled', 'disabled');
        } else if (!$("input[name=strain]:checked").length) {
            alert(`Are you already high? Must choose one option before submitting!`);
        };

        weedApp.getStrain(strain);

    });
};

animatedResults = function(){
    $('.resultContainer').css('opacity', '1').css('visibility', 'visible');
}

$(document).ready(function(){
    weedApp.init();
});                              
