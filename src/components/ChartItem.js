import React from 'react';

const ChartItem = (props) => {
    return (
        <div className="app-chart-item-wrapper" style={{ top: props.top, width: props.width }}>


            <div className="app-chart-item-wrapper">
                {props.text}
            </div>

            <div className="app-chart-item">
                {props.count}
            </div>
        </div>
    )
}
export default ChartItem;