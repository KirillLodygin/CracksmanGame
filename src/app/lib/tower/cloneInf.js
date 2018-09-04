export default function(model){
    let clone = {};
    for (let key in model){
        clone[key] = model[key]
    }
    return clone;
}