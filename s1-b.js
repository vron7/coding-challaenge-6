// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const ul = [1,'1','1',2,4,5,'6',7,7,8,9,9,9,9,'9','9'];

const cleanTheRoom = ul => {
    const dict = {};
    for(item of ul){
        let type = typeof(item);
        let sub = dict[type] ? dict[type] : dict[type] = {};
        sub[item] ? sub[item]++ : sub[item] = 1;
    }
    return Object.keys(dict).map(type => {
        return Object.entries(dict[type]).map(([key, val]) => {
            let out = type === 'number' ? Number(key) : key
            return val > 1 ? Array.from({length: val}, i => out) : out
        });
    });
};

console.log(cleanTheRoom(ul));
