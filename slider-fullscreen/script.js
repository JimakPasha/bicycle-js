'use strict';

const upBtn = document.querySelector('.controls__btn-up'),
	downBtn = document.querySelector('.controls__btn-down'),
	sidebar = document.querySelector('.sidebar'),
	slider = document.querySelector('.slider'),
	slidesCount = slider.querySelectorAll('.slider__item').length,
	container = document.querySelector('.container');

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
	changeSlide('up');
});

downBtn.addEventListener('click', () => {
	changeSlide('down');
});

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
	}

	const height = container.clientHeight;

	slider.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}