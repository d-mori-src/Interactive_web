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

$(function(){
    $('.LikesIcon').on('click', function() {
        const $btn = $(this);
        if ($btn.hasClass('on')) {
            $btn.removeClass('on');
            $btn.children("i").attr('class', 'far fa-heart LikesIcon-fa-heart');
        } else {
            $btn.addClass('on');
            $btn.children("i").attr('class', 'fas fa-heart LikesIcon-fa-heart heart');
        }
    });
});