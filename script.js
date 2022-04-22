/* Challenge-01: 
Ask for the user name and answer:
"Hello, [username]"
Close the comment to test here ->

let userName=prompt("Please, type your name:")
alert (` 
Thank you for the information.

The saved name was:  ${userName} `)

alert (` 
Yeah!!!

The Challenge 01 was successfully completed!

Going to the next one...`) */
/* Challenge-02: 
Ask two numbers. Sum them up and present the final result to the user.
Close the comment to test here ->

let firstUserNumber=prompt ("Please, type the first number to try mathematical operations:")
let numberTwo=prompt ("Please, type the second number to try mathematical operations:")

let additionResult = Number(firstUserNumber) + Number(numberTwo) 

let firstSubtractionSecondResult = Number(firstUserNumber) - Number(numberTwo)
let secondSubtractionFirstResult = Number(numberTwo) - Number(firstUserNumber)

let multiplicationResult = Number(firstUserNumber) * Number(numberTwo)

let firstDivisionSecondResult = Number(firstUserNumber) / Number(numberTwo)
let secondDivisionFirstResult = Number(numberTwo) / Number(firstUserNumber)

let firstRestSecondResult = Number(firstUserNumber) % Number(numberTwo)
let secondRestFirstResult = Number(numberTwo) % Number(firstUserNumber)

let firstToThePowerSecondResult = Number(firstUserNumber) ** Number(numberTwo)
let secondToThePowerFirstResult = Number(numberTwo) ** Number(firstUserNumber)

alert (`Thank you for interaction!

Check out some
Mathematical Operations
with the numbers:

${firstUserNumber} and ${numberTwo}:

Addition: ${firstUserNumber} plus ${numberTwo} equals ${additionResult}

Subtraction: ${firstUserNumber} minus ${numberTwo} equals ${firstSubtractionSecondResult}
Subtraction: ${numberTwo} minus ${firstUserNumber} equals ${secondSubtractionFirstResult}

Multiplication: ${firstUserNumber} times ${numberTwo} equals ${multiplicationResult}

Division: ${firstUserNumber} divided by ${numberTwo} equals ${firstDivisionSecondResult}
Division: ${numberTwo} divided by ${firstUserNumber} equals ${secondDivisionFirstResult}

Division Rest: ${firstUserNumber} divided by ${numberTwo} rests ${firstRestSecondResult} 
Division Rest: ${numberTwo} divided by ${firstUserNumber} rests ${secondRestFirstResult}

Exponentiation: ${firstUserNumber} raised to the power of ${numberTwo} equals ${firstToThePowerSecondResult} 
Exponentiation: ${numberTwo} raised to the power of ${firstUserNumber} equals ${secondToThePowerFirstResult} `)

alert (` 
Yeah!!!

The Challenge 02 was successfully completed!

Going to the next one...`) */
/* Challenge-03:
Request the student's name and the three semester grades. 
Calculate the student's average.
Congratulate if the student passed the semester.
If the student did not pass, motivate the student to do his best on the recovery test.

Close the comment to test here ->


let studentName = prompt(`
Let's calculate your semester average:

First, type your name:
`)

let studentMinAverageGrade = prompt(`
Thanks ${studentName}!

Now, type the minimum average needed to pass: `)

let scoreNeeded = (Number(studentMinAverageGrade) * 3) - (10 * 2)
let studentFirstGrade = prompt(`
${studentName};

Min. average required: ${studentMinAverageGrade}
Min score needed in 1º grade: ${scoreNeeded} 

Now, type the first grade: `)

scoreNeeded = (Number(studentMinAverageGrade) * 3) - (Number(studentFirstGrade) + 10)
let studentSecondGrade = prompt(`
User name: ${studentName}
First grade: ${studentFirstGrade}

Min. average required: ${studentMinAverageGrade}
Min score needed in 2º grade: ${scoreNeeded} 

Now, type the second grade: `)

scoreNeeded = (Number(studentMinAverageGrade) * 3) - (Number(studentFirstGrade) + Number(studentSecondGrade))
let studentThirdGrade = prompt (`
User name: ${studentName}

First grade: ${studentFirstGrade}
Second grade: ${studentSecondGrade}

Min average required: ${studentMinAverageGrade}
Min score needed in 3º grade: ${scoreNeeded} 

Now, type the third grade: `)

let studentAverage = (Number(studentFirstGrade) + Number(studentSecondGrade) + Number(studentThirdGrade)) / 3
let msg

if (studentAverage >= studentMinAverageGrade) {
  studentStatus = 'Congratulations! You passed.' }

if (studentAverage < studentMinAverageGrade) {
  studentStatus = (`
  What a pity! 
  It wasn't this time. 
  More study is needed. 
  Do not forget. `) }

alert (`
User name: ${studentName}

First grade: ${studentFirstGrade}
Second grade: ${studentSecondGrade}
Third grade: ${studentThirdGrade}

Min Average Needed: ${studentMinAverageGrade}
Student Final Average: ${studentAverage}

Student Status: ${studentStatus} `)

alert (` 
Yeah!!!

The Challenge 03 was successfully completed!

Going to the next one...`) */
/* Challenge-04:
Capture 10 items for a grocery list.
After capturing them, print them separated by commas.

Close the comment to test here ->

let itemChosen
let itemsChosen = []
for (let item = 0; item  < 10; item++) {
  itemChosen = prompt ("Type the " +(item +1) +"º item (out of 10) of your shopping list.")
  itemsChosen [item] = itemChosen
 }

 alert (`
 Thanks!

 Here you have your items chosen list:

 ${itemsChosen}
 `)

 alert (` 
Yeah!!!

The Challenge 04 was successfully completed!

Going to the next one...`) */
/* Challenge-05:
Show the message to the user:
"Guess the number I'm thinking. It's between 0 and 10".

Create logic to generate a random number and verify that the number entered is the same as the random generated by the system.

As long as the user doesn't guess the number, show the message:
You didn't get the number right. Try again.

If the user hits the number, show the message:
Congratulations! You got the number right in "x" attempts.

Replace "x" with the number of attempts.

Close the comment to test here ->

let userAttempt = prompt (`
Guess the number I'm thinking!
It's between 0 and 10 `)

let randomNumber = Math.round(Math.random() * 10)
let attemptsNumber = 1;

while (Number(userAttempt) != randomNumber) {
  userAttempt = prompt ("You didn't get the number right. Try again.") 
  attemptsNumber++
}

if (attemptsNumber >= 2) {
  pluralSuffix = "s."
}
else pluralSuffix = "."


alert (`
Congratulations!
You're right.

The number I thought was ${randomNumber}.
You got the number right in ${attemptsNumber} attempt${pluralSuffix} `)

alert (` 
Yeah!!!

The Challenge 05 was successfully completed!

Going to the next one...`) */
/* Challenge-06:
Make an application that has a menu and that displays the following message:

Hello.Type the option desired:

1. Register a new Item
2. Registered Items
3. Exit

The program should capture the number entered by the user and show the following scenarios:

If the user types 1, he can register items in a list;
  show a message informing if there is no registered items.
If the user enters 2, he will be able to see the registered items.
If the user enters 3, he can delete an item from the list.
If the user enters 4, he will be able to exit the application.

Questions to ask:

1. What input data will we have. (inputs)
2. What variables will we have?
3. What is the ideal way? (ideal flow)
4. What are the alternative ways? (alternative flow)
5. What data treatments do I need to do? (data structure, functions.)
6. What is the output, or what output data, are expected.

Answerers:

1. Number os the desired option and list item.
2. Option typed. Items list. 
3. Executing the options.
4. If there is no registered items -> show message.
5. Transform String prompt received data to a Number data.
   Save data in a list.
6. Depending the context.

Close the comment to test here ->

let userOption
let registeredItems = []

while (userOption != 3) {
  userOption = Number(prompt(`
Hello. Type the number of the option desired:

1. Register new Item
2. See registered Items
3. Exit `))


if (userOption == 1) {
  let item = prompt ("Enter an Item for a list:")
  registeredItems.push(item)
}

else if (userOption == 2) {
  if (registeredItems.length == 0)
  {
  alert (`
  There is no item registered.
  Try registering a new item at the menu.
  `)
  }
  else {
    alert (registeredItems)}
} }

alert (`
Thank you for using this app. 
           
            Good Bye
`)

alert (` 
Yeah!!!

The Challenge 06 was successfully completed!

Going to the next one...`) */
/* Challenge-07:

replacing 'else if' by 'switch'

Close the comment to test here ->

let userOption
let registeredItems = []

while (userOption != 3) {
  userOption = Number(prompt(`
Hello. Type the number of the option desired:

1. Register new Item
2. See registered Items
3. Exit `))

switch (userOption) {
  case 1:
    let item = prompt ("Enter an Item for a list:")
    registeredItems.push(item)
  break;

  case 2:
    if (registeredItems.length == 0) {
      alert (`
      There is no item registered.
      Try registering a new item at the menu.
      `) }
    
      else {
        alert (registeredItems)}
  break;

  case 3:
    alert (`
      Thank you for using this app. 
                
                  Good Bye
      `)
      
      alert (` 
      Yeah!!!
      
      The Challenge 07 was successfully completed!
      
      Going to the next one...`)
  break;

  default: // default path for when user doesn't follow others.
  alert (`
  Hey!

  You entered an unexpected value.

  Press the OK button and so try entering 1, 2 or 3`)
  break;
      }}
 */
/* Challenge-08: 
Create a patient list.
Each patient within a list must contain:
Name, Age, Weight, Height.
Write a list containing the patients name.

Close the comment to test here ->

const patients = [
  {
    name: "Maria",
    age: 18,
    weight: 80,
    height: 1.80
  },
  {
    name: "Pedro",
    age: 45,
    weight: 70,
    height: 1.60
  },
  {
    name: "Paula",
    age: 17,
    weight: 85,
    height: 1.80
  },
  {
    name: "Margarida",
    age: 24,
    weight: 92,
    height: 1.90
  },
  {
    name: "João",
    age: 36,
    weight: 85,
    height: 1.75
  },
]

let patientsNames = []
let patientsAges = []
let patientsWeights = []
let patientsHeights = []

for (let patient of patients){
  patientsNames.push(patient.name)
}
for (let patient of patients){
  patientsAges.push(patient.age)
}
for (let patient of patients){
  patientsWeights.push(patient.weight)
}
for (let patient of patients){
  patientsHeights.push(patient.height)
}

alert (`
Patient: ${patientsNames[0]}
Age: ${patientsAges[0]} years old.
Weight: ${patientsWeights[0]} Kg. 
Height: ${patientsHeights[0]} m.
 
Patient: ${patientsNames[1]}
Age: ${patientsAges[1]} years old.
Weight: ${patientsWeights[1]} Kg. 
Height: ${patientsHeights[1]} m.
 
Patient: ${patientsNames[2]}
Age: ${patientsAges[2]} years old.
Weight: ${patientsWeights[2]} Kg. 
Height: ${patientsHeights[2]} m.
 
Patient: ${patientsNames[3]}
Age: ${patientsAges[3]} years old.
Weight: ${patientsWeights[3]} Kg. 
Height: ${patientsHeights[3]} m.
 
Patient: ${patientsNames[4]}
Age: ${patientsAges[4]} years old.
Weight: ${patientsWeights[4]} Kg. 
Height: ${patientsHeights[4]} m.
`)

alert (` 
      Yeah!!!
      
      The Challenge 08 was successfully completed!
      
      Going to the next one...`)
*/
/* Challenge-09: 
Given a list of patients, find out each patient's BMI and print:

Patient 'x' has a BMI of: 'y'

Where 'x' is the patient's name and 'y' is the patient's BMI.

Create a function to calculate BMI.
---
BMI (weight / (height*height))

Close the comment to test here ->

const patients = [
  {
    name: "Maria",
    age: 18,
    weight: 80,
    height: 180
  },
  {
    name: "Pedro",
    age: 45,
    weight: 70,
    height: 160
  },
  {
    name: "Paula",
    age: 17,
    weight: 85,
    height: 180
  },
  {
    name: "Margarida",
    age: 24,
    weight: 92,
    height: 190
  },
  {
    name: "João",
    age: 36,
    weight: 85,
    height: 175
  },
]

function printPatientBMI (patients) {

alert (`
The Patient ${patients.name} has a BMI of:
${(patients.weight / (patients.height /100)**2).toFixed(2)}

The patient BMI was calculated according to the equation:
BMI = current weight (kg)/height2 (m)
`)
}

for (let patient of patients) {
printPatientBMI(patient)
}
*/
/* Challenge-10: 
Get two numbers from the user.

Show the follow result:
n1 + n2
n1 - n2
n1 * n2
n1 / n2
n1 % n2
n1+n2 is even or odd
n1 and n2 are equals or different values.

Close the comment to test here ->*/

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