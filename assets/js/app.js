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
	if (playBtn.className.includes("pause")) {
		music.play();
	} else {
		music.pause();
	}
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

// Seek Bar

setInterval(() => {
	seekBar.value = music.currentTime;
	currentTime.innerHTML = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener("change", () => {
	music.currentTime = seekBar.value;
});

const playMusic = () => {
	music.play();
	playBtn.classList.remove("pause");
	disk.classList.add("play");
};

// Forward and backward button

forwardBtn.addEventListener("click", () => {
	if (currentMusic >= songs.length - 1) {
		currentMusic = 0;
	} else {
		currentMusic++;
	}
	setMusic(currentMusic);
	playMusic();
});

backwardBtn.addEventListener("click", () => {
	if (currentMusic <= 0) {
		currentMusic = songs.length - 1;
	} else {
		currentMusic--;
	}
	setMusic(currentMusic);
	playMusic();
});

// Stop music when closing the section

const musicArticle = document.querySelector("#music");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			// If the element is not in the viewport (i.e., not visible)
			if (!entry.isIntersecting) {
				music.pause(); // Pause the music
				playBtn.classList.add("pause");
				disk.classList.remove("play");
			}
		});
	},
	{
		threshold: 0,
	}
);

// Start observing the #music element
observer.observe(musicArticle);
