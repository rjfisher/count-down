var time = moment('2017/09/28 17:00');

$('#countdown').countdown(time.toDate(), function(event) {
  $(this).html(event.strftime('%w week(s) %d day(s) <br /> %H:%M:%S'));
});

setInterval(function() {
  // Time to change the background
  var imgNum = Math.floor(Math.random() * 12) + 1;
  var imgStr = 'url(../images/main-bg-' + imgNum +'.jpg)';

  $('#wrapper').css('backgroundImage', imgStr);

}, 30000);
