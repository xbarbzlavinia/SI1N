

function exibeClass() {
    var age = document.getElementById("idade").value;
    else if (age == 0) {
        alert('Recém nascido!');
    }
    else if (age < 0){
        alert('Idade inválida!');
    }
    else if ( (age > 0) && (age < 10)){
        alert('É uma criança!');
    }
    else if ( (age > 9) && (age < 16)){
        alert('É um adolescente!');
    }
    else if ( (age > 15) && (age < 25)){
        alert('É um jovem!');
    }
    else if ((age > 24) && (age < 60)){
        alert('É um adulto!');
    }
    else if (age > 59){
        alert('É um idoso');
    }
    else{
        ('Não digitou idade!');
    }
}

