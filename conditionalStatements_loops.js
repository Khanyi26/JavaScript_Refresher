
//Exercise 1: Temperature checking using if-else statements.
var temperature = 20; 

if (temperature < 0) {
    console.log("It's freezing!");    
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}


// Temperature checking using switch statements.
switch(true) {
    case(temperature < 0):
        console.log("It's freezing!");
        break; 
    case(temperature >= 0):
        console.log("It's cold");
        break; 
    case(temperature >= 16):
        console.log("It's mild");
        break;
    default:
        console.log("It's warm.");    
}


//Exercise 2: Divisibility Check using if-else statement
var num = 18;

if (num % 2 === 0 && num % 3 === 0) {
    console.log("Divisible by both.");
} else if (num % 2 === 0) {
    console.log("Divisible by 2.");
} else if (num % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

//2. Divisibility Check using switch statement
switch (true) {
    case (num % 2 === 0 && num % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (num % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (num % 3 === 0):
        console.log("Divisible by both.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}


//Exercise 3: For loops
// Print numbers from 1 to 10
for (var i = 1; i<=10; i++) {
    console.log(i);
}

//2.Print all even numbers between 1 and 20.
for(var i = 1; i <= 20; i++) {
    if (i % 2 === 0){
        console.log(i);
    }   
}

//3.Calculate the sum of all numbers from 1 to 100 and print the result.
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum +=i
}
console.log("Sum of numbers from 1 to 100:", sum);

//4.Given the array of numbers, print each element to the console.
var numbers1 = [1,2,3,4,5];
for (var i = 1; i < numbers1.length; i++) {    
        console.log(numbers1[i]);    
}

//5.Given the array of numbers, find and print the largest number.
var numbers2 = [3, 7, 2, 5, 10, 6];
var largestNumber =  numbers2[0];
for (var i = 1; i < numbers2.length; i++) { 
    if (numbers2[i] > largestNumber ) {
        largestNumber = numbers2[i];
    }  
}
console.log("Largest number:", largestNumber); 


//Exercise 4: While loops
//1.Print numbers from 1 to 10.
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//2.Print all even numbers between 1 and 20.
var j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

//3.Calculate the sum of all numbers from 1 to 100 and print the result.
var sumWhile = 0;
var k = 1;
while (k <= 100) {
    sumWhile += k;
    k++;
}
console.log("Sum of numbers from 1 to 100:", sumWhile);

//4.Print all multiples of 5 less than 50.
var m = 1;
while(m < 50) {
    if (m % 5 === 0) {
        console.log(m)
    }
    m++;
}


//Exercise 5: Do While loops
//1.Print numbers from 1 to 10.
var p = 1;
do {
    console.log(p);
    p++;
} while (p <= 10);

//2.Calculate the sum of all numbers from 1 to 100 and print the result.
var sumDoWhile = 0;
var n = 1;
do {
    sumDoWhile += n;
    n++;
} while (n <= 100);
console.log("Sum of numbers from 1 to 100:", sumDoWhile);

//3.Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number
var userInput;
do{
    userInput = parseInt(prompt("Please enter a number greater than 10:"), 10);
} while (userInput <= 10 || isNaN(userInput));
console.log("You entered a valid number:", userInput);

//4.Create a simple guessing game where the user must guess a number between 1 and 10.
var correctNumber = Math.floor(Math.random() * 10) + 1;
var guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10"), 10);
} while (guess !== correctNumber);
console.log("Congratulations! You guessed the correct number:", correctNumber);
