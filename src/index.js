console.log("This is the first line of code!");

var template = "This is a text message from ";
var name = "Nafanail";
var message = template + " " + name + "!";
console.log("1) " + message);


var foo = function(name) {
  var template = "This is a text message from ";
  var message = template + " " + name + "! ГОCПОДЬ ЖГИ!!!!!";

  return message;
}

console.log( "2) " + foo ("Nafanail") );