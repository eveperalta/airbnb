//select de huespedes
 $(document).ready(function() {
    $('select').material_select();
  });
 //ui slider rango de precios
 var slider = document.getElementById('test5');
  noUiSlider.create(slider, {
   connect: true,
   behaviour: 'drag',
   start: [6700, 500000],
   connect: true,
   limit: 500000,
   range: {
     'min': 6700,
     'max': 500000
   },
/*   format: wNumb({
     decimals: 0
   })*/ //est FUNCION DEBERIA CREAR EL SLIDER POR FAVOR VERIFICAR
  });
   $(document).ready(function() {


   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  });