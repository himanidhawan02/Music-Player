// Section-2: Song Card

// Card Elements
const cardEle = document.querySelector("#card");
const songImgEle = document.querySelector("#song-img");
const songTitleEle = document.querySelector("#song-title");
const artistNameEle = document.querySelector("#artist-name");

songImgEle.src = songs[currIndex].image;
songTitleEle.textContent = songs[currIndex].name;
artistNameEle.textContent = songs[currIndex].artist;

// Controls
const audioEle = document.querySelector("#music-audio");
const prevButtonEle = document.querySelector("#prev");
const nextButtonEle = document.querySelector("#next");

audioEle.src = songs[currIndex].audio;

nextButtonEle.addEventListener("click", displayNextCard);

function displayNextCard() {
  currIndex = (currIndex + 1) % songs.length;

  songImgEle.src = songs[currIndex].image;
  songTitleEle.textContent = songs[currIndex].name;
  artistNameEle.textContent = songs[currIndex].artist;
  audioEle.src = songs[currIndex].audio;
}

prevButtonEle.addEventListener("click", displayPreviousCard);

function displayPreviousCard() {
  if (currIndex === 0) {
    currIndex = songs.length - 1;
  } else {
    currIndex = (currIndex - 1) % songs.length;
  }

  songImgEle.src = songs[currIndex].image;
  songTitleEle.textContent = songs[currIndex].name;
  artistNameEle.textContent = songs[currIndex].artist;
  audioEle.src = songs[currIndex].audio;
}

