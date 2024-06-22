var save;
var senhacorreta = "SANR"
var conterror = 0;
function salva(l){
    save=l
    cont = 0
    conterror++
    if (conterror > 3){
        return window.location = "zfalha.html"
    }
    for(i=0; i < senhacorreta.length; i++){
        for(j=0; j < save.length; j++){
            if(save[j] === senhacorreta[i]){
                cont++
            }
        }
    }
    return alert(cont + "/" + 5 + "   //   TENTATIVAS RESTANTES:" + [4-conterror]); 
}