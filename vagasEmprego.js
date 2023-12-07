function exibirMenu(){
    return prompt(
        "VAGAS DE EMPREGO\n" +
        "Selecione uma opcao\n" +
        "1- Lista todas as vagas disponiveis\n" +
        "2- Criar uma nova vaga\n" +
        "3- Vizualizar uma vaga\n" +
        "4- Adicionar um candidato a vaga\n" +
        "5- Excluir um vaga\n" +
        "6- Sair" 
    )
}

const vacancies = []

function getAllJobs(){
    for (let i = 0; i < vacancies.length; index++) {
        prompt("Vagas existentes = \n" + vacancies[i].nome +
        "Descrição: \n" + vacancies[i].description +
        "Data de expiração da vagas: \n" + vacancies[i].limitDate)
    }
}

function newVacancies(){
    const vacanci = {}
    vacanci.index =
    vacanci.name = prompt("Digite o nome da vaga: ")
    vacanci.description = prompt("Digite uma descrição da vaga: ")
    vacanci.limitDate = prompt("Digite a data de expirarção da vaga: ")

    const confirmation = ("Salvar essa vaga ? \n" + vacanci.name + 
    "Descrição da vaga: \n" + vacanci.description +
    "Data de expirção da vaga: \n" + vacanci.limitDate)

    if(confirmation){
        vacancies.push(vacanci)
    }
}


function execution(){
    let options = "";
do {
    options = exibirMenu()

    switch (options) {
        case "1":

        break
        case "2":
            newVacancies()
        break

        case "3":

        break

        case "4":

        break

        case "5":

        break
        
        case "6":
            alert("Saindo")
        break

        default:
            alert("Opcao invalida")
    }
} while (options !== "6");
}

execution();