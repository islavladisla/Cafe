let info = document.querySelector('.moreInfo')
let btn = document.querySelector('.section.more')
btn.addEventListener('click', function(e) {
    let has = info.classList.toggle('press')
    if(has){
        info.style.opacity = '1'
    }else{
        info.style.opacity = '0'
    }
    e.stopPropagation()
})
document.addEventListener('click', function(e) {
if(!info.contains(e.target)){
    info.classList.remove('press')
    info.style.opacity = '0'
}
})
