const previousButton = document.querySelector('.previous-btn')
const nextButton = document.querySelector('.next-btn')
const contents = document.querySelector('.carousel-content')

nextButton.addEventListener('click', event => {
  const currentSlide = contents.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', true)
  }

  console.log(nextSlide)

  const destination = getComputedStyle(nextSlide).left
  contents.style.left = '-' + destination

  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')

  previousButton.removeAttribute('hidden')
})

previousButton.addEventListener('click', event => {
  const currentSlide = contents.querySelector('.is-selected')
  const previousSlide = currentSlide.previousElementSibling

  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute('hidden', true)
  }

  const destination = getComputedStyle(previousSlide).left
  contents.style.left = '-' + destination

  currentSlide.classList.remove('is-selected')
  previousSlide.classList.add('is-selected')

  nextButton.removeAttribute('hidden')
})
