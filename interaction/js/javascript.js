/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

   
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 100 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

$(document).ready(function () {
   //find div
    var div = $('div.showcase');
    //find ul width
    var liNum = $(div).find('ul').children('li').length;
    var speed = 1000;
    var containerWidth = 100%;
    var itemWidth = 90%;
    //Remove scrollbars
    $(div).css({overflow: 'hidden'});
    $('div.right-arrow').click(function(e){	
          if(($(div).scrollLeft()+containerWidth)<(liNum*itemWidth)){
             $(div).animate({
                scrollLeft: '+='+containerWidth
              }, speed);
          }
    });	
    $('div.left-arrow').click(function(e){	
        if(($(div).scrollLeft()+containerWidth)>containerWidth){
                $(div).animate({
                scrollLeft: '-='+containerWidth
              }, speed);
        }
    });
});