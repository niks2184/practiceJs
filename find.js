var number = [1,2,3,4,5,6,7,8,9,10];

function find(number, F) {
  for (var i = 0; i < number.length; i++)
  {
    if (number[i] == F){
      console.log("Element is in the list");
    break;
    }
}
    console.log("Element is not in the list")
}
console.log(find(number,11));