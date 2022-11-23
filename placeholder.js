
    let block = document.querySelector('input[type="email"]')
    let moveFlag = false
    moving()
    window.addEventListener('resize', moving)

    function moving(){

    if(!moveFlag && window.innerWidth <= 768){
    moveFlag = true
    block.setAttribute('placeholder', 'Email')
}
}
