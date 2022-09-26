// captura dos botoes
var veloCima = document.getElementById('veloCima');
var veloSelecionar = document.getElementById('veloSelecionar');
var veloBaixo = document.getElementById('veloBaixo');
var ponteiro = document.getElementById('ponteiro');



// funcao define cor para opções de cores de painel
function Cor(x){
	var cr = x;
	if(x == 1){
		return ops[count].style.color = 'green';
	}else if(cr == 2){
		return ops[count].style.color = 'yellow';
	}else if(cr == 3){
		return ops[count].style.color = 'blue';
	}else if(cr == 4){
		return ops[count].style.color = 'white';
	}else if(cr == 5){
		return ops[count].style.color = 'black';
	}else if(cr == 6){
		return ops[count].style.color = 'grey';
	}
}




 
// Capturar o painel  de veloDisplay e exibir o contagiro conforme a cor selecionada 
var veloDisplay = document.getElementsByClassName('vm');

// Capturar opcoes
var ops = document.getElementsByClassName('op');


var count = 0;
veloCima.addEventListener('click', function() {
	if( count <= 1 ){
		count = 1;
	}else{
		count -= 1;
		ops[count].style.backgroundColor = 'rgba(0,128,128,.2)';
		ops[count].style.marginLeft = '175px';
		ops[count + 1].style.backgroundColor = 'rgba(0,128,128,.0)';
		ops[count + 1].style.marginLeft = '15px';
		Cor(count)
		
		// Exibe contagiros, conforme seleção = count
		veloDisplay[count - 1].style.display = 'block';
		veloDisplay[count].style.display = 'none';
		veloDisplay[6].style.display = 'block';
		ponteiro.style.display = 'block';

	}		
})


veloBaixo.addEventListener('click', function() {
	if(count == 6){
		count = 6;
	}else{
		count += 1;
		ops[count].style.backgroundColor = 'rgba(0,128,128,.2)';
		ops[count].style.transition = '0.5s';
		ops[count].style.marginLeft = '175px';
		ops[count - 1].style.backgroundColor = 'rgba(0,128,128,.0)';
		ops[count - 1].style.marginLeft = '15px';
		Cor(count)

		// Exibe contagiros, conforme seleção = count
		veloDisplay[count - 1].style.display = 'block';
		veloDisplay[6].style.display = 'block';
		ponteiro.style.display = 'block';
		ponteiro.style.marginLeft = '830px';

	}
	
})





