// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    var lastletter;
    for (i = 0; i < word.length; i++){
        let letter = word[i]
        if (lastletter != null){
            if (lastletter == letter){
                    return true
                }
         }
        lastletter = letter
    }
    return false
}