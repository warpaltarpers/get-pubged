var puCD = 0; // pushups from chicken dinner
var puD = 0; // pushups from death
var te = 0; // tricep extensions
var punch = 0; // punches
var ep = 0; // elbow plank
var cl = 0; // climbers
var br = 0; // bridges
var el = 0; // elbow lifts
var su = 0; // situps
var sup = 0; // supermans
var pp = 0; // pseudo-planches
var sq = 0; // squats

var numOfPUCD = 0;
var numOfPUD = 0;
var numOfTE = 0;
var numOfPUNCH = 0;
var numOfEP = 0;
var numOfCL = 0;
var numOfBR = 0;
var numOfEL = 0;
var numOfSU = 0;
var numOfSUP = 0;
var numOfPP = 0;
var numOfSQ = 0;

function reset(){
  puCD = 0;
  puD = 0;
  te = 0;
  punch= 0;
  ep = 0;
  cl = 0;
  br = 0;
  el = 0;
  su = 0;
  sup = 0;
  pp = 0;
  sq = 0;
  numOfPUCD = 0;
  numOfPUD = 0;
  numOfTE = 0;
  numOfPUNCH = 0;
  numOfEP = 0;
  numOfCL = 0;
  numOfBR = 0;
  numOfEL = 0;
  numOfSU = 0;
  numOfSUP = 0;
  numOfPP = 0;
  numOfSQ = 0;
}

function calculate(){
  numOfPUCD = puCD * 10;
  numOfPUD = puD * 3;
  numOfTE = te * 5;
  numOfPUNCH = punch * 5;
  numOfEP = ep * 30;
  numOfCL = cl * 10;
  numOfBR = br * 4;
  numOfEL = el * 10;
  numOfSU = su * 5;
  numOfSUP = sup * 10;
  numOfPP = pp * 15;
  numOfSQ = sq * 5;
  totalPU = numOfPUCD + numOfPUD;
}

function playDisplay(){
  document.getElementById("display").innerHTML = <div class=row><div class=col><button class="btn btn-secondary"type=button id=dinner>CHICKEN DINNER</button></div></div><div class=row><div class=col-4><button class="btn btn-secondary"type=button id=death>Death</button></div><div class=col-4><button class="btn btn-secondary"type=button id=roofcamp>Roofcamp</button></div><div class=col-4><button class="btn btn-secondary"type=button id=bridgecamp>Bridgecamp</button></div><div class=col-4><button class="btn btn-secondary"type=button id=bluezone>Bluezone</button></div></div><div class=row><div class=col-4><button class="btn btn-secondary"type=button id=redzone>Redzone</button></div><div class=col-4><button class="btn btn-secondary"type=button id=car>Car</button></div><div class=col-4><button class="btn btn-secondary"type=button id=pan>Pan</button></div><div class=col-4><button class="btn btn-secondary"type=button id=hitreg>Hitreg Fail</button></div></div><div class=row><div class=col-3><button class="btn btn-secondary"type=button id=potato>Potato Aim</button></div><div class=col-3><button class="btn btn-secondary"type=button id=grenade>Grenade Thrown</button></div><div class=col-3><button class="btn btn-secondary"type=button id=carflip>Carflip</button></div></div><button class="btn btn-secondary"type=button>Calculate</button>;
}
