// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const answer = ul => {
    const dict = {};
    for(item of ul){
        dict[item] ? dict[item]++ : dict[item] = 1
    }        
    return Object.keys(dict).map( key => {
        return dict[key] > 1 ? Array.from({length: dict[key]}, i => Number(key)) : Number(key)
    });

};

const ul = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
console.log(answer(ul));
