function copyObject(obj) {
    let newObject = {};
    for(let key in obj) {
        newObject[key] = obj[key];
    }
    return newObject;
}

function deepCopyObject(obj) {
    let newObject = {};
    for(let key in obj) {
        if(typeof(obj[key]) === 'object') {
            newObject[key] = copyObject(obj[key]);
        }
        else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}

function soDeepCopyObject(obj) {
    let newObject = {};
    let vr = 'key';
    let i = 1;
    while(true) {
        vr += `${i}`;
        for(let key in obj) {
            if(typeof(obj[key]) === 'object') {
                newObject[key] = copyObject(obj[key]);
            }
            else {
                newObject[key] = obj[key];
            }
        }
        break;
    }
    return newObject;
}