const result = document.querySelector("#result");
var primeiroNum = []
let botoes = document.querySelectorAll(".button");

for (var i=0; i<botoes.length; i++){
    botoes[i].addEventListener('click', function(){
        primeiroNum.push(this.innerText);
        switch(primeiroNum[0]){
            case '+':
                primeiroNum.shift();
                break;
            case 'C':
                primeiroNum.shift();
                break;
            case '*':
                primeiroNum.shift();
                break;
            case '/':
                primeiroNum.shift();
                break;
            case '=':
                primeiroNum.shift();
                break;
            default:
                result.innerHTML = primeiroNum.join([separador = '']);
        }
        for (var i=0; i<primeiroNum.length; i++)
            if (primeiroNum[i] == 'C'){
                primeiroNum.splice(0, primeiroNum.length);
                result.innerHTML = "";
            }
        console.log(primeiroNum);
            
           
    });
}