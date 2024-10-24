const button = document.querySelector('.butt');
const menu = document.querySelector('.menu');

console.log(button);
console.log(menu);

button.addEventListener('click', (e) => {
  button.classList.toggle('active');


  if (button.classList.contains('active')) {
    button.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
  } else {
    button.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
  }
})
