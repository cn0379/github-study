function save(key,v){
    window.localStorage.setItem(key,JSON.stringify(v));
}
function getItem(key){
    var v = window.localStorage.getItem(key);
    return v?JSON.parse(v):[];
}

export default {
    save,
    getItem
}