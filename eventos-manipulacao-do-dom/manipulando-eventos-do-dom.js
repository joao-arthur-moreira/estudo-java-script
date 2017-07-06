$(function() {

	$('#botao1').on('click', function(e){
		console.log('botão 1 clicado!');
	});

	$('#link1').on('click', function(e){
		e.preventDefault(); //desabilita o comportamento default
		console.log('link1 clicado!');
	});

	$('#input1').on('keyup', function(e){
		console.log(e.keyCode);

		if (e.keyCode === 13){
			alert('enter clicado!');
		}
	});

});