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

// Resets variables for a new game
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
  document.location.href = "./../index.html";
}

// Changes variables for calculation
document.getElementById("dinner").onclick(puCD += 1);

document.getElementById("death").onclick(puD += 1);
document.getElementById("roofcamp").onclick(cl += 1);
document.getElementById("bridgecamp").onclick(br += 1);
document.getElementById("bluezone").onclick(el += 1);

document.getElementById("redzone").onclick(su += 1);
document.getElementById("car").onclick(sup += 1);
document.getElementById("pan").onclick(pp += 1);
document.getElementById("hitreg").onclick(sq += 1);

document.getElementById("potato").onclick(te += 1);
document.getElementById("grenade").onclick(punch += 1);
document.getElementById("carflip").onclick(ep += 1);

// Calculation for workout
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
  // Array indices =    0               1                     2                 3               4               5               6                7                8                 9             10
  var array2parse = [totalPU, numOfTE, numOfPUNCH, numOfEP, numOfCL, numOfBR, numOfEL, numOfSU, numOfSUP, numOfPP, numOfSQ];
  parseCalc(array2parse);
}

// Function to parse array from calc
function parseCalc(array){
  var invalidWO = [];
  var returnString = "";
  // Check to see which workouts are empty
  for i in array {
    if (array[i] == 0) {
      invalidWO.push(i);
    }
  }
  // Returns list of workouts and reps
  for j in array {
    if (invalidWO.contains(j)){
      continue;
    } else {
      switch (j) {
        case 0: // pushups
          returnString.concat(array[j] + " pushups, ");
          break;
        case 1: // tricep extensions
          returnString.concat(array[j] + " tricep extensions, ");
          break;
        case 2: // punches
          returnString.concat(array[j] + " punches, ");
          break;
        case 3: // elbow plank
          returnString.concat(getTime(array[j]));
          break;
        case 4: // climbers
          returnString.concat(array[j] + " climbers, ");
          break;
        case 5: // bridges
          returnString.concat(array[j] + " bridges, ");
          break;
        case 6: // elbow lifts
          returnString.concat(array[j] + " elbow lifts, ");
          break;
        case 7: // sit ups
          returnString.concat(array[j] + " sit ups, ");
          break;
        case 8: // supermans
          returnString.concat(array[j] + " supermans, ");
          break;
        case 9: // pseudo-planches
          returnString.concat(array[j] + " pseudo-planches, ");
          break;
        case 10: // squats
          returnString.concat(array[j] + " squats");
          break;
        default:
          returnString = "ERROR. PLEASE CONTACT ADMINISTRATOR.";
      }
    }
  } document.location.href = "./../results.html";
  document.getElementById("resultsCont").innerHTML = returnString;
}

function getTime(seconds){
  var result = seconds/60;
  var timeString = result.toString();
  var minutes = timeString.parseInt();
  var finSeconds = seconds%60;
  return (minutes + " minutes and " + finSeconds + " seconds elbow plank, ");
}
