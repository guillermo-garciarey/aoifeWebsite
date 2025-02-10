let currentMusic = 0;

const music = document.querySelector("#audio");

const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const currentTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".song-duration");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");

playBtn.addEventListener("click", () => {
	playBtn.classList.toggle("pause");
	disk.classList.toggle("play");
});

// Music Setup

const setMusic = (i) => {
	seekBar.value = 0;
	let song = songs[i];
	currentMusic = i;
	music.src = song.path;
	songName.innerHTML = song.name;
	artistName.innerHTML = song.artist;
	disk.style.backgroundImage = `url("${song.cover}")`;
	currentTime.innerHTML = "00:00";
	music.addEventListener("loadedmetadata", () => {
		seekBar.max = music.duration;
		musicDuration.innerHTML = formatTime(music.duration);
	});
};

setMusic(0);

// Formatting time in min and seconds

const formatTime = (time) => {
	let min = Math.floor(time / 60);
	if (min < 10) {
		min = `0${min}`;
	}
	let sec = Math.floor(time % 60);
	if (sec < 10) {
		sec = `0${sec}`;
	}
	return `${min} : ${sec}`;
};
