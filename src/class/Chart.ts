import ChartItem from "./ChartItem"
import * as d3 from "d3"

/**
 * The Main Chart Object
 */
class Chart{

    /**
     * The SVG-Selection, all items will get appended to
     */
    private readonly svg: Selection | any;

    /**
     * Chart constructor
     * @param {string} selector - the css selector, where the chart will get appended
     * @param {number} width - the charts width
     * @param {number} height - the charts height
     */
    constructor(selector: string, width: number, height: number){
        this.svg = d3.select(selector).append('svg')
            .attr('width', width)
            .attr('height', height);
    }

    /**
     * Gets the SVG Selection
     */
    public getSvg(){
        return this.svg;
    }

    /**
     * Adds a ChartItem to the current Chart
     * @param {ChartItem} item
     */
    append(item: ChartItem): void{
        item.render(this);
    }
}

export default Chart;