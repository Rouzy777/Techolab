$(".btn-success, .linka").on("click", function (event) {
    closeNav();
    if($(this).attr('href').includes('#')) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    }
});

$('.services-block').click(function() {
    let collapsed = $(this).find('.plus-minus-toggle').hasClass('collapsed');
    if(!$('div').hasClass('collapsing')) {
        $('.plus-minus-toggle').addClass('collapsed');
        if(collapsed) {
            $(this).find('.plus-minus-toggle').removeClass('collapsed');
        } else {
            $(this).find('.plus-minus-toggle').addClass('collapsed');
        }
    }
})

function openNav() {
    $("#Sidenav").css('width', '100%');
}

function closeNav() {
    $("#Sidenav").css('width', '0px');
}

function ajax() {
    let mail = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
    };
    
    fetch('mail.php', {
        method: 'post',
        body: JSON.stringify(mail)
    }).then(res=>res.json())
      .then(res => console.log(res));
}