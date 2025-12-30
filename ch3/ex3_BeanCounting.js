function countBs(word) {
    // counts how many uppercase B are there
    let count = countChar(word, 'B');
    return count;
}

console.log(countBs('blalsjdlfl'));
console.log(countBs("BOB"));

function countChar(word, letterToCount) {
    let count = 0;
    word.split('').forEach(letter => {
        if (letter === letterToCount) {
            count++;
        }
    });
    return count;
}
console.log(countChar("kakkerlak", "k"));
