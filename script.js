// Accordion Menu //

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Button pressed

function buttonAlert() {
    alert('There is nothing more to learn.');
}
document.getElementById('btn-alert').onclick = buttonAlert;


// footer dynamic CC 

const getYear = new Date();
let year = getYear.getFullYear();

document.getElementById("yearID").innerHTML = year;
