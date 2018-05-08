const merge = require('webpack-merge');
const baseConfig = require('./config.production.js');

module.exports = merge(baseConfig, {
	externals: {
        d3: "d3"
    },
    output: {
		library: "TaskFlow",
		libraryTarget: "window"
	}
});