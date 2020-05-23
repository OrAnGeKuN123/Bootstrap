
$(function () {
    console.log($(".more-prodcuts").find("#pro-title").html());
    console.log($($(".product-title .pro-cont").children("li").get(0)).css("color"));
    switch ($(".more-prodcuts").find("#pro-title").html()) {
        case "产品服务":
            $($(".product-title .pro-cont").children("li").get(0)).css("color", "#00a971");
            break;
        case "设备接入":
            $($(".product-title .pro-cont").children("li").get(1)).css("color", "#00a971");
            break;
        case "运营中心":
            $($(".product-title .pro-cont").children("li").get(2)).css("color", "#00a971");
            break;
        case "联网模块":
            $($(".product-title .pro-cont").children("li").get(3)).css("color", "#00a971");
            break;
        case "数据中心":
            $($(".product-title .pro-cont").children("li").get(4)).css("color", "#00a971");
    }
    console.log($($(".product-title .pro-cont").children("li").get(0)).css("color"));
});