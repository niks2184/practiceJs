function reverse(string) {
  var newString;
  for (var i = string.length; i >= 0; i--)
    newString += string[i];
  console.log(newString);
}
reverse("string");