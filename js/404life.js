var text_1 = '成功打开页面 Successfully opened page!',
	text_2 = 'Please click on the bottom right corner ';
repeat(text_1, 1);
setTimeout(function () {
	repeat(text_2, 2);
}, text_1.length * 100+1000);

function repeat(text, n) {
	var i = 0,
		repeatable = setInterval(function () {
			$('#text_' + n).text($('#text_' + n).text() + text[i]);
			i++;
			if (i >= text.length) {
				clearInterval(repeatable);
			}
		}, 100);
}
