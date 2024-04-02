
//la class Card

class Card {
    constructor(id, name, number) {
        this.id = id;
        this.name = name;
        this.number = number;
    }

    afficherDetails() {
        return `ID: ${this.id}, Nom: ${this.name}, Numéro: ${this.number}`;
    }
}

let card1 = new Card(222, "Man", 3);
let ListCard = [];
ListCard.push(card1); //initialisation of the array 
ListCard = JSON.parse(localStorage.getItem("ListCard"));




//Security (To avoid js injection)
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}




