let hamburger = document.getElementById('hamburger');
let bottom_navbar = document.getElementById('bottom_navbar');
let close_remark = document.getElementById('close_remark');
let ulElement_mobile = document.getElementById('ulElement-mobile');
const hamburgerOnclick = () =>{
    bottom_navbar.classList.toggle('hidden')
    hamburger.classList.toggle('hidden');
    close_remark.classList.toggle('hidden');
    close_remark.classList.add('duration-500');
    close_remark.classList.toggle('duration-500');
}
hamburger.onclick = () => hamburgerOnclick()
close_remark.onclick = () => hamburgerOnclick()

// !#####################
