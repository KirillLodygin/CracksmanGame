export default function(bank){
    let revBank = '$ ';
    for(let i = 0; i<bank.length; i++){
        revBank = revBank + bank[i];
        if(((i+1)%3) == 0){
            revBank = revBank + ' ';
        }
    }
    return revBank.split('').reverse().join('');
}