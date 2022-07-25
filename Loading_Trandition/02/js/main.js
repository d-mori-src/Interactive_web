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

const bar = new ProgressBar.Line(splashText, { //id名を指定
	easing: 'easeInOut', //アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000, //時間指定
	strokeWidth: 0.1, //進捗ゲージの太さ
	color: '#fff', //進捗ゲージのカラー
	trailWidth: 0.1, //ゲージベースの線の太さ
	trailColor: 'rgba(255,255,255,0.3)', //ゲージベースの線のカラー
	text: {		
		style: {
            'font-size':'48px',
			'font-family': 'EB Garamond',
			color: '#fff',
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-40px 0 0 0',
			transform:'translate(-50%,-50%)',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + '<span style="font-size:24px;margin: 0 0 0 4px;">%</span>'); //テキストの数値
	}
});

//アニメーション実行
bar.animate(1.0, function () { //　1.0 なら100%まで描画
	$('#splash').delay(500).fadeOut(800);
});  