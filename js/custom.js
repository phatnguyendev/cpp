document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'light') === 'light') ? document.querySelector('body').classList.remove('dark') : document.querySelector('body').classList.add('dark')
})

document.getElementById("mode").addEventListener("click", changemode);

function changemode() {
  var mode = ((localStorage.getItem('mode') || 'light') === 'light') ? 'light' : 'dark';  
  if(mode === 'dark')
    this.innerHTML = "Light mode";
  else
    this.innerHTML = "Dark mode";
}
