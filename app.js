let mouseCursor = document.querySelector(".cursor");
let navItem = document.querySelectorAll(".navbar-nav li");
let logo = document.querySelector(".navbar-brand");
let icon = document.querySelectorAll(".font-awesome");

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navItem.forEach(link => {
    link.addEventListener('mouseover', () =>{
        mouseCursor.classList.add("link-grow")
        link.classList.add('hovered-link')
    });
});

navItem.forEach(link => {
link.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove("link-grow")
    link.classList.remove('hovered-link')
});
});

logo.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove("logo-grow")
    logo.classList.remove('logo-hover')
});

logo.addEventListener('mouseover', () =>{
    mouseCursor.classList.add("logo-grow")
    logo.classList.add('logo-hover')
});

icon.forEach(i => {
    i.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add("logo-grow")
        i.classList.add('logo-hover')
    });
});

icon.forEach(i => {
    i.addEventListener('mouseleave', () =>{
        mouseCursor.classList.remove("logo-grow")
        i.classList.remove('logo-hover')
    });
    });
