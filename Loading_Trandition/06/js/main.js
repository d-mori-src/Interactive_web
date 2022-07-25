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

$(window).on('load',　function() {
    // プログレスバー実行
    bar.animate(1.0, function () {
        $('#splash').delay(500).fadeOut(800);
    });

    // 画面遷移実行
    splash();
});
 
// プログレスバー
const bar = new ProgressBar.Line(splashLogo, {
    easing: 'easeInOut',
    duration: 1000,
    strokeWidth: 0,
    color: '#000',
    trailWidth: 0,
    trailColor: '#fff',
    text: {			
        style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '0',
            transform: 'translate(-50%,-50%)',
            'font-size': '72px',
            'font-family': 'EB Garamond',
            color: '#333',
        },
        autoStyleContainer: false,
    },
    step: function(state, bar) {
        bar.setText(
            Math.round(bar.value() * 100) +
            '<div style="font-size:24px;font-weight:500;">LOADING</div>'
        );
    }
});

// 画面遷移
const splash = () => {
    $('#splashLogo').delay(1500).fadeOut('slow');
    $('#splash').delay(2000).fadeOut('slow',function() {
        $('body').addClass('appear');
    });
    $('.splashbg').on('animationend', function() { 
        // アニメーション後の処理はここに
    });
}