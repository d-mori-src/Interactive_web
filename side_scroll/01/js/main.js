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

window.addEventListener("load", function(){

    //プラグインを定義
    gsap.registerPlugin(ScrollTrigger);
  
    const area  = document.querySelector(".sideArea");
    const wrap  = document.querySelector(".sideWrap");
    const items = document.querySelectorAll(".sideItem");
    const num   = items.length;
  
    //横幅を指定
    gsap.set(wrap,  { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });
  
    gsap.to(items, {
      xPercent: -100 * ( num - 1 ), //x方向に移動させる
      ease: "none",
      scrollTrigger: {
        trigger: area, //トリガー
        start: "top top", //開始位置
        end: "+=1000", //終了位置
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
      }
    });
});

$(function () {

});