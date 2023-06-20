
function soloNumeros(e) 
{ 
	$("#user").MaxLength({ MaxLength: 10 });
	var key = window.Event ? e.which : e.keyCode
	return ((key >= 48 && key <= 57) || (key==8)) 
}