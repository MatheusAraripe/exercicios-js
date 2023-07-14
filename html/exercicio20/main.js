const showmeDog = () => {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dogImage').innerHTML = `<img src=${data.message} alt='dog'>`;
    })
    .catch(error => {
        alert('Erro ao obter informações do usuário do GitHub.');
    });
}