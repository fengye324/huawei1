$(function(){	
	$('.header_rigth li:nth-of-type(n+4)').hover(function(event) {
        $(this).children().stop().slideToggle()
    });
})
$('.message span').click(function(){
			$('.mes_a').stop().slideToggle(100);
			if($('.message span').html()=="收起"){
				$('.message span').html("放下") }
				else{
					$('.message span').html("收起")
				}
		})
		
