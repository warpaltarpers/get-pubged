var exercises = {
    'pushupCD' : 0,
    'pushupD' : 0,
    'tricepExtension' : 0,
    'punch' : 0,
    'elbowPlank' : 0,
    'climber' : 0,
    'bridge' : 0,
    'elbowLift' : 0,
    'situp' : 0,
    'superman' : 0,
    'pseudoPlanche' : 0,
    'squat' : 0
};

function btnpress(btn) {
    switch (btn) {
        case "dinner":
            exercises.pushupCD += 1;
            break;
        case "potato":
            exercises.tricepExtension += 1;
            break;
        case "grenade":
            exercises.punch += 1;
            break;
        case "carflip":
            exercises.elbowPlank += 1;
            break;
        case "death":
            exercises.pushupD += 1;
            break;
        case "roofcamp":
            exercises.climber += 1;
            break;
        case "bridgecamp":
            exercises.bridge += 1;
            break;
        case "bluezone":
            exercises.elbowLift += 1;
            break;
        case "redzone":
            exercises.situp += 1;
            break;
        case "car":
            exercises.superman += 1;
            break;
        case "pan":
            exercises.pseudoPlanche += 1;
            break;
        case "hitreg":
            exercises.squat += 1;
            break;
    }
}
