let hamburger = document.getElementById('hamburger');
let bottom_navbar = document.getElementById('bottom_navbar');
let close_remark = document.getElementById('close_remark');

const hamburgerOnclick = () =>{
    bottom_navbar.classList.toggle('hidden')
}
const closeRemarkOnclick = () =>{
    bottom_navbar.classList.toggle('hidden')
}
hamburger.onclick = () => {
    hamburgerOnclick()
    hamburger.classList.toggle('hidden');
    close_remark.classList.toggle('hidden');
    close_remark.classList.add('duration-500');
    close_remark.classList.toggle('duration-500');
}
close_remark.onclick = () => {
    hamburgerOnclick()
    hamburger.classList.toggle('hidden');
    close_remark.classList.toggle('hidden');
    hamburger.classList.add('duration-500')
    hamburger.classList.toggle('duration-500')
}
