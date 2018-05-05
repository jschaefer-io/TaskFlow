({
    appDir: '../build',
    baseUrl: '.',
    dir: '../dist',
    name: 'TaskFlow',
    include: ['../node_modules/almond/almond.js'],
    paths: {
        d3: "empty:"
    },
    insertRequire: ['TaskFlow'],
    removeCombined: true,
    wrap: {
        startFile: "./frag-start.js",
        endFile: "./frag-end.js"
    }
})