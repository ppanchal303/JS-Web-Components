const listTab = document.querySelectorAll('.tab')
const listContent = document.querySelectorAll('.tab-content')

listTab.forEach(item => {
  item.addEventListener('click', event => {
    listTab.forEach(t => t.classList.remove('is-selected'))
    item.classList.toggle('is-selected')

    listContent.forEach(t => t.classList.remove('is-selected'))
    document.getElementById(item.dataset.target).classList.add('is-selected')
  })
})
