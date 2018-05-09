import Chart from "../Chart";
import ChartRect from "./ChartRect";

/**
 * Item defining a basic action
 */
class ChartAction extends ChartRect{

    /**
     * Renders the Action-Item
     * @param {Chart} chart - the Chart this Item will be appended to
     */
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