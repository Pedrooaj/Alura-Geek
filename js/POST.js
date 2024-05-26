/* eslint-disable import/extensions */
import { requisicaoPost } from './connection.js';

const btnAdicionar = document.getElementById('guardar');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#form_product');


function validaForm() {
	form.addEventListener('input', (e) => {
		
		btnAdicionar.disabled = Array.from(inputs)
			.some((input) => input.value.length < charValidate);
	});
}

btnAdicionar.addEventListener('click', async (event) => {
	event.preventDefault();
	const nome = document.querySelector('input[name="nome"]').value;
	const preco = Number(document.querySelector('input[name="valor"]').value).toFixed(2);
	const imagem = document.querySelector('input[name="imagem"]').value;

	await requisicaoPost({ nome, preco, imagem });
	window.location.reload();
});

export default validaForm;