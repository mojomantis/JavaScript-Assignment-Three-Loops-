//   QUESTION lINK https://github.com/Shahzadaahmed/JavaScript-Programs-Assigments-by-Stack-Learners-Institute/blob/master/Assignment%20%23%2005/For%20Loops%20Programs.pdf


// Q 1

console.log('\n' + " Question 1");

for(let i=0; i<5; i++){
    console.log("Hello World");
}


//Q 2

console.log('\n' + " Question 2");


for(let i=0; i<10; i++){
    console.log(i+1);
}


//Q 3

console.log('\n' + " Question 3");

var tableOfNumber = Number(prompt("Enter The Numer whos table you want to be displayed."));

var tableUpTo = Number(prompt("Enter the number to which the previous number should be multiplied"));

console.log("Multiplication table of " + tableOfNumber + " Length " + tableUpTo);

for(let i=1; i < (tableUpTo + 21); i++){
    console.log(tableOfNumber + " x " + (i) + " = " + (tableOfNumber * (i)));
}

//Q 4

console.log('\n' + " Question 4");

var mobileArr = ["Nokia", "Samsung", "Apple", "Sony","Huawei"];

for(let i = 0; i < mobileArr.length; i++){
    console.log(mobileArr[i]);
}


//Q 5

console.log('\n' + " Question 5");


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(" ");

for(let i = 0; i < fruits.length; i++){
    console.log("Element at index " + i + " is " + fruits[i]);
}

console.log('\n' + " Question 6");

//Q 6

console.log('\n' + " Question 6");

var sizeOfArray = Number(prompt("Enter the number of item that you want in the array"));
var customArray = [];

console.log("Number of items: " + sizeOfArray + '\n' + "Items :");
console.log('\n');

for(let i=0; i < sizeOfArray; i++){
    customArray += prompt("Enter number no " + (i+1));
    console.log(customArray[i]);
}


//Q 7

console.log('\n' + " Question 7 - A  (Counting)");
console.log('\n');
console.log("Counting: ");
console.log('\n');2

for(let i=1; i<=15; i++){
    console.log(i + ", ");
}

console.log('\n' + " Question 7 - B (Reverse Counting)");
console.log('\n');
console.log("Reverse counting: ");
console.log('\n');

for(let i=10; i>=1; i--){
    console.log(i + ", ");
}

console.log('\n' + " Question 7 - C (Even)");
console.log('\n');
console.log("Even: ");
console.log('\n');

for(let i=0; i<=20; i++){
    if(i%2 === 0){
    console.log(i + ", ");}
}

console.log('\n' + " Question 7 - D (Odd)");
console.log('\n');
console.log("Odd: ");
console.log('\n');

for(let i=1; i<=20; i++){
    if(i%2 !== 0)
    console.log(i + ", ");1

}

console.log('\n' + " Question 7 - E (Series)");
console.log('\n');
console.log("Series: ");
console.log('\n');

for(let i=2; i<=20; i++){
    if(i%2 === 0){
        console.log(i + "k, ");}
}


//Q 8

console.log('\n' + " Question 8");
console.log('\n');


var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

var customerOrder = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am '\n' Possible orders are (cake, apple pie, cookie, chips, patties)");

for(let i = 0; i<bakeryItems.length; i++){
    if(customerOrder === bakeryItems[i])
    {
        console.log(customerOrder[i] + "is available at index " + i + " in our bakery");
        break;
    }
    else{
        if(i === bakeryItems.length){
            console.log("We are sorry, " + customerOrder + " is not available in our bakery");
        }
    }
}



//Q 9

console.log('\n' + " Question 9");
console.log('\n');

var numberArray = [24, 53, 78, 91, 12];

console.log(numberArray);

var largestNumber = numberArray[0];


for(let i = 0; i < numberArray.length; i++){
    if(largestNumber < numberArray[i]){
        largestNumber = numberArray[i];
    }
    
}
console.log("Largest number is " + largestNumber);

//Q 10

console.log('\n' + " Question 10");
console.log('\n');

largestNumber = numberArray[0];


for(let i = 0; i < numberArray.length; i++){
    if(largestNumber > numberArray[i]){
        largestNumber = numberArray[i];
    }
    
}
console.log("Smallest number is " + largestNumber);



//Q 11

console.log('\n' + " Question 11");
console.log('\n');

largestNumber = numberArray[0];
var smallestNumber = numberArray[0];


for(let i = 0; i < numberArray.length; i++){
    if(largestNumber < numberArray[i]){
        largestNumber = numberArray[i];
    }
    if(smallestNumber > numberArray[i]){
        smallestNumber = numberArray[i];
    }
    
}
console.log("Largest number is " + largestNumber);
console.log("Smallest number is " + smallestNumber);




//Q 12

console.log('\n' + " Question 12 (multiples of 5) ");
console.log('\n');

for(let i = 5 ; i <= 100; i+=5){
    console.log(i);
}

//Q 13 (dom manuplation)


//Q 14


console.log('\n' + " Question 14");
console.log('\n');


var scores = [12, 45, 3, 22, 34, 50];

var stopvalue = Number(prompt("Enter the stop VALUE (not index no.)."));
for(let i=0; i<scores.length;i++){

if(stopvalue != scores[i]){
    console.log(scores[i]);
}
if(stopvalue === scores[i])
{
    console.log(scores[i]);
    i = scores.length;
}
    
}



//Q 15


console.log('\n' + " Question 15");
console.log('\n');

var twoDArray = [[1,2,3],[4,5,6],[7,8,9]];

for(let i = 0; i < twoDArray[i].length; i++){
    for(let j = 0; j < twoDArray.length; j++){
        console.log(twoDArray[i][j]);
    }
}


//Q 16


console.log('\n' + " Question 16");
console.log('\n');
var positiveValue;
do{positiveValue = prompt("enter a positive value");
if(positiveValue>=0){console.log(positiveValue);}}
while(positiveValue>=0)


//Q 17


console.log('\n' + " Question 17");
console.log('\n');

for(let i = 0; i <= 20; i++){
    if(i%2===0){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd");
    }
}


//Q 18


console.log('\n' + " Question 18");
console.log('\n');
var productOfOddNumbers = 1;
for(let i = 0; i<7; i+=2){
    productOfOddNumbers += productOfOddNumbers * i;
}
console.log(productOfOddNumbers);


//Q 19


console.log('\n' + " Question 19");
console.log('\n');
var starString;
var numberOfStars = Number(prompt("Enter number of stars to be displayed"));

var starCount = numberOfStars;

for(let i=0; i < numberOfStars; i++){
    starString = "*";
    
for(let j=1; j < starCount; j++){
    starString+="*";
    

}
starCount=starCount-1;
console.log(starString);
console.log('\n');

}

//Q 20 A

console.log('\n' + " Question 20 A");
console.log('\n');
var starStringTwo;
var linesOfStars = Number(prompt("Enter number of stars to be displayed"));

var starCount = linesOfStars;

for(let i=0; i < linesOfStars; i++){
    starStringTwo = "*";
    
for(let j = 1; j < starCount; j++){
    starStringTwo+="*";
    

}

console.log(starStringTwo);
console.log('\n');

}

//Q 20 B

console.log('\n' + " Question 20 B");
console.log('\n');
var starStringTwo="*";


var linesOfStars = Number(prompt("Enter number of stars to be displayed"));
var starCount = 1;

for(let i=0; i < linesOfStars; i++){

for(let j=0; j<starCount; j++){
    console.log(starStringTwo);
}
starStringTwo+="*";
starCount+=1;

}

console.log('\n');




//Q 20 C

console.log('\n' + " Question 19");
console.log('\n');

var linesOfStars = Number(prompt("Enter number of stars to be displayed"));

var starCount = linesOfStars;

for(let i=0; i < linesOfStars; i++){
    starString = "*";
    
for(let j=1; j < starCount; j++){
    starString+="*";
    

}
starCount=starCount-1;
console.log(starString);
console.log('\n');

}