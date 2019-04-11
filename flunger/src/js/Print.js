import CardData from ' ./CardData.js';

class Print extends CardData {

    constuctor(data) {
        Object.assign(this, data);
    }

    get name() {
        return this.name;
    }

    get names() {
        return this.names;
    }

    get imageUrl() {
        return this.imageUrl;
    }

    get manaCost() {
        return this.manaCost;
    }

    get cmc() {
        return this.cmc;
    }

    get power() {
        this.power;
    }

    get toughness() {
        this.toughness;
    }
}

export default Print;