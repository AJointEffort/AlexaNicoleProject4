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
        $(".userResultsContainer").append(`<p>${singleStrain.name}</p>`);
        $(".userResultsContainer").append(`<p>${singleStrain.race}</p>`);
       
    } 
)};

// CREATE FUNCTION FOR ON SUBMIT BY USER
weedApp.submitClick = function(){
    $('form').submit(function(event){
        event.preventDefault();
        console.log('clicked!');

        const strain = $("input[name=strain]:checked").val();
        $('input[type=submit]', this).attr('disabled', 'disabled');


      weedApp.getStrain(strain);

    });
};

$(document).ready(function(){
    weedApp.init();
});                              
