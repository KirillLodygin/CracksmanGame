export default  function(model){
    return model.map((floor)=>{
        return floor.increment;
    });
}