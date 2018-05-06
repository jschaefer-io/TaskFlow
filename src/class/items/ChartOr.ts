
import Chart from '../Chart';
import ChartLogic from "./ChartLogic";
import ChartLine from "./ChartLine";

abstract class ChartOr extends ChartLogic {

    public constructor(x: number = 0, y: number = 0, size: number = 30) {
        super(x, y, size);

        // Top Left Bottom Right
        this.addChildren('line1', new ChartLine({
            x: this.position.x - this.diag / 2,
            y: this.position.y + this.diag / 2
        }, {
            x: this.position.x + this.diag / 2,
            y: this.position.y + this.diag / 2 + size * (3 / 4)
        }));

        // Bottom Left Top Right
        this.addChildren('line2', new ChartLine({
            x: this.position.x - this.diag / 2,
            y: this.position.y + this.diag / 2 + size * (3 / 4)
        }, {
            x: this.position.x + this.diag / 2,
            y: this.position.y + this.diag / 2
        }));
    }

    render(chart: Chart) {
        return super.render(chart);
    }
}

export default ChartOr;