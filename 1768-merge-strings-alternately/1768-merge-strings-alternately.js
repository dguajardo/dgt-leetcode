/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
     let newStr = '';
    let acc = 0;

    while(acc < word1.length  || acc < word2.length)
    {
     newStr += word1.substring(acc, acc + 1) + word2.substring(acc, acc + 1);
    acc++;
    }
    return newStr;
    
};