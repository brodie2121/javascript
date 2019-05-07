//#1
function hello(name) {
console.log(`Hello ${name}!`);
}
//hello('Brodie');

//#2
function hello(name) {
    if (name === undefined) {
    console.log("Hello World");
    }else {
    console.log(`Hello ${name}`);
    }
}

//hello();

//#3
function madlib(whom, subject) {
console.log(`${whom} favorite subject in school is ${subject}`);
}
//madlib("Brodie's", "math");

//TIP CALCULATOR
function tipAmount(bill, service){
if (service === 'good'){
    console.log(bill * 0.2);
}else if (service === 'fair'){
    console.log(bill * 0.15);
}else {
    console.log(bill * 0.1);
}
}
//tipAmount(100, 'good')

//TIP CALCULATOR#2
function tipAmount(bill, service){
if (service === 'good'){
    console.log(bill + (bill * 0.2));
}else if (service === 'fair'){
    console.log(bill + (bill * 0.15));
}else {
    //console.log(bill + (bill * 0.1));
}
}
//tipAmount(100, 'good')

//TIP CALCULATOR#3
function tipAmount(bill, service, split){
if (service === 'good'){
    console.log((bill+bill * 0.2) / split);
}else if (service === 'fair'){
    console.log((bill+bill * 0.15) / split);
}else {
    console.log((bill+bill * 0.1) / split);
}
}
//tipAmount(100, 'good', 5)