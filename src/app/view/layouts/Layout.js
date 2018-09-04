import React from 'react';
import CurrentReredos from '../../containers/CurrentReredos';
import DownBlockContainer from '../../containers/DownBlockContainer';
import CurrentTower from '../../containers/CurrentTower';
import CurrentFirstInterface from '../../containers/CurrentFirstInterface';

export default class Layout extends React.Component
{
    render()
    {
        return (
            <div>
                <CurrentFirstInterface/>
                <div className="grid">
                    <div></div>
                    <div className="subitems">
                        <CurrentReredos/>
                        <CurrentTower/>
                        <DownBlockContainer/>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}