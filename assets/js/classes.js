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