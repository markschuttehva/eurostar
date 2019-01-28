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

            document.getElementById("results").textContent = "Resultaat voor:" + textresultaat;
            var aantal = s.split(' ').length;
            if (aantal == 8) {
                document.getElementById("results").textContent = "Alle verhalen";
            }
            console.log(document.getElementById("results"));
            var element = document.getElementById("results");
            element.classList.add("kaas");
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


/* scroll naar element */
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toevoegen() {
    var vind = document.getElementById("verborgen");
    vind.classList.add("zichtbaar");
}

function verberg() {
    var none = document.getElementById("verborgen");
    none.classList.remove("zichtbaar");
}

function opgeslagen() {
    var ster = document.getElementById("sterr");
    ster.classList.remove("vind")
}
