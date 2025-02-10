let songs = [
	{
		name: "Wonderwall",
		path: "https://www.dropbox.com/scl/fi/5tvoyfd2g8hcex5jhii46/Think_of_What_Happened_to_Me_from_Fiver_Southwark_Playhouse_3_-_20_July.mp3?rlkey=75nj5p6e3b9fkrugjgfrwwscg&raw=1",
		artist: "Aoife Clesham feat. Oasis",
		cover: "/aoifeWebsite/images/disk1.jpg",
	},
	{
		name: "Live Forever",
		path: "https://www.dropbox.com/scl/fi/k9llir7o9fa4vj7p3yf05/Aoife_Clesham_-_Rodeo_Drive_-_Pretty_Woman_-_The_Musical_-_Roles_We_Nearly_Played.mp3?rlkey=d1rrfx21wxjrms5thvgqb421j&raw=1",
		artist: "Aoife Clesham feat. Oasis",
		cover: "/aoifeWebsite/images/disk2.jpg",
	},
	{
		name: "Something Something Anger And Something Else",
		path: "https://www.dropbox.com/scl/fi/5tvoyfd2g8hcex5jhii46/Think_of_What_Happened_to_Me_from_Fiver_Southwark_Playhouse_3_-_20_July.mp3?rlkey=75nj5p6e3b9fkrugjgfrwwscg&raw=1",
		artist: "Oasis",
		cover: "/aoifeWebsite/images/disk3.jpg",
	},
	{
		name: "Supersonic",
		path: "https://www.dropbox.com/scl/fi/k9llir7o9fa4vj7p3yf05/Aoife_Clesham_-_Rodeo_Drive_-_Pretty_Woman_-_The_Musical_-_Roles_We_Nearly_Played.mp3?rlkey=d1rrfx21wxjrms5thvgqb421j&raw=1",
		artist: "Oasis",
		cover: "/aoifeWebsite/images/disk4.jpg",
	},
	{
		name: "Champagne Supernova",
		path: "https://www.dropbox.com/scl/fi/5tvoyfd2g8hcex5jhii46/Think_of_What_Happened_to_Me_from_Fiver_Southwark_Playhouse_3_-_20_July.mp3?rlkey=75nj5p6e3b9fkrugjgfrwwscg&raw=1",
		artist: "Aoife Clesham feat. Oasis",
		cover: "/aoifeWebsite/images/disk5.jpg",
	},
	{
		name: "Ran Out Of Songs",
		path: "https://www.dropbox.com/scl/fi/k9llir7o9fa4vj7p3yf05/Aoife_Clesham_-_Rodeo_Drive_-_Pretty_Woman_-_The_Musical_-_Roles_We_Nearly_Played.mp3?rlkey=d1rrfx21wxjrms5thvgqb421j&raw=1",
		artist: "Aoife Clesham feat. Oasis",
		cover: "/aoifeWebsite/images/disk6.jpg",
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
		const songName = document.createElement("span");
		songName.innerText = song.name;

		songItem.appendChild(songImage);
		songItem.appendChild(songName);

		// Add click event to load song into the player
		songItem.addEventListener("click", () => {
			setMusic(index);
			music.play();

			if (playBtn.classList.contains("pause")) {
				playBtn.classList.remove("pause");
			}
			if (!disk.classList.contains("play")) {
				disk.classList.add("play");
			}

			musicPlayer.scrollIntoView({ behavior: "smooth" });
		});

		songListContainer.appendChild(songItem);
	});
};

// Call function to load song list on page load
loadSongList();
