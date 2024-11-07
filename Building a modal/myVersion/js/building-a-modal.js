const openButton = document.querySelector('.modal-open')
const closeButton = document.querySelector('.modal-close')
const bodyTag = document.querySelector('body')

openButton.addEventListener('click', event => {
  bodyTag.classList.add('modal-is-open')
})

closeButton.addEventListener('click', event => {
  bodyTag.classList.remove('modal-is-open')
})
