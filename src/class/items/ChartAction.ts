
import Chart from "../Chart";
import ChartRect from "./ChartRect";

class ChartAction extends ChartRect{
    render(chart: Chart){
        this.padding = 30;
        super.render(chart)
            .style("fill", "#ccc")
            .style("fill-opacity", ".3")
            .style("stroke", "#666")
            .style("stroke-width", "1.5px");
    }
}

export default ChartAction;