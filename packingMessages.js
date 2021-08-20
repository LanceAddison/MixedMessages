// messages are in an object and stored in arrays
const packing = {
    items: ['towels', 'tv', 'beds', 'toothbrush', 'dresser', 'movies', 'bowls', 'forks', 'food'], 
    boxes: ['big', 'small', 'medium', 'extra small', 'extra large'],
    leave: ['Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday", "Sunday"],
    punctuation: ['.', '!'],
};
 
// generates a random number
function generateRandomNumber (num) {
    return Math.floor(Math.random() * num);
}

// an empty array for the final message
finalMessage = [];

// random selection for punctuation
let punct = packing.punctuation[Math.floor(Math.random() * packing.punctuation.length)];

// generating a random number to select an array in the object
for (msg in packing) {
    randMessage = generateRandomNumber(packing[msg].length);
    // selecting a message randomly from the array
    switch (msg) {
        case 'items':
            punct = packing.punctuation[Math.floor(Math.random() * packing.punctuation.length)];
            finalMessage.push(`You need to pack the ${packing[msg][randMessage]}${punct}`);
            break;
        case 'boxes':
            punct = packing.punctuation[Math.floor(Math.random() * packing.punctuation.length)];
            finalMessage.push(`We need a ${packing[msg][randMessage]}${punct}`);
            break;
        case 'leave':
            punct = packing.punctuation[Math.floor(Math.random() * packing.punctuation.length)];
            finalMessage.push(`We are leaving on ${packing[msg][randMessage]}${punct}`);
            break;
    }   
    
}

// formating the final message array
const packingFormated = pack => {
    const format = pack.join('\n');
    return '\n' + format + '\n';
}

// logging the final message to the console
console.log(packingFormated(finalMessage));