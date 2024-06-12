
//Create a counter in Javascript (counts down from 30 to 0)

/* 
for(let i=30 ; i>=0 ;i--){

   console.log(i);
}
*/

//Calculate the time it takes between a setTimeout call and the inner function actually running

function greetings(){
    console.log("Hello");
}
const beforedate= new Date();
const beforetime = beforedate.getTime();
setTimeout(greetings,3000);

const afteredate= new Date();
const aftertime = beforedate.getTime();

console.log(aftertime-beforetime);