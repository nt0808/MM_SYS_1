//3.1
//a
var word1 = 'informationsmanagement'; 
var word2 = 'multimediasysteme'; 
var text;

if (word1.length > word2.length) {
    text = 'Das erste Wort ist länger.';
} else if (word1.length = word2.length) {
    text = 'Das zweite Wort ist länger.';
} else {
    text = 'Die Wörter sind gleich lang.';
};

console.log(text);

//b
var i = 0; 
var list = []; 

while (i<5) {
    list[i] = i*10;
    i++;
};

console.log(list);

//c
var i = 0; 
var numList = [3, 4, 9]; 

for (; i < 10; i++) {
    if (numList.includes(i)) {
        console.log(i);
    }
};

//3.2
//a
function numberIsOdd (num) {
    return (num % 2) != 0;
};

//b
function cantineActionDay (day) {
    var text = '';
    if (day.includes('')) {
        if (day.toLowerCase() === 'monday') {
            text = 'taco monday';
        } else if (day.toLowerCase() === 'wednesday') {
            text = 'pizza wednesday';
        } else if (day.toLowerCase() === 'friday') {
            text = 'pasta friday';
        } else {
            text = 'no action';
        }
    }
    return text;
};