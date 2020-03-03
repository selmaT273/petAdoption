'use strict';
console.log('Pet adoption is a go!');

// var petOne = {

//   name: 'fluffy',
//   breed: 'maine coon',
//   age: 0,
//   imageName: 'diabloBlanco',
//   interests: ['Sunlight', 'Mouse Toys', 'CatNip'],
//   isGoodWithKids: false,
//   isGoodWithDogs: true,
//   isGoodWithCats: false,
//   setAge: function(){
//     this.age = randomAge(3, 12) + ' Months';
//   }
// };

// var petTwo = {

//   name: 'Tiger',
//   breed: 'Tabby',
//   age: 0,
//   imageName: 'tommyBob',
//   interests: ['Rainy Days', 'Running', 'Yarn'],
//   isGoodWithKids: true,
//   isGoodWithDogs: true,
//   isGoodWithCats: true,
//   setAge: function(){
//     this.age = randomAge(3, 12) + ' Months';
//   }
// };

// petOne.setAge();

// function randomAge(min, max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// petOne.isFixed = true;
// petTwo.isFixed = true;

// var parentElement = document.getElementById('kittenProfiles');

// var article = document.createElement('article');
// parentElement.appendChild(article);

// var h2 = document.createElement('h2');
// h2.textContent = 'Please adopt me, my name is ' + petOne.name;
// article.appendChild(h2);

// var petParagraph = document.createElement('p');
// petParagraph.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old';
// article.appendChild(petParagraph);

// var petUl = document.createElement('ul');
// article.appendChild(petUl);

// for (var i = 0; i < petOne.interests.lengtfh; i++){
//   var petLi = document.createElement('li');
//   petLi.textContent = petOne.interests[i];
//   petUl.appendChild(petLi);

// }

function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
  this.name = name;
  this.breed = breed;
  this.age = this.setAge();
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}

// Pet.prototype.functionName = function(any, parameters, can, go, here)
// Now any pet created with the Pet constructor will be able to call this method.

Pet.prototype.setAge = function(){
  this.age = randomAge(3, 12) + 'months';
};

function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Pet.prototype.getInterests = function(){
  var randomIndex = Math.floor(Math.random() * this.interests.length);
  return this.interests[randomIndex];
};

//create some DOM elements then render them to the index
Pet.prototype.render = function(){
  var parentElement = document.getElementById('kittenProfiles');

  //   var article = document.createElement('article');
  //   parentElement.appendChild(article);

  //   var h2 = document.createElement('h2');
  //   h2.textContent = this.name;
  //   article.appendChild(h2);

  //   var petParagraph = document.createElement('p');
  //   petParagraph.textContent = `${this.name} is adorable, and is ${this.age} old`;
  //   article.appendChild(petParagraph);

  //   var ul = document.createElement('ul');
  //   article.appendChild(ul);

  //   for(var i = 0; i < this.interests.length; i++){
  //     var li = document.createElement('li');
  //     li.textContent = this.interests[i];
  //     ul.appendChild(li);
  //   }
  //   var img = document.createElement('img');
  //   img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  //   img.setAttribute('alt', 'Adopt' + this.name + 'Now!, no TODAY!');
  //   article.appendChild(img);

  var animalTable = document.getElementById('animal-table');

  var petRow = document.createElement('tr');
  animalTable.appendChild(petRow);

  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  petRow.appendChild(nameCell);

  var breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  var ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  var interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);

  animalTable.appendChild(petRow);
};

var firstPet = new Pet('nova', 'lab', 'labradorDog', ['playing', 'catnip', 'sunlight'], true, true, true);
firstPet.setAge();
firstPet.getInterests();

var secondPet = new Pet('Tiger', 'American Short Hair', 'diabloBlanco', ['inquisitive', 'needy', 'small', 'whiskery'], true, true, true);
secondPet.setAge();
secondPet.getInterests();
// var thirdPet = new

var adoptPet = [firstPet, secondPet];

// we'll loop through the adoptPet objects to show some information on the page

for(var i = 0; i < adoptPet.length; i++){
  adoptPet[i].render();
}
