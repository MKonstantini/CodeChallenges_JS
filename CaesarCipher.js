// Function that applies the Caesar Cipher
// (returns string after displacing its letters along the alphabet by a given amount)
        
function ToCaesarCipher(message, displacement) {
    const letters = ['a','b','c','d','e','f','g',
                     'h','i','j','k','l','m','n',
                     'o','p','q','r','s','t','u',
                     'v','w','x','y','z'];

    // split the given message in an array:
    msgArray = message.split('');

    // create an array of the positions of the letters:
    let posArray = [];
    for (i in msgArray) {
        let pos = letters.indexOf(msgArray[i]);
        posArray.push(pos);
    }

    //displace each position in the positions array (account for spacing and 0 to 25 position range):
    for (i in posArray) {
        if (posArray[i] == -1) posArray[i] = '_';  
        else {
            let newPos = posArray[i] + displacement;
            while (newPos > 25) newPos -= 26;
            while (newPos < 0) newPos += 26;
            posArray[i] = newPos;
        }
    }

    //revert back to letters:
    let encryptedMsg = '';
    for (i in posArray) {
        if (posArray[i] == '_') encryptedMsg += ' ';
        else {
            let letter = letters[posArray[i]];
            encryptedMsg += letter;    
        }
    }

    return encryptedMsg;
}
