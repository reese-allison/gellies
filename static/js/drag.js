var currentDraggable;
var dragging = false;

function Draggable(item, container, args_list){
    let me = {};
    let args = args_list || {};

    function _get (el) {
        if (typeof el == 'string') return document.getElementById(el);
        return el;
    }

    me.item = _get(item);
    me.container = _get(container) || document;
    me.id = args.id || Math.floor(Math.random()*90000) + 10000;

    me.snap = args.snap || true;
    
    me.active = false;
    me.xOffset = me.yOffset = 0;

    let _dragStart = function (e) {
        if(args.handle){
            if(!e.target.classList.contains(args.handle)){
                return;
            }
        }
        if (e.type === "touchstart") {
            me.initialX = e.touches[0].clientX - me.xOffset;
            me.initialY = e.touches[0].clientY - me.yOffset;
        } else {
            me.initialX = e.clientX - me.xOffset;
            me.initialY = e.clientY - me.yOffset;
        }

        if (args.start){
            args.start(me, e);
        }

        me.active = dragging = true;
        document.body.classList.add('no-select');
        me.item.classList.add('no-pointer');
        if (args.draggingClass){
            me.item.classList.add(args.draggingClass);  
        }

        currentDraggable = me;
    };

    let _dragEnd = function(e) {
        if (me.snap){
            me.item.style.transform = '';
            me.currentX = me.initialX;
            me.currentY = me.initialY;
            me.xOffset = me.yOffset = 0;
        }

        if (args.end){
            args.end(me, e);
        }

        me.active = dragging = false;
        document.body.classList.remove('no-select');
        me.item.classList.remove('no-pointer');
        if (args.draggingClass){
            me.item.classList.remove(args.draggingClass);  
        }

        currentDraggable = undefined;
    };

    let _drag = function(e) {
        if (me.active) {
            if (e.type === "touchmove") {
                me.currentX = e.touches[0].clientX - me.initialX;
                me.currentY = e.touches[0].clientY - me.initialY;
            } else {
                me.currentX = e.clientX - me.initialX;
                me.currentY = e.clientY - me.initialY;
            }

            me.xOffset = me.currentX;
            me.yOffset = me.currentY;

            _setTranslate(me.currentX, me.currentY, me.item);
        }
    };

    let _setTranslate = function (xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 9999px)`;
    };

    me.item.addEventListener("touchstart", _dragStart, {passive:true, capture:false});
    me.container.addEventListener("touchend", _dragEnd, {passive:true, capture:false});
    me.container.addEventListener("touchmove", _drag, {passive:true, capture:false});
    
    me.item.addEventListener("mousedown", _dragStart, {passive:true, capture:false});
    me.container.addEventListener("mouseup", _dragEnd, {passive:true, capture:false});
    me.container.addEventListener("mousemove", _drag, {passive:true, capture:false});

    return me;
}

export{ Draggable }
