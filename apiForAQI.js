/**apiForAQI.js
*Reis Taylor
*apiToken is variable issued from the public API
*bKLatitude and bKLongitude are hard coded values  
*which serve as arguments for the getData method
**/

const apiToken = "a3b6b6dc07b8740c6a7360fe6beedcd0a13865a1";
        const bKLatitude = 13.7563;
        const bKLongitude = 100.5018;

/**data is both a variable in this method and a sub-array within
*JSON object that I needed to acces to obtain both Bangkok's 
*current AQI and it's name
**/
        getData(bKLatitude, bKLongitude);
        var GV_DATA = [];
        function getData(latitude, longitude) {
            let api = `https://api.waqi.info/feed/geo:
        ${latitude};${longitude}/?token=${apiToken}`;
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    GV_DATA = data.data;
                    showAQI()
                });
        }

//showAQI provides my .html file access to the values referenced
//by GV_DATA.aqi and GV_DATA.name
        function showAQI() {
            document.getElementById("divAqi").innerHTML = GV_DATA.aqi;
            document.getElementById("divCityName").innerHTML = GV_DATA.city.name;
        }
