function openTab(tabName) {
    // Hide all tab content
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Remove active class from all tabs
    var tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the current tab and add an "active" class to the button
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }
  
  function calculateDiscount() {
    var originalPrice = document.getElementById("original-price").value;
    var discountPercentage = document.getElementById("discount-percentage").value;
    var discount = originalPrice * (discountPercentage / 100);
    var finalPrice = originalPrice - discount;
    document.getElementById("discount-result").innerHTML = "Final Price: $" + finalPrice.toFixed(2);
  }

  //Currency Cal

  // include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
	searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
	fetch(`${api}`)
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}

// display results after conversion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
	((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}

// when user click on reset button
function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};

  
  function calculateVelocity() {
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;
    var velocity = distance / time;
    document.getElementById("velocity-result").innerHTML = "Velocity: " + velocity.toFixed(2) + " km/h";
  }
  
  function calculateVolume() {
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var volume = length * width * height;
    document.getElementById("volume-result").innerHTML = "Volume: " + volume + " cubic units";
  }
  
  function calculateBmi() {
    var weight = document.techBMI.weight.value
    var height = document.techBMI.height.value

    if( weight > 0 && height > 0 ) {	
        var finalBmi = ((weight/height/height)*10000)
        document.techBMI.bmi.value = finalBmi.toFixed(3);

        if( finalBmi < 18.5 ) {
            document.techBMI.meaning.value = "Kekurusan Kak."
        }
        if( finalBmi > 18.5 && finalBmi < 25 ) {
            document.techBMI.meaning.value = "Alhamdulillah Sehat."
        }
        if( finalBmi > 25 &&  finalBmi <30 ) {
            document.techBMI.meaning.value = "Sudah Kelebihan Beratnya Kak."
        }
        if( finalBmi > 30 ) {
            document.techBMI.meaning.value = "Periksakan ke dokter kak sudah."
        }
    }
    else {
        alert("Data you've entered might be incorrect. Please check and try again.")
    }
}
  
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
}

fahrenheit.oninput = function () {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}


kelvin.oninput = function()
{
    let f = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    
    let c = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(c.toFixed(2));
}
  
  // Display the first tab by default
  document.getElementById("discount").style.display = "block";
    