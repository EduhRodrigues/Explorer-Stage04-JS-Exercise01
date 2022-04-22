let firstUserNumber = Number (prompt (`
Hey! 

Lets practice some math operations?

Please, enter the first number:
`)).toFixed(2)

let secondUserNumber = Number (prompt (`
The first number entered was: ${firstUserNumber}

Now, enter the second number:
`)).toFixed(2)

let additionResult = (Number(firstUserNumber)) + (Number(secondUserNumber))


let firstSubtractionSecondResult = (firstUserNumber) - (secondUserNumber)
let secondSubtractionFirstResult = (secondUserNumber) - (firstUserNumber)


let multiplicationResult = (firstUserNumber) * (secondUserNumber)

let firstDivisionSecondResult = (firstUserNumber) / (secondUserNumber)
let secondDivisionFirstResult = (secondUserNumber) / (firstUserNumber)

let firstRestSecondResult = (firstUserNumber) % (secondUserNumber)
let secondRestFirstResult = (secondUserNumber) % (firstUserNumber)

let firstToThePowerSecondResult = (firstUserNumber) ** (secondUserNumber)
let secondToThePowerFirstResult = (secondUserNumber) ** (firstUserNumber)

alert (`Thank you for interaction!

Numbers: ${firstUserNumber} and ${secondUserNumber}

Addition: ${firstUserNumber} plus ${secondUserNumber} equals ${additionResult.toFixed(2).replace('.', ',')}

Press ok button to continue...
`)

alert (`
Subtraction: ${firstUserNumber} minus ${secondUserNumber} equals ${firstSubtractionSecondResult.toFixed(2).replace('.', ',')}
Subtraction: ${secondUserNumber} minus ${firstUserNumber} equals ${secondSubtractionFirstResult.toFixed(2).replace('.', ',')}

Press ok button to continue...
`)

alert (`
Multiplication: ${firstUserNumber} times ${secondUserNumber} equals ${multiplicationResult.toFixed(2).replace('.', ',')}

Press ok button to continue...
`)

alert (`
Division: ${firstUserNumber} divided by ${secondUserNumber} equals ${firstDivisionSecondResult.toFixed(2).replace('.', ',')}
Division: ${secondUserNumber} divided by ${firstUserNumber} equals ${secondDivisionFirstResult.toFixed(2).replace('.', ',')}

Press ok button to continue...
`)

alert (`
Division Rest: ${firstUserNumber} divided by ${secondUserNumber} rests ${firstRestSecondResult.toFixed(2).replace('.', ',')}
Division Rest: ${secondUserNumber} divided by ${firstUserNumber} rests ${secondRestFirstResult.toFixed(2).replace('.', ',')}

Press ok button to continue...
`)

alert (`
Exponentiation: ${firstUserNumber} raised to the power of ${secondUserNumber} equals ${firstToThePowerSecondResult.toFixed(2).replace('.', ',')} 
Exponentiation: ${secondUserNumber} raised to the power of ${firstUserNumber} equals ${secondToThePowerFirstResult.toFixed(2).replace('.', ',')}

Press ok button to continue...
`)

let sameOrNot

if (firstUserNumber == secondUserNumber) {
  sameOrNot = "equal"}

  else {
    sameOrNot = "different"} 

alert (`
  The first number entered: ${firstUserNumber}
  and the second number entered: ${secondUserNumber}
  are ${sameOrNot} values.

  Press ok button to continue...
`)

let oddOrEven

if (additionResult.toFixed(2) % 2 == 0) {
    oddOrEven = "even"} //par

  else {
    oddOrEven = "odd"} //ímpar 

alert (`
  The product of the addition expression:
  ${firstUserNumber.replace('.', ',')} + ${secondUserNumber.replace('.', ',')} 
  is an ${oddOrEven} number (${additionResult.toFixed(2).replace('.', ',')}).

  Thank you for your attention. 

  Bye bye!
`)