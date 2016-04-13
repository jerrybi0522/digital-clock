$(document).ready(function(){
	
	var startTime = new Date();
	globalHour = startTime.getHours();
	globalMinute = startTime.getMinutes();

	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);

		if(min%2 == 1){
			$('h3').css('color', 'white');
		} else{
			$('h3').css('color', 'red');
		};

		var backgroundColor = ['yellow', 'orange', 'pink', '#89cff0', 'blue'];
		var randomNumber = Math.floor(Math.random()*backgroundColor.length);
		var randomBackColor = backgroundColor[randomNumber];
		if(min%5 == 0 && min != globalMinute){
			$('#clock').css('background-color', randomBackColor);
			globalMinute = min;
		};

		var titleColor = ['purple', 'black', 'limegreen', 'white']
		var indexpos = 0
		if(hr != globalHour){
			$('h1').css('color', titleColor[indexpos]);
			if(indexpos<3){
				indexpos++;
			} else{
				indexpos = 0;
			};
			globalHour = hr;
		}
	}, 1);

});