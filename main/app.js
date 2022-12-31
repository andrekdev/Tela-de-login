function loginUSU() {

    const USUaqwe = document.getElementById('USUaqwe').value;
    const PSWaqwe = document.getElementById('PSWaqwe').value;


    if (USUaqwe == 'admin' && PSWaqwe == 'admin') {
        alert('Senha Correta!')
        location.href = 'home.html';



    } else {

        alert('senha errada, tente novamente!')
    }
}