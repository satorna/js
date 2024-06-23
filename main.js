function start(){
	document.getElementById("bgaudio").play();
	var t = 0;
	var d = setInterval(()=>{
		t++;
		document.getElementById("click_to_start").style.opacity = 1 - 0.01 * t;
		if(t > 100){
			document.getElementById("click_to_start").style.display = "none";
			clearInterval(d);
		}
	},20);
}
document.oncontextmenu = () => false;
document.getElementById('navbut_user').innerHTML = '社 区';
