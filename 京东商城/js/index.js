/*
* @Author: 李大仙
* @Date:   2017-12-03 21:57:21
* @Last Modified by:   李大仙
* @Last Modified time: 2017-12-03 22:28:18
*/
window.onload = function (){
	var floor = document.getElementsByClassName("floor");
	console.log(floor);
	window.onscroll = function () {
		var bar = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
		for(var i = 0;i < floor.length;i++){
			var top = floor[i].offsetTop - 500;
			console.log(top);
			var img = floor[i].getElementsByTagName("img");
			console.log(img);
			if (bar > top){
				for(var j = 0;j <img.length;j++){
					var dizhi = img[j].getAttribute("attr");
					img[j].src = dizhi;
					console.log(img[j].src);
				}
			}
		}
	}
}
