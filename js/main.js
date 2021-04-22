$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });


   
    $("#login form").submit(function(){
       var codigo = $('#password').val();
      var recetario = document.getElementById('recetario');
      if(codigo === 'premioespecial1'){
          recetario.style.display = "block";
        }
        else{
          alert('Còdigo incorrecto, volvè a intentarlo')
        }
        return false;
  });
});

    