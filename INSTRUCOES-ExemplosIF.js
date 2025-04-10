var paiDoNoah = "Bruno";
var maeDoNoah = "Natália";

if (paiDoNoah == "Bruno" || maeDoNoah == "Natália") {
    console.log(paiDoNoah + " parabéns! você é o pai do Noah e " + maeDoNoah + " parabéns! você é a mãe do Noah");
}
else if(maeDoNoah != "Natália" || paiDoNoah != "Bruno"){
    console.log(maeDoNoah + " Vc não é a mãe do Noah e " + paiDoNoah + " Não é o pai dele");
}
else{
    console.log("Você não é pai e nem mãe do Noah");
}