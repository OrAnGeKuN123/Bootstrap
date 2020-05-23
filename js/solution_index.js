$(function () {
    switch ($(".sol-case").find("#sol-title").html()) {
        case "解决方案":
            $($(".product-title .pro-cont").children("li").get(0)).css("color", "#00a971");
            break;
        case "方案一":
            $($(".product-title .pro-cont").children("li").get(1)).css("color", "#00a971");
            break;
        case "方案二":
            $($(".product-title .pro-cont").children("li").get(2)).css("color", "#00a971");
            break;
        case "方案三":
            $($(".product-title .pro-cont").children("li").get(3)).css("color", "#00a971");
            break;
        case "方案四":
            $($(".product-title .pro-cont").children("li").get(4)).css("color", "#00a971");
    }
});