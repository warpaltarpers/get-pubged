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
            console.log("Button " + btn + " Pressed");
            break;
        case "potato":
            exercises.tricepExtension += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "grenade":
            exercises.punch += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "carflip":
            exercises.elbowPlank += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "death":
            exercises.pushupD += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "roofcamp":
            exercises.climber += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "bridgecamp":
            exercises.bridge += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "bluezone":
            exercises.elbowLift += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "redzone":
            exercises.situp += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "car":
            exercises.superman += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "pan":
            exercises.pseudoPlanche += 1;
            console.log("Button " + btn + " Pressed");
            break;
        case "hitreg":
            exercises.squat += 1;
            console.log("Button " + btn + " Pressed");
            break;
    }
}
