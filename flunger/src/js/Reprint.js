import Card from '../js/Card.js';

class Reprint extends Card {

    constructor() {
        this._cards = []; 
    }

    static of(card) {
        return new Reprint(card);
    }

    add(card) {
        this._cards.add(card);
    }
}

export default Reprint;