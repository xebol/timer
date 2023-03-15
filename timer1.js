const timer = (beep) => {
  beep = Number(beep) //filtering numbers only
  if(isNaN(beep) || beep < 0){
    return
  }
  setTimeout(() => {
    process.stdout.write('\x07'); //beeping sound
  }, beep * 1000)
}

const numbers = process.argv.slice(2) //command line arguments
//loop through the numbers
for(let num of numbers) {
  timer(num); //calling the function, the argument is whatever argument passed in the command line
}