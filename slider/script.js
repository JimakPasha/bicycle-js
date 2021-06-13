window.addEventListener('DOMContentLoaded', () => {

	const btnPrev = document.querySelector('.slider__btn-prev'),
		btnNext = document.querySelector('.slider__btn-next'),
		sliderField = document.querySelector('.slider__items');

	let offset = 0;


	btnPrev.addEventListener('click',() => {
		offset += 467;
		checkOffset();
		sliderField.style.transform = `translateX(${offset}px)`;
		console.log(offset);
	});

	btnNext.addEventListener('click',() => {
		offset -= 467;
		checkOffset();
		sliderField.style.transform = `translateX(${offset}px)`;
		console.log(offset);
	});

	function checkOffset() {
		if (offset > 0) {
			offset = -1868;
		}
		if (offset < -1868) {
			offset = 0;
		}
	}

});