let color = 'blue';

console.log(color);
console.log(color);
console.log(color);

color = 'green';
console.log(color);

//let age = 19;
const yearOfBirth = 2001;

let name ='nasser';
let age = 30;

console.log(typeof name);
console.log(typeof age);

//arrays
let colors = ['red', 'blue', 'yellow'];
console.log(colors); // to print all elements 
console.log(colors[2]); // to print specific element
colors [1] = 'black'; // to modify element value
console.log(colors[1]); 

console.log(colors.length);
console.log(colors.includes('green'));  

//adding an elements on the first index of the array
colors.unshift('green');
console.log(colors);

//deleting an elements from the array
colors.shift();

//adding an elements to the last index of the array
colors.push('orange');
console.log(colors);

//removing an elements from the last index of the array
let pop = colors.pop();
console.log(pop);
console.log(colors);

//isArray 
console.log(Array.isArray(colors));

//2D array
const values = [
['autumn', 'winter', 'summer', 'spring'], 
['earth', 'jupiter' ,'mars'], 
['rain', 'thundar', 'lightning']];
console.log(values[0][1]);
console.log(values[1][2]);
console.log(values[2][1]);

//split method
let message = 'welcome to javascript';
let result = message.split(' ');
console.log(result);

//join method
let myName = ['Asaal', 'saud', 'Almoghamsy'];
let result2 = myName.join(' ');
console.log(result2);

//if statement
let AGE = 10;
if(AGE < 12){
    console.log('sorry, you are not old enoough to play this game');
}else{
    console.log('Welcome to the game');
}

//switch
const COLORS =['yellow', 'orange', 'blue'];
let colorNumber = 3;

switch(colorNumber){
    case 1:
        console.log(COLORS[0]);
        break;
    case 2:
        console.log(COLORS[1]);
        break;
    case 3: 
        console.log(COLORS[2]);
        break;
    case 4:
    case 5:
    case 6:
        console.log('black');
        break; 
    default:
        console.log('white');
        break;
}

//Loop
for(let i =1; i<= 50; i++){
    console.log(i);
}

const flowers= ['Rose', 'Lavendar', 'orchid'];
for(let i = 0; i < flowers.length; i++){
    console.log(flowers[i]);
}

for(let flower of flowers ){
    console.log(flower);
}

const messages = 'hello world';
for(let character of messages){
    console.log(messages);
}

let j =0;
while(j < flowers.length){
    console.log(flowers[j]);
    j++;
}

do{
    console.log(flowers[j]);
    j++;}
    while(j < flowers.length);

//break
for(let i =0; i< flowers.length; i++){
    if(flowers[i] == 'Lavendar'){
        break;
    }
    console.log(flowers[i]);
}

//continue
for(let i =0; i< COLORS.length; i++){
    if(COLORS[i] == 'orange'){
        continue;
    }
    console.log(COLORS[i]);
}

//function
function printnummbers(to){
    for(let i =1; i<= 4; i++){
        console.log(i);
    }
}
printnummbers(2);

function add(fnum , secondnum){
    let result = fnum + secondnum ;
    return result;
}

let value = add(2, 7);
console.log(value);