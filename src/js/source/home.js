
////SLIDER PRINCIPAL


$(document).ready(function() {

	$('.carousel.carousel-slider').carousel({full_width: true});



/////INPUT BUSCAR
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

});

///select
 $(document).ready(function(){
    $('select').material_select();
  
    $('.searchbar__submit').click(function() {
        $(window).attr('location','search.html');
    });

   ////SLIDER DE 4
   $('.owl-nome').owlCarousel({
   	loop:true,
   	margin:10,
   	nav:true,
   	dots: true,
   	navText: [
   	"<i class='fa fa-angle-left'></i>",
   	"<i class='fa fa-angle-right'></i>"
   	],
   	responsive:{
   		0:{
   			items:1
   		},
   		600:{
   			items:3
   		},
   		1000:{
   			items:4
   		}
   	}
   });

/////SLIDER DE 3
$(".classe").owlCarousel({
      autoPlay: 5000, //Set AutoPlay to 3 seconds
      items : 3,
      navigation : true,
      slideSpeed : 500,
      paginationSpeed : 2000,
      singleItem:false,
      navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });

  
});

$(document).ready(function(){

  $('.buscar').click(function(){
  var llegada= document.getElementById('#P81956098').val();
    localstorage.setItem("fechas" , llegada);

    });

});