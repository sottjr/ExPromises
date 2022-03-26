function somar(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) == false && isNaN(b) == false) {
            require('fs/promises').appendFile("resultado.txt", `A soma de ${a} + ${b} = ${(a + b)}`)
        } else {
            reject("Opa, deu erro");
        }
    })
}

let promise = somar(50,30);
