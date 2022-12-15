var p_per_sqrt = 1.99; // price per sqrt ft
var p_per_box = 30.85; // price per sqrt ft
var metaval = 15.5; //sqrt value 
var no_of_tile = 0; //calculate how many tiles need

function sqrtVal(){ 

	// show output boxs
	document.getElementById('makelive').style.display='block';

	// varibales
	var sqrl_value = document.getElementById('sq-ft').value;   // get user value
	var show_num = document.getElementById('show_num').value;  // show tile no
	var sqrt_num = document.querySelector('.sqrt-num span');  // coverage sqft area
	var extra = document.getElementById('if-check');  // 15% extra check
	var sqrt_price = document.querySelector('.sqrt-price span');  // show final price

	if(sqrl_value >= metaval){
		
		no_of_tile = Math.ceil(sqrl_value / metaval);

		document.getElementById('show_num').value = no_of_tile;
		sqrt_num.innerText = no_of_tile*metaval;
		sqrt_price.innerText = (no_of_tile*p_per_box).toFixed(2);

		if(extra.checked == true){

			// var old = no_of_tile * metaval; 
			// var new_v = old + old*0.15;  
			sqrl_value = parseInt(sqrl_value);
			var new_v = Math.ceil((sqrl_value + (sqrl_value*0.1)) / metaval); // tile no for extra 10%
	
			sqrt_num.innerText = new_v*metaval; // total sqrt area cover for 10% extra

			document.getElementById('show_num').value = new_v;
			sqrt_price.innerText = (new_v*p_per_box).toFixed(2);
		}
	
	}
	else if(sqrl_value < 1){
		if(parseInt(document.getElementById('show_num').value) > 0){
			document.getElementById('makelive').style.display='block';
		}
		document.getElementById('makelive').style.display='none';	
	}
	else{
		document.getElementById('show_num').value = 0;
		document.querySelector('.sqrt-num span').innerText = 0;
		sqrt_price.innerText = 0;
		//document.getElementById('makelive').style.display='none';

	}
	
}

function vincf(val,stat){

	//alert(stat);
	if(stat == 'inc'){
		no_of_tile = parseInt(val)+1;
		//alert(no_of_tile);
	}
	if(stat == 'dec'){
		no_of_tile = parseInt(val)-1;
	}

	var show_num = document.getElementById('show_num').value;  // show tile no
	var sqrt_num = document.querySelector('.sqrt-num span');  // coverage sqft area
	var extra = document.getElementById('if-check');  // 15% extra check
	var sqrt_price = document.querySelector('.sqrt-price span');  // show final price

	if(no_of_tile > 0){

		//sqrl_value = parseInt(sqrl_value);
		//var new_v = Math.ceil((sqrl_value + (sqrl_value*0.1)) / metaval);
		
		sqrt_num.innerText = no_of_tile*metaval;
		sqrt_price.innerText = (no_of_tile*p_per_box).toFixed(2);

		if(extra.checked == true){
			// var old = no_of_tile * metaval; 
			// var new_v = old + old*0.15; 
			// sqrt_num.innerText = Math.ceil(new_v);

			// document.getElementById('show_num').value = Math.ceil(no_of_tile+no_of_tile*0.15);
			// sqrt_price.innerText = ((no_of_tile+no_of_tile*0.15)*p_per_box).toFixed(2);
		}else{

		}
	
	}else{
		document.getElementById('show_num').value = 0;
		document.querySelector('.sqrt-num span').innerText = 0;
		sqrt_price.innerText = 0;
	}
	
	
}



function calculateSQFT(){

	document.getElementById('calculator').style.display = 'block';

	var res = 0;
	var no_of_box = 0;
	var width = 0;
	var length = 0;

	//var values = document.querySelectorAll('#area1 input');
	var c1 = document.querySelectorAll('#area1 .c1');
	var c2 = document.querySelectorAll('#area1 .c2');
	var c3 = document.querySelectorAll('#area1 .c3');
	var c4 = document.querySelectorAll('#area1 .c4');

	// length = values[0].value +'.'+ values[1].value;
	// width = values[2].value +'.'+ values[3].value;

	var inch = 0;
	var ft = 0;
	var extraft = 0;

	for(var i = 0; i < c1.length ; i++){
		let f    = parseInt(c1[i].value) * parseInt(c3[i].value);
		let ic   = parseInt(c2[i].value) * parseInt(c4[i].value);
		
		if(ic>11){
			extraft = parseInt(ic/12);
			ic = ic % 12;
		}
		f = f + extraft;
		inch = inch + ic;
		ft   = ft + f;

	}

	//res = width * length;

	// 15% extra
	//var isfifteen = document.getElementById('extraid').value;

	res = ft+'.'+inch;
	no_of_box = Math.ceil(res / metaval);

	document.querySelector('.cal-answer').style.display='block';

	document.getElementById('nsqft').innerText = res;
	document.getElementById('nsqft2').innerText = res;
	document.getElementById('nbox').innerText = no_of_box;


	// document.getElementById('update_box').addEventListener('click',function(){
	// 	document.getElementById('show_num').value = no_of_box;
	// 	document.querySelector('.sqrt-num span').innerText = no_of_box*metaval;
	// });

}

function update_box(){
	document.getElementById('makelive').style.display='block';document.getElementById('show_num').value=document.getElementById('nbox').innerText;document.querySelector('.sqrt-num span').innerText = document.getElementById('nsqft').innerText;document.querySelector('.sqrt-price span').innerHTML=parseInt(document.getElementById('nbox').innerText)*p_per_box;	
}


// calculator jquery code
$(document).ready(function(){

	$('#copy').hide();
	$('.add-another').click(function(){
		$('#area1').append($('#copy').html());
	});

	// toggle how to
	$('.how-to h3').click(function(){
		$('.how-details').toggle();
	});


	$('#cal-sq-ft').click(function(e){
		e.preventDefault();
		$('#calculator').css('display','block');
	});

	$('#calclose').click(function(){
		$('#calculator').css('display', 'none');
	});

	// if use this amount
	$('#useamount').click(function(){
		$('#calculator').css('display', 'none');
	});


});