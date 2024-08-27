/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (strs.length === 0) return "";
    strs.sort();

    const first = strs[0];
    const last =  strs[strs.length - 1];
    const minlength = Math.min(first.length, last.length);
    let i = 0;
    while(i < minlength && first[i] === last[i]){
        i++;
    }

    if(i===0 ) return "";

    return first.substring(0,i)

};