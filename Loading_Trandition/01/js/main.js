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


// カウントアップの設定
const bar = new ProgressBar.Line(splashText, { // id名を指定
	strokeWidth: 0, // 進捗ゲージの太さ
	duration: 1000, // 時間指定
	trailWidth: 0, // 線の太さ
	text: {
		style: {
			'font-size': '48px',
			'font-family': 'EB Garamond',
			color: '#fff',
			margin: '0',
			padding: '0',
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		},
		autoStyleContainer: false // 自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + '<span style="font-size:24px;margin: 0 0 0 4px;">%</span>'); // テキストの数値
	}
});

// アニメーション実行
bar.animate(1.0, function() { // 1.0は100％まで描画
	$('#splash').delay(500).fadeOut(800);
});
