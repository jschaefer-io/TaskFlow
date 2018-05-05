import Chart from "../Chart";
import ChartItem from "../ChartItem";

class ChartLine extends ChartItem{

    private from: { x: number; y: number };
    private to: { x: number; y: number };

    constructor(from: {x:number, y:number}, to: {x:number, y:number}){
        super('line');
        this.from = from;
        this.to = to;
    }

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