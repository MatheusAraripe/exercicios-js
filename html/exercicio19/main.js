const getUserInfos = () => {
    const userName = document.getElementById("userName").value;

    fetch('https://api.github.com/users/' + userName)
    .then(response => response.json())
    .then(data => {
   
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('repos').textContent = data.public_repos;
    })
    .catch(error => {
        alert('Erro ao obter informações do usuário do GitHub.');
    });
}