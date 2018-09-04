import React, { PureComponent } from 'react';

var shortid = require('shortid');

export default class Floor extends PureComponent
{
    onLevelBtnClick(){
        let item = {
            count: this.props.increment,
            knob: this.props.knob
        };
        window.ee.emit('New_motion', item);
    }

    render()
    {
        let level = [];
        level.push(<div
            key={shortid.generate()} className="rate">
            {this.props.increment}
        </div>);

        for(let i= 1; i<10; i++){
            level.push(<div
                key={shortid.generate()}
                className={'segment' + ((i === this.props.position) ? (this.props.busy?'-ellight':'-elevator'):'')}>
                <span className={'cracksman ' +
                (((i === this.props.position) && this.props.busy)? '':' none')}>&#116;</span>
            </div>);
        }
        level.push(<div
            key={shortid.generate()}
            disabled={this.props.disabled}
            className={((this.props.active)?'level-active':'level') +
            (this.props.disabled?' disabled':'')}
            onClick={this.onLevelBtnClick.bind(this)}/>);

        level.push(<div className="lev">{this.props.knob}</div>);

        return(
            <div className="floor">
                {level}
            </div>
        );
    }
}