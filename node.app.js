// The code for the domain name generator project is below.
// Type "node ./node.app.js" in the console to see the domain name generator at work.

// [To run this code in the browser inspect console, go to ...
// (yjlmotley-Domain-Name-Generator-Project/src/app.js)]

let articles = ["my", "some", "this"];
let adjectives = ["hilarious", "rib-tickling", "goofy", "wacky"];
let nouns = [
"racoon",
"shenanigans",
"snort",
"slapstick",
"wisecrack",
"gag"
];
let tlds = [".lol", ".snicker", ".giggle", ".haha", ".comedy"];

for (let article of articles) {
for (let adjective of adjectives) {
    for (let noun of nouns) {
    for (let tld of tlds) {
        console.log(`${article}-${adjective}-${noun}${tld}`);
    }
    }
}
}