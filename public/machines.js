$(function() {
    $(".scroll").click(function() {
        mission_tag = $(this.hash);
        offset = mission_tag.offset();
        $("html,body").animate({
            scrollTop: mission_tag.offset().top 
        }, "500");
        return false
    })
})