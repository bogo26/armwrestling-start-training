var repeat = 1;
var r1 = 2;
var r2 = 3;
var s1 = 1;
var s2 = 5;
var audioReady = document.getElementById("ready");
var audioGo= document.getElementById("go");

	console.log("it started before");
function start(){
	repeat = document.getElementsByName("restart")[0].value
	repeat = parseFloat(repeat);
	r1 = document.getElementById("r1").value
	r1 = parseFloat(r1);
	r2 = document.getElementById("r2").value
	r2 = parseFloat(r2);
	s1 = document.getElementById("s1").value
	s1 = parseFloat(s1);
	s2 = document.getElementById("s2").value
	s2 = parseFloat(s2);
	console.log("it started");
	setInterval(function(){
		console.log("============inceput ciclu================");
		document.body.style.backgroundColor="white";
		var time1 = Math.floor(((Math.random()*r2)+r1)*1000);
		console.log(time1 + " timp interval ready");
		
		setTimeout(function(){
			console.log("Ready!!!");
			audioReady.autoplay = true;
			audioReady.load();
			audioReady.autoplay = true;
			audioReady.load();
			document.body.style.backgroundColor="yellow";
			var time2 = Math.floor(((Math.random()*s2)+s1)*1000);	
			console.log(time2 + " timp interval go");
			
			setTimeout(function(){
				console.log("Go!");
				audioGo.autoplay = true;
				audioGo.load();
				document.body.style.backgroundColor="red";

			}, time2);
		}, time1);
	},(repeat + r1 + r2 + s1 + s2)*1000);
}


