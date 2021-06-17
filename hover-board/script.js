'use strict';

const board = document.querySelector('#board');
const colors = ['#F0A49F', '#DE362E', '#B0231C', '#F4E84F', '#F0DF0F', '#39E11E', '#269313', '#0FF0DA', '#0D0DF2', '#9292FA', '#D52BBE', '#751769', '#FFFFFF'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		setColor(square);
	});

	square.addEventListener('mouseleave', () => {
		removeColor(square);
	});

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}