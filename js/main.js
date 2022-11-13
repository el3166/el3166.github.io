fetch('https://data.cityofnewyork.us/resource/au7q-njtk.json')


function getAPIData(url) {
  return url
}

//

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var toToggle = document.querySelectorAll(".toggleColour");
document.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("opacity-0");
      toToggle[i].classList.remove("text-white");
    }
  } else {
    header.classList.remove("bg-white");
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("opacity-0");
    }
  }
});