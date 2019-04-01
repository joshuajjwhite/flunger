import Card from '../js/Card.js'
const mtg = require('mtgsdk');

async function cardSearch(crit) {
    return await mtg.card.where(crit)
        .filter(card => card.imageUrl)
        .map(card => new Card(card));
}

async function testCardSearch() {
    const split = await cardSearch({name: "invert"});
    const spider = await cardSearch({name: "deadly", subtypes: 'spider'});
    const reaper = await cardSearch({name: "reaper king"});
    const littleGirl = await cardSearch({name: "little girl"});
    return [].concat(split, spider, reaper, littleGirl);
}

export {
    cardSearch,
    testCardSearch
}