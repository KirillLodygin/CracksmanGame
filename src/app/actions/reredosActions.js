import {
    SWAP_TIMER,
    SWAP_ANTE,
    SWAP_MISTAKES,
    SWAP_LIGHT} from '../constants/reredosConstants';

import StartTIME from '../lib/reredos/startTime';
import anteToString from '../lib/reredos/anteToString';
import strToSum from '../lib/reredos/strToSum';

export function gameTimer(timerStart){
    let timerId,
        timer = {
            readout: '',
            dateObj: '',
            dh: '',
            dm: '',
            ds: '',
            h: 1,
            m: 1,
            tm: 1,
            s: 0,
            ts: 0,
            ms: 0
        };
    if(timerStart){
        timer.dateObj = new Date();
        return(dispatch)=>{
            timerId = setTimeout(function run(){
                timer = StartTIME(timer);
                dispatch({
                    type: SWAP_TIMER,
                    payload: timer.readout
                });
                timerId = setTimeout(run, 1000);
            },1000);
        }
    }else{
       clearTimeout(timerId);
    }
}

export function startAnte(bank){
    bank = anteToString(String(bank).split('').reverse().join(''));
    return(dispatch)=>{
        dispatch({
            type: SWAP_ANTE,
            payload: bank
        });
    }
}

export function bankChange(cash){
   let bank = String(strToSum(cash.bank)).split('').reverse(),
       newBank = String(Math.abs(cash.newBank)).split('').reverse();
    //alert('bank - ' + bank + ';\nnewBank - ' + newBank);
    if((newBank.length - bank.length)<0){
        //alert('newBank.length < bank.length');
        while(newBank.length < bank.length){
            newBank.push('0');
        }
    }else{
        if((newBank.length - bank.length)>0){
            //alert('bank.length<newBank.length');
            while(bank.length<newBank.length){
                bank.push('0');
            }
        }
    }
    //alert('bank - ' + bank + ';\nnewBank - ' + newBank);
    //alert('newBank.length - ' + newBank.length + ';\nbank.length - ' + bank.length);
    return(dispatch)=>{
        setTimeout(function run(){
            for(let i=0; i<bank.length; i++){
                if(bank[i] != newBank[i]){
                    Number.parseInt(bank[i]);
                    bank[i]--;
                    if(bank[i]<0){bank[i]=9}
                    String(bank[i]);
                }
            }

            while(bank[bank.length-1]=== '0'){
                bank.pop();
                newBank.pop();
            }

            dispatch({
                type: SWAP_ANTE,
                payload: anteToString(bank)
            });

            if(anteToString(bank.join('')) != anteToString(newBank.join(''))){
                setTimeout(run, 250);
            }else{
                if(cash.newBank<0){
                    dispatch({
                        type: SWAP_ANTE,
                        payload: ('- ' + anteToString(bank))
                    });
                }
            }
        }, 250);

    }




}

export function showMissteps(missteps){
    let mistakes = '';
    for(let i = 0; i<missteps; i++){
        mistakes = mistakes + 'f';
    }
    return (dispatch)=>{
        dispatch({
            type: SWAP_MISTAKES,
            payload: mistakes
        });
        if(mistakes.length>0){
            dispatch({
                type: SWAP_LIGHT,
                payload: true
            });
        }
    }
}

