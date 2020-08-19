// --------ex1-----------

// const StringFormatter = function () {
   
//    const capitalizeFirst = function(name){
//       return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

//     }
//     const skewerCase = function(name){
//         return (name.replace(" ", "-"))
//     }
//   return {
//       capitalizeFirst,
//       skewerCase
//     }
    
// }


// const formatter = StringFormatter()
// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box")) //should print blue-box


// -------------ex2---------------

// const Bank = function() {

//     let money = 500
    
//     const deposit = function(cash) {
//         console.log(money += cash)
//     }
//     const showBalance = function(){
//         console.log(money)
//     }
//     return {deposit, showBalance}
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950


// ------------ex3-----------------