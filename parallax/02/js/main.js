// const showElementAnimation = () => {
//     const element = document.getElementsByClassName('slidein');
//     if (!element) return;

//     const showTiming = window.innerHeight > 768 ? 200 : 40;
//     const scrollY = window.pageYOffset;
//     const windowH = window.innerHeight;

//     for (let i=0; i<element.length; i++) { 
//         const elemClientRect = element[i].getBoundingClientRect(); 
//         const elemY = scrollY + elemClientRect.top; 
        
//         if(scrollY + windowH - showTiming > elemY) {
//             element[i].classList.add('is-show');
//         } else if (scrollY + windowH < elemY) {
//             element[i].classList.remove('is-show');
//         }
//     }
// }
// showElementAnimation();
// window.addEventListener('scroll', showElementAnimation);

$(window).bind( 'scroll', function() {
	scrolled = $(window).scrollTop();
	weight9 = 0.5;
    weight8 = 0.3;
    weight7 = 0.25;
    weight6 = 0.15;
    weight5 = 0.12;
    weight4 = 0.1;
	$( '.bg9' ).css( 'top', 300 - scrolled * weight9 + 'px' );
    $( '.bg8' ).css( 'top', 300 - scrolled * weight8 + 'px' );
    $( '.bg7' ).css( 'top', 300 - scrolled * weight7 + 'px' );
    $( '.bg6' ).css( 'top', 300 - scrolled * weight6 + 'px' );
    $( '.bg5' ).css( 'top', 300 - scrolled * weight5 + 'px' );
    $( '.bg4' ).css( 'top', 300 - scrolled * weight4 + 'px' );
});