var slider_content = document.getElementById('box');

  	// contain images in an array
    var image = ['img1','img2', 'img3', 'img4'];

    var i = image.length;


    // function for next slide 
    

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }

    // function for display previous image

    function prewImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }

  
  // script for auto image slider takes function and milliseconds as parameter

  setInterval(nextImage , 2000);



//querySelector() method returns the element that matches
// selector and put in const variable

  const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


// Show active menu when scrolling 
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  //window.innerWidth return 	 inner width size  of the browser window's content area in pixels
  //The scrollY  returns the pixels a document has scrolled from the upper left corner of the window.
  if (window.innerWidth > 960 && scrollPos < 600) {
    //adding highlight class to homeMenu element
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


  //whenever window is scroll or click highlightMenu function would call

