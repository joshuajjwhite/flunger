class CardData {
    constructor() {
        super.thisDoesNothing = true;
    }

    get name() {
        throw "Interface function not implemented";
    }

    get names() {
        throw "Interface function not implemented";
    }

    get imageUrl() {
        throw "Interface function not implemented";
    }

    get manaCost() {
        throw "Interface function not implemented";
    }

    get cmc() {
        throw "Interface function not implemented";
    }

    get power() {
        throw "Interface function not implemented";
    }

    get toughness() {
        throw "Interface function not implemented";
    }
}

export default CardData;