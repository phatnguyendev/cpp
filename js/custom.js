document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'light') === 'dark') ? document.querySelector('body').classList.add('dark'); document.getElementById("mode").innerHTML="Dark mode"; : document.querySelector('body').classList.remove('dark');document.getElementById("mode").innerHTML="Light mode"
})
