// Componente JS: ScrollSpy

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});

// Componente JS: Tooltips

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});



//Componente JQuery: Toggle para ocultar el texto de las Cards

$(document).ready(function(){
  $("#toggle1").click(function(){
    $("#cardText1").toggle();
  });
});

$(document).ready(function(){
  $("#toggle2").click(function(){
    $("#cardText2").toggle();
  });
});

$(document).ready(function(){
  $("#toggle3").click(function(){
    $("#cardText3").toggle();
  });
});

$(document).ready(function(){
  $("#toggle4").click(function(){
    $("#cardText4").toggle();
  });
});

