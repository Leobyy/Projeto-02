var save;
var senhacorreta = "SUBIR";
var conterror = 0;
var contlimite = 4;

function salva(button) {
  save = button.textContent;
  cont = 0;

  if (save == senhacorreta) {
    return (window.location = "sucesso.html")
  }

  if (conterror == contlimite) {
    conterror = 0;
    return (window.location = "zfalha.html");
  }

  for (i = 0; i < senhacorreta.length; i++) {
    for (j = 0; j < senhacorreta.length; j++) {
      if (save[j] == senhacorreta[i]) {
        cont++;
      }
    }
  }
  conterror++
  return alert(cont + "/" + 5 + " LETRAS CORRETAS  //   TENTATIVAS RESTANTES: " + [contlimite + 1 - conterror] + "/" + [contlimite+1]);
}
