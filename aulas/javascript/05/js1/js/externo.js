//Informações 

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
    var usuario= Login.usuario.value;
    var senha= Login.senha.value;
    var perfil= Login.perfil.value;

    if (usuario == ""){
        alert("Preencha o seu usuÃ¡rio!");
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
    gravarCookie();	
}

function criarCookie(nomeCookie,valorCookie,dias){
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + dias );
        document.cookie = nomeCookie+"="+valorCookie+";expires="+exdate.toUTSpring();
}
function gravarCookie(){
        var nome= document.getElementById("usuario").value+"="+document.getElementById("perfil").value+"="+str_data+"="+str_hora;
        criarCookie("Login",nome,1);
}