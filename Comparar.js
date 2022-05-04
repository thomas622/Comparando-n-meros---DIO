function compara(x,y){
    if(!x || !y) return("Porfavor insira números válidos");
    var soma = x+y;
    var igual = (x==y) ? igual = " " : igual = " não ";
    var soma10 = (x+y>10) ? soma10 = " maior que 10" : soma10 = " menor que 10";
    var soma20 = (x+y>20) ? soma20 = " e maior que 20." : soma20 = " e menor que 20.";
   return "Os numeros "+x+" e "+y+""+igual+"são iguais. Sua soma é "+soma+", que é" +soma10+""+soma20;
}

console.log(compara(0,0));
