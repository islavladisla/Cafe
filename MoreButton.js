let info = document.querySelector('.moreInfo')
let btn = document.querySelector('.section.more')
btn.addEventListener('click', function(e) {
    if(info.style.opacity == '0'){
        info.style.opacity = '100%'
    }else{
        info.style.opacity = '0'
    }
    // e.stopPropagation()
})
// document.addEventListener('click', function() {
//     info.style.opacity = "";
// })
