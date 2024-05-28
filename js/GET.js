/* eslint-disable import/extensions */
import { requisicaoGet } from './connection.js';

const semFoto = 'assets/semFoto.png';

function isValidImageUrl(url) {
	// Expressão regular para validar o formato do URL da imagem
	const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;;
	return imageUrlRegex.test(url);
}

const renderCards = async () => {
	const cardsContent = document.querySelector('.cards_content');
	const { data } = await requisicaoGet();
	cardsContent.innerHTML = "";
	if (data.length === 0) {
		cardsContent
			.innerHTML = '<h1 style="text-align:center">Nenhum produto cadastrado</h1>';
	} else {
		data.forEach((item) => {
			if (!isValidImageUrl(item.imagem)) {
				item.imagem = semFoto;
			}
			cardsContent.innerHTML += `
			<div class="card">
					<img
						width="20%"
						src="${item.imagem}"
						alt="Imagem do produto"
						>
				<p style="text-align: center;">${item.nome}</p>
				<p style="text-align: center;"><strong>R$ ${item.preco}</strong></p>
					<div style="display:flex; justify-content: flex-end;" class="btn_card">
						<button type="submit" id="${item.id}" style="background: none; border: none;" class="btn_remover"><i class="fa-solid fa-trash-can"></i>
						</button>
					</div>
				</div>
				`;


			
		});
	}
};

export default renderCards;
