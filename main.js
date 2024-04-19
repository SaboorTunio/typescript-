var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
question;
1;
install;
vscode;
and;
node;
js;
question;
2;
var personName = "Saboor";
console.log("Hello", personName, "would you like to learn some typescript today?");
question;
3;
var personName = "saboor Tunio ";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
question;
4;
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
question;
5;
var famousperson = "Albert Einstein ";
console.log(famousperson);
var message = "“A person who never made a mistake never tried anything new.”";
console.log(message);
question;
6;
var name1 = "\t\n Saboor \t\n";
console.log(name1);
console.log(name1.trim());
question;
7;
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
question;
8;
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
question;
9;
var favoriteNumber = 7;
console.log("my fayorite number is ".concat(favoriteNumber, "."));
question;
10;
This;
is;
a;
programe;
prints;
a;
personal;
message.
;
var myName = "saboor";
console.log("hello ".concat(myName, ", would you like to learn some typescript  today"));
// question 11
var names = ["rafey", "ali", "shahzad"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// question 12
var names = ["rafey", "ali", "shahzad"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("hello ".concat(names, ", would you like to learn some typescript today?"));
}
question;
13;
var transport = ["honda city car", "fontuner v8 car", "honda bike"];
transport.forEach(function (transport) {
    console.log("i would like to own a ".concat(transport, "."));
});
question;
14;
var guests = ["rafey", "ali", "shahzad"];
guests.forEach(function (guests) {
    console.log("dear ".concat(guests, ", woud you like to join me for dinner?"));
});
question;
15;
var unableToAttend = "rafey";
console.log("".concat(unableToAttend, " con't make it to dinner."));
// replace the guest
var newGuest = "maqsood";
guests[guests.indexof(unableToAttend)] = newGuest;
// new invatations
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ", would you like to joine me to dinner?"));
});
question;
16;
var guests = ["ali", "shahzad", "maqsood"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("sohaib");
guests.splice(guests.length / 2, 0, "maaz");
guests.push("shahbaz");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// question 17
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
question;
18;
var places = ["dubai", "sangapur", "chaina", "Switzerland", "japan"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
question;
19;
var guests = ["maqsood", "shahzad", "ali", "shahbaz", "maaz"];
console.log("I am inviting ".concat(guests.length, " people to dinner."));
question;
20;
var countries = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);
