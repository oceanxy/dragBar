(function($, window){
    $.dragBar = function(options){
        var o = $.extend({}, $.dragBar.options, options || {});
        if(o.startVal >= o.endVal || isNaN(o.startVal) || isNaN(o.endVal) || o.startVal < 0 || o.endVal <= 0) return;
        if(isNaN(o.val)){
            return;
        } else if(o.val > o.endVal){
            o.val = o.endVal;
        } else if(o.val < o.startVal){
            o.val = o.startVal;
        }
        $(o.dragBar + " .drag-start").text(o.startVal);
        $(o.dragBar + " .drag-end").text(o.endVal);
        var minWidth = Math.ceil($(o.dragBar + " .drag-start").width()) + Math.ceil($(o.dragBar + " .drag-end").width()) + 68;
        if(typeof o.width === "undefined"){
            $(o.dragBar).width(minWidth);
            $(o.dragBar + " .drag-shape").width(15);
        } else {
            if(o.width - minWidth < 0){
                $(o.dragBar).width("100%").html("您设置的控件总宽度过小（当前可设最小值：" + minWidth + "px）");
                return;
            } else {
                $(o.dragBar).width(o.width);
                $(o.dragBar + " .drag-shape").width(o.width - minWidth);
            }
        }
        var totalDis = o.endVal - o.startVal,
            cur = o.val - o.startVal,
            shapeWidth = $(o.dragBar + " .drag-shape").width() - 15,
            initVal = shapeWidth / totalDis * cur,
            initText = cur + o.startVal;
        $(o.dragBar + " .drag-bar-process").width(initVal);
        $(o.dragBar + " .drag-text-process").css("left", initVal);
        $(o.dragBar + " .drag-cur").text(Math.ceil(initText));
        $(o.dragBar).data("curVal", Math.ceil(initText));
        var target = 0;
        $(o.dragBar + " .drag-text-process").on("mousedown", function (ev) {
            if(o.drag) {
                var start = $(o.dragBar + " .drag-text-process").position().left,
                    delta = ev.pageX - start;

                $(o.dragBar).parents().on("mousemove", function (e) {
                    var e = e || window.event;
                    target = e.pageX - delta;
                    target = ( target < 0 ) ? 0 : target;
                    target = ( target > shapeWidth ) ? shapeWidth : target;

                    initVal = target / shapeWidth * (o.endVal - o.startVal) + o.startVal;

                    $(o.dragBar + " .drag-text-process").css("left", target);
                    $(o.dragBar + " .drag-bar-process").width(target);
                    $(o.dragBar + " .drag-text-process .drag-cur").text(Math.ceil(initVal));
                    $(o.dragBar).data("curVal", Math.ceil(initVal));
                });
            }
        });


        $(o.dragBar).parents().on("mouseup", function () {
            if(o.drag) {
                $(o.dragBar).parents().off("mousemove");
            }
        });


    };
    $.dragBar.options = {
        dragBar: ".drag-bar",//消息框容器
        drag: true,//是否可拖动
        width: undefined,//宽度 （缺省时使用默认宽度：根据控件的内部元素结构及内部元素各自的占位大小算出的最小值）
        startVal: 0,//起始值
        endVal: 100,//终止值
        val: 0//初始值

    };
})(jQuery, window);

(function($){
    $.dragBar({
        dragBar: ".drag-bar-1",
        width: 200,
        startVal: 150,
        endVal: 200,
        val: 0
    });
    $.dragBar({
        dragBar: ".drag-bar-2",
        width: 500,
        startVal: 100,
        endVal: 300,
        val: 100
    });
    $.dragBar({
        dragBar: ".drag-bar-3",
        width: 300,
        startVal: 100,
        endVal: 200,
        val: 100
    });
})(jQuery);
