// Write your solution here!
 const drivers = ["Milo", "Otis", "Garfield"];



 function destructivelyAppendDriver(driverName){
      drivers.push(driverName);
 }

function destructivelyPrependDriver(driverName){
    drivers.unshift(driverName);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}
function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){

    const addedDriver = drivers.splice(-1, name);
    console.log(name);
    // console.log(drivers);
    // return drivers;
}
