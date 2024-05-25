window.addEventListener("scroll", function(){
    var menu = document.getElementById('menu-flotante');
    menu.classList.toggle("menu-scroll",window.scrollY>10);
  })

  window.addEventListener("scroll", function(){
    var menu = document.getElementById('ancla');
    menu.classList.toggle("ancla",window.scrollY>50);
  })  