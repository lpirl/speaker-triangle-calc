// constants
inputs = document.getElementsByTagName("input");
rad1 = 180 / Math.PI;
rad60 = 60 * rad1;
sin60 = Math.sin(rad60);
cos60 = Math.cos(rad60);

function init(){
  for(i=0; i<inputs.length; i++) {
    var input = inputs[i];
    input.onkeyup = main;
    input.onpaste = main;
  }
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
    document.getElementById(property).innerHTML = values[property].toFixed(4);
  }
}

function main(){
  var values = read_inputs();

  values.ox = cos60 * values.sy;
  values.oy = sin60 * values.sy;
  values.d = sin60 * values.e;
  values.d1 = values.d + values.oy;
  values.d2 = values.d + values.w;
  values.e1 = values.e + 2 * values.ox;
  values.w1 = values.w - values.oy;

  write_all(values);
}
