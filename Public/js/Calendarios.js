
var DensoDatepicker=function(){
	//$("#sampleavailability").datepicker({todayHighlight:!0})
	$( ".calendar" ).datepicker({
      minDate: 0,
      showOn: "button",
      buttonImage: "../Public/img/logo/calendar-512.png",
      buttonImageOnly: true,
      buttonText: "Select date",
      changeMonth: true,
      dateFormat: 'yy-mm-dd',
      changeYear: true
    });

  $( ".calendarTester" ).datepicker({
      showOn: "button",
      buttonImage: "../Public/img/logo/calendar-512.png",
      buttonImageOnly: true,
      buttonText: "Select date",
      changeMonth: true,
      dateFormat: 'yy-mm-dd',
      changeYear: true
    });

  $( ".calendarStart" ).datepicker({
      minDate: 0,
      showOn: "button",
      buttonImage: "../Public/img/logo/calendar-512.png",
      buttonImageOnly: true,
      buttonText: "Select date",
      changeMonth: true,
      dateFormat: 'yy-mm-dd',
      changeYear: true
    });


	$( ".calendaravailability" ).datepicker({
      minDate: 0,
      showOn: "button",
      buttonImage: "../Public/img/logo/calendar-512.png",
      buttonImageOnly: true,
      buttonText: "Select date",
      changeMonth: true,
      dateFormat: 'yy-mm-dd',
      changeYear: true
    });

    $('#reason').change(function()
  {
    var reason = $(this).val();

    if (reason == 'Product validation') {
      var minDate2 = 92;
      var minDate = $( ".calendar" ).datepicker( "option", "minDate", minDate2 );
    }else if(reason == 'Special request'){
      var minDate2 = 7;
      var minDate = $( ".calendar" ).datepicker( "option", "minDate", minDate2 );
    }else if (reason == 0) {
      var minDate2 = 0;
      var minDate = $( ".calendar" ).datepicker( "option", "minDate", minDate2 );
    }
      

  });

},

DensoRadioButtons=function(){
    $( ".radio" ).checkboxradio();
},

	FormLDBsystem=function(){
		"use strict";
		return{
			init:function(){
				DensoDatepicker(),
				DensoRadioButtons()
				
			}
		}
	}();