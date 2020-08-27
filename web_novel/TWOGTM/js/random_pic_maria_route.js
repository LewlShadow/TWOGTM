window.onload = function randompic_vol1(){
    let x = "../../pic/vol1/pic"+Math.floor(Math.random() * 4)+".jpg";
    document.getElementById("bg_image_vol1").style.backgroundImage="url('"+x+"')";
    document.getElementById("src_random").src =x;
 }
 
 