function distanceFromHqInBlocks(someValue){
const hq = 42;
const distanceInBlocks = Math.abs(hq - someValue);
return distanceInBlocks;
};

function distanceFromHqInFeet(someValue){
const distanceInBlocks = Math.abs(42 - someValue);
const distanceInFeet = distanceInBlocks * 264;
return distanceInFeet;
};

function distanceTravelledInFeet(start, destination){
const distanceTravelled = Math.abs(destination- start) * 264;
return distanceTravelled;
};

function calculatesFarePrice(start, destination){
    const distanceTravelled = Math.abs(destination - start);
    const distanceInFeet = distanceTravelled * 264;
    let farePrice = 0;
    if (distanceInFeet <= 400){
        farePrice =0;
    } 
    else if (distanceInFeet <= 2000){
        farePrice = (distanceInFeet -400) * 0.02;
    }
    else if (distanceInFeet <= 2500){
        farePrice = 25;
    }
    else {
        farePrice = "cannot travel that far";
    }
    return farePrice;
};