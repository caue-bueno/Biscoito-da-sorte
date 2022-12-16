
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#open-cookie")
const button = document.querySelector("#open-another")


function toggle () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

button.addEventListener('click', toggle)
cookie.addEventListener('click', phrases)


function phrases () {
    
    toggle()

    let randomNumber = Math.ceil(Math.random() * 10)
    
    switch (randomNumber) {
    
        case 1:
            screen2.querySelector("p").innerText = `É em meio a dificuldade que se encontra a oportunidade. `
            break;
        case 2:
            screen2.querySelector("p").innerText = `Mesmo que algo pareça difícil, nunca desista antes de tentar. `
            break;
        case 3:
            screen2.querySelector("p").innerText = `É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota. `
            break;
        case 4:
            screen2.querySelector("p").innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu. `
            break;
        case 5:
            screen2.querySelector("p").innerText = `Mesmo que nem todo dia seja bom, há algo de bom todo dia.`
            break;
        case 6:
            screen2.querySelector("p").innerText = `Da mesma forma que a felicidade não dura para sempre, a tristeza também não. `
            break;   
        case 7:
            screen2.querySelector("p").innerText = `Não há outra forma de crescer, senão superar os desafios e os medos. Deixe-os vir. `
            break;
        case 8:
            screen2.querySelector("p").innerText = `Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. `
            break;
        case 9:
            screen2.querySelector("p").innerText = `Em um mundo cheio de adversidades, quem não desiste sempre sairá como vencedor no final. `
            break;
        case 10:
            screen2.querySelector("p").innerText = `Permita-se começar e recomeçar quantas vezes forem necessárias`
            break;
    }

    
}