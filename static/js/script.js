// Challenge 1: Your Age in Days

function ageInDays(){
    var birthYear = prompt('What year were you born.. Good friend?;')
    var ageDays = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.append(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Dog Generator

function generateDod(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-dog-gen');
    image.src = "static/images/cat.jpg";
    div.appendChild(image);
}