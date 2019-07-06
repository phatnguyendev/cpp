document.addEventListener('DOMContentLoaded', (event) => {
  if((localStorage.getItem('mode') || 'light') === 'dark')
  {
    document.querySelector('body').classList.add('dark'); 
    document.getElementById("mode").innerHTML="Light mode";
  }
  else
  {
    document.querySelector('body').classList.remove('dark');
    document.getElementById("mode").innerHTML="Dark mode";
  }
})
