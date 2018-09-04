import React, { PureComponent } from 'react'

export default  class Report extends PureComponent
{
    render()
    {
        return <p className="report">
            {this.props.report}</p>
    }
}