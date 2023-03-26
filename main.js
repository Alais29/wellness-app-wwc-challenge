const toggleTheme = document.querySelector('#toggleTheme')
const html = document.querySelector('html')

toggleTheme.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }
})
