import Chart from "../Chart";
import ChartItem from "../ChartItem";
import {Coordinate} from "../Interfaces";

/**
 * Item defining a basic line
 */
class ChartLine extends ChartItem{

    /**
     * Origin point for the line
     * @type {Coordinate}
     */
    private from: Coordinate;

    /**
     * Target point for the line
     * @type {Coordinate}
     */
    private to: Coordinate;

    /**
     * ChartLine constructor
     * @param {Coordinate} from
     * @param {Coordinate} to
     */
    constructor(from: Coordinate, to: Coordinate){
        super('line');
        this.from = from;
        this.to = to;
    }

    /**
     * Renders the Line
     * @param {Chart} chart - the Chart this Item will be appended to
     */
    public render(chart: Chart){
        this.node = chart.getSvg().append(this.selector)
            .attr('x1', this.from.x)
            .attr('y1', this.from.y)
            .attr('x2', this.to.x)
            .attr('y2', this.to.y)
            .style("stroke", "#666")
            .style("stroke-width", "1.5px");
    };
}

export default ChartLine;