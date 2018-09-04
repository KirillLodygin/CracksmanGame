export default  function(model){
    return model.map((level) => {
        let clone = {};
        for (let key in level){
            clone[key] = level[key]
        }
        return clone;
    });
}