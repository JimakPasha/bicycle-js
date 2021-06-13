'use strict';

window.addEventListener('DOMContentLoaded', () => {

const slides = document.querySelectorAll('.slide'),
bg = document.querySelector('.body');


slides.forEach((item) => {
	item.addEventListener('click', () => {
		clearActiveClasses();
		const element = item.getAttribute('data-element');
		bg.style.backgroundImage = `url(images/${element + '-bg'}.jpg)`;
		item.classList.add('active');
	});
});

function clearActiveClasses() {
	slides.forEach((item) => {
		item.classList.remove('active');
	});
}



});