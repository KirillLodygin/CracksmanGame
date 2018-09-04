import { SWAP_DOWNBLOCK } from '../constants/downBlockConstants';

export function sendMessage(text, marker) {
    return (dispatch)=> {
        let report = (marker.length > 0)?marker.join('\n') + '\n':'',
            i = 0;
        if(report.length > 0){
            setTimeout(function run() {
                report += text[i];
                dispatch({
                    type: SWAP_DOWNBLOCK,
                    payload: report.split('\n')
                });
                if (i != (text.length - 1)) {
                    i++;
                    setTimeout(run, 10);
                }
            }, 10);
        }else{
            let rep = [];
            setTimeout(function run(){
                report += text[i];
                if(report.search(/\n/i) == -1){
                    rep.push(report);
                    if(rep.length > 1){rep.shift();}
                    dispatch({
                        type: SWAP_DOWNBLOCK,
                        payload: rep
                    });
                }else{
                    dispatch({
                        type: SWAP_DOWNBLOCK,
                        payload: report.split('\n')
                    });
                }

                if (i != (text.length - 1)) {
                    i++;
                    setTimeout(run, 10);
                }
            }, 10);
        }
    }
}