function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function hoverScroll(hevent) {
console.log('yup');
}
document.addEventListener('DOMContentLoaded', function() {
    var today = new Date;
    var theYear = today.getFullYear();
    document.getElementById('thisYear').innerHTML = theYear;
    var forward = document.getElementById('forward');
    forward.addEventListener('mouseover', function(){
        hoverScroll();
    });

    document.addEventListener('scroll', function(scrollEvent){
        var mainReel = document.getElementById('mainReel');
        var droneReel = document.getElementById('droneReel');
        var absReel = document.getElementById('absReel');


        if(isInViewport(mainReel)){
            mainReel.play();
        }else {
            mainReel.pause();
        }
        if(isInViewport(droneReel)){
            droneReel.play();
        }else {
            droneReel.pause();
        }
        if(isInViewport(absReel)){
            absReel.play();
        }else {
            absReel.pause();
        }
        console.log(scrollEvent)
    });
});