function hide(){
    var cnt=document.getElementById('divv');
    let gameContainer = document.querySelector(".game-container");
    gameContainer.style.display = "flex";
    gameContainer.style.color= "black";
    cnt.style.display='none';
}
let teamPic1=document.getElementById('upload-image');
let inputFile1=document.getElementById('name-a-img');
let teamPic2=document.getElementById('upload-image2');
let inputFile2=document.getElementById('name-b-img');
function change1(){
    teamPic1.src= URL.createObjectURL(inputFile1.files[0]);
}
function change2(){
    teamPic2.src= URL.createObjectURL(inputFile2.files[0]);
}
let teamA = document.getElementById('team-a-name');
let teamB = document.getElementById('team-b-name');
let inputTeamA = document.getElementById('name-a');
let inputTeamB = document.getElementById('name-b');
function teamName(){
    teamA.innerHTML = inputTeamA.value;
    teamB.innerHTML = inputTeamB.value;
}
// counter
var countdown; // Variable to store the countdown interval
var duration;
var audioElement = document.getElementById('audio');
let counterElement = document.getElementById('startButton');
var guess = document.querySelector(".front");
let plyrName = document.getElementById('plyr-name');
var trueAns = document.getElementById('true');
var falseAns = document.getElementById('false');
let scoreA = document.getElementsByClassName('scoreA');
let scoreB = document.getElementsByClassName('scoreB');
let score=0;
trueAns.addEventListener('click',function(){
    counterElement.disabled = false; // Re-enable the button
        if (guess) {
            // clearInterval(timerInterval);
            guess.style.transform = 'rotateY(360deg)';
            guess.style.transition = '1s';
            plyrName.innerHTML="Sba7oo Ta7dy"
            
            
            scoreA.innerHTML= scoreA++;

    }
})
falseAns.addEventListener('click',function(){
    counterElement.disabled = false; // Re-enable the button
        if (guess) {
            // clearInterval(timerInterval);
            guess.style.transform = 'rotateY(360deg)';
            guess.style.transition = '1s';
            plyrName.innerHTML="Sba7oo Ta7dy"
    }
});
document.getElementById('startButton').addEventListener('click', function() {
    var startTime = Date.now(); // Get the current timestamp in milliseconds
    var duration = 30000; // Duration of 30 seconds in milliseconds
  
    var timerInterval = setInterval(function() {
        var currentTime = Date.now(); // Get the current timestamp in milliseconds
        var elapsed = currentTime - startTime; // Calculate the elapsed time in milliseconds
        var remaining = duration - elapsed; // Calculate the remaining time in milliseconds
    
        if (remaining <= 0) {
          clearInterval(timerInterval); // Clear the interval when the timer reaches 0
        counterElement.value = "next";
        audioElement.play();
          counterElement.disabled = false; // Re-enable the button
        if (guess) {
            guess.style.transform = 'rotateY(360deg)';
            guess.style.transition = '1s';
            plyrName.innerHTML = "Sba7oo Ta7dy";
        }
        } else {
          var seconds = Math.floor(remaining / 1000); // Convert milliseconds to seconds
          var milliseconds = remaining % 1000; // Extract the remaining milliseconds
    
          var timeDisplay = seconds + ":" + milliseconds.toString().padStart(3, "0"); // Format the remaining time
          counterElement.value = timeDisplay; // Display the remaining time on the HTML element
        }
      }, 10); // Update the timer every 10 milliseconds (you can adjust the interval as needed)
    
      counterElement.disabled = true; // Disable the button
    });







const playersName = [
  "Lionel Messi (Paris Saint-Germain)",
  "Kylian Mbappe (Paris Saint-Germain)",
  "Karim Benzema (Real Madrid)",
  "Erling Haaland (Manchester City)",
  "Luka Modric (Real Madrid)",
  "Kevin De Bruyne (Manchester City)",
  "Robert Lewandowski (Barcelona)",
  "Vinícius Júnior (Real Madrid)",
  "Thibaut Courtois (Real Madrid)",
  "Mo Salah (Liverpool)",
  "Sadio Mané (Bayern Munich)",
  "Neymar (Paris Saint-Germain)",
  "Harry Kane (Tottenham)",
  "Jude Bellingham (Borussia Dortmund)",
  "Casemiro (Manchester United)",
  "Achraf Hakimi (Paris Saint-Germain)",
  "Antoine Griezmann (Atletico Madrid)",
  "Federico Valverde (Real Madrid)",
  "Pedri (Barcelona)",
  "Emiliano Martínez (Aston Villa)",
  "Enzo Fernández (Benfica)",
  "Bukayo Saka (Arsenal)",
  "Rafael Leão (AC Milan)",
  "Phil Foden (Manchester City)",
  "Jamal Musiala (Bayern Munich)",
  "Son Heung-min (Tottenham)",
  "Virgil van Dijk (Liverpool)",
  "Bruno Fernandes (Manchester United)",
  "Bernardo Silva (Manchester City)",
  "Olivier Giroud (AC Milan)",
  "Josko Gvardiol (RB Leipzig)",
  "Julián Álvarez (Manchester City)",
  "Christopher Nkunku (RB Leipzig)",
  "Alisson (Liverpool)",
  "Martin Ødegaard (Arsenal)",
  "João Cancelo (Manchester City)",
  "Gavi (Barcelona)",
  "Ángel Di María (Juventus)",
  "Toni Kroos (Real Madrid)",
  "Khvicha Kvaratskhelia (Napoli)",
  "Joshua Kimmich (Bayern Munich)",
  "David Alaba (Real Madrid)",
  "Yassine 'Bono' Bounou (Sevilla)",
  "Rúben Dias (Manchester City)",
  "Aurélien Tchouaméni (Real Madrid)",
  "Theo Hernandez (Milan)",
  "Alexis Mac Allister (Brighton)",
  "Rodrigo De Paul (Atletico Madrid)",
  "Sofyan Amrabat (Fiorentina)",
  "Cody Gakpo (Liverpool)",
  "Cristiano Ronaldo (Al-Nassr)",
  "Victor Osimhen (Napoli)",
  "Rodri (Manchester City)",
  "Ederson (Manchester City)",
  "Ilkay Gündogan (Manchester City)",
  "Antonio Rüdiger (Real Madrid)",
  "Riyad Mahrez (Manchester City)",
  "Marcus Rashford (Manchester United)",
  "Luis Díaz (Liverpool)",
  "Trent Alexander-Arnold (Liverpool)",
  "Richarlison (Tottenham)",
  "Gabriel Jesus (Arsenal)",
  "Hakim Ziyech (Chelsea)",
  "Alphonso Davies (Bayern Munich)",
  "Marquinhos (Paris Saint-Germain)",
  "Dusan Vlahovic (Juventus)",
  "Éder Militão (Real Madrid)",
  "Marcelo Brozovic (Inter Milan)",
  "Ousmane Dembélé (Barcelona)",
  "Lautaro Martínez (Inter Milan)",
  "Dominik Livakovic (Dinamo Zagreb)",
  "Cristian Romero (Tottenham)",
  "Nicoló Barella (Inter Milan)",
  "Mike Maignan (AC Milan)",
  "Thiago Silva (Chelsea)",
  "Hugo Lloris (Tottenham)",
  "Fabinho (Liverpool)",
  "Mehdi Taremi (Porto)",
  "Azzedine Ounahi (Angers)",
  "Kalidou Koulibaly (Chelsea)",
  "Lisandro Martínez (Manchester United)",
  "Darwin Núñez (Liverpool)",
  "Aleksandar Mitrovic (Fulham)",
  "Kyle Walker (Manchester City)",
  "Raphaël Varane (Manchester United)",
  "Dayot Upamecano (Bayern Munich)",
  "Ciro Immobile (Lazio)",
  "Declan Rice (West Ham)",
  "Frenkie de Jong (Barcelona)",
  "Bruno Guimarães (Newcastle)",
  "Manuel Neuer (Bayern Munich)",
  "Giorgian de Arrascaeta (Flamengo)",
  "Rodrygo (Real Madrid)",
  "Reece James (Chelsea)",
  "Serge Gnabry (Bayern Munich)",
  "Sandro Tonali (AC Milan)",
  "Andrew Robertson (Liverpool)",
  "Leroy Sané (Bayern Munich)",
  "Gabriel Barbosa (Flamengo)",
  "Nicolás Otamendi (Benfica)"

];
const playerss = [
    "Ahmed Hassan (Retired, formerly Al Ahly SC, Anderlecht)",
    "Mohamed Aboutrika (Retired, formerly Al-Ahly SC)",
    "Hossam Ghaly (Retired, formerly Feyenoord, Tottenham Hotspur, Al-Ahly SC)",
    "Mohamed Zidan (Retired, formerly Borussia Dortmund, Mainz 05, Al-Ahly SC)",
    "Mido (Retired, formerly Ajax, Marseille, Tottenham Hotspur, Zamalek SC)",
    "Shikabala (Zamalek SC, Egypt)",
    "Amr Zaki (Retired, formerly Wigan Athletic, Zamalek SC)",
    "Emad Moteab (Retired, formerly Al Ahly SC, Arab Contractors SC)",
    "Ibrahim Hassan (Retired, formerly Al Ahly SC)",
    "Tamer Hossam (Retired, formerly Zamalek SC)",
    "Hassan Shehata (Retired, formerly Zamalek SC)",
    "Hazem Emam (Retired, formerly Zamalek SC)",
    "Hany Said (Retired, formerly Zamalek SC)",
    "Mahmoud Fathallah (Retired, formerly Zamalek SC)",
    "Essam El-Hadary (Retired, formerly Al Ahly SC)",
    "Ahmed Elmohamady (Retired, formerly Al Ahly SC)",
    "Mohamed Elneny (Arsenal FC, England)",
    "Sherif Ekramy (Retired, formerly Al Ahly SC)",
    "Amr Gamal (Bidvest Wits, South Africa)",
    "Ahmed Hegazi (Al-Ittihad FC, Saudi Arabia)",
    "Mohamed Shawky (Retired, formerly Al Ahly SC, Middlesbrough)",
    "Abdel-Zaher El-Saqqa (Retired, formerly Zamalek SC)",
    "Gamal Hamza (Retired, formerly Zamalek SC)",
    "Hany Ramzy (Retired, formerly Kaiserslautern, Al Ahly SC)",
    "Sherif Ashraf (Retired, formerly Zamalek SC)",
    "Saad Samir (Al-Ahly SC, Egypt)",
    "Ayman Ashraf (Al-Ahly SC, Egypt)",
    "Mahmoud Kahraba (Al-Ahly SC, Egypt)",
    "Ahmed El-Shenawy (Al-Ahly SC, Egypt)",
    "Mahmoud Trezeguet (Aston Villa FC, England)",
    "Mohamed Sherif (Al-Ahly SC, Egypt)",
    "Mahmoud Hamdy 'El Wensh' (Zamalek SC, Egypt)",
    "Karim Hafez (Yeni Malatyaspor, Turkey)",
    "Amr Gamal (Bidvest Wits, South Africa)",
    "Basem Morsi (Al-Masry SC, Egypt)",
    "Ahmed Yasser Rayyan (Al-Ahly SC, Egypt)",
    "Marwan Mohsen (Al-Ahly SC, Egypt)",
    "Ali Lotfi (Pyramids FC, Egypt)",
    "Mohamed Awad (Al-Ahly SC, Egypt)",
    "Mohamed Abdel-Shafy (Al Ahli SC, Saudi Arabia)",
    "Omar Gaber (Pyramids FC, Egypt)",
    "Abdallah El-Said (Pyramids FC, Egypt)",
    "Mohamed Nagy 'Gedo' (Retired, formerly Al Ahly SC)"
];
const playersImg=[];
for (let i = 0; i <= 100; i++) {
    const imageURL = `../img/500 (${i}).jpg`;
    playersImg.push(imageURL);
}
const players = [];
const player = [];

for (let j = 1; j <= 100; j++) {
    player[j] = { title: playersName[j], photo: playersImg[j] };
    players.push(player[j]);
}
const random = Math.floor(Math.random() * players.length);
console.log(random, players[random].photo);

function play(){
    var guess = document.querySelector(".front");
    let plyrName = document.getElementById('plyr-name');
    if (guess) {
        guess.style.transform = 'rotateY(180deg)';
        guess.style.transition = '1s';
        const random = Math.floor(Math.random() * players.length);
    var guessPhoto = document.getElementById('guess');
    let plyrRandm= players[random];
    const guessLink = plyrRandm.photo;
    let guessName = plyrRandm.title;
    guessPhoto.src =guessLink ;
    plyrName.innerHTML=guessName;
}}