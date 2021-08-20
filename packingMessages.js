// These are all of the messages available inside an array.
const messages = ['Time to pack up pots and pans!', "Let's pack up towls now.", "Let's do bowles and plates too.", "Now for the tv and games.", "Finish packing the bathroom.", 
"Bedrooms need to be packed now.", "Furniture needs to be moved out!", "All cleaning supplies need to be boxed up!", "The pantry and food need to be done to!", "Lets get the garage done to.", 
"Lets move all the boxed out to the garage.", "Time to load it all up and move!"];

let randomMessage = messages[Math.floor(Math.random() * messages.length)];

console.log(randomMessage);