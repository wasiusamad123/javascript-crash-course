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

// Challenge 2: Dog Generator

function generateDod(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-dog-gen');
    image.src = "static/images/cat.jpg";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, scissor
function rpsGame(yourChoice){
    console.log(yourChoice);
    
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('Bot Choice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);
    
    message = finalMessage(results); // 'You won'
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, botChoice){
    var rpsDatabase = {
        'rock': {
            'scissor': 1,
            'rock': 0.5,
            'paper': 0,
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissor': 0,
        },
        'scissor': {
            'paper': 1,
            'scissor': 0.5,
            'rock': 0,
        }
    };
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if(yourScore == 0){
        return {
            'message': 'You lost!',
            'color': 'red',
        };
    } else if(yourScore === 0.5){
        return {
            'message': 'You tied!',
            'color': 'yellow',
        };
    } else{
        return {
            'message': 'You won!',
            'color': 'green',
        };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    // Let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'>"

    document.getElementById('rsp').appendChild(humanDiv);
}