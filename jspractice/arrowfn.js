const speedWarning = (speed_limit,speed) => {
    if(speed_limit<speed)
        return `Your speed is ${speed} km/h. Please slow down!`;
    else
        return `Your speed is ${speed} km/h. You are within the speed limit.`;
    };

// console.log(speedWarning(30,80));

const distanceTravelledMiles = [100,150,200,250]

const distanceTravelledKm = distanceTravelledMiles.map(distance => Math.round(distance * 1.60934));

console.log(distanceTravelledKm);