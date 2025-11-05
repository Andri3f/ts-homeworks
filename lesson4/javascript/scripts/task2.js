"use strict";
// 6. Моделювання Персонажів у RPG (Role-Playing Game) 🧙‍♂️
// Клас: Character (Персонаж). Має поля: name, health, mana, charClass. Містить методи attack() та takeDamage().
// Enum: CharacterClass (КласПерсонажа). Визначає професії/класи: WARRIOR (Воїн), MAGE (Маг), ARCHER (Лучник), ROGUE (Розбійник).
var CharacterClass;
(function (CharacterClass) {
    CharacterClass["WARRIOR"] = "\u0412\u043E\u0457\u043D";
    CharacterClass["MAGE"] = "\u041C\u0430\u0433";
    CharacterClass["ARCHER"] = "\u041B\u0443\u0447\u043D\u0438\u043A";
    CharacterClass["ROGUE"] = "\u0420\u043E\u0437\u0431\u0456\u0439\u043D\u0438\u043A";
})(CharacterClass || (CharacterClass = {}));
class Character {
    constructor(name, health, mana, charClass) {
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.charClass = charClass;
    }
    attack(manaOnAttack) {
        if (this.mana >= manaOnAttack) {
            this.mana -= manaOnAttack;
            console.log(`${this.name} атакує з витратою ${manaOnAttack} манни`);
        }
        else {
            console.log(`${this.name} не має достатньо манни для атаки`);
        }
    }
    takeDamage(damage) {
        if (this.health > 0) {
            this.health -= damage;
            console.log(`${this.name} отримав ${damage} шкоди`);
        }
        else {
            console.log(`${this.name} вже помер`);
        }
        console.log(`${this.name} отримав ${damage} шкоди`);
    }
}
const character = new Character("John", 100, 100, CharacterClass.WARRIOR);
console.log('character', character);
character.attack(10);
console.log('character after attack', character);
character.takeDamage(20);
console.log('character after takeDamage', character);
