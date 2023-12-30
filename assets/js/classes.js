// Cria a classe Character
class Character {

    // Atribuí os valores padrões
    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    // Cria um constructor para o nome do personagem
    constructor(name) {
        this.name = name
    }

    // Utiliza um getter para armazenar a vida do personagem
    get life() {
        return this._life
    }

    // Utiliza um setter para alterar a vida do personagem se baseando em uma verificação
    set life(newLife) {

        if (newLife < 0) {
            this._life = 0 // Life recebe 0 caso seja menor do que 0
        } else {
            this._life = newLife // Life recebe o valor existente no objeto
        }

    }

}

// Cria a classe Samurai  herdando a classe Character
class Samurai extends Character {

    // Cria o constructor para atribuir os valores as propriedades do objeto
    constructor(name) {
        super(name)
        this.life = 100
        this.maxLife = this.life
        this.attack = 10
        this.defense = 8
    }

}

// Cria a classe Mago herdando a classe Character
class Wizard extends Character {

    // Cria o constructor para atribuir os valores as propriedades do objeto
    constructor(name) {
        super(name)
        this.life = 80
        this.maxLife = this.life
        this.attack = 15
        this.defense = 3
    }

}

// Cria a classe LittleMonster herdando a classe Character
class LittleMonster extends Character {

    // Cria o constructor para atribuir os valores as propriedades do objeto
    constructor() {
        super('Little Monster')
        this.life = 40
        this.maxLife = this.life
        this.attack = 4
        this.defense = 4
    }

}

// Cria a classe BigMonster herdando a classe Character
class BigMonster extends Character {

    // Cria o constructor para atribuir os valores as propriedades do objeto
    constructor() {
        super('Big Monster')
        this.life = 120
        this.maxLife = this.life
        this.attack = 16
        this.defense = 6
    }

}

// CLASSES DE CENÁRIO //

// Cria a classe par interagir com o cenário dinamicamente
class Stage {

    /*
        - Constructor que cria os lutadores
        - Atribuí como lutadores os personagens (Criados pela classe Character) passados como parâmetro ao chamar a classe
    */
    constructor(fighter1, fighter2, fighter1EL, fighter2EL) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1EL = fighter1EL
        this.fighter2EL = fighter2EL
    }

    // Função que executa os métodos de interação ao utilizar a classe (Inicia o jogo)
    start() {

        // Chama a função update
        this.update() 

        /*
        
            - Executa a função doAttack com base no clicar de um dos botões
            - Passa o lutador relacionado ao botão de ataque pressionado como parâmetro para ser o causador do ataque
            - Passa o outro lutador relacionado ao botão de ataque não pressionado como parâmetro para ser o sofredor do ataque

        */
        this.fighter1EL.querySelector('.button .attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2)) // Lutador da esquerda ataca
        this.fighter2EL.querySelector('.button .attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1)) // Lutador da direita ataca
    }

    // Função que modifica o HTML e CSS da página dinamicamente
    update() {

        // Personagem 1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP` // Exibe o nome e a quantidade de vida do personagem 1
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife * 100) // Calcula a quantidade de vida do personagem 1 em porcentagem
        this.fighter1EL.querySelector('.bar').style.width = `${f1Pct}%` // Define o tamanho da LifeBar (CSS) em relação a porcentagem de vida do personagem 1

        // Personagem 2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP` // Exibe o nome e a quantidade de vida do personagem 2
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife * 100) // Calcula a quantidade de vida do personagem 2 em porcentagem
        this.fighter2EL.querySelector('.bar').style.width = `${f2Pct}%` // Define o tamanho da LifeBar (CSS) em relação a porcentagem de vida do personagem 2

    }

    // Função que executa um ataque, tendo como parâmetro quem efetuou o ataque e quem recebeu
    doAttack(attacking, attacked) {
        console.log(`${attacking.name} ataca ${attacked.name}`)
        this.update()
    }

}