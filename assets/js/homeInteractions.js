$('#theme-change').on('change', function() {
    $('*').toggleClass('dark')
    console.log($(this)[0].checked);
    if ($(this)[0].checked) {
        $('.logo-menu').prop('src','./assets/images/animo-logo-dark.png')
    }else {
        $('.logo-menu').prop('src','./assets/images/animo-logo.png')
    }
})
