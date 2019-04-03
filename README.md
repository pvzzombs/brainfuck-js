# brainfuck-js
A brainfuck compiler made using javascript 
 
### Usage 
It's simple and easy to use
```javascript

//bf is a function
//that accepts string to be compiled
//and an array as an input
//and outputs result as an array
//example:

var code = "++++[>>++++++++<<-]+++++++[>++++++++++++<-]>.<++++[>+++++<-]>.---.>.<++++++++++++.++++.------------.------.++++++++.>.<---------.<++++[>++++<-]>.---.++++++++.---------.>.<--------.+++++++++.+++++++++.>.<--------------.+++++++++++.--------.+++.+++.>.<----.+++++++.<++++[>----<-]>-.+++++++++++++.>.<++.------------.---.>.<+++++++.-----------.<+++++[>+++++<-]>.-.>.<<+++[>-------<-]>.+++++++++++.--------.<+++[>-------------------<-]>.";
var sample = bf(code); //returns T,h,e, ,q,u,i,c,k, ,b,r,o,w,n, ,f,o,x, ,j,u,m,p,s, ,o,v,e,r, ,t,h,e, ,l,a,z,y, ,d,o,g,.
console.log(sample.join("")); //outputs The quick brown fox jumps over the lazy dog.

```

### Parameters
```javascript

bf(code, input)

```
##### Required 

``code`` is a string that contains the program. 

##### Optional 
``input`` is an array, it converts each value into its ASCII code, and stores to the memory cell.
