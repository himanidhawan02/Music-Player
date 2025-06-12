// Section-1: All Songs

const songs = [
  {
    id: 1,
    name: "Shape Of You",
    artist: "Ed Sheeran",
    genre: "pop",
    image: "images/ed-sheeran.jpg",
    audio: "audio/Shape-Of-You.mp3",
  },
  {
    id: 2,
    name: "All Of Me",
    artist: "Adele",
    genre: "pop",
    image: "images/all-of-me-adele.jpg",
    audio: "audio/adele-hello.mp3",
  },
  {
    id: 3,
    name: "Someone Like You",
    artist: "Adele",
    genre: "pop",
    image: "images/someone-like-you.jpg",
    audio: "audio/Someone-like-you.mp3",
  },
  {
    id: 4,
    name: "Wonderwall",
    artist: "Oasis",
    genre: "rock",
    image: "images/wonderwall.jpg",
    audio: "audio/Wonderwall.mp3",
  },
  {
    id: 5,
    name: "Sugar",
    artist: "Maroon",
    genre: "hip-hop",
    image: "images/sugar.jpg",
    audio: "audio/Sugar.mp3",
  },
  {
    id: 6,
    name: "Locked Away",
    artist: "R. City",
    genre: "hip-hop",
    image: "images/locked-away.jpg",
    audio: "audio/locked-away.mp3",
  },
];
let currIndex = 0;

const songCategoryEle = document.querySelector("#song-category");
const displaySongsEle = document.querySelector("#song-names");

// By Default display all songs
songs.forEach((currSong) => {
  displaySongs(currSong);
});

// On selecting a particular genre, display songs only in that genre
songCategoryEle.addEventListener("change", () => {
  displayByGenre(songCategoryEle.value);
  if (songCategoryEle.value === "all") {
    songs.forEach((currSong) => {
      displaySongs(currSong);
    });
  }
});

function displayByGenre(genre) {
  displaySongsEle.innerHTML = "";

  songs.forEach((currSong) => {
    if (currSong.genre === genre) {
      displaySongs(currSong);
    }
  });
}

// Display songs on the side panel
function displaySongs(currSong) {
  const song_name_artist = document.createElement("p");
  song_name_artist.textContent = `${currSong.name} - ${currSong.artist}`;
  song_name_artist.className = "all-songs";

  displaySongsEle.appendChild(song_name_artist);
  displayOnCard(song_name_artist);
}

// Display Song on the card
function displayOnCard(song_name_artist) {
  song_name_artist.addEventListener("click", (event) => {
    const song_on_card = event.target; // <p> element
    const songDetailsArray = song_on_card.textContent.split("-"); // ["song_name", "artist_name"]
    const song_name = songDetailsArray[0].trim(); // song name

    const display_song = songs.find((currSong) => currSong.name === song_name); // object returned

    songImgEle.src = display_song.image;
    songTitleEle.textContent = display_song.name;
    artistNameEle.textContent = display_song.artist;
    audioEle.src = display_song.audio;
    currIndex = display_song.id - 1;
  });
}
