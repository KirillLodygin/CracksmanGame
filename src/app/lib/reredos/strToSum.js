export default function(str){
    let int = '';
    for(let i=0; i<str.length; i++){
        if ((str[i]!=' ') && (str[i]!='$')){int = int + str[i]}
    }
    return Number.parseInt(int);
}