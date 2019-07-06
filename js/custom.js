document.addEventListener('DOMContentLoaded', (event) => {
  var mode = ((localStorage.getItem('mode') || 'light') === 'light') ? 'light' : 'dark';  
  if(mode === 'dark')
    this.innerHTML = "Light mode";
  else
    this.innerHTML = "Dark mode";
})

document.getElementById("mode").addEventListener("click", changemode);

function changemode() {
  var mode = ((localStorage.getItem('mode') || 'light') === 'light') ? 'light' : 'dark';  
  if(mode === 'dark')
    this.innerHTML = "Light mode";
  else
    this.innerHTML = "Dark mode";
}
