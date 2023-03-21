//Coding challenge #1: Print numbers from 1 to 10
for (var i=0; i<10; i++){
    document.write(i+1);
}

//Coding challenge #2: Print the odd numbers less than 100
for (var i=1; i<=100; i+=2){
    document.write(i);
}

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
document.write(sum);