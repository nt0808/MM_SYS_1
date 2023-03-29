//4.1
//a
document.write('<h1>Titel H1</h1>');

//b
var h5 = document.getElementById('subHeadline').style.fontSize = '18px';

//c
var imageSource = document.getElementById('img1').src;
console.log(imageSource);

//d
var newText = document.getElementsByTagName('p')[1].innerHTML = 'Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn.';

//e
var num = document.getElementsByClassName('list')[0].children.length;
console.log(num);

//4.2
//a