function isVowel(char){
    return 'aeiou'.includes(char);
}

function vowelCount(string) {
    const vowelMap = new Map();
    for(let char of string){
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount('p5-Subhadip-anugrahpaul2000'));