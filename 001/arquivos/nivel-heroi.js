//teste com o alert e prompt
//pedir o nome do heroi e xp
/*alert("ola Heroi")
var nome = prompt("Digite o seu nome:");
var xp = prompt ("Digite o seu XP:");

// decidir Elo

if (xp <= 1000) {
    alert("O heroi "+nome+ " está no nível Ferro")
}

if (xp >= 1001 && xp <= 2000) {
    alert("O heroi " + nome+ " está no nível Bronze")
}

if (xp >= 2001 && xp <= 5000) {
    alert("O heroi " + nome+ " está no nível Prata")
}

if (xp >= 5001 && xp <= 7000) {
    alert("O heroi " + nome+ " está no nível Ouro")
}

if (xp >= 7001 && xp <= 8000) {
    alert("O heroi " + nome+ " está no nível Platina")
}

if (xp >= 8001 && xp <= 9000) {
    alert("O heroi " + nome+ " está no nível Ascendente")
}

else {
    alert("O heroi " + nome+ " está no nível Radiante")
}
*/

document.getElementById('butto').addEventListener('click', function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    var nomeHeroi = document.getElementById('nome').value;
    var nivelXP = document.getElementById('xp').value;

    //para verificar se o campo está em branco
    if (nomeHeroi.trim () === '' || nivelXP.trim() === '') {
        alert ("Você deve preencher os campos!");
        return;
    }

    // avaliar o xp e mandar o alert
    if (nivelXP <= 1000) {
        alert("O heroi " + nomeHeroi + " está no nível Ferro");
    } else if (nivelXP >= 1001 && nivelXP <= 2000) {
        alert("O heroi " + nomeHeroi + " está no nível Bronze");
    } else if (nivelXP >= 2001 && nivelXP <= 5000) {
        alert("O heroi " + nomeHeroi + " está no nível Prata");
    } else if (nivelXP >= 5001 && nivelXP <= 7000) {
        alert("O heroi " + nomeHeroi + " está no nível Ouro");
    } else if (nivelXP >= 7001 && nivelXP <= 8000) {
        alert("O heroi " + nomeHeroi + " está no nível Platina");
    } else if (nivelXP >= 8001 && nivelXP <= 9000) {
        alert("O heroi " + nomeHeroi + " está no nível Ascendente");
    } else {
        alert("O heroi " + nomeHeroi + " está no nível Radiante");
    }
   
});

