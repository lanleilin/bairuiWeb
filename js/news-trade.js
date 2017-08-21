(function(){
    $(".news-page .news-list").on("click", function(){
        var link = $(this).attr("data-link");
        location.href = link;
    });
    $(".trade-page .news-list").on("click", function(){
        var link = $(this).attr("data-link");
        location.href = link;
    });
})();