var slideIndex = 3;

window.onload = function() {
    //Make sure the first 4 pictures are displayed on load
    let slides = document.getElementsByClassName("slidePic");
    for (let i =0; i < 4; i++) {
        slides[i].style.display="inline-block";
    }
    
    /*Add listeners to the next and previous buttons of the slideshow,
    as well as the button that submits the user's input and calls the API */
    document.querySelector(".prev").addEventListener("click", decrementSlides);
    document.querySelector(".next").addEventListener("click", incrementSlides);
    document.querySelector("#apiCaller").addEventListener("click", callApi);
} 

//Move the slide index up one and show the appropriate slides
function incrementSlides() {
    showSlides(++slideIndex);
}

//Move the slide index backwards one and show the appropriate slides
function decrementSlides() {
    showSlides(--slideIndex);
}

/*This function will set the display property of the slides in the slideshow.
It sets the display to none for those we slides that should not be visible.
The parameter n is the index of the last image we wish to display. */
function showSlides(n) {
    let slides = document.getElementsByClassName("slidePic");

    //If already at the beginning of slide, do nothing
    if (n < 3) {
        slideIndex++;
        return;
    }
    //If already at the end of the slide, do nothing
    if (n >= slides.length) {
        slideIndex--;
        return;
    }
    //Make them all invisible
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    //Set the correct elements to be visible
    for (let i = n - 3; i <= n; i++) {
        slides[i].style.display="inline-block";
    }
}

/*This function will get the name of the city from the document. If the name is valid,
it will attempt to fetch the weather information for the city from visual crossing's
weather API. If successful, it extracts the important information into an array, then
uses that array to create new rows for a table on the document to display the info. */
function callApi() {
    try {
        let city = getCity();

        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/" +
        "services/timeline/" + city + "?unitGroup=us&key=4DYU7EYCBTLY8CU3AVR3269HM&" +
        "contentType=json")
        .then(response=> {
            return response.json();
        }).then(json=>{
            for (let i = 0; i < 5; i++) {
                let info = [];
                info[0] = json['resolvedAddress'];
                info[1] = json['days'][i]['datetime'];
                info[2] = json['days'][i]['tempmax'];
                info[3] = json['days'][i]['tempmin'];
                info[4] = json['days'][i]['conditions'];
                createRow(info);
            }
        }).catch(error => {
            alert("Invalid City Name");
        })
    }
    catch (e) {
        alert(e);
    }
}

/*This function takes an array of information from callApi and creates a
new row of the table on the html page to display the data from the array */
function createRow(arr) {
    let myTable = document.getElementById("weather");
    let newRow = myTable.insertRow();
    for (let i = 0; i < arr.length; i++) {
        newRow.insertCell().appendChild(document.createTextNode(arr[i]));
    }
}

/*This function gets the input value from the html page's user input form,
if it contains any numbers, it throws an error */
function getCity() {
    let city = document.getElementById('city').value;
    for (let i = 0; i < city.length; i++) {
        if (!isNaN(city.charAt(i)) && !(city.charAt(i) === " ")) {
            throw "Alphabet characters only";
        }
    }
    return city;

}
