/**
 *
 * Created by Administrator on 2017/2/15 0014.
 */
$(function(){

  $('#nav > ul li').mouseenter(function(){
      /*鼠标一如nav*/
      $(".showdiv .list-nav").eq($(this).index()).css('display','block').siblings().hide()
  });


    /*鼠标离nav开盒子*/
    $('#nav').mouseleave(function(){
        $(".showdiv .list-nav").css('display','none');
    });


  //轮播图不会写 拼的 只限主流浏览器使用
        var num = 0;

        var aa = setInterval(function(){
             num++;
            num%=4;
           $('.container .animate #lbt').css('margin-left',num*-1200+'px');
            $('.container .animate .animate-last>li').each(function(index,value){
                $('.container .animate .animate-last>li')
                    .eq(num).addClass('active')
                    .siblings('li').removeClass('active');
            })
        },4000);


    /*轮播图的小点*/
    $('.container .animate .animate-last>li').on('click',function(){
        clearInterval(aa);
        $('.container .animate #lbt').css({'margin-left':$(this).index()*-1200+'px'});
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    $('.container .animate #lbt').mouseenter(function(){
        clearInterval(aa);
    }).mouseleave(function(){
        /*启动定时器竟然不会。。。。。。*/
         setInterval(aa)
    })



});
