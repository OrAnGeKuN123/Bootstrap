$(function () {
    console.log($(".news").find("#pro-title").html());
    console.log($($(".product-title .pro-cont").children("li").get(0)).css("color"));
    switch ($(".news").find("#pro-title").html()) {
        case "新闻资讯":
            $($(".product-title .pro-cont").children("li").get(0)).css("color", "#00a971");
            break;
        case "公司公告":
            $($(".product-title .pro-cont").children("li").get(1)).css("color", "#00a971");
            break;
        case "行业动态":
            $($(".product-title .pro-cont").children("li").get(2)).css("color", "#00a971");
    }
    console.log($($(".product-title .pro-cont").children("li").get(0)).css("color"));
});