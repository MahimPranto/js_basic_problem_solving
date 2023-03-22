//Coding challenge #1: Print numbers from 1 to 10
for (var i=0; i<10; i++){
    document.write(i+1);
}
document.write("<br>")

//Coding challenge #2: Print the odd numbers less than 100
for (var i=1; i<=100; i+=2){
    document.write(i);
}
document.write("<br>")

//Coding challenge #3: Print the multiplication table with 7
for (var i=1; i<=10; i++){
    document.write("7*"+i+"="+i*7+"<br>");
}

//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
for (var i=1; i<=10; i++){
    for (var j=1; j<=10; j++){
        document.write(i+"*"+j+"="+i*j+" ");  
    }
    document.write("<br>");
}

//Coding challenge #5: Calculate the sum of numbers from 1 to 10
var sum=0;

for (var i=1; i<=10; i++){
    sum+=i;
}
document.write(sum + "<br>");

//Coding challenge #6: Calculate 10!
var total=1;

for (var i=1; i<=10; i++){
    total *=i;
}
document.write(total + "<br>");

//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
var sum=0;

for (var i=11; i<=30; i+=2){
    sum+=i;
}
document.write(sum + "<br>");

//Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(cel){
    var far=cel*(9/5)+32;
    return far;
}

let cel= prompt ("Input the temperature in Celsius");

var converted= celsiusToFahrenheit(cel);

document.write("The temperature in Fahrenheit is "+ converted + "<br>");

//Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(far){
    var cel=(far-32) * 5/9;
    return cel;
}

let far= prompt ("Input the temperature in Fahrenheit");

var converted= fahrenheitToCelsius(far);

document.write("The temperature in Celsius is "+ converted + "<br>");

//Coding challenge #10: Calculate the sum of numbers in an array of numbers
function arraySum(arr){
    var sum=0;

    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

var arr=[2,3,5,6,15,19,21];

document.write("The sum of the numbers in the array is: "+ arraySum(arr)+ "<br>");

//Coding challenge #11: Calculate the average of the numbers in an array of numbers
function arrayAvg(arr){
    var sum=0;

    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length
    return avg;
}

var arr=[2,3,5,6,15,19,21];

document.write("The average of the numbers in the array is: "+arrayAvg(arr)+ "<br>");

//Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positiveArr(arr){
    var arr2=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>=0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
var arr=[-2,-5,2,6,14,-15];

document.write("The array containing only the positive numbers is: "+ positiveArr(arr)+ "<br>");

// Coding challenge #13: Find the maximum number in an array of numbers
function findMax(arr){
    var max=0;

    for (var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

var arr=[-2,-5,2,6,14,-15];

document.write("The maximum number in the array is: "+ findMax(arr)+ "<br>");

//Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

var fa=0;
var fb=1;

document.write (fa+ " ");
document.write (fb + " ");

for (var i=1; i<9; i++){
    fn=fa+fb;
    fa=fb;
    fb=fn;
    document.write (fn + " ");
    
}
document.write ("<br>");

//Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

 var n=prompt("Enter a number to find the nth Fibonacci number")
 document.write("The "+ n+"th fibonacci number is "+ fibonacci(n) + "<br>");

 //Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
 function isPrime(n){
    if (n<=1)
        return false;
    else if(n>=2){
        range=Math.sqrt(n);
        for (var i=2; i<=range; i++){
            if (n%i==0)
                return false;
        }
        return true;
    }

 }
 var n=prompt("Enter a number to check if it is a prime number:");

 document.write("Is "+n+" a prime number? "+isPrime(n) + "<br>");

 //Coding challenge #17: Calculate the sum of digits of a positive integer number

 function sumOfDigits(number){
    sum=0;
    while(number>0){
        sum+=(number%10);
        number=Math.floor(number/10);
    }
    return sum;
 }

 let number;

 do{
    number=prompt("Enter a positive integer number")
 } while (number<=0)

 document.write("The sum of digits of "+number+" is: "+ sumOfDigits(number)+"<br>");

 //Coding challenge #18: Print the first 100 prime numbers

 function isPrime(n){
    if (n<=1)
        return false;
    else if(n>=2){
        range=Math.sqrt(n);
        for (var i=2; i<=range; i++){
            if (n%i==0)
                return false;
        }
        return true;
    }
 }

 function printPrime(total){
    var count=0;
    var i=0;
 while (count<total){
    if (isPrime(i)){
        document.write(i+",")
        count++;
    }
    i++;
 }
 }

printPrime(100);