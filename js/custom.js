document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'light') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
  if($('body').hasClass("dark"))
    document.getElementById("mode").innerHTML = "Light mode";
  else
    document.getElementById("mode").innerHTML = "Dark mode";
})

document.getElementById("mode").addEventListener("click", changemode);

function changemode() {
  var mode = ((localStorage.getItem('mode') || 'light') === 'light') ? 'light' : 'dark';  
  if(mode === 'dark')
    this.innerHTML = "Light mode";
  else
    this.innerHTML = "Dark mode";
}
