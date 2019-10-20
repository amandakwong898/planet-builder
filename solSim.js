
var bodyCounter = 0;
var currentTab;


function openTab(tab_name){
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tab_name).style.display = "block";
        //evt.currentTarget.className += " active";
}

function populateStar() {
    document.getElementById("menu_title").innerHTML = "<p>Make Your Central Star!</p>";
    document.getElementById("body_creator").innerHTML = '<object type="text/html" data="star.html"></object>';
}

function populatePlanet() {
    //limits the solar system to nine planets
    if(bodyCounter <= 10) {
        document.getElementById("menu_title").innerHTML = "<p> Make a Planet! </p>";
        document.getElementById("body_creator").innerHTML = '<object type="text/html" data="planet.html" ></object>';
    }
    else{
        document.getElementById("menu_title").innterHTML = "<p>Your solar system is full!</p>";
        document.getElementById("body_creator").innerHTML = "";
    }
}

function populateSysCreator(){
    if(bodyCounter == 0){
        populateStar();
    }
    if(bodyCounter > 0){
        populatePlanet();
    }
}

function addBody(){
    bodyCounter++;
}

