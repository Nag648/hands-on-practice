function Protect_email(email){
    const pro = email.split("@");
    const user = pro[0];
    const domain = pro[1];
    const username = user.slice(0,5) + "..." + user.slice(-2);
    return username + "@" + domain;
}
console.log(Protect_email("kongalasrilakshmi@gmail.com"));


const num = 2;
const num1 = 3;
console.log(num +num1);

console.log (num * num1);
