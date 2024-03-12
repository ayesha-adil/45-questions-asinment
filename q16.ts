let guestName:string[] =["Noor","Ayesha","Areeba"];



let canNotAttend:string = "Areeba";

console.log(`${canNotAttend} can not make it,for dinner`);

let newGuest :string = "amna";

guestName[guestName.indexOf(canNotAttend)]=newGuest;
console.log(guestName);
guestName.map((item)=>console.log(`Hellow ${item} you are invited to dinner`));