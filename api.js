'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//Traditional way of doing AJAX in javascript
const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/Thailand');
request.send(); //cannot assign to a variable because the value is not there yet.

request.addEventListener('load', function() {
	const [data] = JSON.parse(this.responseText);//responseText is JSON
    console.log(data);

    const html = `
    <div class="countries">
        <article class="country">
          <img class="country__img" src="${data.flags.png}"/>
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>${data.population}</span>People</p>
            <p class="country__row"><span>${data.languages[0]}</span>Language</p>
          </div>
        </article>
    </div>
	;`
    countries.insertAdjacentHTML('text', html);
    countries.getElementsByClassName.opacity = 1;
});//callBack function
