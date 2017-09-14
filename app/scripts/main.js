$('#countdown').countdown('2017/09/28', function(event) {
  $(this).html(event.strftime('%w week(s) %d day(s) <br /> %H:%M:%S'));
});
