const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    revomActiveClass();
    panel.classList.add('active');
  })
})

function revomActiveClass () {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}