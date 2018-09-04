import {
    TOWER_REAL_STATE,
    SWAP_INFORMATION} from '../constants/towerConstants';
/*
 SWAP_TOWER_RANK,
 TOWER_INC_REAL_STATE,
 POSITIONS_REAL_STATE,
 TOWER_ACTIVE,
 FLOORS_BUSY,
 TOWER_HEIGHT,
 SWAP_DISABLED,
 SWAP_ENTRY,
 SWAP_EXIT,
 SWAP_ROUNDS,
 SWAP_MISSTEPS,
 SWAP_BANK} from '../constants/towerConstants';
 */

import { reports } from '../lib/reports/downMasseges';
import towerModel from '../lib/tower/towerModel';
import cloneTower from '../lib/tower/cloneTower';
import cloneInf from '../lib/tower/cloneInf';
import correctChoice from '../lib/tower/correctChoice';
import ante from '../lib/tower/ante';
import quantum from '../lib/tower/quantum';
import newReport from '../lib/downBlock/newReport';
import missReport from '../lib/reports/missReport';
import anteToString from '../lib/reredos/anteToString';

import towerIncs from '../lib/tower/towerIncs';
import floorsBusy from '../lib/tower/floorsBusy';
import towerPositions from '../lib/tower/towerPositions';

export function buildTower(information, rank) {
    let tower = towerModel(rank),
        inf = cloneInf(information);
    inf.bank = ante(rank);
    inf.rank = rank;
    window.ee.emit('Swap_bank', inf.bank);

    return (dispatch) => {
        dispatch({
            type: TOWER_REAL_STATE,
            payload: tower
        });

        dispatch({
            type: SWAP_INFORMATION,
            payload: inf
        });
    }
}

export function startRound(model, information, count, num) {
    let inf = cloneInf(information),
        tower = cloneTower(model);
    inf.rounds++;
    tower.forEach((item)=> {
        item.disabled = true;
    });
    tower[num].active = true;
    newReport((reports[0] + String(inf.rounds) + '\n' + reports[1]));

    /*
     if (rounds == 1) {
     window.ee.emit('Start_timer', true);
     }
     */

    return (dispatch) => {
        dispatch({
            type: TOWER_REAL_STATE,
            payload: tower
        });

        dispatch({
            type: SWAP_INFORMATION,
            payload: inf
        });

        if (inf.rounds % 3 == 0) {
            reduceBank(tower, inf, 1, function (sum) {
                inf.bank = sum;
                dispatch({
                    type: SWAP_INFORMATION,
                    payload: inf
                });
                setTimeout(()=> {
                    calculation(tower, inf, count, num)
                }, 1500);
            });
        } else {
            calculation(tower, inf, count, num);
        }

        function calculation(model, information, count, num) {
            let inf = cloneInf(information), report;
            if (count > 0) {
                if (inf.rank > 6) {
                    let numbers = correctChoice(model);
                    if ((numbers.length > 0) && (numbers.indexOf(num) < 0)) {
                        numbers = numbers.map((number)=>{
                            return model.length - number;
                        });
                        report = reports[8] + ((numbers.length > 1) ? reports[10] : reports[9]) +
                            numbers.reverse().join(', ') + reports[11];
                        newReport(report);
                        setTimeout(()=> {
                            reduceBank(model, inf, 1, function (sum) {
                                inf.bank = sum;
                                dispatch({
                                    type: SWAP_INFORMATION,
                                    payload: inf
                                });
                            });
                        }, 1500);
                    }
                }
                setTimeout(()=>{changeIncs(model, inf, count, num);}, 1500)
            } else {
                report = reports[2];
                if (inf.rank > 4) {
                    report += '\n';
                    inf.missteps++;
                    dispatch({
                        type: SWAP_INFORMATION,
                        payload: inf
                    });
                    report += missReport(inf.missteps);
                    /*
                     * Создать событие которое слушает Reredos
                     */
                }
                newReport(report);
            }
            (inf.missteps == 3) ? endOfTheGame(model) : newRound(model);
        }

        function changeIncs(model, information, count, num) {
            let tower = cloneTower(model);
            tower[num].increment = -1;
            num = (num == tower.length - 1) ? 0 : (num + 1);
            count++;
            setTimeout(function run() {
                num = (num == 0) ? (tower.length - 1) : (num - 1);
                tower[num].increment++;
                count--;
                dispatch({
                    type: TOWER_REAL_STATE,
                    payload: tower
                });
                if (count > 0) {
                    setTimeout(run, 400);
                } else {
                    turnTheTower(tower, information);
                }
            }, 400);
        }

        function turnTheTower(model, information) {
            let tower = cloneTower(model),
                incs = towerIncs(tower), num = 0,
                incsSum = incs.reduce((sum, inc) => {
                    return sum + inc;
                }, 0);

            setTimeout(function run() {
                num = (num == 0) ? (tower.length - 1) : (num - 1);
                if (incs[num] > 0) {
                    tower[num].position++;
                    if (tower[num].position > 9) tower[num].position = 1;
                    incs[num]--;
                    incsSum--;
                    dispatch({
                        type: TOWER_REAL_STATE,
                        payload: tower
                    });
                }
                if (incsSum > 0) {
                    setTimeout(run, 300);
                } else {
                    infiltrationOrFalling(tower, information);
                }
            }, 300);
        }

        function infiltrationOrFalling(model, information) {
            let inf = cloneInf(information),
                tower = cloneTower(model);
            if (!inf.entry) {
                if ((tower[tower.length - 1].position == 4)) {
                    tower[tower.length - 1].busy = true;
                    inf.entry = true;
                    newReport(reports[3]);
                    setTimeout(()=> {
                        dispatch({
                            type: TOWER_REAL_STATE,
                            payload: tower
                        });
                        dispatch({
                            type: SWAP_INFORMATION,
                            payload: inf
                        });
                        setTimeout(()=> {
                            climbing(tower, inf)
                        }, 800);
                    }, 200);
                } else {
                    newReport(reports[7]);
                    newRound(tower);
                }
            } else {
                let num = floorsBusy(tower).indexOf(true),
                    pos = towerPositions(tower)[num],
                    down = 0;
                setTimeout(function run() {
                    if (num < (tower.length - 1) && tower[num + 1].position == pos) {
                        down++;
                        tower[num].busy = false;
                        num++;
                        tower[num].busy = true;
                        dispatch({
                            type: TOWER_REAL_STATE,
                            payload: tower
                        });
                        newReport(reports[4]);
                        setTimeout(run, 1000);
                    } else {
                        if (down > 0) {
                            reduceBank(tower, inf, down, function (sum) {
                                inf.bank = sum;
                                dispatch({
                                    type: SWAP_INFORMATION,
                                    payload: inf
                                });
                                defeat(tower, inf, true)
                            });
                        } else {
                            defeat(tower, inf, false);
                        }
                    }
                }, 1000);
            }
        }

        function climbing(model, information) {
            let inf = cloneInf(information),
                tower = cloneTower(model),
                num = floorsBusy(tower).indexOf(true),
                pos = towerPositions(tower)[num],
                up = 0;
            setTimeout(function run() {
                if (num > 0 && tower[num - 1].position == pos) {
                    up++;
                    tower[num].busy = false;
                    num--;
                    tower[num].busy = true;
                    dispatch({
                        type: TOWER_REAL_STATE,
                        payload: tower
                    });
                    newReport(reports[5]);
                    setTimeout(run, 1000);
                } else {
                    if (up > 1) {
                        addBank(inf, up, function (sum) {
                            inf.bank = sum;
                            dispatch({
                                type: SWAP_INFORMATION,
                                payload: inf
                            });
                            victoryExit(tower, inf);
                        });
                    } else {
                        victoryExit(tower, inf);
                    }
                }
            }, 1000);
        }

        function victoryExit(model, information) {
            let inf = cloneInf(information),
                tower = cloneTower(model);
            if (tower[0].busy && (tower[0].position == 6)) {
                tower[0].busy = false;
                inf.exit = true;
                setTimeout(()=> {
                    dispatch({
                        type: TOWER_REAL_STATE,
                        payload: tower
                    });
                    dispatch({
                        type: SWAP_INFORMATION,
                        payload: inf
                    });
                    newReport(reports[14] + '\n' + reports[15] +
                        anteToString(String(inf.bank).split('').reverse().join('')));
                    endOfTheGame(tower);
                }, 300);
            } else {
                newReport(reports[7]);
                newRound(tower);
            }
        }

        function defeat(model, information, down) {
            let inf = cloneInf(information),
                tower = cloneTower(model);
            if (tower[tower.length - 1].busy && (tower[tower.length - 1].position == 4)) {
                tower[tower.length - 1].busy = false;
                inf.entry = false;
                setTimeout(()=> {
                    dispatch({
                        type: TOWER_REAL_STATE,
                        payload: tower
                    });
                    dispatch({
                        type: SWAP_INFORMATION,
                        payload: inf
                    });
                    newReport(reports[6]);
                    endOfTheGame(tower);
                }, 200);
            } else {
                if (down) {
                    newReport(reports[7]);
                    newRound(tower);
                } else {
                    climbing(tower, inf);
                }
            }
        }

        function endOfTheGame(model) {
            //window.ee.emit('Start_timer', false);
            let tower = cloneTower(model);
            tower.forEach((item)=> {
                item.active = false
            });
            dispatch({
                type: TOWER_REAL_STATE,
                payload: tower
            });
        }

        function newRound(model) {
            let tower = cloneTower(model);
            tower.forEach((item)=> {
                item.active = false;
                item.disabled = false;
            });
            dispatch({
                type: TOWER_REAL_STATE,
                payload: tower
            });
        }

        function reduceBank(model, inf, index, callback) {
            let minus = quantum(inf.rank) * index,
                newBank = inf.bank - minus;
            newReport(reports[12] + anteToString(String(minus).split('').reverse().join('')));
            window.ee.emit('Bank_change', newBank);
            if (newBank < 0) {
                setTimeout(()=> {
                    newReport(reports[16]);
                    endOfTheGame(model);
                }, 1500);
            } else {
                setTimeout(()=> {
                    callback(newBank);
                }, 1500);
            }
        }

        function addBank(inf, index, callback) {
            let plus = quantum(inf.rank) * index,
                newBank = inf.bank + plus,
                report = reports[13] + anteToString(String(plus).split('').reverse().join(''));
            newReport(report);
            window.ee.emit('Bank_change', newBank);
            setTimeout(()=> {
                callback(newBank);
            }, 1500);
        }
    }
}