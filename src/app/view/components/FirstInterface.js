import React from 'react';

export default class FirstInterface extends React.Component
{
    onNumBtnClick(e){
        let item = e.target.innerText;
        window.ee.emit('Swap_tower_rank', item);
        let visible = false;
        this.props.firstInterfaceActions.fieldVisibility(visible);
    }

    render(){
        const{ ranks, visible } = this.props.firstinterface;
        let buttons = ranks.map((rank, index)=>{
            return (
                <div
                    key = {index}
                    className="level_button transition"
                    onClick={this.onNumBtnClick.bind(this)}>
                    {rank}
                </div>
            );
        });

        return(
            <div className={'field' + (visible?'':' invisible')}>
                <div className="management">
                    <div className="buttons_box">
                        {buttons}
                    </div>
                    <div className="control">
                        <div className="set transition">Settings</div>
                        <div className="set transition">Statistics</div>
                    </div>
                </div>
            </div>
        );
    }
}