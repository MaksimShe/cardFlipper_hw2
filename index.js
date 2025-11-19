const cardsContainers = document.querySelectorAll('.card_container');
const soundBtn = document.querySelector('.sound');
const changeThemaBtn = document.querySelector('.thema');
const body = document.querySelector('body');

let hasVolume = false;
let isBlackThema = false;
const sound = new Audio('/sound/bmw-bong.mp3');


const cardImages = {
  frontSide: [
    'images/bmw3_old.jpg',
    'images/bmw5_old.jpg',
    'images/bmw8_old.jpg'
  ],
  backSide: [
    'images/bmw3_new.jpg',
    'images/bmw5_new.jpg',
    'images/bmw8_new.jpg'
  ]
};

const baseValidation = () => {
  if (
    cardImages.frontSide.length !== cardImages.backSide.length &&
    cardImages.frontSide.length !== cards.length
  ) {
    alert('Error!');
    return false;
  }
  return true;
}

baseValidation();

document.addEventListener('click', () => {
  sound.load();
  sound.play().then(() => {
    sound.pause();
    sound.currentTime = 0;
  });
}, { once: true });

cardsContainers.forEach((cardCont, i) => {
  cardCont.addEventListener('mouseenter', () => {
    if (hasVolume) {
      sound.currentTime = 0;
      sound.play().then();
    }
  });
});

soundBtn.addEventListener('click', () => {
  hasVolume = !hasVolume;
  if (hasVolume) {
    soundBtn.src = './icons/volume.png'
  } else {
    soundBtn.src = './icons/mute.png'
  }
})

changeThemaBtn.addEventListener('click', () => {
  isBlackThema = !isBlackThema;
  body.classList.toggle('dark-mode');
  if (isBlackThema) {
    changeThemaBtn.src = './icons/moon.png'
  } else {
    changeThemaBtn.src = './icons/sun.png'
  }
})
