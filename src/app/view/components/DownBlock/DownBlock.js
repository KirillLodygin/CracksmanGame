import React from 'react';
import Report from './Report';
//import victoryReport from '../../lib/victoryReport';
//import { reports } from '../../lib/downMasseges';

export default class DownBlock extends React.Component {
    render() {
        const { marker } = this.props.downblock;
        let reports = marker.map((report, index)=> {
            return <Report
                report={report}
                key={index}/>;
        });

        return (
            <div className="downblock">
                <div className="text_panel" id="content" data-text={reports}>{reports}</div>
            </div>);
    }

    componentDidMount() {
        window.ee.addListener('New_report', (text) => {
            let marker = (text.search(/Раунд/i) != -1)?'':this.props.downblock.marker;
            this.props.downBlockActions.sendMessage(text, marker);
        });
    }

    componentWillUnmount(){
        window.ee.removeAllListeners();
    }

    componentDidUpdate() {
        let content = document.getElementById('content');
        content.scrollTop = content.scrollHeight;
    }
}