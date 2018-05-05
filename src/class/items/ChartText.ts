
import Chart from '../Chart';
import ChartItem from '../ChartItem';

class ChartText extends ChartItem{
    private text: string;
    constructor(text: string, x: number = 0, y: number = 0) {
        super('text', x, y);
        this.text = text
    }
    render(chart: Chart){
        super.render(chart)
            .attr('x', this.position.x)
            .attr('y', this.position.y)
            .attr('text-anchor', 'middle')
            .text(this.text);
    }
}
export default ChartText;