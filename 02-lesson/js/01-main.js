const clickMeButton = document.querySelector('.clickMe')

clickMeButton.addEventListener('click', function () {
  clickMeButton.classList.toggle('green')
  console.log('the button is now green')
})

// const turnGreen = function () {
//   clickMeButton.classList.toggle('green')
// }
