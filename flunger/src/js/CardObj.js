class CardObj {
    
    constructor(print) {
        this._prints = [];        
        this.addPrint.apply(this, arguments);
    }
    
    addPrint(print) {

        if (!print) {
            throw "Invalid Card print";
        }

        this._prints.push(print);
    }

    _getPrint() {
       return this._prints[0];
    }

    isPrintOfCard(print) {
        return this._getPrint().name === print.name;
    }

    get key() {
        return this._getPrint().name;
    }

    get numOfPrints() {
        return this._prints.length;
    }

    get name() {
        return this._getPrint().name;
    }

    get names() {
        return this._getPrint().names;
    }

    get type() {
        return this._getPrint().type;
    }

    get imageUrl() {
        return this._getPrint().imageUrl;
    }

    get manaCost() {
        return this._getPrint().manaCost;
    }

    get cmc() {
        return this._getPrint().cmc;
    }

    get power() {
        return this._getPrint().power;
    }

    get toughness() {
        return this._getPrint().toughness;
    }
}

export default CardObj;