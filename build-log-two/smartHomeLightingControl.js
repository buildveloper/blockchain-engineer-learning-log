const shouldTurnOnLights = (hour, isHome) => {
    if(hour >= 18 && hour <= 22 & isHome){
        return true
    } else{
        return false
    };
};

console.log(shouldTurnOnLights(20, true));
console.log(shouldTurnOnLights(20, true));
console.log(shouldTurnOnLights(5, false));
console.log(shouldTurnOnLights(18, true));