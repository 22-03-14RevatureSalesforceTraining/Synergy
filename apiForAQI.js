const apiToken = "a3b6b6dc07b8740c6a7360fe6beedcd0a13865a1";
        const bKLatitude = 13.7563;
        const bKLongitude = 100.5018;

        getData(bKLatitude, bKLongitude);
        //  console.log(aqiWidgit);
        var GV_DATA = [];
        function getData(latitude, longitude) {
            let api = `https://api.waqi.info/feed/geo:
        ${latitude};${longitude}/?token=${apiToken}`;
            //console.log("API", api);
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    GV_DATA = data.data;
                    showAQI()
                });
        }
        function showAQI() {
            document.getElementById("divAqi").innerHTML = GV_DATA.aqi;
            document.getElementById("divCityName").innerHTML = GV_DATA.city.name;
        }
