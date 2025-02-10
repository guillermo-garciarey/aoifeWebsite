let songs = [
	{
		name: "Wonderwall",
		path: "https://www.dropbox.com/scl/fi/5tvoyfd2g8hcex5jhii46/Think_of_What_Happened_to_Me_from_Fiver_Southwark_Playhouse_3_-_20_July.mp3?rlkey=75nj5p6e3b9fkrugjgfrwwscg&raw=1",
		artist: "Aoife Clesham feat. Oasis",
		cover: "../../images/disk.jpg",
	},
	{
		name: "Live Forever",
		path: "ttps://drive.google.com/uc?export=download&id=1XgsSyYDKYi02XLuNs15NR8KRJAQQdOL7",
		artist: "Aoife Clesham feat. Oasis",
		cover: "/aoifeWebsite/images/profile1.jpg",
	},
];

const songListContainer = document.querySelector(".song-list");
const musicPlayer = document.querySelector(".music-player");

// Function to create song list
const loadSongList = () => {
	songs.forEach((song, index) => {
		const songItem = document.createElement("div");
		songItem.classList.add("song-item");

		// Add cover image
		const songImage = document.createElement("img");
		songImage.src = song.cover;
		songImage.alt = song.name;

		// Add song name
		const songText = document.createElement("span");
		songText.innerText = song.name;

		songItem.appendChild(songImage);
		songItem.appendChild(songText);

		// Add click event to load song into the player
		songItem.addEventListener("click", () => {
			setMusic(index);
			music.play();
			musicPlayer.scrollIntoView({ behavior: "smooth" });
		});

		songListContainer.appendChild(songItem);
	});
};

// Call function to load song list on page load
loadSongList();
