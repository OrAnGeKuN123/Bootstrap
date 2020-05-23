$(function () {
    $(window).resize(function () {
        var $upHeight = $(".IOT-nav").height();
        // console.log($upHeight);
        $(".IOT-carousel").css("marginTop", $upHeight);
    });
});
// 点击使停止传播事件
$(function () {
    $("ul.navbar-nav").on("click", "[data-stopPropaation]", function (e) {
        e.stopPropagation();
    });
});
// 动态创建元素实现轮播图
// 响应式工具实现轮播图所有图片都得加载，浪费资源
$(function () {
    // 获取所有的item
    var items = $(".carousel-inner .item");
    // 监听屏幕的大小改变
    $(window).on("resize", function () {
        // 获取当前屏幕的宽度
        var width = $(window).width();
        // 判断当前屏幕的宽度是移动端还是非移动端
        if (width >= 768) { //非移动端
            // 遍历所有的item 动态创建元素
            $(items).each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("bcgImg");
                item.html($('<a href="javascript:;" class="pcimg"></a>').css("backgroundImage", "url('" + imgSrc + "')"));
                item.append("<div class='carousel-caption'>Welcome to the world of IOT</div>")
            });
        } else { //移动端
            $(items).each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("mobileImg");
                item.html($('<a href="javascript:;" class="mobileimg hidden-sm hidden-md hidden-lg"><img src="' + imgSrc + '" alt="..."></a>'));
                item.append("<div class='carousel-caption'>Welcome to the world of IOT</div>")
            });
        }
    }).trigger("resize");
    // .trigger()定义事件的时候立即触发一次
});
// 移动端手指滑动轮播图
$(function () {
    // 获取轮播图容器
    var carousel = $(".carousel");
    var carousel_inner = $(".carousel-inner")[0];
    var starX, endX;
    carousel_inner.addEventListener("touchstart", function (e) {
        starX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        carousel.carousel((endX - starX) > 0 ? "prev" : "next");
    });
});

// 产品服务动画
$(function () {
    $(".more").hide();
    var maskTop = parseInt($(".mask-text").css("top"));
        console.log(maskTop);
    $(".mask").mouseenter(function () {
        $(this).find(".mask-bg").stop(true, true).animate({
            opacity: 0.9,
            "background-color": "#00a971",
        }, 250);
        $(this).find(".iconfont").stop(true, true).animate({
            "color": "white",
        }, 250);
        $(this).find(".mask-text").stop(true, true).animate({
            top: (maskTop-20)+"px",
        }, 250);
        $(this).find(".more").stop(true, true).fadeIn(250);
        $(this).find(".more").find("span").mouseenter(function () {
            $(this).stop(true, true).animate({
                "background-color": "#fff",
                "color": "#00a971",
            }, 250);
        });
    });
    $(".mask").mouseleave(function () {
        $(this).find(".mask-bg").stop(true, true).animate({
            opacity: 0.3,
            "background-color": "#000",
        }, 250);
        $(this).find(".iconfont").stop(true, true).animate({
            "color": "#00a971",
        }, 250);
        $(this).find(".mask-text").stop(true, true).animate({
            top: maskTop,
        }, 250);
        $(this).find(".more").stop(true, true).fadeOut(250);
        $(this).find(".more").find("span").mouseleave(function () {
            $(this).stop(true, true).animate({
                "background-color": "#00a971",
                "color": "#fff",
            }, 250);
        });
    });
});
// 解决方案动画
$(function () {
    $(".solution-tab").find("li").click(function () {
        //添加各自的背景
        var i = $(this).index()
        $($(".tab-pane")[i]).css({
            "background": "url(./images/casebg_0" + (i + 1) + ".jpg)",
            "background-size": "cover",
            "background-position": "center",
        });

    });
    // more链接动画
    $(".tab-pane").find("a").mouseenter(function () {
        console.log($(this).css("background-color"));
        $(this).stop(true, true).animate({
            opacity: 1,
            "background-color": "#00a971",
        }, 250);

    });
    $(".tab-pane").find("a").mouseleave(function () {
        $(this).stop(true, true).animate({
            "background-color": "rgba(0,0,0,0)",
        }, 250);
    });
    //当屏幕过小实现滑动效果
    var $solutionUl = $(".solution-case .nav-tabs");
    var $liObjs = $solutionUl.find("li");
    var totalWidth = 0;
    $liObjs.each(function (index, value) {
        totalWidth += $(value).innerWidth();

    });
    // console.log(totalWidth); 
    $solutionUl.width(totalWidth);
    //使用插件实现滑动效果
    var myScroll = new IScroll(".tabs-parent", {
        //设置水平滑动，同时不允许垂直滑动
        scrollX: true,
        scrollY: false
    });
});
//底部二维码显示动画
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
$(function () {
    // 回到顶部
    $(window).scroll(function () {
        var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if ($scrollTop > 1000) {
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