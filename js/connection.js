// GET
async function requisicaoGet() {
	try {
		const response = await fetch('http://localhost:3000/produtos');
		if (!response.ok) {
			const error = new Error('Erro ao buscar os produtos');
			error.status = response.status;
			throw error;
		}
		const data = await response.json();
		return {
			data,
			response: { status: '200', message: 'ok' },
		};
	} catch (error) {
		console.log('Erro: ', error.message, error.status);
	}
}
// POST
async function requisicaoPost(produto) {
	try{
	response = await fetch('http://localhost:3000/produtos', {
		
	method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(produto),
	});
	}catch(e){
		console.log(e);
	}
}
// DELETE
async function requisicaoDelete(id) {
	console.log(id)
	try{
	await fetch(`http://localhost:3000/produtos/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		}
	});
		window.location.reload();
	}catch(e){
		console.log(e);
	}
}

export {
	requisicaoGet,
	requisicaoPost,
	requisicaoDelete,
};
