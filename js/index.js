(function(){
    $(".news-item").on("click", function(){
        var type = $(this).attr("data-type");
        var link = $(this).attr("data-link");
        location.href = link;
    });
    var init = function(){
        $(".play-btn").on("click", function(){
            $(".video-carousel-wrap").addClass("dn");
            $("#playercontainer").show();

            var player = cyberplayer("playercontainer").setup({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                file: "http://haykm9fq35dps9tvvkv.exp.bcevod.com/mda-haykext1pin78wag/mda-haykext1pin78wag.m3u8",
                image: "http://haykm9fq35dps9tvvkv.exp.bcevod.com/mda-haykext1pin78wag/mda-haykext1pin78wag.jpg",
                autostart: true,
                stretching: "exactfit",
                repeat: false,
                volume: 100,
                controls: true,
                barLogo: false,
                ak: '85d3a718c13a42b9b04f4f9697b10a93'
            });
            
            player.on('complete', function(){
                $(".video-carousel-wrap").removeClass("dn");
                $("#playercontainer").hide();
            });
        });
    }

    
    //节流函数
    var throttle = function (fn, time, context) {
		var lock, args, wrapperFn, later;

		later = function () {
			// reset lock and call if queued
			lock = false;
			if (args) {
				wrapperFn.apply(context, args);
				args = false;
			}
		};

		wrapperFn = function () {
			if (lock) {
				// called too soon, queue to call later
				args = arguments;

			} else {
				// call and lock until later
				fn.apply(context, arguments);
				setTimeout(later, time);
				lock = true;
			}
		};

		return wrapperFn;
	}
    var dealScollHeight = function(){
        var anychatHeight = $(".anychat").offset().top;
        var scrollTop = $(window).scrollTop();
        var fixedNav = $("#header");
        var offset = anychatHeight - scrollTop - 40;
        if(offset < 0){
            fixedNav.removeClass("logow").addClass("logob");
        }else{
            fixedNav.removeClass("logob").addClass("logow");
        }
    }
    window.onscroll = throttle(dealScollHeight,100);
    init();
})();