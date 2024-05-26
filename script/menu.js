window.addEventListener("scroll", function(){
    var menu = document.getElementById('menu-flotante');
    menu.classList.toggle("menu-scroll",window.scrollY>10);
  })

  window.addEventListener("scroll", function(){
    var menu = document.getElementById('ancla');
    menu.classList.toggle("ancla",window.scrollY>50);
  })  

  $(document).ready(function(){
    $('.subir').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });
  });

  function toggle(element) {
    element.classList.toggle("cambio");
  }


  function abrir() {
    $("#menu").slideToggle();
}