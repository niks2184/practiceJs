function sum(num)
{
   var total = 0;
    for(i=0;i<num.length;i++)
        total= total + num[i]
    return total;
}
console.log(sum([1,2,3,7]));