
// CREATE NAME SPACE
const weedApp = {};

weedApp.init = function(){
    // weedApp.submitClick();
}
// CREATE VARIABLES
weedApp.userMood = document.getElementById("indica");



// CREATE KEYS FOR URL AND APIKEY
weedApp.apiKey = 'u3jgDMY';
weedApp.url = `http://strainapi.evanbusse.com/${weedApp.apiKey}/strains/search/all`;
// CREATE FUNCTION FOR AJAX CALL FOR *EFFECTS* API OBJ


weedApp.getStrain = () => {
    $.ajax({
        url: weedApp.url,
        method: 'GET',
        datatype: 'json',
            // data: {
                
            // }
    }).then((res) => {

        // const indicaRace = res.data.race;
        // console.log(res.data[0].race);
        console.log(res);

        // weedApp.function(result);
    });
}

// weedApp.getRace = () => {
    //     weedApp.getStain
    // }
    
    // weedApp.displayStrains = (strainsArray) => {
        //     strainsArray.forEach((weedObject) => {
            
//        $('.resultsContainer')
//             .append(`<h2>${weedObject.name} <span>${weedObject.race}</span></h2>`)
//             .append(`<p>${weedObject.description}</p>`);
//     });
// }

        
        // USER CHOOSES FROM (3) MOOD OPTIONS: (RACE)
        
        // DATA IS STORED IN A VARIABLE (LET)
        
        // DEPENDING ON FIRST INPUT, USER CHOOSES WHAT (2) ACTIVITY OPTION EACH: (EFFECTS) 
        // CREATE IF STATEMENT TO DYNAMICALLY DISPLAY 'WHAT ACTITVITY' DIV ON BROWSER
        
        // CREATE NEW ARRAY THAT FILTERS FROM ORIGINAL API OBJ AFTER USER SUBMITS ACTIVITY INPUT (USERARRAY)
        
        // USER INPUT ARRAY FILTERS DATA FROM API OBJ USING IF, AND PARAMETERS OF EFFECT + RACE
        // CREATE ANOTHER ARRAY TO FILTER RESULTS THAT MATCH CONDITION (RESULTSARRAY)
        
        
        // USE .RANDOM TO GET TWO RANDOMLY GENERATED STRAINS THAT MATCH USER INPUTS
        // NAME, RACE FROM API AND DYNAMICALLY DISPLAY ON BROWSER
        
        
        // $(document).ready(function() {
            //     weedApp.getStrain();
            // });
            
                                

    $(document).ready(function(){
        weedApp.getStrain();
    });


                                
                                
