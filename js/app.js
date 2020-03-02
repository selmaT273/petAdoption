'use strict';
console.log('Pet adoption is a go!');

//this is an object literal

var petOne = {

  name: 'fluffy',
  breed: 'maine coon',
  age: 0,
  imageName: 'diabloBlanco',
  interests: ['Sunlight', 'Mouse Toys', 'CatNip'],
  isGoodWithKids: false,
  isGoodWithDogs: true,
  isGoodWithCats: false,
  setAge: function(){
    this.age = randomAge(3, 12) + ' Months';
  }
};

var petTwo = {

  name: 'Tiger',
  breed: 'Tabby',
  age: 0,
  imageName: 'tommyBob',
  interests: ['Rainy Days', 'Running', 'Yarn'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  setAge: function(){
    this.age = randomAge(3, 12) + ' Months';
  }
};

petOne.setAge();

function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

petOne.isFixed = true;
petTwo.isFixed = true;

//Create DOM elements and render it in html

//Create a new element the parent element of the child element that we will create to render the pet article in the html

var parentElement = document.getElementById('kittenProfiles');

//Create article

var article = document.createElement('article');
parentElement.appendChild(article);

//create h2

var h2 = document.createElement('h2');
article.appendChild(h2);


//create p

var petParagraph = document.createElement('p');
petParagraph.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old';
article.appendChild(petParagraph);




//create ul

//create li

//fill in lists
var petUl = document.createElement('ul');
article.appendChild(petUl);

for (var i = 0; i < petOne.interests; i++){
  var petLi = document.createElement('li');
  petLi.textContent = petOne.interests[i];
  petUl.appendChild(petLi);

}



//add image

var petImage = document.createElement('img');
petImage.setAttribute('src', 'images/' + petOne.imageName + '.jpg');
petImage.setAttribute('alt', 'Cute kitty huh? adopt now.');
article.appendChild(petImage);

//set some values on the images
