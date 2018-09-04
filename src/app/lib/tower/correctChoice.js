import towerIncs from './towerIncs';
import towerPositions from './towerPositions';
import floorsBusy from './floorsBusy';

export default function(model){
    let numbers = [],
        busy = floorsBusy(model).indexOf(true);
    for(let i=0; i<model.length; i++){
        let num = i, incs = towerIncs(model);
        let count = incs[num];
        num = (num == incs.length - 1) ? 0:(num + 1);
        while(count > 0) {
            num = (num == 0) ? (model.length - 1):(num - 1);
            incs[num]++;
            count--;
        }

        let pos = towerPositions(model);
        for(let y=0; y<pos.length; y++){
            pos[y] = pos[y] + incs[y];
            while(pos[y]>9){
                pos[y] = pos[y] - 9;
            }
        }

        switch (busy)
        {
            case (-1):
                if(pos[pos.length-1]==4){numbers.push(i)}
                break;

            case (0):
                if((pos[0]==6)&&(pos[1]!=6)){numbers.push(i)}
                break;

            case (pos.length-1):
                if((pos[pos.length-1]!=4)&&(pos[pos.length-1] == pos[pos.length-2])){numbers.push(i)}
                break;

            default:
                if((pos[busy]!=pos[busy+1])&&(pos[busy]==pos[busy-1])){numbers.push(i)}
        }
    }
    return numbers;
}