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

//SVGアニメーションの描画
const stroke = new Vivus('mask', { // id指定
    start: 'manual', // 自動再生をせずスタートをマニュアルに
    type: 'scenario-sync', // アニメーションのタイプを設定
    duration: 10, //アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false, // パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE, // 動きの加速減速設定
}, function() {
    $('#mask').attr('class', 'done'); //描画が終わったらdoneというクラスを追加
});

$(window).on('load',function(){
    $('#splash').delay(3000).fadeOut('slow');
	$('#splashLogo').delay(3000).fadeOut('slow');
    stroke.play();
});