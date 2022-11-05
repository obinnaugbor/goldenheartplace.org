window.addEventListener('scroll', () =>
{
    document.querySelector('nav').classList.toggle
    ('window-scrool', window.scrollY > 0)
})