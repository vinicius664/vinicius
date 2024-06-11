function reproduzir(urlMusica){
    audio = document.getElementById('audio');
    audio.src = urlMusica;
    audio.play();
} 



$(document).ready(function(){
    $('#meuModal').modal('show');
    document.getElementById('id01').style.display='block';
});

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});