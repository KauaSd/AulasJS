//aula 3
let idade = 18;
if (idade>=16){
    console.log("pode votar");
}
else{
    console.log("não pode votar");
}

let data = "domingo";
switch (data){
    case "segunda":
        console.log("hoje é segunda fi vai trabaia");
        break;
    case "terca":
        console.log("seloko nem começou as ideia fi, ta no inico da semana, logo terca");
        break;
    case "quarta":
        console.log("oia, já tamo no meio, hj é quarta");
        break;
    case "quinta":
        console.log("falta tão pouco, hoje é quinta");
        break;
    case "sexta":
        console.log("é fi, so mais um pouco, hoje é sexta");
        break;
    case "sabado":
        console.log("enfim sabado");
        break;
    case "domingo":
        console.log("naaao, ta acabando, hoje e domingo");
        break;
    default:
        console.log("que dia é esse meu fi");

}