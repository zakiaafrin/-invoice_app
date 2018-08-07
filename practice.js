console.log("working")
// Exercise 1
var oper1=16+8
var oper2=30-6
var oper3=3*8
var oper4=48/2

console.log(oper1, oper2, oper3, oper4)

// Exercise 2

var op1= 6 % 3
var op2= 10 % 2
var op3= 5 % 2
console.log(oper1<=oper2)

// Exercise 3

var string1= "Test Grade  as Follow: \n"
var string2= "\t Student 1:96 \n"
var string3= "\t Comment: \"None\"" 

console.log(string1 + string2 + string3)
// exercise 4

var numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90] 

console.log(numbers[2] + numbers[4])
//Exercise 5

var me = {
    firstname: "zakia",
    lastname: "jeme",
    state: "florida",
    city: "miami",
    zipcode: "33179",
}
console.log(`Hello, my name is ${me.firstname} ${me.lastname}.
My state is ${me.state},city ${me.city}, zipcode ${me[`zipcode`]}.`)

// Exercise 6

var num = 1

while(num <= 10){
    if(num % 2 == 0){
        console.log(num)
    }
    num++
}

for(var num = 1; num<=10; num++){
    if(num % 2 == 1){
    console.log(+ num)
    }
    num++
}




