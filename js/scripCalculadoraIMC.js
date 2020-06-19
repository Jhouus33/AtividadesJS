let rs = require('readline-sync')
let peso = rs.questionFloat("Digite seu peso.")
let altura = rs.questionFloat("Digite sua altura em metros (Ex.: 1.75).")

let resultadoImc = peso / (altura  * altura)
console.log("seu imc é " + resultadoImc)

if (resultadoImc < 18.5)
    console.log("Você está abaixo do peso, sua nutrição pode não está boa o suficiente.");
else  if (resultadoImc > 18.5 && resultadoImc < 24.9)
    console.log("Voce está no peso considerado adequado para sua altura, idade e sexo.");

else if (resultadoImc > 25 && resultadoImc < 29.9)
    console.log("Voce está ligeiramente acima do peso, atenção ao sedentarismo e os maus hábitos alimentares.");

else if (resultadoImc > 30 && resultadoImc < 34.9)
    console.log("Voce está, aparentemente, na fase 1 da obesidade, procure um médico pois somente o cálculo do IMC não é suficiente para diagnosticar obesidade.");
else if (resultadoImc > 35 && resultadoImc < 39.9)
    console.log("Voce está, aparentemente, na fase 2 da obesidade (severa), procure um médico pois somente o cálculo do IMC não é suficiente para diagnosticar obesidade.");

else if (resultadoImc > 40)
    console.log("Voce está, aparentemente, na fase 3 da obesidade (mórbida), procure um médico pois somente o cálculo do IMC não é suficiente para diagnosticar obesidade.");