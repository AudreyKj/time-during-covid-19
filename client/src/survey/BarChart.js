import React, { Component } from "react";
import NodeGroup from "react-move/NodeGroup";
import PropTypes from 'prop-types';
import {
    getInitialData,
} from "./helpers";

let barHeight = 85;
let barPadding = 5;
let barColour = "#000";
let widthScale = d => d * 7;

function BarGroup(props) {
    let width = widthScale(props.state.value) <= 14 ? 40 : widthScale(props.state.value)

    let yMid = barHeight * 0.5;

    return (
        <g className="bar-group" transform={`translate(0, ${props.state.y})`}>
            <rect
                y={barPadding * 0.5}
                width={width}
                height={barHeight - barPadding}
                style={{ fill: barColour, opacity: props.state.opacity, marginBottom: "10px" }}
            />
            <text
                className="value-label"
                x={width - 6}
                y={yMid}
                alignmentBaseline="middle"
            >
                {props.state.value.toFixed(0)}%
            </text>
            <text
                className={props.emoji ? ` name-label big-name-label` : 'name-label small-name-label'}
                x="-6"
                y={yMid}
                alignmentBaseline="middle"
                style={{
                    opacity: props.state.opacity
                }}
            >
                {props.data.name}
            </text>
        </g >
    );
}

BarGroup.propTypes = {
    emoji: PropTypes.string,
    state: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  }


export class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getInitialData(this.props.val)
        };
    }

    startTransition(d, i) {
        return { value: 0, y: i * barHeight, opacity: 0 };
    }

    enterTransition(d) {
        return { value: [d.value], opacity: [1], timing: { duration: 400 } };
    }


    render() {
        return (
            <div className="barChart">
                <svg width="100%" height={this.props.surveyOne ? 220 : 300}>
                    <g className="chart" transform="translate(100,10)">
                        <NodeGroup
                            data={this.state.data}
                            keyAccessor={d => d.name}
                            start={this.startTransition}
                            enter={this.enterTransition}
                        >
                            {nodes => (
                                <g>
                                    {nodes.map(({ key, data, state }) => (
                                        <BarGroup key={key} data={data} state={state} emoji={this.props.emoji || ''} />
                                    ))}
                                </g>
                            )}

                        </NodeGroup>
                    </g>
                </svg>
            </div>
        );
    }
}

BarChart.propTypes = {
    emoji: PropTypes.string,
    val: PropTypes.string.isRequired,
    surveyOne: PropTypes.bool.isRequired,
  }

export default BarChart;




