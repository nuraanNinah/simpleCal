
//create an add function that can add two integers//
function add(num1,num2){
    return num1 + num2
}
//Create a multiply function that can multiply two integers//

function add(){
    var sum = 0;  
      for (var i = 0; i < arguments.length; i++){
          sum += arguments[i]
      }
      return sum 
  }
  
//create an add function that can add two integers//
function multiply(no1,no2){
    return no1 * no2
}

//Create a multiply function that can multiply two integers//

function multiply(){
    var product = 1;
    for (var i = 0; i < arguments.length; i++){
        product *= arguments[i]
    }
    return product
}

//Export//
module.exports = {
    add, multiply
}