
var onscreen = "" ;
var sum1 = 0 ;
var sum2 = 0 ;
var operator = "" ;
var last = "" ;

$(function() {
	$('.btn').click( function() {
		btn_pressed( $(this).attr("value") );
	});
});

btn_pressed = function(par) {
	switch(par) {
	case "=":
		res() ;
		break ;
	case "+":
	case "-":
	case "*":
	case "/":
		operation(par) ;
		break ;
	case "C":
		delete_last() ;
		break ;
	case "Reset":
		reset() ;
		break ;
	default :
		if (last == "res")
			reset()

		last ="num" ;
		sum2 = sum2 + par ;
		onscreen = onscreen + par ;
	}

	$( "#screen" ).empty() ;
	$( "#screen" ).append( "<p>"+ onscreen +"</p>" );
};

res = function() {
	sum1 = parseFloat(sum1) ;
	sum2 = parseFloat(sum2) ;
	switch(operator) {
	case "+":
		sum2 = sum1 + sum2 ;
		onscreen = onscreen + "=" + sum2 ;
		break;
	case "-":
		sum2 = sum1 - sum2 ;
		onscreen = onscreen + "=" + sum2 ;
		break;
	case "*":
		sum2 = sum1 * sum2 ;
		onscreen = onscreen + "=" + sum2 ;
		break;
	case "/":
		sum2 = sum1 / sum2 ;
		onscreen = onscreen + "=" + sum2 ;
		break;
	default:
		onscreen = "NaN"
	}
	last = "res" ;
	operator = "" ;
	return sum2 ;
};

reset = function() {
	onscreen = "" ;
	sum1 = 0 ;
	sum2 = 0 ;
	operator = "" ;
};

operation = function(par) {
	if (last == "op"){
		delete_last() ;
		return ;
	}

	last = "op" ;
	if (operator != "") {
		sum2 = res() ;
	}

	sum1 = sum2 ;
	sum2 = 0 ;
	operator = par ;
	onscreen = onscreen + par ;
}; 

delete_last = function() {
	if (last == "op") {
		operator = "" ;
		sum2 = sum1 ; 
	}else if(last == "res"){
		reset() ;
	}else if (last == "num") {
		auxn = "" + sum2 ;
		auxn = auxn.substring (0, auxn.length - 1 )
		sum2 = parseFloat(auxn) ;
	}
	last = "num" ;
	onscreen = onscreen.substring(0, onscreen.length - 1 ) ;
};