window.addEventListener('scroll', function(){
    const Header = document.querySelector('header');
    Header.classList.toggle("sticky", window.scrollY >0);
});

function toggolemenu(){
    const menuToggleVr = document.querySelector('.menuToggle');
    const navigationVr = document.querySelector('.navigation');
    menuToggleVr.classList.toggle('active');
    navigationVr.classList.toggle('NActive');
}
