var number = [1,2,3,4,5,6,7,8,9,10];
function odd(a)
{
var num=[];
for (var i = 0; i < a.length; i++) {
    if(i % 2 == 1) {
    num.push(a[i]);
    }
} return num;}
console.log(odd(number));
