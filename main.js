$(document).ready(function () {
    $.get("iris.csv", function (csv) {
        var data = $.csv.toObjects(csv);
        //{"Dataset Order":"1","Sepal length":"5.1","Sepal width":"3.5",
        //"Petal length":"1.4","Petal width":"0.2","Species":"I. setosa"}

        var $svg = $("svg"),
            svg = $svg[0];

        // layout parameters configuration
        var width = 800,
            height = 550,
            cellSize = 120,
            cellInterval = 10,
            cellSpan = cellSize + cellInterval;

        $svg.attr("width", width);
        $svg.attr("height", height);

        $("#data").append("p").html('<a href="https://en.wikipedia.org/wiki/Iris_flower_data_set">Data</a>');

        // store attribute names
        var attributes = [];
        for (var attr in data[0]) {
            attributes.push(attr);
        }
        var numAttribute = 4;

        // get categories
        var keyAttribute = "Species",
            categories = [],
            existAttribute = {};
        data.forEach(function (flower) {
            var species = flower[keyAttribute];
            if (existAttribute[species] == undefined) {
                existAttribute[species] = true;
                categories.push(species);
            }
        });

        // create scales for each attribute
        var scales = {};
        for (var i = 1; i <= numAttribute; i++) {
            var attr = attributes[i],
                min = Infinity,
                max = -Infinity;
            data.forEach(function (flower) {
                var value = flower[attr] = parseFloat(flower[attr]);
                if (value > max) {
                    max = value;
                }
                if (value < min) {
                    min = value;
                }
            });
            scales[attr] = initScale().range([0, cellSize]).domain([min, max]);
        }

        display();

        function display() {
            var tickLength = 5;
            var $g = append(svg, "g").attr("transform", "translate(" + [10, 10] + ")");

            //create legend
            categories.forEach(function (category, index) {
                var name = category.substring(3),
                    $gLegend = append($g, "g")
                        .attr("class", "legend")
                        .attr("transform", "translate(" + [cellSpan * numAttribute + 50, 30 * (index + 1)] + ")");
                append($gLegend, "circle")
                    .attr("class", name)
                    .attr("r", 3);
                append($gLegend, "text")
                    .attr("dx", 5)
                    .attr("dy", "0.31em")
                    .text("Iris " + name);
            });

            // create axes
            for (var i = 0; i < numAttribute; i++) {
                var attr1 = attributes[i + 1],
                    scale1 = scales[attr1],
                    numAxis = 6,
                    domain = scale1.domain(),
                    min = domain[0],
                    max = domain[1],
                    dPos = (max - min) / (numAxis - 1);

                max -= dPos / 2;
                values = [];
                for (var value = min; value < max; value += dPos) {
                    values.push(Math.round(value * 10) / 10);
                }

                values.forEach(function (value) {
                    var y = scale1(value);

                    //draw horizontal axes
                    var $gAxis = append($g, "g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + [0, cellSpan * i + cellSize - y] + ")");
                    append($gAxis, "line")
                        .attr("x1", -tickLength)
                        .attr("x2", cellSpan * numAttribute - tickLength)
                    append($gAxis, "text")
                        .attr("x", cellSpan * numAttribute)
                        .attr("dy", "0.31em")
                        .text(value);

                    //draw vertical axes
                    $gAxis = append($g, "g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(" + [cellSpan * i + y, 0] + ")");
                    append($gAxis, "line")
                        .attr("y1", -tickLength)
                        .attr("y2", cellSpan * numAttribute - tickLength)
                    append($gAxis, "text")
                        .attr("y", cellSpan * numAttribute)
                        .attr("dx", "-" + (value + "").length / 2 * 0.31 + "em")
                        .attr("dy", "0.7em")
                        .text(value);
                });
            }

            //draw matrix cells
            for (var i = 0; i < numAttribute; i++) {
                var attr1 = attributes[i + 1],
                    scale1 = scales[attr1];
                for (var j = 0; j < numAttribute; j++) {
                    var attr2 = attributes[j + 1],
                        scale2 = scales[attr2];

                    //create cell
                    var $gCell = append($g, "g")
                        .attr("class", "cell")
                        .attr("transform", "translate(" + [cellSpan * j, cellSpan * i] + ")");

                    //frame
                    append($gCell, "rect")
                        .attr("class", "frame")
                        .attr("width", cellSize)
                        .attr("height", cellSize);

                    //data points
                    data.forEach(function (flower) {
                        var x = scale2(flower[attr2]),
                            y = scale1(flower[attr1]);
                        append($gCell, "circle")
                            .attr("class", flower["Species"].substring(3))
                            .attr("cx", x)
                            .attr("cy", cellSize - y)
                            .attr("r", 3);
                    });

                    //cell attribute label
                    if (i == j) {
                        append($gCell, "text")
                            .attr("x", "0.31em")
                            .attr("y", "1em")
                            .text(attr1);
                    }
                }
            }
        }
    });
});

function append(parent, tag) {
    var elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
    $(parent).append(elem);
    return $(elem);
}

//for create linear scales
function initScale() {
    var k,
        b,
        domain = [0, 1],
        range = [0, 1];

    function scale(value) {
        return k * value + b;
    }
    scale.domain = function (_) {
        return arguments.length ? (domain = _, init(), scale) : domain;
    }
    scale.range = function (_) {
        return arguments.length ? (range = _, init(), scale) : range;
    }
    function init() {
        k = (range[1] - range[0]) / (domain[1] - domain[0]);
        b = range[1] - k * domain[1];
    }
    return scale;
}