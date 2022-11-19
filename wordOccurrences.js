function wordOccurrences (input) {
    let map = new Map();

    for (const iterator of input) {
        let word = iterator;
        
        if(!map.has(word)){
            let wordCount = 1;
            map.set(word, wordCount);
        }
        else{
            let oldValue = map.get(word);
            wordCount = oldValue + 1;
            map.set(word, wordCount);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}
wordOccurrences([
"Here",
"is",
"the",
"first",
"sentence", 
"Here", 
"is", 
"another", 
"sentence", 
"And", 
"finally", 
"the", 
"third",
"sentence"]);