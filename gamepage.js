// geração do valor aleatório
var y = Math.floor(Math.random() * 1000 + 1);

playername= localStorage.getItem("player_name")    
// contagem de tentativas
// até acerto
var guess = 1;
  
function submit(){
  
// number guessed by user     
var x = document.getElementById("guessField").value;

if(x == y)
{    
   alert("PARABÉNS!!!"+playername+", você acertou em "
           + guess + " tentativa(s)! ");
    guess= 1;
}
else if(x > y) /* if guessed number is greater
               than actual number*/ 
{    
   guess++;
   alert("Opa, resposta errada!! Tente um número menor");
}
else
{
   guess++;
   alert("Opa, resposta errada!! Tente um número maior")
}
}
function playAgain(){
    y = Math.floor(Math.random() * 1000 + 1);
}