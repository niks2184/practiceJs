var number = [1,2,3,4,5,6,7,8,9,10];
for(var i=0; i<10;i++)
{
if(number[0]<number[i])
     number[0]=number[i];
}
console.log("Largest number is:" + number[0]);
