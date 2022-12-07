$('.item__description button').on('click', function(){
    let cap = $('.cap');
    let cart = $('.cart')
    let imgToDrag = $(this)
        .parent('.item__rate')
        .parent('.item__description')
        .parent('.item')
        .find('img')
        .eq(0);
    imgToDrag.clone()
        .offset({
            top: imgToDrag.offset().top + 100,
            left: imgToDrag.offset().left + 100,

        }).css({
        position: 'absolute',
        width: '60px',
        height: '60px',
        'z-index': '100',
    }).appendTo('.item').animate(
        {
            top: cart.offset().top - 50,
            left: cart.offset().left + 30,
            height: '40px',
            width: '40px',
        },{
            start: setTimeout(function(){
                cap.css({
                    transform: 'rotate(94deg)',
                    transition: '.4s',
                    top: '-50%',
                })
            },200),
            duration: 600,
            complete: function(){
                $(this).css({
                    opacity: '0',
                    top: '40px',
                    'transition-duration': '.7s'
                })
            },
            done: setTimeout(function(){
                cap.css({
                    transform: 'rotate(0deg)',

                })
            },1000)
        })


})