const button = document.querySelector('.hide');
const info = document.querySelector('.info');

function hide() {
    info.setAttribute('style', 'visibility: hidden');
    button.innerText = 'About →';
}

console.log(button);
console.log(info);

button.addEventListener('click', (e) => {
  button.classList.toggle('active');


  if (button.classList.contains('active')) {
    button.setAttribute('aria-expanded', 'true');
    button.innerText = 'About ↓';
    info.setAttribute('style', 'visibility: visible; width: auto; height: auto');
    info.setAttribute('aria-hidden', 'false');

  } else {
    button.setAttribute('aria-expanded', 'false');
    // button.innerText = 'About →';
    info.setAttribute('aria-hidden', 'true');
    setTimeout(hide, 455);
  }
})
