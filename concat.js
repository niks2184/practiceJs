var arr=["a","b","c"];
var ar=["d","e"];

function concat(arr1,arr2)
{
   for(i=0;i<arr2.length;i++)
   {
   arr1.push(arr2[i]);
   }
   return arr1;
}
console.log(concat(arr,ar));