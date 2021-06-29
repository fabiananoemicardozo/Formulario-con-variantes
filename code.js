$(document).ready(function(){
	var date_input=$('input[name="date"]'); //our date input has the name "date"
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	date_input.datepicker({
		format: 'mm/dd/yyyy',
		container: container,
		todayHighlight: true,
		autoclose: true,
	})
})

function mostrar(id) {
	if (id == "soltero") {
		$("#soltero").show();
		$("#concubinato").hide();
		$("#casado").hide();
		$("#divorciado").hide();
		$("#viudo").hide();
	}
	if (id == "concubinato") {
		$("#soltero").hide();
		$("#concubinato").show();
		$("#casado").hide();
		$("#divorciado").hide();
		$("#viudo").hide();
	}
	if (id == "casado") {
		$("#soltero").hide();
		$("#concubinato").hide();
		$("#casado").show();
		$("#divorciado").hide();
		$("#viudo").hide();
	}
	if (id == "divorciado") {
		$("#soltero").hide();
		$("#concubinato").hide();
		$("#casado").show();
		$("#divorciado").show();
		$("#viudo").hide();
	}
	if (id == "viudo") {
		$("#soltero").hide();
		$("#concubinato").hide();
		$("#casado").show();
		$("#divorciado").hide();
		$("#viudo").show();
	}
}

function ver(id) {
	if (id == "padre") {
		$("#padre").show();
		$("#abuelo").hide();
		$("#bisabuelo").hide();
		$("#tatarabuelo").hide();
		$("#trastatarabuelo").hide();
		$("#pentabuelo").hide();
	}
	if (id == "abuelo") {
		$("#padre").show();
		$("#abuelo").show();
		$("#bisabuelo").hide();
		$("#tatarabuelo").hide();
		$("#trastatarabuelo").hide();
		$("#pentabuelo").hide();
	}
	if (id == "bisabuelo") {
		$("#padre").show();
		$("#abuelo").show();
		$("#bisabuelo").show();
		$("#tatarabuelo").hide();
		$("#trastatarabuelo").hide();
		$("#pentabuelo").hide();
	}
	if (id == "tatarabuelo") {
		$("#padre").show();
		$("#abuelo").show();
		$("#bisabuelo").show();
		$("#tatarabuelo").show();
		$("#trastatarabuelo").hide();
		$("#pentabuelo").hide();
	}
	if (id == "trastatarabuelo") {
		$("#padre").show();
		$("#abuelo").show();
		$("#bisabuelo").show();
		$("#tatarabuelo").show();
		$("#trastatarabuelo").show();
		$("#pentabuelo").hide();
	}
	if (id == "pentabuelo") {
		$("#padre").show();
		$("#abuelo").show();
		$("#bisabuelo").show();
		$("#tatarabuelo").show();
		$("#trastatarabuelo").show();
		$("#pentabuelo").show();
	}
}

function mostrar2(id) {
	if (id == "sol2") {
		$("#sol2").show();
		$("#con2").hide();
		$("#cas2").hide();
		$("#div2").hide();
		$("#viu2").hide();
	}
	if (id == "con2") {
		$("#sol2").hide();
		$("#con2").show();
		$("#cas2").hide();
		$("#div2").hide();
		$("#viu2").hide();
	}
	if (id == "cas2") {
		$("#sol2").hide();
		$("#con2").hide();
		$("#cas2").show();
		$("#div2").hide();
		$("#viu2").hide();
	}
	if (id == "div2") {
		$("#sol2").hide();
		$("#con2").hide();
		$("#cas2").show();
		$("#div2").show();
		$("#viu2").hide();
	}
	if (id == "viu2") {
		$("#sol2").hide();
		$("#con2").hide();
		$("#cas2").show();
		$("#div2").hide();
		$("#viu2").show();
	}
}

function mostrar3(id) {
	if (id == "sol3") {
		$("#sol3").show();
		$("#con3").hide();
		$("#cas3").hide();
		$("#div3").hide();
		$("#viu3").hide();
	}
	if (id == "con3") {
		$("#sol3").hide();
		$("#con3").show();
		$("#cas3").hide();
		$("#div3").hide();
		$("#viu3").hide();
	}
	if (id == "cas3") {
		$("#sol3").hide();
		$("#con3").hide();
		$("#cas3").show();
		$("#div3").hide();
		$("#viu3").hide();
	}
	if (id == "div3") {
		$("#sol3").hide();
		$("#con3").hide();
		$("#cas3").show();
		$("#div3").show();
		$("#viu3").hide();
	}
	if (id == "viu3") {
		$("#sol3").hide();
		$("#con3").hide();
		$("#cas3").show();
		$("#div3").hide();
		$("#viu3").show();
	}
}

function mostrar4(id) {
	if (id == "sol4") {
		$("#sol4").show();
		$("#con4").hide();
		$("#cas4").hide();
		$("#div4").hide();
		$("#viu4").hide();
	}
	if (id == "con4") {
		$("#sol4").hide();
		$("#con4").show();
		$("#cas4").hide();
		$("#div4").hide();
		$("#viu4").hide();
	}
	if (id == "cas4") {
		$("#sol4").hide();
		$("#con4").hide();
		$("#cas4").show();
		$("#div4").hide();
		$("#viu4").hide();
	}
	if (id == "div4") {
		$("#sol4").hide();
		$("#con4").hide();
		$("#cas4").show();
		$("#div4").show();
		$("#viu4").hide();
	}
	if (id == "viu4") {
		$("#sol4").hide();
		$("#con4").hide();
		$("#cas4").show();
		$("#div4").hide();
		$("#viu4").show();
	}
}

function mostrar5(id) {
	if (id == "sol5") {
		$("#sol5").show();
		$("#con5").hide();
		$("#cas5").hide();
		$("#div5").hide();
		$("#viu5").hide();
	}
	if (id == "con5") {
		$("#sol5").hide();
		$("#con5").show();
		$("#cas5").hide();
		$("#div5").hide();
		$("#viu5").hide();
	}
	if (id == "cas5") {
		$("#sol5").hide();
		$("#con5").hide();
		$("#cas5").show();
		$("#div5").hide();
		$("#viu5").hide();
	}
	if (id == "div5") {
		$("#sol5").hide();
		$("#con5").hide();
		$("#cas5").show();
		$("#div5").show();
		$("#viu5").hide();
	}
	if (id == "viu5") {
		$("#sol5").hide();
		$("#con5").hide();
		$("#cas5").show();
		$("#div5").hide();
		$("#viu5").show();
	}
}

function mostrar6(id) {
	if (id == "sol6") {
		$("#sol6").show();
		$("#con6").hide();
		$("#cas6").hide();
		$("#div6").hide();
		$("#viu6").hide();
	}
	if (id == "con6") {
		$("#sol6").hide();
		$("#con6").show();
		$("#cas6").hide();
		$("#div6").hide();
		$("#viu6").hide();
	}
	if (id == "cas6") {
		$("#sol6").hide();
		$("#con6").hide();
		$("#cas6").show();
		$("#div6").hide();
		$("#viu6").hide();
	}
	if (id == "div6") {
		$("#sol6").hide();
		$("#con6").hide();
		$("#cas6").show();
		$("#div6").show();
		$("#viu6").hide();
	}
	if (id == "viu6") {
		$("#sol6").hide();
		$("#con6").hide();
		$("#cas6").show();
		$("#div6").hide();
		$("#viu6").show();
	}
}

function mostrar7(id) {
	if (id == "sol7") {
		$("#sol7").show();
		$("#con7").hide();
		$("#cas7").hide();
		$("#div7").hide();
		$("#viu7").hide();
	}
	if (id == "con7") {
		$("#sol7").hide();
		$("#con7").show();
		$("#cas7").hide();
		$("#div7").hide();
		$("#viu7").hide();
	}
	if (id == "cas7") {
		$("#sol7").hide();
		$("#con7").hide();
		$("#cas7").show();
		$("#div7").hide();
		$("#viu7").hide();
	}
	if (id == "div7") {
		$("#sol7").hide();
		$("#con7").hide();
		$("#cas7").show();
		$("#div7").show();
		$("#viu7").hide();
	}
	if (id == "viu7") {
		$("#sol7").hide();
		$("#con7").hide();
		$("#cas7").show();
		$("#div7").hide();
		$("#viu7").show();
	}
}