const result = document.querySelector("#result");
var numero = []
let botoes = document.querySelectorAll(".button");

for (var i=0; i<botoes.length; i++){
    botoes[i].addEventListener('click', function(){ 
        numero.push(this.innerHTML);
        switch(numero[0]){
            case '+':
                numero.shift();
                break;
            case 'C':
                numero.shift();
                break;
            case '*':
                numero.shift();
                break;
            case '/':
                numero.shift();
                break;
            case '=':
                numero.shift();
                break;
            default:
                result.innerHTML = numero.join([separador = '']);
            }      
        for (var i=0; i<numero.length; i++)
            if (numero[i] == 'C'){
            numero.splice(0, numero.length);
            result.innerHTML = "";
        } 

        if (numero[numero.length - 1] == '='){
            result.innerHTML = eval(result.innerHTML.replace('=', ''));
            
        }
          console.log(numero); 
    });
}

        // }
