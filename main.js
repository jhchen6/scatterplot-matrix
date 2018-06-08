var cellSize = 130,
    margin = 10,
    cellSpan = cellSize + margin,
    width = 960,
    height = 600;

var svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + [10, 10] + ")");

var brush = d3.brush()
    .extent([
        [0, 0],
        [cellSize, cellSize]
    ])
    .on("start", brushStarted)
    .on("brush", brushing)
    .on("end", brushEnded);

var keys;

d3.csv("iris.csv").then(data => {
    keys = data.columns.slice(1, 5);

    data.forEach(d => {
        d.scaled = {};
        d.Species = d.Species.substring(3);
    });

    keys.forEach((key, i) => {
        var scale = d3.scaleLinear()
            .domain([d3.min(data, d => d[key] = +d[key]), d3.max(data, d => d[key])])
            .range([0, cellSize]);

        //compute scaled values
        data.forEach(d => {
            d.scaled[key] = scale(d[key]);
        });

        //add axes
        var axis = createAxis("Bottom", scale);
        svg.append("g")
            .attr("transform", "translate(" + [cellSpan * i, -5] + ")")
            .call(axis);

        axis = createAxis("Right", scale.range([cellSize, 0]));
        svg.append("g")
            .attr("transform", "translate(" + [-5, cellSpan * i] + ")")
            .call(axis);
    });

    keys.forEach((keyI, i) => {
        keys.forEach((keyJ, j) => {
            var g = svg.append("g")
                .datum([i, j])
                .attr("class", "cell")
                .attr("transform", "translate(" + [cellSpan * j, cellSpan * i] + ")");
            g.append("rect")
                .attr("class", "frame")
                .attr("width", cellSize)
                .attr("height", cellSize);
            g.selectAll("circle")
                .data(data)
                .enter().append("circle")
                .attr("class", d => d["Species"])
                .attr("cx", d => d.scaled[keyJ])
                .attr("cy", d => cellSize - d.scaled[keyI])
                .attr("r", 3);

            g.call(brush);

            if (i === j) {
                g.append("text")
                    .attr("x", 5)
                    .attr("y", 15)
                    .text(keyI);
            }
        });
    });

    //just to reduce repetition and be lazy
    function createAxis(Orientation, scale) {
        return d3["axis" + Orientation](scale)
            .ticks(5)
            .tickSizeInner(cellSpan * 4)
            .tickSizeOuter(0);
    }
});

var species = ["setosa", "versicolor", "virginica"];
species.forEach((s, i) => {
    var legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(" + [600, 45 + 20 * i] + ")");

    legend.append("circle")
        .attr("class", s)
        .attr("r", 3);
    legend.append("text")
        .attr("x", 10)
        .attr("y", 5)
        .text("Iris " + s);
});

function brushStarted() {
    d3.selectAll(".cell")
        .filter(() => d3.brushSelection(this))
        .call(brush.move, null);
}

function brushing() {
    var extent = d3.event.selection;
    if (extent) {
        var indices = d3.select(this).datum(),
            keyI = keys[indices[0]],
            keyJ = keys[indices[1]];
        d3.selectAll(".cell circle")
            .classed("notSelected", d => {
                var cx = d.scaled[keyJ],
                    cy = cellSize - d.scaled[keyI]
                return (cx < extent[0][0] || cx > extent[1][0] ||
                    cy < extent[0][1] || cy > extent[1][1]);
            });
    }
}

function brushEnded() {
    if (!d3.event.selection) {
        d3.selectAll(".cell circle")
            .classed("notSelected", false);
        d3.selectAll(".cell")
            .filter(() => d3.brushSelection(this))
            .call(brush.move, null);
    }
}