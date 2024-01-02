// Armazena os elementos HTML para receber as modificações

// Div do log
let log = new Log(document.querySelector('.log'))

// Div dos personagens
let heroElement = document.querySelector('#char')
let monsterElement = document.querySelector('#monster')

// Div para controlar exibição das imagens dos personagens (Opacidade)
let hiddenHeroImage = document.querySelector('.hidden-hero')
let hiddenMonsterImage = document.querySelector('.hidden-monster')

// Div para controlar a exibição das áreas (Escolha de personagem e cenário de luta)
let chooseField = document.querySelector('.choose-container')
let fightField = document.querySelector('.fight-container')

// Imagem de cada personagem dentro da área de escolha
let heroImg = document.querySelector('.choose-hero-img')
let monsterImg = document.querySelector('.choose-monster-img')

// Imagem de cada personagem dentro da área de escolha
let heroField = document.querySelector('.hero')
let monsterField = document.querySelector('.monster')

// Cria uma instância para a classe stage
const stage = new Stage(
    heroElement,
    monsterElement,
    log
)

/**
 
    - Executa uma função anônima via evento de clique onde:
    - O personagem específico é criado como objeto correspondente
    - A instância do stage executa o método de adicionar personagens usando o personagem específico como parâmetro
    - A imagem correspondente a cada personagem é alterada suavemente usando timeOut por meio de uma verificação condicional 

*/

// Função para o personagem Samurai
document.querySelector('.samurai').addEventListener('click', function() {
    
    // Se a opacidade da imagem estiver em 0 ou o src for diferente da correspondente ao personagem
    if (hiddenHeroImage.style.opacity === '0' || heroImg.src !== 'assets/img/SAMURAI.gif') {

        hiddenHeroImage.style.opacity = '0' // Esconde a imagem atual

        setTimeout(() => {

            // Troca o src da imagem na área de escolha e de luta
            heroImg.src = 'assets/img/SAMURAI.gif'
            heroField.src = 'assets/img/SAMURAI.gif'

            // Espelha a imagem na área de escolha e de luta
            heroImg.style.transform = 'scaleX(-1)'
            heroField.style.transform = 'scaleX(-1)'

            hiddenHeroImage.style.opacity = '1' // Mostra a nova imagem

        }, 300) // Tempo de transição 

    }

    let samurai = new Samurai('Todoroki')
    stage.addHero(samurai)

})

// Função para o personagem Wizard
document.querySelector('.wizard').addEventListener('click', function() {

    // Se a opacidade da imagem estiver em 0 ou o src for diferente da correspondente ao personagem
    if (hiddenHeroImage.style.opacity === '0' || heroImg.src !== 'assets/img/WIZARD.gif') {

        hiddenHeroImage.style.opacity = '0' // Esconde a imagem atual

        setTimeout(() => {

            // Troca o src da imagem na área de escolha e de luta
            heroImg.src = 'assets/img/WIZARD.gif' 
            heroField.src = 'assets/img/WIZARD.gif' 

            // Espelha a imagem na área de escolha e de luta
            heroField.style.transform = 'scaleX(1)'
            heroImg.style.transform = 'scaleX(1)'

            hiddenHeroImage.style.opacity = '1' // Mostra a nova imagem

        }, 300) // Tempo de transição 

    }

    let wizard = new Wizard('Merlione')
    stage.addHero(wizard)

})

// Função para o personagem littleMonster
document.querySelector('.littleMonster').addEventListener('click', function() {

    // Se a opacidade da imagem estiver em 0 ou o src for diferente da correspondente ao personagem
    if (hiddenMonsterImage.style.opacity === '0' || monsterImg.src !== 'assets/img/LITTLE_MONSTER.gif') {

        hiddenMonsterImage.style.opacity = '0' // Esconde a imagem atual

        setTimeout(() => {

            // Troca o src da imagem na área de escolha e de luta
            monsterImg.src = 'assets/img/LITTLE_MONSTER.gif' 
            monsterField.src = 'assets/img/LITTLE_MONSTER.gif' 
            hiddenMonsterImage.style.opacity = '1' // Mostra a nova imagem

        }, 300) // Tempo de transição 

    }

    let littleMonster = new LittleMonster()
    stage.addMonster(littleMonster)

})

//Função para o personagem bigMonster
document.querySelector('.bigMonster').addEventListener('click', function() {

    // Se a opacidade da imagem estiver em 0 ou o src for diferente da correspondente ao personagem
    if (hiddenMonsterImage.style.opacity === '0' || monsterImg.src !== 'assets/img/BIG_MONSTER.gif') {

        hiddenMonsterImage.style.opacity = '0' // Esconde a imagem atual

        setTimeout(() => {

            // Troca o src da imagem na área de escolha e de luta
            monsterImg.src = 'assets/img/BIG_MONSTER.gif' 
            monsterField.src = 'assets/img/BIG_MONSTER.gif' 
            hiddenMonsterImage.style.opacity = '1' // Mostra a nova imagem

        }, 300) // Tempo de transição 

    }

    let bigMonster = new BigMonster()
    stage.addMonster(bigMonster)

})


// Inicia a luta
function fight() {

    // Verificação em formato switch
    switch (true) {
        case stage.fighter1 === null:
            alert('[ERRO] Selecione ao menos um herói para prosseguir com o jogo')
            break // Alerta erro na tela se nenhum herói for selecionado
        case stage.fighter2 === null:
            alert('[ERRO] Selecione ao menos um monstro para prosseguir com o jogo')
            break // Alerta erro na tela se nenhum monstro for selecionado
        default:
            chooseField.style.display = 'none' // Esconde a área de escolha
            fightField.style.display = 'flex' // Exibe a área de luta
            stage.start() // Inicia o método start da instância stage (Luta)
            break
    }

}