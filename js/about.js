(function(){
    var map = new BMap.Map("map");
	var point = new BMap.Point(113.379627,23.129218);
	var marker = new BMap.Marker(point);
    map.centerAndZoom(point, 19);  // 初始化地图,设置中心点坐标和地图级别
    map.addOverlay(marker);
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("广州");
	map.enableScrollWheelZoom(true);
	$(function(){
		if (/MSIE 9.0/ig.test(navigator.userAgent)) {
			$(".elegant-image").on("mouseenter", function(){
				var id = +$(this).attr("data-id");
				var src = $(this).attr("src");
				var data = {height: '100%',width: '50%'};
				var css = {width: '25%',height: '50%'};
				switch (id) {
					case 1:
						jQuery.extend(css, {left: 0, top: 0});
						break;
					case 2:
						jQuery.extend(css, {left: '25%', top: 0});
						break;
					case 3:
						data.left = '25%';
						jQuery.extend(css, {left: '50%', top: 0});
						break;
					case 4:
						data.left = '50%';
						jQuery.extend(css, {left: '75%', top: 0});
						break;
					case 5:
						data.top = 0;
						jQuery.extend(css, {left: 0, top: '50%'});
						break;
					case 6:
						data.top = 0;
						jQuery.extend(css, {left: '25%', top: '50%'});
						break;
					case 7:
						data.top = 0;
						data.left = '25%';
						jQuery.extend(css, {left: '50%', top: '50%'});
						break;
					case 8:
						data.top = 0;
						data.left = '50%';
						jQuery.extend(css, {left: '75%', top: '50%'});
						break;
				}
				$("#for-ie9-animation > img").attr("src", src);
				$("#for-ie9-animation").css(css).show().animate(data);
			});
			$("#for-ie9-animation").on("mouseleave", function(){
				$("#for-ie9-animation").hide();
			});
		}
	});
})();