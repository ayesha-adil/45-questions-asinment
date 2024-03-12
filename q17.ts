// array name
let guestName:string[] =["fatima","suman","hareem"];
// can noty make dinner

let canNatAttend:string ="hareem";
// new guest
let newGuest:string ="halima";
guestName[guestName.indexOf(canNatAttend)]=newGuest;
guestName.unshift("noreen");

let middleGuest:string ="aqsa";
let middleIndex =guestName.length/2;

guestName.splice(middleIndex,0,middleGuest);

guestName.push("suman");
console.log("we casn invite only to persons for dinner")
guestName.pop();
guestName.pop();
while(guestName.length>2){
let removeguest =guestName.pop();
console.log(`\nsorry ${removeguest} we can't invite you dinner`)}


guestName.map((item)=>console.log(`\n${item} you are still invited to dinner`));

guestName.pop();
guestName.pop();
console.log(guestName);