function add(obj1, obj2, ...objects) {
    let increment = Object.values(obj1)[0];
    for (let object of objects) {
        increment += Object.values(object)[0];
    };
    Object.keys(obj2).forEach(key => obj2[key] += increment);
    return obj2;
}

function intersect(obj1, obj2) {
    let result = {};
    Object.keys(obj1).forEach(key => {
        if (obj1[key] == obj2[key]) {
            result[key] = obj1[key];
        }
    });
    return result;
}