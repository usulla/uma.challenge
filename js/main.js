
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

$(function () {
    $(document).on("click", ".logo", function () {
        if ($(".main").hasClass("rus")) {
            $(".logo_eng").removeClass("hide");
            $(".main")
                .toggleClass("rus")
                .toggleClass("eng");
            $(".category__item.item1").html("IT");
            $(".category__item.item2").html("Highload Dev");
            $(".category__item.item3").html("Big Data Analytics");
            $(".copyrite").html("© Uma.Tech LLC 2019");
        } else {
            $(".main")
                .toggleClass("rus")
                .toggleClass("eng");
            $(".category__item.item1").html("ИТ");
            $(".category__item.item2").html(
                "Разработка высоконагруженных<br> сервисов"
            );
            $(".category__item.item3").html("Аналитика больших<br> данных");
            $(".copyrite").html("© ООО “Ума.Тех”  2019");
        }
    });
    var catHeight = $(".category").height() + 10;
    var catWidth = $(".content_center__block").width();

    $(".category").css("min-height", catHeight);
    $(".content_center__block").css("min-width", catWidth);
    $(".footer").css("min-width", catWidth);

    $(window).resize(function () {
        var catHeight = $(".category").height();
        var catWidth = $(".content_center__block").width();
        $(".category").css("min-height", catHeight);
        $(".content_center__block").css("min-width", catWidth);
        $(".footer").css("min-width", catWidth);
    });
});