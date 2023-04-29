//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array. 
//I subtracted one from the length of the array because ages.length equals 8, so
// 8 - 1 = 7 which is the last number in the array because arrays starts at 0, therefore referencing that number. 
let ageDifference1 = ages[ages.length - 1]  - ages[0];
console.log("1a ageDifference1: " + ageDifference1)

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//I used push to add a new number to the end of the array, then created a new variable to test whether the function worked, to subtract the first number from the last number in the array.
ages.push(13)
let ageDifference2 = ages[ages.length - 1]  - ages[0];
console.log("1b ageDifference2: " + ageDifference2)

//1c. Use a loop to iterate through the array and calculate the average age. 
//I used a loop function to find the total of all the ages, then divided all the ages by the amount of ages, finding the average age. The sum of all ages is 243 because
// I pushed 13 into the array and 243/9 = 27.

let all = 0;
for(let i = 0; i < ages.length; i++) {
    all += ages[i];
}
let average = all/ ages.length;
console.log("1c average: " + average)

//2.  Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
//I used a for loop to find the average number of letters. By using .length on names[i] I was able to find the length of the names. 

let letterCount = 0;
for(let i = 0; i < names.length; i++) {
    letterCount += names[i].length;
}
let avgNumLetters = letterCount/ names.length;
console.log("2a avgNumLetters: " + avgNumLetters)

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// I used a for loop to add each name to the variable allNames and created a space after each name by concatenating quotes with a space in it.
let allNames = "";
for(let i = 0; i < names.length; i++) {
    allNames += names[i] + " ";
}
console.log("2b allNames: " +  allNames)

//3.  How do you access the last element of any array?
console.log("3. When you subtract one from the length of the array, you are accessing the last number. array[array.length - 1]")

//4.  How do you access the first element of any array?
console.log("4. By using 0, you are accessing the first element of the array. array[0]")

//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//I wrote a for loop to add the length of each name to the nameLengths array using the push function.

let nameLengths = []
for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log("5 nameLengths: " + nameLengths)

//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// I used a for loop to find the sum of all the elements in the nameLengths array by referecing each element and adding it to the sum of all elements.
let sumOfElements = 0
for(let i = 0; i < nameLengths.length; i++) {
    sumOfElements += nameLengths[i] 
}
console.log("6 sumOfElements: " + sumOfElements)

//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// I used a for loop to concatenate the parameter word as many times as n represents. 
function concatenateWords(word,n) {
    let allWords = "";
    for(let i = 0; i < n; i++){
        allWords += word 
    }
    return allWords 
}
console.log("7 concatenateWords: " + concatenateWords("Hello",3))

//8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
//I concatenated quotes between the two parameters to create a space between the first and last name. 
function fullName(firstName,lastName){
    return firstName + " " + lastName
}
console.log("8 fullName: " + fullName("Elizabeth","Daly"))

//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// I used a for loop to count the sum of all numbers in the array, then wrote a conditional statement if the sum of all numbers is over 100.

function isGreaterThan100(numArray){
    let sum = 0
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i]
    }
    return sum > 100
}
console.log("9 isGreaterThan100: " + isGreaterThan100([53,37,52,14]))

//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
// In this function I used a for loop to find the total of the numbers in the array, then divided the total by the amount of numbers in the array to find the average.
function averageOfElements(anArray){
    let elements = 0;
    for(let i = 0; i < anArray.length; i++){
        elements += anArray[i];
    }
    return elements/ anArray.length; 
}
console.log("10 averageOfElements: " + averageOfElements([5,10,15,20]))

//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//I wrote a function which takes the average of two arrays and returns true when the first is greater than the second. I used the averageOfElements from the previous question 
// to find the average of the first and second array.  
function isGreaterthanOtherArray(firstArray, secondArray){
    return averageOfElements(firstArray) > averageOfElements(secondArray)
}
console.log("11 isGreaterthanOtherArray: " + isGreaterthanOtherArray([2,4,6,8],[1,3,5,7]))

//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//Here is a function that returns true if both conditions are met, if isHotOutside and moneyInPocket > 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){
    return isHotOutside && moneyInPocket > 10.50
}
console.log("12 willBuyDrink: " + willBuyDrink(true,11.50))

//13.  Create a function of your own that solves a problem.
//I created a function to find out if my cat is hungry by factoring in if he has had exerciseToday(true or false) and how many hoursSinceFed if over 12 hours. If both are true, then the cat
//is hungry.
function isCatHungry(exerciseToday,hoursSinceFed){
    return exerciseToday && hoursSinceFed > 12
}
console.log("13 isCatHungry: " + isCatHungry(false,6))

/*
let all = 0;
for(let i = 0; i < ages.length; i++) {
    all += ages[i];
}
let average = all/ ages.length;
console.log("1c answer: " + average)



1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
Do not use numbers to reference the last element, find it programmatically.
ages[7] – ages[0] is not allowed!
1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
1c. Use a loop to iterate through the array and calculate the average age. 
2.  Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
3.  How do you access the last element of any array?

4.  How do you access the first element of any array?

5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 


7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').


8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.



9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.


11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


13.  Create a function of your own that solves a problem. 

In comments, write what the function does and why you created it.
*/