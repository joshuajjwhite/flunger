class CardFace {
    constructor(cardData) {
        this._name = cardData.name;
        this._names = cardData.names;
        this._imageUrl = cardData.imageUrl;
        this._manaCost = cardData.manaCost;
        this._cmc = cardData.cmc;
        this._power = cardData.power;
        this._toughness = cardData.toughness;
    }

    get name() {
        return this._name;
    }

    get names() {
        return this._names;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    get manaCost() {
        return this._manaCost;
    }

    get cmc() {
        return this._cmc;
    }

    get power() {
        return this._power;
    }

    get toughness() {
        return this._toughness;
    }
}

export default CardFace;