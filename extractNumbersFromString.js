function extractNumbersFromString(str) {
    let num = '';

    for (let i = 0; i <= str.length; i++) {
        if(!(Object.is( +str[i], NaN ))) {
            num = num + str[i];
        }
    }

    return +num;
}