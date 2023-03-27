//Coding challenge #1: Print numbers from 1 to 10
for (var i=0; i<10; i++){
    document.write(i+1);
}
document.write("<br>")

//Coding challenge #2: Print the odd numbers less than 100
for (var i=1; i<=100; i+=2){
    document.write(i+ " ");
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
        document.write(i+" ")
        count++;
    }
    i++;
 }
 document.write("<br>")
 }

 printPrime(100);

//Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

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

 var nPrimes= prompt("Enter how many prime numbers you want to see:")
 var startAt= prompt("Enter the starting number:")

 function printPrimen(nPrimes, startAt){
    var arr=[];
    var count=0;
    var i=startAt;
    while(count<nPrimes){
        if(isPrime(i)){
            arr.push(i);

            count++;
        }
        i++
    }
    return arr;
 }

 document.write(printPrimen(nPrimes,startAt)+"<br>")

 //Coding challenge #20: Rotate an array to the left 1 position

 function rotateArrayLeft(arr){
    var left=arr.shift();
    arr.push(left);
    return arr;
 }

 var arr=[1,2,3,4,5];
 
 document.write(rotateArrayLeft(arr)+"<br>");

 //Coding challenge #21: Rotate an array to the right 1 position

 function rotateArrayRight(arr){
    var right=arr.pop();
    arr.unshift(right);
    return arr;
 }

 var arr=[1,2,3,4,5];
 
 document.write(rotateArrayRight(arr)+"<br>");

 //Coding challenge #22: Reverse an array

 var arr=[1,2,3,4,5];
 
 document.write(arr.reverse()+"<br>");

 //Coding challenge #23: Reverse a string
 function reverseString(str1){
    var str2="";
    for (var i=str1.length-1; i>=0; i--){
        var letter=str1[i];
        str2+=letter;
    }
    return str2;
 }
 str1="Hello world!";

 document.write(reverseString(str1)+"<br>");

 //Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
 
 function mergeArray(arr1, arr2){
    var arr3= arr1.concat(arr2);
    return arr3;
 }

 arr1= [1,5,7,12,23];
 arr2= [25,27,30,32];

 document.write(mergeArray(arr1, arr2)+"<br>");

 //Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

 function mergeArrayExclusive(arr1, arr2){
    var mergedArray=[];

    for (var i=0; i<arr1.length; i++){
        for (var j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j])
            break;
            
            if (j==arr2.length-1 && arr1[i]!=arr2[j])
                mergedArray.push(arr1[i]);
        }

    }
    for (var i=0; i<arr2.length; i++){
        for (var j=0; j<arr1.length; j++){
            if(arr2[i]==arr1[j])
            break;
            
            if (j==arr1.length-1 && arr2[i]!=arr1[j])
                mergedArray.push(arr2[i]);
        }
    }
    return mergedArray;
 }

 arr1=[1,4,5,9,11,23];
 arr2=[2,3,5,10,11,24];

 document.write(mergeArrayExclusive(arr1,arr2)+"<br>");

 //Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

 function mergeFirst(arr1, arr2){
    var mergedFirst=[];

    for (var i=0; i<arr1.length; i++){
        for (var j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j])
            break;
            
            if (j==arr2.length-1 && arr1[i]!=arr2[j])
            mergedFirst.push(arr1[i]);
        }
    }
    return mergedFirst;
 }

 arr1=[1,4,5,9,11,23];
 arr2=[2,3,5,10,11,24];

 document.write(mergeFirst(arr1,arr2)+"<br>");

 //Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

 function distinctArray(arr){
    var newArray=[];

    for (var i=0; i<arr.length; i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
 }

 arr=[1,4,5,5,9,11,11,23];

 document.write(distinctArray(arr)+"<br>");

 //Coding challenge #28: Calculate the sum of first 100 prime numbers

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

 function sumPrimeNumbers(n){
    var count=0;
    var i=0;
    var sum=0;
    while (count!=n){
        if (isPrime(i)){
            sum+=i;
            count++;
        }
        i++;
    }
    return sum;
 }
 document.write("The sum of the first 100 prime number is: "+ sumPrimeNumbers(100)+"<br>");

 //Coding challenge #29: Print the distance between the first 100 prime numbers

 function isPrime(n){
    if (n<=1)
        return false
    if (n>1){
        var range=Math.sqrt(n);
        for (var i=2; i<=range; i++){
            if(n%i==0)
                return false;
        }
        return true;
    }
 }

 function distanceBetweenPrime(n){
    var count=1;
    var prev=2;
    var next=prev+1;
    while(count!=n){
       if(isPrime(next)){
        var distance=next-prev;
        document.write(count+1+"-> ("+next+"-"+prev+")="+distance+"<br>");
        prev=next;
        count++;
       }
        next++;
    }
 }
 distanceBetweenPrime(100);

 //Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

 function addTwoPositiveNumber(n1,n2){
    var number1=parseFloat(n1);
    var number2=parseFloat(n2);
    var result=number1+number2;

    return result;
 }

 n1="2343556342";
 n2="12324442";

 document.write(addTwoPositiveNumber(n1,n2));

 //Coding challenge #31a. Create a function that will return the number of words in a text

 function countWords(text) {
    text = text.trim();
    text = text.replace(/\s+/g, " ");
    var words = text.split(" ");
    
    return words.length;
  }
  
   text="Hello World   ";
   document.write(countWords(text));