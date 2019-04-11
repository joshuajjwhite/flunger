const mtg = require('mtgsdk');

const mtgSearchAdaptor = {

    cardSearch: function(crit) {
        return mtg.card.where(crit);
    },
}

export default mtgSearchAdaptor;