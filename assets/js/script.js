// Componente JS 2: ScrollSpy

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});

// Componente JS 3: Tooltips

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});



//Cards... probar esconder las cards con el botón...

$(document).ready(function(){
  $("#hide1").click(function(){
    $("#cardText1").toggle();
  });
});

$(document).ready(function(){
  $("#hide2").click(function(){
    $("#cardText2").toggle();
  });
});

$(document).ready(function(){
  $("#hide3").click(function(){
    $("#cardText3").toggle();
  });
});

$(document).ready(function(){
  $("#hide4").click(function(){
    $("#cardText4").toggle();
  });
});

