function openAboutTabs(evt, txt) {
    const tabContent = document.getElementsByClassName("tabContent");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
        tabContent[i].classList.remove("active");
    }

    const tabs = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active")
    }

    document.getElementById(txt).style.display = "block";
    document.getElementById(txt).classList.add("active");
    evt.currentTarget.classList.add("active");

}

function openProjectTabs(evt, tabNames) {
    const tabContent = document.getElementsByClassName("proj-tabContent");

    //hide the tab content
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
        tabContent[i].classList.remove("active");
    }

    //change tab name and heading
    const tabNameElement = document.getElementById('tab-name');
    if (tabNames === 'websites') {
        tabNameElement.textContent = "Websites";
        document.getElementById("heading").textContent = "Websites";
    } else if (tabNames === 'games') {
        tabNameElement.textContent = "Games";
        document.getElementById("heading").textContent = "Games";
        document.getElementById("tab-name").style.backgroundColor = '#ffe5f2';
        document.getElementById("tab-name").style.borderRadius = '6px 6px 0 0';
        document.getElementById("tab-name").style.borderTop = '1.5px solid #5d2b53';
        document.getElementById("tab-name").style.borderLeft = '1.5px solid #5d2b53';
        document.getElementById("tab-name").style.borderRight = '1.5px solid #5d2b53';
    }

    const tabs = document.getElementsByClassName("proj-tab-link");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active")
    }

    document.getElementById("chat2").style.display = 'none';
    document.getElementById("chat").style.display = 'none';
    document.getElementById("guy1").style.display = 'none';
    document.getElementById("home-page").style.display = "none";
    document.getElementById(tabNames).style.display = "block";
    document.getElementById(tabNames).classList.add("active");

    //add active class to clicked button
    evt.currentTarget.classList.add("active");

    document.getElementById("back-button").style.display = "block";
}

function goBackToHomePage() {
    // Hide all tab content
    const tabContent = document.getElementsByClassName("proj-tabContent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
        tabContent[i].classList.remove("active");
    }

    // Show the home buttons and hide the back button
    document.getElementById("home-page").style.display = "flex";  // Show buttons
    document.getElementById("back-button").style.display = "none"; // Hide back button

    // Set tab name back to Home Page
    document.getElementById("chat").style.display = 'block';
    document.getElementById("chat2").style.display = 'block';
    document.getElementById("guy1").style.display = 'block';
    document.getElementById("tab-name").textContent = "Kimz Korner";
    document.getElementById("heading").textContent = "Portfolio";
    document.getElementById("tab-name").style.backgroundColor = '#ffe5f2';
    document.getElementById("tab-name").style.borderRadius = '6px 6px 0 0';
    document.getElementById("tab-name").style.borderTop = '1.5px solid #5d2b53';
    document.getElementById("tab-name").style.borderLeft = '1.5px solid #5d2b53';
    document.getElementById("tab-name").style.borderRight = '1.5px solid #5d2b53';
}

var modals = document.querySelectorAll("[id^='myModal']");
var btns = document.querySelectorAll("[id^='myBtn']");
var spans = document.querySelectorAll("[class^='close']");

btns.forEach(function (btn, index) {
    var modal = modals[index];
    var span = spans[index];

    btn.onclick = function () {
        modal.style.display = "block";
        document.getElementById("chat1").style.display = 'none';
    }

    span.onclick = function () {

        modal.style.display = 'none';
        document.getElementById("chat1").style.display = 'block';
    }
});

window.onclick = function (event) {
    modals.forEach(function (modal, index) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.getElementById("chat1").style.display = 'block';
        }
    });
}


function myFunction() {
    var x = document.getElementById("mytop-nav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

function toggleMenu() {
    /*const menu = document.getElementById('menu');
    menu.classList.toggle('show');*/
    var x = document.getElementById("tabs1");
    if (x.className === "tabs") {
        x.className += " responsive";
    } else {
        x.className = "tabs";
    }
}
/*
function showExperience(evt, txt) {

    const tabContent = document.getElementsByClassName("tabContent");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
        tabContent[i].classList.remove("active");
    }

    const tabs = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active")
    }

    document.getElementById(txt).style.display = "block";
    document.getElementById(txt).classList.add("active");
    evt.currentTarget.classList.add("active");

}

function showSkills(evt, txt) {
    const tabContent = document.getElementsByClassName("tabContent");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
        tabContent[i].classList.remove("active");
    }

    const tabs = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active")
    }

    document.getElementById(txt).style.display = "block";
    document.getElementById(txt).classList.add("active");
    evt.currentTarget.classList.add("active");

}
function showEducation(evt, txt) {
    const tabContent = document.getElementsByClassName("tabContent");

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
        tabContent[i].classList.remove("active");
    }

    const tabs = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active")
    }

    document.getElementById(txt).style.display = "block";
    document.getElementById(txt).classList.add("active");
    evt.currentTarget.classList.add("active");
}
*/
/*
function openTab(evt, txt) {
    var i, tabContent, tablink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", " ");
    }
    document.getElementById(txt).style.display = "block";
    evt.currentTarget.className += " active";
}
*/
/*
if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(speed);
}
*/
