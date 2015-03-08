var addRippleEffect = function (e) {
    var target = e.target || e;
    var flag = false;
    var rippleLevel = target.getAttribute("ripple");
    if (rippleLevel){
        flag = true;
        for (var i = 0; i < rippleLevel; i++) {
            target = target.parentNode;
        }
    }
    if(flag){
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector('.ripple');
        if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
            target.appendChild(ripple);
        }
        ripple.classList.remove('show');
        var top = -22;
        var left = 0.5;
        if(e.hasOwnProperty("target")){
            top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
            left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
        }
        ripple.style.top = top + 'px';
        ripple.style.left = left + 'px';
        ripple.classList.add('show');
    }
    return false;
};
document.addEventListener('click', addRippleEffect, false);