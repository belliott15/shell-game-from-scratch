// import functions and grab DOM elements
const greenDoor = document.getElementById('door1-container');
const pinkDoor = document.getElementById('door2-container');
const blueDoor = document.getElementById('door3-container');

const greenButton = document.getElementById('door1');
const pinkButton = document.getElementById('door2');
const blueButton = document.getElementById('door3');
const resetButton = document.getElementById('reset');

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
const lossEl = document.getElementById('loss');

// let state
let winCount = 0;
let totalCount = 0;
// set event listeners 
greenButton.addEventListener('click', () =>{
//get random door 
    let correctClick = randomHidingPlace();
//enter handleGuess function
    handleGuess('door1', correctClick);
});

pinkButton.addEventListener('click', () =>{
  //get random door 
    let correctClick = randomHidingPlace();
  //enter handleGuess function
    handleGuess('door2', correctClick);
});

blueButton.addEventListener('click', () =>{
    //get random door 
    let correctClick = randomHidingPlace();
    //enter handleGuess function
    handleGuess('door3', correctClick);
});

resetButton.addEventListener('click', () =>{
    resetStyles();
    resetCounter();
});

//create function to reset doors after each click
function resetStyles() {
    greenDoor.classList.remove('monster');
    pinkDoor.classList.remove('monster');
    blueDoor.classList.remove('monster');
}

//create reset counter
function resetCounter() {
    winsEl.textContent = 0;
    totalEl.textContent = 0;
    lossEl.textContent = 0;
}

//create array for hiding places
const hidingPlace = ['door1', 'door2', 'door3'];

function randomHidingPlace() {
    const random = Math.floor(Math.random() * hidingPlace.length);

    return hidingPlace[random];
}

function handleGuess(userClick, correctClick) {
  //reset doors to original image each time
    resetStyles();
  //increment total count after every click
    totalCount++;
  //increment win count after every correct click
    if (correctClick === userClick){
        winCount++;
    }
  // make a correct and incorrect door by randomizing the container
    const hiddenMonster = document.getElementById(`${correctClick}-container`);
  // make monster face appear on door
    hiddenMonster.classList.add('monster');
  // set your counters to increment accordingly
    winsEl.textContent = winCount;
    totalEl.textContent = totalCount;
    lossEl.textContent = totalCount - winCount;
}
