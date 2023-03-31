//4.1
//a
document.write('<h1>Titel H1</h1>');

//b
var h5 = document.getElementById('subHeadline');
h5.style.fontSize = '18px';

//c
var imageSource = document.getElementById('img1').src;
console.log(imageSource);

//d
var absatz2 = document.getElementsByTagName('p')[1];
absatz2.innerHTML = 'Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn.';

//e
var num = document.getElementsByClassName('list')[0].children.length;
console.log(num);

//4.2
//a
var search = document.getElementById('search');
var container = document.getElementById('loadingContainer');

search.addEventListener('keyup', checkLength);

function checkLength () {
    var value = search.value;

    if (value.length > 5) {
		return container.classList.add('loading');
    };
};

//b
var email = document.getElementById('email');
var pw = document.getElementById('password');
var cb = document.getElementById('checkbox');
var btn = document.getElementById('btn');
var alertEmptyFields = document.getElementById('alertEmptyFields');
var form = document.getElementById('form');

btn.addEventListener('click', checkFields);

alertEmptyFields.style.display = 'none'; 

function checkFields () {
    var emailValue = email.value;
    var pwValue = pw.value;

	if (emailValue.length >= 1 && pwValue.length >= 1 && cb.checked == true) {
        alertEmptyFields.style.display = 'none'; 
        return form.reset();
	} else {
        alertEmptyFields.style.display = 'block'; 
    };
};