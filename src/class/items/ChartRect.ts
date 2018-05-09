import Chart from '../Chart';
import ChartItem from '../ChartItem';
import ChartText from './ChartText';

/**
 * Template for Text-filled rectangles
 */
class ChartRect extends ChartItem{

    protected padding: number = 0;

    /**
     * ChartRect constructor
     * @param {string} text - the text content
     * @param {number} x - the x position
     * @param {number} y - the y position
     */
    public constructor(text: string, x: number = 0, y: number = 0){
        super('rect', x, y);
        this.addChildren('text', new ChartText(text, x, y));
    }

    /**
     * Renders the ChartRect
     * @param {Chart} chart - the Chart this Item will be appended to
     */
    render(chart: Chart){
        const node = super.render(chart);
        const text = this.getChildren('text').getBBox();
        return node.attr('x', text.x - (this.padding / 2))
            .attr('y', text.y - (this.padding / 2))
            .attr("width", text.width + this.padding)
            .attr("height", text.height + this.padding);
    }
}

export default ChartRect;