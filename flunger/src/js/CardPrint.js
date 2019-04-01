class CardPrint {

    constuctor(cardFace) {
        this._faces = [cardFace];
    }

    get faces() {
        return this._faces;
    }
}

export default CardPrint;