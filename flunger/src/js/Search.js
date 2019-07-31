import CardObj from './CardObj.js';
import searchAdaptor from './MTGSearchAdaptor.js';

async function cardSearch(crit) {
    const searchResults = await searchAdaptor.cardSearch(crit)
        .filter(card => card.imageUrl);

    const cards = convertPrintsToCards(searchResults);

    return cards;
}

function convertPrintsToCards(searchResults) {
    
    const agregatedCards = searchResults
        .reduce((acc, searchResult) => {

            if (!acc[searchResult.name]) {
                acc[searchResult.name] = new CardObj(searchResult);
            } else {
                acc[searchResult.name].addPrint(searchResult);
            }

            if (searchResult.name === "Reaper King Avatar"){
                console.log(searchResult)}

            if (searchResult.name === "Deadly Recluse"){
                console.log(searchResult)}

            return acc;

        }, {});
    
    return Object.values(agregatedCards);
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