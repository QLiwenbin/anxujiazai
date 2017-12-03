window.onload = function (){
    var louceng = document.querySelectorAll('.floor');
    // console.log(louceng);
    window.onscroll =  function () {
        var scrollTop = document.documentElement.scrollTop ||
            document.body.scrollTop || window.scrollY
            || window.pageYOffset;
        for(var i = 0 ; i < louceng.length ; i++){
            var fltop = louceng[i].offsetTop-300;
            // console.log(fltop);
            var img = louceng[i].getElementsByTagName('img');
            // console.log(img)
            if(scrollTop > fltop){
                for(var j = 0 ; j < img.length ; j++){
                    var dizhi = img[j].getAttribute('attr');
                    img[j].src = dizhi ;
                }
            }
        }
    }

};
