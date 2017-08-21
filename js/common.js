/**
 * Created by Cdj on 2017/8/19.
 */
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
        var html = document.documentElement;
        var hWidth = html.getBoundingClientRect().width;
        html.style.fontSize = hWidth / 15 + "px";
    } else {
        var html = document.documentElement;
        var hWidth = html.getBoundingClientRect().width;
        html.style.fontSize = hWidth / 45 + "px";
        //document.getElementById('logoImg').style.height=100+'px';
        //document.getElementById('logoImg').style.width=400+'px';
    }
    ;

})();