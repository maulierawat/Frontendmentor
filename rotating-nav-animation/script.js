const bars  = document.querySelector('#bars');
const close = document.querySelector('#close');
const container = document.querySelector('.container');

bars.addEventListener('click',() => {
  container.classList.add('show-nav');
})

close.addEventListener('click',() => {
  container.classList.remove('show-nav');
})