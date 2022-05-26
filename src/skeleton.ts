/**
 * Adds together two numbers
 * @param directionArray string [] - the first number to add
 * @param array off string arrays - the second number to add
 * @returns boolean
 */

/*
const destinations = [["e", "n", "e", "e", "n"], ["w", "n", "w", "n", "w", "w", "n"]];
reachesAnyDestination(["s", "e", "e", "n", "n", "e", "n"], destinations) // should return true


let [longitudeDirection, latitudeDirection] = calculate(directionArray)
let [longitudeDestination1, latitudeDestiantion1] = calculate(destiation1Array)
let [longitudeDestination2, latitudeDestiantion2] = calculate(destiation2Array)

if is valid (longitudeDirection, latitudeDirection,longitudeDestination1, latitudeDestiantion1)
return true
elseif isValid (longitudeDirection, latitudeDirection,longitudeDestination2, latitudeDestiantion2)
return true
else return false 
ENDIF

function isValid (longitudeDirection:number[],latitudeDirection:number[],longitudeDestination:number[],latitudeDestination:number[])
if longitudeDirection + longitudeDestination = 0| latitudeDirection + latitudeDestination
return true 
ENDIF

function calculte(string[],) returns latitudeNumber,longitudeNumber

let longitude =0
let latitude = 0


for each element in the string array 
then if the elemet = e in the string
latitude +=1 
else if emlemt = w 
latutdue -=1
else if element=n 
longitude +=1
else if element = s
longitude -= 1

reutrn latitude and longitude.


*/
function reachesAnyDestination(directionArray: string[], destination: (string[])[]): boolean {
  let [destination1Array, destination2Array]= destination
  let [longitudeDirection, latitudeDirection] = calculate(directionArray)
  let [longitudeDestination1, latitudeDestiantion1] = calculate(destination1Array)
  let [longitudeDestination2, latitudeDestiantion2] = calculate(destination2Array)
if (isValid(longitudeDirection,longitudeDestination1)&& isValid(latitudeDirection,latitudeDestiantion1)){
  return true
}else if (isValid(longitudeDirection,longitudeDestination2)&& isValid(latitudeDirection,latitudeDestiantion2)){
  return true
}else {
  return false
}

}

function calculate(array:string[]):number[]{
  let longitude =0
  let latitude = 0

  for(let i of array){
    if (i === 'e'){
        latitude+= 1
    }else if (i === 'w'){
      latitude += -1
    } else if(i==='n'){
        longitude += 1
    }else if ( i === 's'){
      longitude+= -1
    }
    }
    console.log(latitude,longitude)
    return [latitude,longitude]
}

function isValid(a:number, b:number):boolean{
  console.log("a+b",a+b)
  if (a-b === 0){
    return true
  }else {
    return false
  }
}

export default reachesAnyDestination;
