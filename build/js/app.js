const navMenu = document.getElementById('nav-menu');
const close = document.getElementById('nav-close');
const open = document.getElementById('nav-open');

open.addEventListener('click', () => {
	console.log('open');
	navMenu.classList.toggle('translate-x-0');
});

close.addEventListener('click', () => {
	console.log('close');
	navMenu.classList.toggle('translate-x-0');
});

// modal

function openModal() {
	setTimeout(function () {
		document.getElementById('myModal').classList.remove('hidden');
	}, 300);
}

function closeModal() {
	setTimeout(function () {
		document.getElementById('myModal').classList.add('hidden');
	}, 300);
}

const videos = document.querySelectorAll('.my-video');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');
const currentTimes = document.querySelectorAll('.current-time');
const durations = document.querySelectorAll('.duration');

for (let i = 0; i < videos.length; i++) {
	const video = videos[i];
	const playButton = playButtons[i];
	const pauseButton = pauseButtons[i];
	const currentTime = currentTimes[i];
	const duration = durations[i];

	playButton.addEventListener('click', function () {
		video.play();
		playButton.classList.add('hidden');
		pauseButton.classList.remove('hidden');
	});

	pauseButton.addEventListener('click', function () {
		video.pause();
		pauseButton.classList.add('hidden');
		playButton.classList.remove('hidden');
	});

	video.addEventListener('timeupdate', function () {
		currentTime.textContent = formatTime(video.currentTime);
	});

	video.addEventListener('durationchange', function () {
		duration.textContent = formatTime(video.duration);
	});
}

function formatTime(time) {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
