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

function prependDrive(name){
    drivers.slice(-1, name);
}
