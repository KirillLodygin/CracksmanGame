import React from 'react';

export default  class Reredos extends React.Component
{
    render()
    {
        const {
            timer,
            bank,
            mistakes,
            light} = this.props.reredos;
        return <div className="reredos_frame">
            <div className="reredos">
                <div className="showing">
                    <div className={'show1' + (light)?' light':''}>{mistakes}</div>
                    <div className="show2">
                        <p className="bank">{bank}</p>
                        <p className="timer">{timer}</p>
                    </div>
                </div>
            </div>
        </div>;
    }

    componentDidMount(){
        /*
        window.ee.addListener('Start_timer', (timerStart) => {
            this.props.reredosActions.gameTimer(timerStart);
        });
        */

        window.ee.addListener('Swap_bank', (bank) =>{
            this.props.reredosActions.startAnte(bank);
        });

        window.ee.addListener('Bank_change', (newBank)=>{
            let cash = {};
            cash.bank = this.props.reredos.bank;
            cash.newBank = newBank;
            this.props.reredosActions.bankChange(cash);
        });

        window.ee.addListener('Show_missteps', (missteps)=>{
            this.props.reredosActions.showMissteps(missteps);
        });

        window.ee.addListener('Victory', (report)=>{
            report = report + this.props.reredos.bank;
            window.ee.emit('New_report', report);
        });
    }
}