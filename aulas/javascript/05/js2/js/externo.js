//Data-Hora
var data = new Date();

var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
var hora = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();

var str_data = dia+'/'+(mes+1)+'/'+ano;
var str_hora = hora+':'+min+':'+seg;

var idioma = "O idioma utilizado é "+navigator.language+".";
var sistema = "O navegador utilizado é (plataforma-versão-navegador) "+navigator.userAgent+".";


//Validação de formulário
function validar(){
    var usuario = Login.usuario.value;
    var senha = Login.senha.value;
    var perfil = Login.perfil.value;

    if (usuario == ""){
        alert("Preencha o seu usuario!");
        Login.usuario.focus();
        return false;
    }

    if (senha == ""){
        alert("Digite sua senha!");
        Login.senha.focus();
        return false;
    }

    if (perfil == ""){
        alert("Escolha seu perfil!");
        Login.perfil.focus();
        return false;
    }

    if (perfil||usuario||senha == true){
        var usuarioP = document.getElementById("usuario").value;
        var perfilP = document.getElementById("perfil").value;
        var printSystem = ("<p>Seja bem vindo "+perfilP+"(a) "+usuarioP+", você logou no dia "+str_data+" às "+str_hora+"</p>");
        window.location.href = "pagina2.html";
        document.write(printSystem);
    }
}






