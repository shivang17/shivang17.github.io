var selector = '.nav li';
    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });

    var scrollEventHandler = function()
    {
      window.scroll(0, window.pageYOffset)
    }
    window.addEventListener("scroll", scrollEventHandler, false);