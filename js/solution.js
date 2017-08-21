(function(){
    var init = function(){
        // var player = cyberplayer("playercontainer").setup({
        //     width: 320,
        //     height: 240,
        //     file: "http://haykm9fq35dps9tvvkv.exp.bcevod.com/mda-hckkw6vw79zi34vh/mda-hckkw6vw79zi34vh.m3u8",
        //     image: "http://haykm9fq35dps9tvvkv.exp.bcevod.com/mda-hckkw6vw79zi34vh/mda-hckkw6vw79zi34vh.jpg",
        //     autostart: false,
        //     stretching: "uniform",
        //     repeat: false,
        //     volume: 100,
        //     controls: true,
        //     ak: '85d3a718c13a42b9b04f4f9697b10a93'
        // });
        var hash = location.hash;
        if (!hash) return;
        $(".article").removeClass("now");
        $(hash).addClass("now");
        $(".nav-list > a").removeClass("now");
        $(".nav-list [data-for=" + hash.slice(1) + "]").addClass("now");
    }
    $("#main").on("click", ".nav-list > a:not(.now)", function(){
        var articleID = $(this).attr("data-for");
        $(".nav-list .now").removeClass("now");
        $(this).addClass("now");
        $(".article.now").removeClass("now");
        $("#" + articleID).addClass("now");
    });
    init();
})();