$('nav>div>p').click(function(){
    $(this).addClass("d").siblings().removeClass(); 
    $("main>ul").hide().eq($('nav>div>p').index(this)).show();
});