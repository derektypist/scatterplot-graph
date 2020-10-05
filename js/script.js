// Initialise Variables

let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';
let req = new XMLHttpRequest();
let heightScale;
let xScale;
let xAxisScale;
let yAxisScale;
let width = 850;
let height = 650;
let padding = 40;
let svg = d3.select('svg');

// Draw Canvas
let drawCanvas = () => {
    svg.attr('width', width);
    svg.attr('height', height);
};

// Set Up Scales
let generateScales = () => {
    xScale = d3.scaleLinear().range([0, width]);
    heightScale = d3.scaleTime().range([0, height]);
};