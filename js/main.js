var myData = []

function constructTable(selector, borough) {
  fetch('https://data.cityofnewyork.us/resource/au7q-njtk.json').then((response) => {
    return response.json()
  }).then((data) => {
    data.forEach(element => {
      myData.push(element)
    })
  })

  let displayColumns = ['objectid', 'boro_name', 'ifoaddress', 'assetsubty', 'date_inst']

  list = myData.map(x => {
    let newObj = {};
    for (col of displayColumns) {
      newObj[col] = x[col];
    }
    return newObj;
  });

  var cols = Headers(list, selector);

  for (var i = 0; i < list.length; i++) {
    var row = $('<tr/>');
    for (var colIndex = 0; colIndex < cols.length; colIndex++) {
      var val = list[i][cols[colIndex]];

      if (val == null) val = "";

      row.append($('<td/>').html(val));
    }

    // Adding each row to the table
    $(selector).append(row);
  }
}

function Headers(list, selector) {
  var columns = [];
  var header = $('<tr/>');

  for (var i = 0; i < list.length; i++) {
    var row = list[i];

    for (var k in row) {
      if ($.inArray(k, columns) == -1) {
        columns.push(k);

        // Creating the header
        header.append($('<th/>').html(k));
      }
    }
  }

  // Appending the header to the table
  $(selector).append(header);
  return columns;
}

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