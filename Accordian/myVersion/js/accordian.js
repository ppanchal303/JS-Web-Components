const accordian = document.querySelectorAll('.accordian')

accordian.forEach(eachAccordian => {
  const accordianHeader = eachAccordian.querySelector('.header')
  accordianHeader.addEventListener('click', event => {
    eachAccordian.classList.toggle('is-open')
  })
})
