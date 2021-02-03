$(document).ready(function(){

$(".testmonial-slider").slick({
    centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '0px',
      }
    }
  ]
})

});
$(document).ready(function(){
  let dateArray = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  var date = new Date();
  var month = date.getUTCMonth() + 1; //months from 1-12
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  let d1;
  if(day < 10)
  {
    document.getElementById('day').innerHTML = "0"+day;
    document.getElementById('day1').innerHTML = "0"+day;
    document.getElementById('day2').innerHTML = "0"+day;
  }
  else{
    document.getElementById('day').innerHTML = day;
    document.getElementById('day1').innerHTML = day;
    document.getElementById('day2').innerHTML = day;
  }
  document.getElementById('month').innerHTML = dateArray[month];
    document.getElementById('month1').innerHTML =dateArray[month];
    document.getElementById('month2').innerHTML = dateArray[month];
    document.getElementById('year').innerHTML = year;
    document.getElementById('year1').innerHTML =year;
    document.getElementById('year2').innerHTML = year;
  
let menu = document.getElementsByClassName('slide-meni');

$('.slide-menu').click(function(){
    $('nav > ul').fadeToggle('5000');
});
$('.card-deck a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });
});



