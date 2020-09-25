var ctrlMonto = Runner.getControl(pageid, 'com_monto');
var ctrlPlazo = Runner.getControl(pageid, 'com_plazo');
var ctrlnavidenho = Runner.getControl(pageid, 'com_navideño');
var ctrlkTrabajo= Runner.getControl(pageid, 'com_kTrabajo');
var ctrlHonorario = Runner.getControl(pageid, 'com_honorario');
var ctrlComision = Runner.getControl(pageid, 'com_comision');
var ctrlAcciones = Runner.getControl(pageid, 'com_acciones');
var ctrlTasa = Runner.getControl(pageid, 'com_tasa');
var ctrlCuota = Runner.getControl(pageid, 'com_cuota');
var ctrlCheck1 = Runner.getControl(pageid,'com_segVida');
var ctrlCheck2 = Runner.getControl(pageid,'com_segdeuda');
var ctrlCheck3 = Runner.getControl(pageid,'com_segCesantia');
 
 function decVariables(){
	 // declaración de variables
     var monto = Number(ctrlMonto.getValue());
     var plazo = parseInt(ctrlPlazo.getValue());
     var nav = Number(ctrlnavidenho.getValue());
     var kTrab = Number(ctrlkTrabajo.getValue());
	 
 }
 
 function opIndividual(){
	 //Operaciones individuales de credito de consumo 
	 var inter = (Number(ctrlTasa.getValue())/100)/12;
     var valorAElevar = Math.pow((1+inter),plazo);
     var cuotaCal = (monto*((valorAElevar*inter)/(valorAElevar-1)));
     var nuevaCuota = cuotaCal + nav;
     return nuevaCuota;
 }
 function opIndividualcp{
	 // Operaciones individuales de credito popular
	 var interDiario = (Number(ctrlTasa.getValue())/100)/365;
     var inter30Dias =interDiario*30;
     var valorAElevar = Math.pow((1+inter30Dias),plazo);
     var cuotaCal = (monto*((valorAElevar*inter30Dias)/(valorAElevar-1)));
	 var nuevaCuota = Cuota1 + nav + kTrab;
	 return nuevaCuota;
	 
	 
 }
function func() {
//declarar variables
decVariables();
//   operaciones por individuales

// operciones credito popular


if(kTrab==0)
{
/*---------------------- CONSUMO ---------------------------------------------------------*/
// IF CON LOS SEGUROS DESHABILITADOS
if(ctrlCheck1.getValue()=='' && ctrlCheck2.getValue()=='' && ctrlCheck3.getValue()=='')
{
var nav = Number(ctrlnavidenho.getValue());
//var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var newCuota= opIndividual();

ctrlCuota.setValue(newCuota.toFixed(2));
}
//IF CON SOLO SEGURO DE VIDA
else if (ctrlCheck1.getValue()!='' && ctrlCheck2.getValue()=='' && ctrlCheck3.getValue()=='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales

var Cuota1 = opIndividual();
var newCuota = Cuota1 + 1.25;
ctrlCuota.setValue(newCuota.toFixed(2));

}
// IF CON SOLO SEGURO DE DEUDA
else if (ctrlCheck1.getValue()=='' && ctrlCheck2.getValue()!='' && ctrlCheck3.getValue()=='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividual();

var seguroDeuda = (monto*0.12)/100;
var newCuota = Cuota1 + seguroDeuda;
ctrlCuota.setValue(newCuota.toFixed(2));

}
// IF CON SOLO SEGURO DE CESANTIA
else if (ctrlCheck1.getValue()=='' && ctrlCheck2.getValue()=='' && ctrlCheck3.getValue()!='')
{
var nav = Number(ctrlnavidenho.getValue());
//var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividual();
var seguroCesantia = (monto*0.075)/100;
var newCuota = Cuota1 + seguroCesantia;
ctrlCuota.setValue(newCuota.toFixed(2));
}

// IF CON SEGURO DE VIDA Y CESANTIA
else if (ctrlCheck1.getValue()!='' && ctrlCheck2.getValue()=='' && ctrlCheck3.getValue()!='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividual();
var seguroCesantia = (monto*0.075)/100;
var newCuota = Cuota1 +1.25+seguroCesantia;
ctrlCuota.setValue(newCuota.toFixed(2));
}

// IF CON SEGURO DE VIDA Y SEGURO DE DEUDA
else if (ctrlCheck1.getValue()!='' && ctrlCheck2.getValue()!='' && ctrlCheck3.getValue()=='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividual();
var seguroDeuda = (monto*0.12)/100;
var newCuota = Cuota1 + 1.25 + seguroDeuda;
ctrlCuota.setValue(newCuota.toFixed(2));
}

// IF CON SEGURO DE DEDUA Y CESANTIA
else if (ctrlCheck1.getValue()=='' && ctrlCheck2.getValue()!='' && ctrlCheck3.getValue()!='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividual();
var seguroDeuda = (monto*0.12)/100;
var seguroCesantia = (monto*0.075)/100;
var newCuota = Cuota1+ seguroCesantia + seguroDeuda;
ctrlCuota.setValue(newCuota.toFixed(2));
}
// IF CON TODOS LOS SEGURO HABILITADOS
else if (ctrlCheck1.getValue()!='' && ctrlCheck2.getValue()!='' && ctrlCheck3.getValue()!='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividual();
var seguroDeuda = (monto*0.12)/100;
var seguroCesantia = (monto*0.075)/100;
var newCuota = Cuota1 + 1.25 + seguroCesantia + seguroDeuda;
ctrlCuota.setValue(newCuota.toFixed(2));
}
}
/*---------------------------------- TERMINA CONSUMO--------------------------------------------------------------*/
else{
/*------------------------------------ CREDITO POPULAR -----------------------------------------------------------*/
// IF CON LOS SEGUROS DESHABILITADOS
if(ctrlCheck1.getValue()=='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividualcp;


var newCuota = Cuota1 ;

ctrlCuota.setValue(newCuota.toFixed(2));
}
else if(ctrlCheck1.getValue()!='')
{
var nav = Number(ctrlnavidenho.getValue());
var kTrab = Number(ctrlkTrabajo.getValue());
//   operaciones por individuales
var Cuota1 = opIndividualcp;
var newCuota = Cuota1 + 1.25;
ctrlCuota.setValue(newCuota.toFixed(2));
}
/*---------------------------------------- TERMINA CREDITO POPULAR -------------------------------------------------*/
}
};
 
ctrlMonto.on('keydown', func);
ctrlPlazo.on('keydown', func);
ctrlTasa.on('keydown', func);
ctrlnavidenho.on('keydown', func);
ctrlkTrabajo.on('keydown', func);
