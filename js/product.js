(function () {
    function isPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    if (!isPC()) {
        var video = document.getElementById('video');
        video.style.display = 'none';
        var crossPlatform = document.getElementById('cross-platform');
//            crossPlatform.style.display='none';
        $('#p-flowPC').hide();
        $('#record h3').addClass('recordAddh3');
        $('#record p').addClass('recordAddp');
        $('#DataCommunicate').hide();
        $('#opening').hide();
        $('#safe-reliable-info').addClass('safeReliableInfo');
        $('#left-side').addClass('leftSide');
        $('#right-side').addClass('rightSide');
        $('#right-side div').removeClass('vertical-size2 separate-space');
        $('#morefunc').addClass('p-morefunc');
        $('#p-banner').addClass('p-banner');
        $('#title-bannerm').addClass('title-bannerm');

    } else {
        var video1 = document.getElementById('video1');
        video1.style.display = 'none';
        $('#p-flowMB').hide();
        $('#forMobile').hide();
    }
})();