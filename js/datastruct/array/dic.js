let dictionary = {
    'Key1': '1',
    'Key2': {
        'a' : '2',
        'b' : '3',
        'c' : {
            'd' : '3',
            'e' : '1'
        }
    }
}

function flattenDictionary(dictionary) {
    let flattenedDictionary = {};

    function flattenDitionaryHelper(dictionary, propName) {
        if (typeof dictionary != 'object') {
            flattenedDictionary[propName] = dictionary;
            return;
        }
        for (let prop in dictionary) {
            if (propName == ''){
                flattenDitionaryHelper(dictionary[prop], propName+prop);
            } else {
                flattenDitionaryHelper(dictionary[prop], propName+'.'+prop);
            }
        }
    }

    flattenDitionaryHelper(dictionary, '');
    return flattenedDictionary;
}

console.log(flattenDictionary(dictionary));