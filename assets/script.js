const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imgPath = 'assets/images/slideshow/'
let slideIn = 1


for (let index = 0; index < slides.length; index++) {
	const slide = (index + 1)
	const style = slide === slideIn ? 'dot dot_selected' : 'dot'

	const bannerDots = document.querySelector('#banner .dots')
	bannerDots.innerHTML += `<span class="${style}" data-slide="${slide}" onclick="dotSlide(${slide});"></span>`
}

document.querySelector('#banner').innerHTML += `
	<button class="arrow arrow_left" onclick="prevSlide();"></button>
    <button class="arrow arrow_right" onclick="nextSlide();"></button>`


const prevSlide = () => {
	if (slideIn === 1) {
		slideIn = slides.length
	} else {
		slideIn--
	}

	replaceSlide()
	updateDot(slideIn)
}

const nextSlide = () => {
	if (slideIn === slides.length) {
		slideIn = 1
	} else {
		slideIn++
	}
	
	replaceSlide()
	updateDot(slideIn)
}

const dotSlide = (index) => {
	slideIn = index
	replaceSlide()
	updateDot(index)
}

const replaceSlide = () => {
	const bannerImg = document.querySelector('#banner img')
	const bannerText = document.querySelector('#banner p')

	const selectSlide = slides.find(slide => slide.image.split('.')[0] === 'slide' + slideIn)

	bannerImg.src = imgPath + selectSlide.image
	bannerText.innerHTML = selectSlide.tagLine
}

const updateDot = (index) => {
	const dots = document.querySelectorAll('#banner .dot')

	dots.forEach(dot => {
		if (index == dot.dataset.slide) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	})
}
