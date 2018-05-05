
import Chart from '../Chart';
import ChartRect from './ChartRect';

class ChartEvent extends ChartRect{
    render(chart: Chart){
        this.padding = 15;
        super.render(chart)
            .attr('rx', 5)
            .attr('ry', 5)
            .style("fill", "#00dcff")
            .style("fill-opacity", ".3")
            .style("stroke", "#666")
            .style("stroke-width", "1.5px");
    }
}

export default ChartEvent;