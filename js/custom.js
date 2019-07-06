document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'light') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})

document.getElementById("mode").addEventListener("click", {
  if((localStorage.getItem('mode') || 'light') === 'dark')
    this.innerHTML = "Light mode";
  else
    this.innerHTML = "Dark mode";
});
