var head = document.getElementsByTagName('HEAD').item(0);
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = 'https://s.trackingmore.com/plugins/v1/plugins.css?time=20221208';
head.appendChild(style);
if(typeof jQuery == 'undefined' || typeof $ == 'undefined'){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://s.trackingmore.com/bootstrap/jquery-2.1.1.min.js?time=20180928';
	head.appendChild(script);
}
function showPower(){
	let _html = '<div style="text-align: left!important;line-height:16px!important;"><a style="color:#a1a1a1!important;text-decoration:none!important;font-size:12px!important;" target="_blank" href="https://www.trackingmore.com">Powered by TrackingMore</a></div>';
	let powerDom = document.getElementById('button_tracking_number');
	if (powerDom !== null) {
		let parentNode = powerDom.parentNode;
		parentNode.insertAdjacentHTML('afterend',_html)
	}
}
if (document.addEventListener)
	document.addEventListener("DOMContentLoaded", function(){showPower()}, false)
else if (document.all && !window.opera){
	document.write('<script id="contentloadtag" defer="defer" ><\/script>')
	let contentLoadTag = document.getElementById("contentloadtag")
	contentLoadTag.onreadystatechange = function(){if (this.readyState=="complete"){showPower()}}
}
var LC = {
	cnNumbersRequired:"请输入单号.",
	csNumbersRequired:"Zadejte číslo pro sledování.",
	deNumbersRequired:"Geben Sie Ihre Tracking-Nummer.",
	enNumbersRequired:"Enter your tracking number.",
	esNumbersRequired:"Introduzca su número de seguimiento",
	fiNumbersRequired:"Seuranta numero.",
	frNumbersRequired:"Entrez votre numéro de suivi.",
	itNumbersRequired:"Immettere il numero di tracciatura",
	jaNumbersRequired:"追跡番号を入力します。",
	koNumbersRequired:"배송 추적 번호를 입력하세요.",
	nlNumbersRequired:"Voer uw tracking-nummer.",
	plNumbersRequired:"Wpisz numer śledzenia.",
	ptNumbersRequired:"Digite seu número de rastreamento.",
	ruNumbersRequired:"Введите ваш номер для отслеживания.",
	trNumbersRequired:"Takip numarası girin.",
	twNumbersRequired:"請輸入單號.",
}
function doTrack() {
	var num,expCode,lang,from;
	number=document.getElementById("button_tracking_number");
	expCode=document.getElementById("button_express_code").value;
	from = $("#button_tracking_number").closest("form");
	lang = from.find("input[name='lang']").val();
	num = number.value;
	if(!lang) lang = 'en';
	num = num.replace(/\s+/g,"");
	if (num === "" || !/^[A-Za-z0-9-]{4,}$/.test(num)) {
		alert(eval("LC."+lang+"NumbersRequired")?eval("LC."+lang+"NumbersRequired"):"Enter your tracking number.");
		return false;
	}
	if (expCode === "") {
		window.open('_blank').location = 'https://www.trackingmore.com/track/'+lang+'/'+num
	}else{
		window.open('_blank').location = 'https://www.trackingmore.com/track/'+lang+'/'+num+'?express='+expCode
	}
	return false;
}