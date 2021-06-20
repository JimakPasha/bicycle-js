'use strict';

const startBtn = document.querySelector('#start'),
	btns = document.querySelectorAll('.btn'),
	screens = document.querySelectorAll('.screen'),
	timeList = document.querySelector('.time__list'),
	dashboard = document.querySelector('.game__dashboard'),
	timer = document.querySelector('.game__timer-title-num'),
	scoreNum = document.querySelector('.score__title-num'),
	scoreDashboard = document.querySelector('.game__score-title-num'),
	scoreWrapper = document.querySelector('.score'),
	board = document.querySelector('#board'),
	colors = ['#F0A49F', '#DE362E', '#B0231C', '#F4E84F', '#F0DF0F', '#39E11E', '#269313', '#0FF0DA', '#0D0DF2', '#9292FA', '#D52BBE', '#751769', '#FFFFFF'],
	audioShot = document.querySelector('#audio-shot'),
	audioBtn = document.querySelector('#audio-btn');

let time = 0;
let score = 0;
let idInterval;

startBtn.addEventListener('click', () => {
	screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
	if (e.target.classList.contains('time__btn')) {
		time = parseInt(e.target.getAttribute('data-time'));
		screens[1].classList.add('up');
		startGame();
	}
});

board.addEventListener('click', (e) => {
	if (e.target.classList.contains('circle')) {
		scoreDashboard.innerHTML = `${score +1}`;
		score++;
		e.target.remove();
		createRandomCircle();
		audioShot.currentTime = 0;
		audioShot.play();
	}
});

btns.forEach((item) => {
	item.addEventListener('click', () => {
		audioBtn.currentTime = 0;
		audioBtn.play();
	});
});

function startGame() {
	idInterval = setInterval(decreaseTime ,1000);
	createRandomCircle();
	setTime(time);
}

function decreaseTime() {
	if (time === 0) {
		finishGame();
	} else {
		let current = --time;
		if (current < 10) {
			current = `0${current}`;
		}
		setTime(current);
	}
}

function setTime(value) {
	timer.innerHTML = `00:${value}`;
}

function createRandomCircle() {
	const circle = document.createElement('div');
	const size = getRandomNumber(10, 60);
	const { width, height } = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);

	circle.classList.add('circle');
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;
	setColor(circle);

	board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function finishGame() {
	board.querySelector('.circle').remove();
	dashboard.classList.add('hide');
	scoreWrapper.style.display = 'flex';
	scoreNum.innerHTML = `${score}`;
	clearInterval(idInterval);
	const repeatBtn = document.querySelector('#repeat');
	repeatBtn.addEventListener('click', () => {
		screens.forEach((item) => {
			if (item.classList.contains('up')) {
				item.classList.remove('up');
			}
		});
		screens[0].classList.add('up');
		dashboard.classList.remove('hide');
		scoreWrapper.style.display = 'none';
		score = 0;
		scoreDashboard.innerHTML = '0';
	});
}
