let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

let numClosedDoors = 3;
let openDoor1; 
let openDoor2; 
let openDoor3; 
let startButton = document.getElementById('start');
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let currentlyPlaying = true;

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  } else if (isBot(door)){
    gameOver('lose');
  }

}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}


door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)) {
  door1.src = openDoor1;
  playDoor(door1);
  }
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)) {
  door2.src = openDoor2;
  playDoor(door2);
  }
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(door3)){
  door3.src = openDoor3;
  playDoor(door3);
  }
}

startButton.onclick = () => {
 if(currentlyPlaying === false) {
   startRound();
 } 
}

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = "Game Over! Play Again?";
  }
    currentlyPlaying = false;
}

startRound();

