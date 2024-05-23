document.getElementById("butao").onclick = Salvar;

function Salvar(){
  var senha1 = document.getElementById("senha1").value;
  var senha2 = document.getElementById("senha2").value;

  if(senha1.length < 6 || senha2.length < 6){
     console.log("Dígitos minimo é 6");
     return;
  }

  if(senha1 === senha2){
     console.log("SENHAS IGUAIS");
  }else{
      console.log("SENHAS DIFERENTES");
      return;
  } 
}