/* Author: Carlos Concepcion
 * Created: 3/17/2022
 * Last Modified: 3/20/2022
 *  A webpage to demonstrate understanding of html, CSS, and JavaScript.
 */


//populates a list, and an image with data from our fetch

function onFetchSuccess(data) {
    animalData = {
        imageLink: data.image_link,
        animalName: data.name,
        latinName: data.latin_name,
        animalType: data.animal_type,
        habitat: data.habitat,
        lifespan: data.lifespan,
        geoRange: data.geo_range,
    }

    var listName = document.createElement('li');
    var listLatin = document.createElement('li');
    var listType = document.createElement('li');
    var listHabitat = document.createElement('li');
    var listLifespan = document.createElement('li');
    var listGeo = document.createElement('li');

    listName.textContent = animalData.animalName;
    listLatin.textContent = "It's latin name is " + animalData.latinName + ".";
    listGeo.textContent = "It lives in " + animalData.geoRange + ".";
    listType.textContent = "It's a " + animalData.animalType?.toLowerCase() + ".";
    listHabitat.textContent = "It's habitat is the " + animalData.habitat.toLowerCase() + ".";
    listLifespan.textContent = "Its lifespan is about " + animalData.lifespan + " years.";

    document.querySelector('#attributeList').appendChild(listLatin);
    document.querySelector('#attributeList').appendChild(listType);
    document.querySelector('#attributeList').appendChild(listHabitat);
    document.querySelector('#attributeList').appendChild(listGeo);
    document.querySelector('#attributeList').appendChild(listLifespan);

    document.querySelector('#imageContainer').src = animalData.imageLink;

}
//fetch a JSON of a random animal which we'll use to change the DOM and passes info to onFetchSuccess function
fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(response => response.json())
    .then(data => onFetchSuccess(data))
    .catch (error); {
        console.log("Fetch API failed")
    }

//Reveal each card as we go along the page.

function walking(value) {
    value.style.visibility = "hidden";

    if (!(value.className === 'thirdStep step')) {
        value.nextElementSibling.style.visibility = "visible";


    }
    else {
        document.querySelector('.finalStep').style.visibility = "visible";

    }
}

//this is old code//

//second version

/*function walking(value) {
    let whichStep = value;

    if (whichStep === 1) {
        

        document.querySelector('.secondStep').style.visibility = "visible";
    }
    else if (whichStep === 2) {

        document.querySelector('.thirdStep').style.visibility = "visible";
    }
    else if (whichStep === 3) {

        document.querySelector('.finalStep').style.visibility = "visible";
    }
    else {
        console.log('Something went screwy!')
    }


}*/
//First version.
/*function walkOne() {
    document.querySelector('.secondStep').style.visibility = "visible";

};

function walkTwo() {
    document.querySelector('.thirdStep').style.visibility = "visible";
};

function walkThree() {
    document.querySelector('.finalStep').style.visibility = "visible";

}*/

//On pressing final step, reveal the div with the animal spirit results.
function delve() {
    document.querySelector('#delve').style.visibility = "visible";
    document.querySelector('#delveButton').style.display = "none";
    document.querySelector('#delveText').textContent = 'Deep in the cave, surrounded by shadow, you feel something approach. Different from you and yet completely you. As the wise woman warned, your soul has manifested into something primal.'
    document.querySelector('#spiritAnimal').textContent = 'Your spirit animal is the ' + animalData.animalName + '!';
    document.querySelector('#coolFacts').textContent = "Here's some cool facts about the " + animalData.animalName.toLowerCase() + '.';
    document.querySelector('#coolButton').style.display = "block";
}

//On button press fetches a random dog picture and sets it as Jason's spirit animal.
function coolJason() {
    document.querySelector('#coolButton').style.display = "none";
    document.querySelector('#jasonStathamApproves').style.visibility = "visible";




    fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(function (data) {
            jasonData = {
                dogUrl: data.url
            }
            console.log(jasonData.dogUrl);
           let jasonString = jasonData.dogUrl.toString();
            document.querySelector('#jasonDog').src = jasonData.dogUrl;

            //An else if statement in case a video is loaded instead of an image.

            if (jasonString.includes('.mp4')) {
                coolJason();
                
                console.log('Bad String!');
            }
            else if(jasonString.includes('.webm')) {
                console.log('These damn bad strings!');
                coolJason();

            }

        }
        )}
