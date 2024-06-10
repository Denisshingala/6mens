$(() => {
    window.onscroll = function () {
        const scrollTop = $(window).scrollTop();
        const documentHeight = $(document).height();
        const windowHeight = $(window).height();

        var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercent) {
            $("#scrollToTopButton").css({ "left": "30px", "display": "block" });
        } else {
            $("#scrollToTopButton").css({ "left": "-150px" });
        }
        $("#scrollToTopButton img").css({ "transform": "rotate(" + scrollPercent * 10 + "deg)" });
        $("#percentageIndicator").html(Math.round(scrollPercent) + "%");
    }

    $("#scrollToTopButton").on("click", () => {
        $("html, body").animate({ scrollTop: 0 }, 0);
    })
});
