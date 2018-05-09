import Chart from '../Chart';
import ChartItem from "../ChartItem";
import {Coordinate} from '../Interfaces';

/**
 * Template for logic-gate items
 */
abstract class ChartLogic extends ChartItem{

    private width: number;
    private height: number;
    protected diag: number;
    protected center: Coordinate;

    /**
     * ChartLogic constructor
     * @param {number} x - the x position
     * @param {number} y - the y position
     * @param {number} size - the items size
     */
    public constructor(x: number = 0, y: number = 0, size: number = 30){
        super('polygon', x, y);
        this.width = size;
        this.height = size;

        this.diag = Math.sqrt(2) / 2 * size;
        this.center = {
            x: x,
            y: y + this.diag
        };
    }

    /**
     * Renders the Logic-Item
     * @param {Chart} chart - the Chart this Item will be appended to
     */
    render(chart: Chart){
        const points: number[][] = [
            [this.position.x, this.position.y],
            [this.center.x - this.diag, this.center.y],
            [this.center.x, this.center.y + this.diag],
            [this.center.x + this.diag, this.center.y]
        ];
        const node = super.render(chart);
        return node.attr('x', this.position.x)
            .attr('points', points.map(item => item.join(',')).join(' '))
            .style("fill", "blue")
            .style("fill-opacity", ".3")
            .style("stroke", "#666")
            .style("stroke-width", "1.5px");
    }
}

export default ChartLogic;