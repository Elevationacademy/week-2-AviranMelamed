// Callbacks & Arrow Functions


// ---------exc1--------

// const pushPull = function (invoke){
//     invoke()
// }
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"
  

//   ----------exc2------------
   
// const getTime = function (invoke) {
     
//      invoke(time)
 
// }
// const returnTime = function (time) {
   
//     alert('The current time is: ' + time)
//   }
//   const time = new Date()
//   getTime(returnTime)

// ---------------ex3--------------
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = (x) => console.log(x)
  
//   displayData(alert, logData, "I like to party")
  
// -----------ex4-------------
// const sum = (x, y, z) => {return console.log(x + y + z)}
// sum (1, 2, 3)

// ------------ex5-----------
// const capitalize = (name) => console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

// ------------ex6--------------

 
// const commentOnWeather = temp => {
//     console.log (determineWeather(temp))
// }
// const determineWeather = temp => {
//     if(temp > 25){
//       return "It's hot"
//     }
//     return "It's cold"
//   }
//   commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"

// ------------ex7------------ not done
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")



