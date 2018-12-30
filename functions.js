function resultaten() {

    /* roept functie op vanuit javascript
    maak een functie waarmee je door de checkboxes loopt
    maak een functie waarmee je kunt zien welke checkboxes aan staan            
    toon het resultaat */


    var inputGedeprimeerd = document.querySelector("input[name='Gedeprimeerd']");
    var inputVerliefd = document.querySelector("input[name='Verliefd']");
    var inputHoopvol = document.querySelector("input[name='Hoopvol']");
    var inputDruk = document.querySelector("input[name='Druk']");
    var inputBoos = document.querySelector("input[name='Boos']");
    var inputJaloers = document.querySelector("input[name='Jaloers']");
    var inputRustig = document.querySelector("input[name='Rustig']");
    var inputEnergiek = document.querySelector("input[name='Energiek']");
    //Array van de labels
    var textresultaat = "";
    var checkboxes = [inputGedeprimeerd, inputVerliefd, inputHoopvol, inputDruk, inputBoos, inputJaloers, inputRustig, inputEnergiek];

    //            console.log("gedeprimeerd?",inputGedeprimeerd.checked, inputGedeprimeerd.name);
    //            console.log("verliefd?",inputVerliefd.checked, inputVerliefd.name);
    //            console.log("hoopvol?",inputHoopvol.checked, inputHoopvol.name);
    //            console.log("druk?",inputDruk.checked, inputDruk.name);
    //            console.log("boos?",inputBoos.checked, inputBoos.name);
    //            console.log("jaloers?",inputJaloers.checked, inputJaloers.name);
    //            console.log("rustig?",inputRustig.checked, inputRustig.name);
    //            console.log("energiek?",inputEnergiek.checked, inputEnergiek.name);

    for (var i = 0; i < checkboxes.length; i++) {
        // console.log(checkboxes[i].name);
        if (checkboxes[i].checked == true) {
            //console.log(checkboxes[i].name);
            textresultaat += " " + checkboxes[i].name + ", ";
            console.log(textresultaat);

            s = textresultaat;
            s = s.replace(/(^\s*)|(\s*$)/gi, "");
            s = s.replace(/[ ]{2,}/gi, " ");
            s = s.replace(/\n /, "\n");
            //document.getElementById("wordcount").value = s.split(' ').length;
            console.log(s.split(' ').length);

            document.getElementById("results").textContent = "Resultaat" + textresultaat;
            var aantal = s.split(' ').length;
            if (aantal == 8) {
                document.getElementById("results").textContent = "Alle verhalen";
            }
        }
    }
}
resultaten();

// https://www.w3schools.com/howto/howto_js_tabs.asp
function zoeken(evt, cityName) {
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
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js 
 voor het hamburger menu dat ze ook gebruiken op de eurostar pagina*/  
function myFunction(x) {
    x.classList.toggle("change");
}
