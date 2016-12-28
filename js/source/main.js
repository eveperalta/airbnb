//select de huespedes
 $(document).ready(function() {
    $('select').material_select();
  });
 //ui slider rango de precios
 var slider = document.getElementById('test5');
  noUiSlider.create(limitSlider, {
   connect: true,
   behaviour: 'drag',
   start: [0, 100],
   connect: true,
   limit: 40,
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });
  