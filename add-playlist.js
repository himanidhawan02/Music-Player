// Section-3

const addToPlaylistButton = document.querySelector("#add-to-playlist");
const playlistNameEle = document.querySelector("#input-playlist");
const createPlaylistButton = document.querySelector("#create-playlist-btn");
const allPlaylistDiv = document.querySelector("#all-playlists");
const currentPlaylistDiv = document.querySelector("#current-playlist");

playlistNameEle.value = "";

// const playlists = {
//   // Workout: ["Sugar", "Shape of You" ],
//   // Chill: ["All Of Me"],
// };

const playlists = {};

let selectedPlaylistBtn = null;

// Create Playlists
createPlaylistButton.addEventListener("click", createPlaylist);

function createPlaylist() {
  if (playlistNameEle.value) {
    playlists[`${playlistNameEle.value}`] = [];
    // console.log(playlists);

    const addPlaylist = document.createElement("button");
    addPlaylist.textContent = playlistNameEle.value;
    addPlaylist.className = "all-playlists";
    allPlaylistDiv.appendChild(addPlaylist);
    playlistNameEle.value = "";

    // Add click listener to select the playlist
    addPlaylist.addEventListener("click", () => {
      if (selectedPlaylistBtn) {
        selectedPlaylistBtn.style.backgroundColor = ""; // Reset previous selection style
      }

      selectedPlaylistBtn = addPlaylist; // Set new selected playlist and highlight
      selectedPlaylistBtn.style.backgroundColor = "rgb(130, 129, 129)";
      displaySongsInPlaylist(selectedPlaylistBtn.textContent);
    });
  }
}

// Add current song to selected playlist when "Add to Playlist" button is clicked
addToPlaylistButton.addEventListener("click", () => {
  if (selectedPlaylistBtn) {
    const playlist_name = selectedPlaylistBtn.textContent; // playlist_name inside playlists object (key)
    const songAdded = songs[currIndex].name; // (value)
    playlists[playlist_name].push(songAdded);
    // console.log(playlists);
    displaySongsInPlaylist(playlist_name);
  } else {
    alert("Please select a playlist first.");
  }
});

function displaySongsInPlaylist(playlist_name) {
  currentPlaylistDiv.innerHTML = "";
  playlists[playlist_name].forEach((currSong) => {
    const addSong = document.createElement("p");
    addSong.textContent = currSong;
    addSong.className = "all-songs";
    addSong.addEventListener("click", () => {
      displayPlaylistSongOnCard(addSong);
    });

    currentPlaylistDiv.appendChild(addSong);
  });
}

function displayPlaylistSongOnCard(addSong) {
  const display_song = songs.find(
    (currSong) => currSong.name === addSong.textContent
  );

  songImgEle.src = display_song.image;
  songTitleEle.textContent = display_song.name;
  artistNameEle.textContent = display_song.artist;
  audioEle.src = display_song.audio;
  currIndex = display_song.id - 1;
}
