var consultaCep = fetch('https://viacep.com.br/ws/08491555/json/')
.then( resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse cep não existe!')
    } else {
        console.log(r)
    }
})
    .catch(erro => console.log(erro))


console.log(consultaCep)