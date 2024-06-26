// constants
inputs = document.getElementsByTagName("input");
rad1 = Math.PI / 180;
rad30 = 30 * rad1;
rad60 = 60 * rad1;
sin30 = Math.sin(rad30);
sin60 = Math.sin(rad60);
cos60 = Math.cos(rad60);

function init(){
  for(i=0; i<inputs.length; i++) {
    var input = inputs[i];
    input.onkeyup = main;
    input.onpaste = main;
  }
  main();
}
init();

function read_inputs(){
  var values = {};
  for(i=0; i<inputs.length; i++) {
    var input = inputs[i];
    values[input.id] = parseFloat(input.value);
  }
  return values;
}

function write_all(values){
  for (var property in values) {
    if (!values.hasOwnProperty(property)) continue;
    fixedVal = values[property].toFixed(4);
    document.getElementById(property).innerHTML =
      isNaN(fixedVal) ? "???" : fixedVal;
  }
}

function main(){
  var values = read_inputs();

  values.d = sin60 * values.e;
  values.b1 = values.b * sin30;
  values.d2 = values.d + values.w;
  values.ox = cos60 * values.sy;
  values.oy = sin60 * values.sy;
  values.d1 = values.d + values.oy;
  values.e1 = values.e + 2 * values.ox;
  values.w1 = values.w - values.oy;

  write_all(values);
}
