/**
 *
 * Created by Administrator on 2017/2/15 0014.
 */
$(function(){

  $('#nav > ul li').mouseenter(function(){
      /*���һ��nav*/
      $(".showdiv .list-nav").eq($(this).index()).css('display','block').siblings().hide()
  });


    /*�����nav������*/
    $('#nav').mouseleave(function(){
        $(".showdiv .list-nav").css('display','none');
    });


  //�ֲ�ͼ����д ƴ�� ֻ�����������ʹ��
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


    /*�ֲ�ͼ��С��*/
    $('.container .animate .animate-last>li').on('click',function(){
        clearInterval(aa);
        $('.container .animate #lbt').css({'margin-left':$(this).index()*-1200+'px'});
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    $('.container .animate #lbt').mouseenter(function(){
        clearInterval(aa);
    }).mouseleave(function(){
        /*������ʱ����Ȼ���ᡣ����������*/
         setInterval(aa)
    })



});
