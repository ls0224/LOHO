
$(function (){
	// 手风琴
	var w = 100;
	var x = $('#banner').width();
	$('#banner .d1 li').width(x - ($('#banner .d1 li').length - 1) * w);
            // 每个li的宽
    var W = $('#banner .d1 li').width();
            // 设置ul的宽
            // console.log(W)
    $('#banner .d1').width(W + ($('#banner .d1 li').length - 1) * w);

    // 布局
    $('#banner .d1 li').each(function (index,ele) {
                if (index >= 1) {
                    $(ele).css('left',$('#banner .d1').width() - ($('#banner .d1 li').length - index) * w);
                }
            })

            // 添加鼠标移入事件
            $('#banner .d1 li').mouseenter(function () {
            	// alert(1);
                var index1 = $(this).index();
                // console.log(index1)
                $('#banner .d1 li').each(function (index,ele) {
                    if (index <= index1) {
                        $(ele).stop().animate({left: index * w});
                    } else {
                        $(ele).stop().animate({left: $('#banner .d1').width() - ($('#banner .d1 li').length - index) * w});
                    }
                });
            });


    // 轮播图
    var a = $('.sss').width();
    $('.s1 li img').width(a);
    var liW = $('.s1 li img').width();
    var aLi = $('.s1 li img');
    $('.s1 li').width(aLi.length * liW);
    $('.s1 li').css('left',-liW);
    var iNow = 0;
    var timer = setInterval(next,3000);
    function next (){
    	iNow++;
    	if(iNow == aLi.length - 2){
    		$('.s1 li').stop().animate({left:-(iNow+1)*liW},100,function (){
    			$('.s1 li').css({left:-liW});
    		});
    		iNow = 0;
    	} else {
    		$('.s1 li').stop().animate({left:-(iNow+1)*liW},100);
    	}
    	$('.s2 li').removeClass('active');
		$('.s2 li').eq(iNow).addClass('active');

    }
   $('.s2 li').mouseenter(function (){
	   	$('.s2 li').removeClass('active');
	   	iNow = $(this).index();
	   	// console.log(iNow)
	   	$('.s2 li').eq($(this).index()).addClass('active');
	   	$('.s1 li').stop().animate({left:-(iNow+1)*liW},100);
	   	clearInterval(timer);

   });
    $('.s2 li').mouseleave(function (){
		
		timer = setInterval(next,3000);
	});

    //小选项卡
    $('#shaya #left2 ul').mouseenter(function (){
    	$('#shaya #left2 ul').removeClass('live');
    	$(this).siblings().addClass('live');
    	$('#shaya #left2 ul .jjj').hide();
    	$('#shaya #left2 ul .jjj').eq($(this).index()).show();

    	// $('#shaya #left2').eq($(this).index()).addClass('live');
    });
		

    // 自定义滚动条
    //top值
    var dis = 0;
    //滚动条的最大值
    var maxBarTop = $('#shaya #middle2 #bottom3').outerHeight() - $('#shaya #middle2 #bar').outerHeight();
    console.log(maxBarTop);
    //ul的最大值
    var maxUlTop = $('#shaya #middle2 #bottom3').outerHeight() - $('#shaya #middle2 ul').outerHeight();
    //拖拽
    $('#shaya #middle2 #bar').mousedown(function (evt){
       
        var disY = evt.clientY - $('#shaya #middle2 #bar').offset().top;
        $(document).on('mousemove',function (evt){
            dis = evt.clientY - disY - $('#shaya #middle2 #bottom3')[0].offsetTop;
            
            // console.log($())
            if(dis <= 0 ){
                dis = 0;
            } if(dis >= maxBarTop){
                // alert(1)
                dis = maxBarTop;
            }

            var scale = dis / maxBarTop;
            var ulTop = scale * maxUlTop;
            // console.log(scale);
            $('#shaya #middle2 #bar').css({
                top:dis
            });
            $('#shaya #middle2 ul').css({
                top:ulTop
            });

        });
        $(document).mouseup(function (){
            $(document).off('mousemove');
        })
        return false;
    });

    //滚动事件
    addMouseWheel($('#shaya #middle2 #bottom3')[0],function (evt) {
            evt = evt || window.event;
            if (isUp(evt)) {//向上滚 返回值up=true
                dis -= 10;
                if (dis <= 0) {
                    dis = 0;
                }
            } else {//向下滚
                dis += 10;
                if (dis >= maxBarTop) {
                    dis = maxBarTop;
                }
            }
            // 比例
            var scale = dis / maxBarTop;
            // 算ul的top
            var ulTop = scale * maxUlTop;
            $('#shaya #middle2 #bar').css({
                top:dis
            });
            $('#shaya #middle2 ul').css({
                top:ulTop
            });
            return false;
        });

    //选项卡
    $('#lead #center .b1 .oo').mouseenter(function (){
        $('#lead #center .b3').hide();
        console.log($(this).index());
        $('#lead #center .b3').eq($(this).index() - 2).show();
    });

    $('#lead #center .b1 .oo').mouseleave(function (){
        $('#lead #center .b3').hide();
        // $('#lead #center .b3').eq($(this).index()).show();

    })


		
		
		
		
		
});