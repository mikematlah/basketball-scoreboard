let homeTeamEl = document.getElementById('homeTeam')
let guestTeamEl = document.getElementById('guestTeam')
let countdownEl = document.getElementById('demo')
let countdown = 5
countdownEl.textContent = countdown


let count1 = 0
let count2 = 0
guestTeamEl.textContent = count2
homeTeamEl.textContent = count1
function pickWinner(){
    if(count2 > count1){
        homeTeamEl.classList.add('looser')
        guestTeamEl.classList.remove('looser')
    }else if(count1 > count2){
        homeTeamEl.classList.remove('looser')
        guestTeamEl.classList.add('looser')
    }else{
        homeTeamEl.classList.remove('looser')
        guestTeamEl.classList.remove('looser')
    }
}


function add1Home(){
   if(countdown < 0){
        count1+=1
        homeTeamEl.textContent = count1
        pickWinner()
   }
       

   
}
function add2Home(){
    if(countdown < 0){
        count1+=2
        homeTeamEl.textContent = count1
        pickWinner() 
   }
  
}
function add3Home(){
    if(countdown < 0){
        count1+=3
        homeTeamEl.textContent = count1
        pickWinner() 
   }

 
}
function add1Guest(){
    if(countdown < 0){
        count2+=1
        guestTeamEl.textContent = count2
        pickWinner()
    }
   
}
function add2Guest(){
    if(countdown < 0){
        count2+=2
        guestTeamEl.textContent = count2
        pickWinner()
    }
  
}
function add3Guest(){
    if(countdown < 0){
        count2+=3
        guestTeamEl.textContent = count2
        pickWinner()  
    }
    
}
function reset(){
    if(countdown < 0){
        count1 = 0
        count2 = 0
        countdown = 5
        countdownEl.textContent = countdown
        homeTeamEl.textContent = count1
        guestTeamEl.textContent = count2
        pickWinner()
    }
    
    
}
/*countdown demo*/

 setInterval(function(){
    if(countdown > -1 ){
        countdownEl.textContent = countdown
        countdown -=1
    
    }else{
        countdownEl.textContent = 'GO'
    }
    

       

    },1000)

 
