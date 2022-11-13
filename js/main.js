var myData = []

function constructTable(selector) {
  fetch('https://data.cityofnewyork.us/resource/au7q-njtk.json').then((response) => {
    return response.json()
  }).then((data) => {
    data.forEach(element => {
      myData.push(element)
    })
  })

  let displayColumns = ['objectid', 'ifoaddress', 'assetsubty', 'date_inst', 'boro_name']

  myData = myData.map(x => {
    let newObj = {};
    for (col of displayColumns) {
      newObj[col] = x[col];
    }
    return newObj;
  });

  var col = [];
    for (var i = 0; i < myData.length; i++) {
      for (var key in myData[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    var table = document.createElement("table");

    var tr = table.insertRow(-1); 
    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); 
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    for (var i = 0; i < myData.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = myData[i][col[j]];
        tr.appendChild(tabCell);
      }
      tr.setAttribute('class', tabCell.innerHTML)
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

$(document).ready(function(){
  $("#borough").on('click', function(){
    var b = $(this).val();
    $("table tr").each(function(index){
      var val = $(":nth-child(5)", this).html();
      if(b === 'All') {
        $(this).show();
      } else if(val == b) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  })
;

  $("#borough").trigger('click');
});

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var toToggle = document.querySelectorAll(".toggleColour");
var navcontent1 = document.querySelectorAll(".inline-block");
var navcontent2 = document.querySelectorAll(".inline-block2");
document.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  if (scrollpos > 10) {
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("opacity-0");
      toToggle[i].classList.remove("text-white");
      navcontent1[i].classList.add("opacity-0");
      navcontent1[i].classList.remove("text-black");
      navcontent2[i].classList.add("opacity-0");
      navcontent2[i].classList.remove("text-black")
    }
  } else {
    header.classList.remove("bg-white");
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("opacity-0");
      navcontent1[i].classList.add("text-black");
      navcontent1[i].classList.remove("opacity-0");
      navcontent2[i].classList.add("text-black");
      navcontent2[i].classList.remove("opacity-0")
    }

  }
});