const path = require('path');

module.exports = {
    entry: './src/TaskFlow.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'TaskFlow.js',
        path: path.resolve(process.cwd(), 'dist')
    }
};