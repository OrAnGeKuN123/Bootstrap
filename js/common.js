$(function () {
    var $topWidth = $(".head-pic .container-fluid").innerWidth();
    var $topHeight = (600 / 1920) * $topWidth;
    $(".head-pic").height($topHeight);
    $(window).resize(function () {
        $topWidth = $(".head-pic .container-fluid").innerWidth();
        $topHeight = (600 / 1920) * $topWidth;
        $(".head-pic").height($topHeight);
    });
});
$(function () {
    var $upHeight = $(".IOT-nav").height();
    $(".head-pic").css("marginTop", $upHeight);
    $(window).resize(function () {
        $upHeight = $(".IOT-nav").height();
        $(".head-pic").css("marginTop", $upHeight);
    });
});

// 点击使停止传播事件
$(function () {
    $("ul.navbar-nav").on("click","[data-stoppropaation]",function (e) {
        e.stopPropagation();
    });
});

//底部显示二维码动画
$(function () {
    $(".qq-code").mouseenter(function () {
        $(this).find(".code-pic").stop(true, true).fadeIn(250);
    });
    $(".qq-code").mouseleave(function () {
        $(this).find(".code-pic").stop(true, true).fadeOut(250);
    });
    $(".wechat-code").mouseenter(function () {
        $(this).find(".code-pic").stop(true, true).fadeIn(250);
    });
    $(".wechat-code").mouseleave(function () {
        $(this).find(".code-pic").stop(true, true).fadeOut(250);
    });
});
//回到顶部动画
$(function () {
    // 回到顶部
    $(window).scroll(function () {
        var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if ($scrollTop > 200) {
            $("#backup").show();
        } else {
            $("#backup").hide();
        }
    })
    $("#backup").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 250);
        return false;
    })
});
$(function () {
    var $ulObjs = $(".pro-tit-inner .pro-cont");
        var $liObjs = $ulObjs.find("li");
        var totalWidth = 0;
        $liObjs.each(function (index, value) {
            totalWidth += $(value).innerWidth();
        });
        // console.log(totalWidth); 
        $ulObjs.width(totalWidth);
    $(window).resize(function () {
         $ulObjs = $(".pro-tit-inner .pro-cont");
         $liObjs = $ulObjs.find("li");
         totalWidth = 0;
        $liObjs.each(function (index, value) {
            totalWidth += $(value).innerWidth();
        });
        // console.log(totalWidth); 
        $ulObjs.width(totalWidth);
        //使用插件实现滑动效果
        myScroll = new IScroll(".pro-tit-inner", {
            //设置水平滑动，同时不允许垂直滑动
            scrollX: true,
            scrollY: false
        });
    });
});
