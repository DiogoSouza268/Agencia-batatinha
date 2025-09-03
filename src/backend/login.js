function toHome() {
    
    var email = document.getElementById('Email').value.trim();
    var senha = document.getElementById('Password').value.trim();
    
    if (senha == "" || email == "") {

        document.getElementById("login_wrong").innerHTML = "Todos os campos sâo obrigatorios";
        document.getElementById("login_correct").innerHTML = "";
        return;

    } else if (senha.length < 8) {

        document.getElementById("login_wrong").innerHTML = "Sua senha deve ter no minimo 8 caracters";
        document.getElementById("login_correct").innerHTML = "";
        return;

    } else if (email != 'example@gmail.com' || senha != 'batatinha123') {

        document.getElementById("login_wrong").innerHTML = "Email ou Senha invalidos";
        document.getElementById("login_correct").innerHTML = "";
        return;

    } else {

        document.getElementById("login_correct").innerHTML = "Dados ok.";
        document.getElementById("login_wrong").innerHTML = "";
        location.href = "./src/pages/home.html";
    }
        
}

    
