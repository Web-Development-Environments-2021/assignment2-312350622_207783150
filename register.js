$(document).ready(function () {
	localStorage.setItem('k', 'k');
	// Initialize form validation on the registration form.
	// It has the name attribute "registration"
	$("form[name='register']").validate({
	  // Specify validation rules
	  rules: 
	  {
		username: 
		{
			required: true,
			freeUsername: true
		},
		firstname: 
		{ 
			required: true,
			lettersonly: true
		},
		lastname: 
		{ 
			required: true,
			lettersonly: true
		},
		email: 
		{
		  required: true,
		  email: true
		},
		psw: 
		{
		  required: true,
		  minlength: 6,
		  validPassword: true
		},
		year:
		{
			required: true,
			number: true
		},
		month:
		{
			required: true,
			number: true
		},
		day:
		{
			required: true,
			number: true
		}
	},

	  // Specify validation error messages
	  messages: 
	  {
		username: 
		{
			required: "Please choose a user-name",
			freeUsername: "Username is already taken. Please select another username"
		},
		firstname:
		{ 
			required: "Please enter your first name",
			lettersonly: "Please enter a valid name (only alphabetical characters)"
		},
		lastname:
		{ 
			required: "Please enter your last name",
			lettersonly: "Please enter a valid name (only alphabetical characters)"
		},
		psw: 
		{
		  required: "Please provide a password",
		  validPassword: "Your password must contain at least one letter and one number",
		  minlength:"Your password must be at least 6 characters long"
		},
		email:
		{ 
			email: "Please enter a valid email address",
			required: "Please enter an email"
		},
		day: 
		{
			number: "Please choose a valid date of birth"
		},
		year: 
		{
			number: "Please choose a valid date of birth"
		},
		month: 
		{
			number: "Please choose a valid date of birth"
		}
	  },

	  // Make sure the form is submitted to the destination defined
	  // in the "action" attribute of the form when valid
	  submitHandler: function() {
		let username = document.getElementById("username").value;
		let psw = document.getElementById("psw").value;
		localStorage.setItem(username, psw);
		let form = $("form[name='register']");
		form[0].reset();
        show_login();
	  },
	});
	//login
	$("form[name='login']").validate({
		// Specify validation rules
		rules: 
		{
		  username_login: 
		  {
			  required: true,
		  },
		  psw_login: 
		  {
			required: true,
		  }
	  },

  
		// Make sure the form is submitted to the destination defined
		// in the "action" attribute of the form when valid
		submitHandler: function() {
		  
		  let username = document.getElementsByName("username_login")[0].value;
		  
		  let psw = document.getElementsByName("psw_login")[0].value;
		  let psw_save = localStorage.getItem(username);
		  
		  let form = $("form[name='login']"); 
		  if (psw_save == null || psw_save != psw){
			  alert("incorrect password!");
			  form[0].reset();
		  }
		  else if(psw_save == psw){
            show('setting');
		  }
		  else{
			form[0].reset();
		  }
		},
	  });

});

$(function() {
	//the username is free
	$.validator.addMethod('freeUsername', function (value) {
		return localStorage.getItem(value)==null;
	});

	// the password contain 1 number and 1 letter
	$.validator.addMethod('validPassword', function (value) {
		return /[a-z].*[0-9]|[0-9].*[a-z]/i.test(value);
	});


});

var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]
$(document).ready(function(){
    var option = '<option value="day">day</option>';
    var selectedDay="day";
    for (var i=1;i <= Days[0];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#day').append(option);
    $('#day').val(selectedDay);

    var option = '<option value="month">month</option>';
    var selectedMon ="month";
    for (var i=1;i <= 12;i++){
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#month').append(option);
    $('#month').val(selectedMon);

    var d = new Date();
    var option = '<option value="year">year</option>';
    selectedYear ="year";
    for (var i=1930;i <= d.getFullYear();i++){// years start i
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#year').append(option);
    $('#year').val(selectedYear);
});
function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
          return false;
      } else if (year % 400 == 0) {
          return true;
      } else if (year % 100 == 0) {
          return false;
      } else {
          return true;
      }
}

function change_year(select)
{
    if( isLeapYear( $(select).val() ) )
      {
            Days[1] = 29;
            if( $("#month").val() == 2)
            {
                   var day = $('#day');
                   var val = $(day).val();
                   $(day).empty();
                   var option = '<option value="day">day</option>';
                   for (var i=1;i <= Days[1];i++){ //add option days
                         option += '<option value="'+ i + '">' + i + '</option>';
             }
                   $(day).append(option);
                   if( val > Days[ month ] )
                   {
                          val = 1;
                   }
                   $(day).val(val);
             }
    }
    else {
        Days[1] = 28;
    }
}

function change_month(select) {
    var day = $('#day');
    var val = $(day).val();
    $(day).empty();
    var option = '<option value="day">day</option>';
    var month = parseInt( $(select).val() ) - 1;
    for (var i=1;i <= Days[ month ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(day).append(option);
    if( val > Days[ month ] )
    {
        val = 1;
    }
    $(day).val(val);
}
  
function show_login(){
$("#"+"gameDiv").hide();
$("#"+"welcomeDiv").hide();
$("#"+"register").hide();
$("#"+"about").hide();
$("#"+"login").hide();
$("#"+"setting").hide();
$("#"+"GameOver").hide();
$("#"+'login').show();
}
