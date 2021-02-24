function endFun(){
    setInterval(function() {
	    var circle = document.createElement('div');
	
	    circle.classList.add('circle');
	
	    var x = Math.random() * 100 + 1;
	    var y = Math.random() * 100 + 1;
	
	    var animationTime = Math.round(Math.random() * 10);
	    circle.style.setProperty('--grow-time', `${animationTime}s`);
	
	    // 设置左
	    circle.style.left = x + 'vw';
	    // 设置右
	    circle.style.top = y + 'vh';
	
	    // 设置颜色
	    circle.style.backgroundColor = randomColor();
	
	    circle.innerText = randomText();
	
	    // 生成
	    document.body.appendChild(circle);
	
	    // 清除
	    setTimeout(function() {
	        document.body.removeChild(circle);
	    }, animationTime + "000")
	
    }, 100);
	
	
	
    function randomColor() {
	    const colors = [
	        '#81ecec',
	        '#74b9ff',
	        '#a29bfe',
	        '#ffeaa7',
	        '#fab1a0',
	        '#ff7675',
	        '#fd79a8'
	    ];
	    return colors[Math.round(Math.random() * colors.length)];
    }
	
    function randomText() {
	    const texts = [
                       '雪莉最美',
                       '真理最牛',
                       '我永远站在真理这一边',
                       '我好喜欢雪莉',
                       '真理是光！',
                       '雪莉好可爱',
                       '雪莉即真理',
                       '天仙下凡',
                       '她叫什么名字太好看了吧这也！',
                       '我是真理的脑残粉',
                       '支持真理！',
                       'sulli真好看',
                       '天然白',
                       '特别AAAAA的sulli',
                       '雪莉小公主呀',
                       '看到了真理小天使在梦里',
                       '月亮上冲冲冲',
                       '啊啊啊啊什么神仙颜值',
                       '雪莉真是个小天使',
                       '啊啊啊啊啊路人转粉雪莉太好看了',
                       '雪莉的歌好好听特别是哥布林！',
                       '纯路人雪莉好好看！',
                       '真理晚上好！',
                       '坚持所爱！',
                       '真理中午好！',
                       '真理早上好！',
                       '保持个性'
	    ];
	    return texts[Math.round(Math.random() * (texts.length - 1))];
    }
}
