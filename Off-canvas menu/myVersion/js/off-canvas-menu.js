const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', event => {
  console.log('push the container to the side')
  document.querySelector('body').classList.toggle('offsite-is-open')
})
