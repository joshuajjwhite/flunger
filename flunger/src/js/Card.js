class Card {
    constructor(print) {
        this._print = [print];
    }

    _getFace() {
        return this_print[0].faces[0];
    }

    get name() {
        return _getFace().name;
    }

    get names() {
        return _getFace().names;
    }

    get imageUrl() {
        return _getFace().imageUrl;
    }

    get manaCost() {
        return _getFace()._manaCost;
    }

    get cmc() {
        return _getFace().cmc;
    }

    get power() {
        return _getFace().power;
    }

    get toughness() {
        return _getFace().toughness;
    }
}

export default Card;