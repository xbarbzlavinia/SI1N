

function exibeClass() {
    var age = document.getElementById("idade").value;
    if (age == 0) {
        alert('Recém nascido!');
    }
    if (age < 0){
        alert('Idade inválida!');
    }
    if ( (age > 0) && (age < 10)){
        alert('É uma criança!');
    }
    if ( (age > 9) && (age < 16)){
        alert('É um adolescente!');
    }
    if ( (age > 15) && (age < 25)){
        alert('É um jovem!');
    }
    if ((age > 24) && (age < 60)){
        alert('É um adulto!');
    }
    if (age > 59){
        alert('É um idoso');
    }
    else{
        ('Não digitou idade!');
    }
}

