

//头部下拉框
$(function(){	
	$('.header_rigth li:nth-of-type(n+4)').hover(function(event) {
        $(this).children().stop().slideToggle()
    });
})

//轮播下拉框
$(function(){
	$('.main_center_left li').hover(function(event) {
        $(this).children().stop().toggle()
    });
})
//广告隐藏
$('.gua_center span').click(function(){
	$('.gua').stop().slideUp()
})

//账号登录
$('.header_rigth ul li:nth-of-type(1)').click(function(){
	$('.login_a').stop().show()
});
$('.login_a1 p').click(function(){
	$('.login_a').stop().hide()
});





//轮播	 
var i=0;
var Timer;
$(function(){
    $(".main ul li").eq(0).show().siblings().hide();
    TimerBanner();
    $(".main_center_but i").hover(function(){
      //鼠标移动上去
      $('.main_center_but i').addClass('bu')
        clearInterval(Timer);
        i=$(this).index();  
        showPic();         
    },function(){  
        TimerBanner();    
    });


    //点击左右按钮
    $(".main_center_right span:nth-of-type(1)").click(function(){
        clearInterval(Timer);
        i--;   //往左
        if(i==-1){
            i=5;
        }
        showPic();
        TimerBanner();
    });
    	$(".main_center_right span:nth-of-type(2)").click(function(){
        clearInterval(Timer);
        i++;   //往右
        if(i==6){
            i=0;
        }
        showPic();
        TimerBanner();
    });
$('.main').hover(function(){
     	  clearInterval(Timer);
     	},function(){
     		TimerBanner();});
//轮播部分
function TimerBanner(){
    Timer = setInterval(function(){
    	showPic()
        i++;
        if(i==6){
            i=0;
        }
        
    },5000);
}


//显示图片
function showPic(){
    $(".main ul li").eq(i).show().siblings().hide();
    $(".main_center_but i").eq(i).addClass("bu").siblings().removeClass("bu");
    if(i==0){
  	$('.main_center_left').css('opacity',' 0.5')
  } else{$('.main_center_left').css('opacity',' 1')
  }
};
 })

//yao部分的轮播
var f=0;
var tim;
$(function(){
    $(".yao ul li").eq(0).show().siblings().hide();
    Timer();
    $(".yao1 i").hover(function(){
      //鼠标移动上去
      $('.yao1 i').addClass('bu')
        clearInterval(tim);
        f=$(this).index();  
        show();         
    },function(){  
        Timer();    
    });


$('.yao').hover(function(){
     	  clearInterval(tim);
     	},function(){
     		Timer();});

function Timer(){
    tim = setInterval(function(){
    	show()
        f++;
        if(f==8){
            f=0;
        }
        
    },5000);
}
function show(){
    $(".yao ul li").eq(f).show().siblings().hide();
    $(".yao1 i").eq(f).addClass("bu").siblings().removeClass("bu");
};
 })


//精品推荐的轮播

    var g=0;

	$(".new_c b:nth-of-type(1)").click(function(){
        g--;   //往左
        if(g==-1){
        	g=0;
        }
      $(".new_a ul").eq(g).show().siblings().hide();
        if(g==0){
    	$('.new_c b:nth-of-type(1)').hide()
    	$('.new_c b:nth-of-type(2)').show()
    }   
    });

    	$(".new_c b:nth-of-type(2)").click(function(){

        g++;   //往右
       if(g==4){
        	g=3;
        }
        $(".new_a ul").eq(g).show().siblings().hide();
        if(g==3){console.log(g)
    	$('.new_c b:nth-of-type(1)').show()
    	$('.new_c b:nth-of-type(2)').hide()
		    }
    });
$('.new_c b:nth-of-type(1)').hide()
//显示图片


//第一个克隆
var lis=[
{
	src:'images/a3.png',
	name:'荣耀20',
	mon:'￥2330',
     s:'直降200',
     b:'新品'
},
{
	src:'images/a4.png',
	name:'HUAWEI Mate 30 RS 保时捷设计',
	mon:'¥12999',
    s:'致敬时代',
    b:'5G新品'
},
{
	src:'images/a5.png',
	name:'荣耀V30 PRO',
	mon:'¥4199',
     s:'5G 新品',
      b:''
},
{
	src:'images/a6.png',
	name:'荣耀20PRO',
	mon:'¥2699',
s:'直降500元|享24期免息'
},
{
	src:'images/a7.png',
	name:'HUAWEI nova 5i Pro',
	mon:'￥2330',
     s:'最高直降200 ',
      b:''
},
{
	src:'images/a8.png',
	name:'荣耀20',
	mon:'¥1599',
	 b:''

},
{
	src:'images/a9.png',
	name:'荣耀20',
	mon:'￥4430',
	

}
]
for(var p=0;p<lis.length;p++){
	var tag=$('.hot_right li').eq(0).clone();
	tag.children('img').attr('src',lis[p].src);
	tag.children('i').html(lis[p].name);
	tag.children('u').html(lis[p].mon);
	tag.children('a').html(lis[p].s);
	tag.children('span').html(lis[p].b);
$('.hot_right').append(tag);
};


//侧边栏
 $(window).scroll(function(){
        var scroll_top=$(window).scrollTop();
        console.log(scroll_top)
        if(scroll_top>=2004&scroll_top<=8500){
            $(".aside").fadeIn();
        }else{
            $(".aside").fadeOut();
        };
   })
$('aside ul li').click(function(){
	$(this).addClass('asi').siblings().removeClass('asi')
	var g=$(this).index()
	$('html,body').animate({'scrollTop':$('.side').eq(g).offset().top},1000)
});
function fn(n){
				return $('aside ul li').eq(n).addClass('asi').siblings().removeClass('asi')
			}


$(window).scroll(function(event) {
if($(window).scrollTop()>=$('.side').eq(7).offset().top){
					fn(7)
					
}else if($(window).scrollTop()>=$('.side').eq(6).offset().top){
					fn(6)
					
}else if($(window).scrollTop()>=$('.side').eq(5).offset().top){
					fn(5)
					
}else if($(window).scrollTop()>=$('.side').eq(4).offset().top){
					fn(4)
					
}else if($(window).scrollTop()>=$('.side').eq(3).offset().top){
					fn(3)
}else if($(window).scrollTop()>=$('.side').eq(2).offset().top){
					fn(2)
				
}else if($(window).scrollTop()>=$('.side').eq(1).offset().top){
					fn(1)}
else if($(window).scrollTop()>=$('.side').eq(0).offset().top){
					fn(0)		
				}
});
