import Chart from '../Chart';
import ChartItem from '../ChartItem';

/**
 * Basic Text item
 */
class ChartText extends ChartItem{

    private text: string;

    /**
     * ChartText constructor
     * @param {string} text - the text to be rendered
     * @param {number} x - the x position
     * @param {number} y - the y position
     */
    constructor(text: string, x: number = 0, y: number = 0){
        super('text', x, y);
        this.text = text
    }

    /**
     * Renders the ChartText
     * @param {Chart} chart - the Chart this Item will be appended to
     */
    render(chart: Chart){
        super.render(chart)
            .attr('x', this.position.x)
            .attr('y', this.position.y)
            .attr('text-anchor', 'middle')
            .text(this.text);
    }
}

export default ChartText;