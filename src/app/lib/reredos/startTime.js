export default function(timer){
    let base = 60;
    let cdateObj = new Date();
    let t = (cdateObj.getTime() - timer.dateObj.getTime())-( timer.s*1000);
    if (t>999) { timer.s++; }
    if (timer.s>=(timer.m*base)) {
        timer.ts=0;
        timer.m++;
    } else {
        timer.ts=parseInt((timer.ms/100)+ timer.s);
        if(timer.ts>=base) { timer.ts=timer.ts-((timer.m-1)*base); }
    }
    if (timer.m>(timer.h*base)) {
        timer.tm=1;
        timer.h++;
    } else {
        timer.tm=parseInt((timer.ms/100)+ timer.m);
        if(timer.tm>=base) { timer.tm=timer.tm-((timer.h-1)*base); }
    }
    /*
    timer.ms = Math.round(t/10);
    if (timer.ms>99) {timer.ms=0;}
    if (timer.ms==0) { timer.ms='00';}
    if (timer.ms>0&&timer.ms<=9) { timer.ms = '0'+timer.ms; }
    */
    if (timer.ts>0) { timer.ds = timer.ts; if ( timer.ts<10) { timer.ds = '0'+timer.ts; }} else { timer.ds = '00'; }
    timer.dm=timer.tm-1;
    if (timer.dm>0) { if (timer.dm<10) { timer.dm = '0'+ timer.dm; }} else { timer.dm = '00'; }
    timer.dh= timer.h-1;
    if (timer.dh>0) { if (timer.dh<10) { timer.dh = '0'+timer.dh; }} else { timer.dh = '00'; }
    timer.readout = timer.dh + ':' + timer.dm + ':' + timer.ds;
    return timer;
}