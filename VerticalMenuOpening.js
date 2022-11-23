let  hamburger  = document.querySelector('.hamburger')
let menu = document.querySelector('.vertical_menu')
let closeBtn = document.querySelector('img[alt="closeBtn"]')
hamburger.addEventListener('click',function (a){
    menu.style.left = '0'
    a.stopPropagation()
})
closeBtn.addEventListener('click', function(){
    menu.style.left = null;
})
document.addEventListener('click', function(event) {
    let e = document.querySelector('.vertical_menu');
    if (!e.contains(event.target)) e.style.left= null;
});


