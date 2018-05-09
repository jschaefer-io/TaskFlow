import ChartLogic from "./ChartLogic";
import ChartLine from "./ChartLine";

/**
 * Logic AND Item
 */
class ChartAnd extends ChartLogic{

    /**
     * ChartAnd constructor
     * @param {number} x - the x position
     * @param {number} y - the y position
     * @param {number} size - the items size
     */
    public constructor(x: number = 0, y: number = 0, size: number = 30){
        super(x, y, size);

        // Horizontal Line
        this.addChildren('line1', new ChartLine({
            x: this.center.x - this.diag,
            y: this.center.y
        }, {
            x: this.center.x + this.diag,
            y: this.center.y
        }));

        // Vertical Line
        this.addChildren('line2', new ChartLine({
            x: this.center.x,
            y: this.center.y - this.diag
        }, {
            x: this.center.x,
            y: this.center.y + this.diag
        }));
    }
}

export default ChartAnd;