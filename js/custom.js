document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'light') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})
