$(document).ready(function () {
    $.get("iris.csv", function (csv) {
    // var csv = 'Dataset Order,Sepal length,Sepal width,Petal length,Petal width,Species\n1,5.1,3.5,1.4,0.2,I. setosa\n2,4.9,3,1.4,0.2,I. setosa\n3,4.7,3.2,1.3,0.2,I. setosa\n4,4.6,3.1,1.5,0.2,I. setosa\n5,5,3.6,1.4,0.3,I. setosa\n6,5.4,3.9,1.7,0.4,I. setosa\n7,4.6,3.4,1.4,0.3,I. setosa\n8,5,3.4,1.5,0.2,I. setosa\n9,4.4,2.9,1.4,0.2,I. setosa\n10,4.9,3.1,1.5,0.1,I. setosa\n11,5.4,3.7,1.5,0.2,I. setosa\n12,4.8,3.4,1.6,0.2,I. setosa\n13,4.8,3,1.4,0.1,I. setosa\n14,4.3,3,1.1,0.1,I. setosa\n15,5.8,4,1.2,0.2,I. setosa\n16,5.7,4.4,1.5,0.4,I. setosa\n17,5.4,3.9,1.3,0.4,I. setosa\n18,5.1,3.5,1.4,0.3,I. setosa\n19,5.7,3.8,1.7,0.3,I. setosa\n20,5.1,3.8,1.5,0.3,I. setosa\n21,5.4,3.4,1.7,0.2,I. setosa\n22,5.1,3.7,1.5,0.4,I. setosa\n23,4.6,3.6,1,0.2,I. setosa\n24,5.1,3.3,1.7,0.5,I. setosa\n25,4.8,3.4,1.9,0.2,I. setosa\n26,5,3,1.6,0.2,I. setosa\n27,5,3.4,1.6,0.4,I. setosa\n28,5.2,3.5,1.5,0.2,I. setosa\n29,5.2,3.4,1.4,0.2,I. setosa\n30,4.7,3.2,1.6,0.2,I. setosa\n31,4.8,3.1,1.6,0.2,I. setosa\n32,5.4,3.4,1.5,0.4,I. setosa\n33,5.2,4.1,1.5,0.1,I. setosa\n34,5.5,4.2,1.4,0.2,I. setosa\n35,4.9,3.1,1.5,0.2,I. setosa\n36,5,3.2,1.2,0.2,I. setosa\n37,5.5,3.5,1.3,0.2,I. setosa\n38,4.9,3.6,1.4,0.1,I. setosa\n39,4.4,3,1.3,0.2,I. setosa\n40,5.1,3.4,1.5,0.2,I. setosa\n41,5,3.5,1.3,0.3,I. setosa\n42,4.5,2.3,1.3,0.3,I. setosa\n43,4.4,3.2,1.3,0.2,I. setosa\n44,5,3.5,1.6,0.6,I. setosa\n45,5.1,3.8,1.9,0.4,I. setosa\n46,4.8,3,1.4,0.3,I. setosa\n47,5.1,3.8,1.6,0.2,I. setosa\n48,4.6,3.2,1.4,0.2,I. setosa\n49,5.3,3.7,1.5,0.2,I. setosa\n50,5,3.3,1.4,0.2,I. setosa\n51,7,3.2,4.7,1.4,I. versicolor\n52,6.4,3.2,4.5,1.5,I. versicolor\n53,6.9,3.1,4.9,1.5,I. versicolor\n54,5.5,2.3,4,1.3,I. versicolor\n55,6.5,2.8,4.6,1.5,I. versicolor\n56,5.7,2.8,4.5,1.3,I. versicolor\n57,6.3,3.3,4.7,1.6,I. versicolor\n58,4.9,2.4,3.3,1,I. versicolor\n59,6.6,2.9,4.6,1.3,I. versicolor\n60,5.2,2.7,3.9,1.4,I. versicolor\n61,5,2,3.5,1,I. versicolor\n62,5.9,3,4.2,1.5,I. versicolor\n63,6,2.2,4,1,I. versicolor\n64,6.1,2.9,4.7,1.4,I. versicolor\n65,5.6,2.9,3.6,1.3,I. versicolor\n66,6.7,3.1,4.4,1.4,I. versicolor\n67,5.6,3,4.5,1.5,I. versicolor\n68,5.8,2.7,4.1,1,I. versicolor\n69,6.2,2.2,4.5,1.5,I. versicolor\n70,5.6,2.5,3.9,1.1,I. versicolor\n71,5.9,3.2,4.8,1.8,I. versicolor\n72,6.1,2.8,4,1.3,I. versicolor\n73,6.3,2.5,4.9,1.5,I. versicolor\n74,6.1,2.8,4.7,1.2,I. versicolor\n75,6.4,2.9,4.3,1.3,I. versicolor\n76,6.6,3,4.4,1.4,I. versicolor\n77,6.8,2.8,4.8,1.4,I. versicolor\n78,6.7,3,5,1.7,I. versicolor\n79,6,2.9,4.5,1.5,I. versicolor\n80,5.7,2.6,3.5,1,I. versicolor\n81,5.5,2.4,3.8,1.1,I. versicolor\n82,5.5,2.4,3.7,1,I. versicolor\n83,5.8,2.7,3.9,1.2,I. versicolor\n84,6,2.7,5.1,1.6,I. versicolor\n85,5.4,3,4.5,1.5,I. versicolor\n86,6,3.4,4.5,1.6,I. versicolor\n87,6.7,3.1,4.7,1.5,I. versicolor\n88,6.3,2.3,4.4,1.3,I. versicolor\n89,5.6,3,4.1,1.3,I. versicolor\n90,5.5,2.5,4,1.3,I. versicolor\n91,5.5,2.6,4.4,1.2,I. versicolor\n92,6.1,3,4.6,1.4,I. versicolor\n93,5.8,2.6,4,1.2,I. versicolor\n94,5,2.3,3.3,1,I. versicolor\n95,5.6,2.7,4.2,1.3,I. versicolor\n96,5.7,3,4.2,1.2,I. versicolor\n97,5.7,2.9,4.2,1.3,I. versicolor\n98,6.2,2.9,4.3,1.3,I. versicolor\n99,5.1,2.5,3,1.1,I. versicolor\n100,5.7,2.8,4.1,1.3,I. versicolor\n101,6.3,3.3,6,2.5,I. virginica\n102,5.8,2.7,5.1,1.9,I. virginica\n103,7.1,3,5.9,2.1,I. virginica\n104,6.3,2.9,5.6,1.8,I. virginica\n105,6.5,3,5.8,2.2,I. virginica\n106,7.6,3,6.6,2.1,I. virginica\n107,4.9,2.5,4.5,1.7,I. virginica\n108,7.3,2.9,6.3,1.8,I. virginica\n109,6.7,2.5,5.8,1.8,I. virginica\n110,7.2,3.6,6.1,2.5,I. virginica\n111,6.5,3.2,5.1,2,I. virginica\n112,6.4,2.7,5.3,1.9,I. virginica\n113,6.8,3,5.5,2.1,I. virginica\n114,5.7,2.5,5,2,I. virginica\n115,5.8,2.8,5.1,2.4,I. virginica\n116,6.4,3.2,5.3,2.3,I. virginica\n117,6.5,3,5.5,1.8,I. virginica\n118,7.7,3.8,6.7,2.2,I. virginica\n119,7.7,2.6,6.9,2.3,I. virginica\n120,6,2.2,5,1.5,I. virginica\n121,6.9,3.2,5.7,2.3,I. virginica\n122,5.6,2.8,4.9,2,I. virginica\n123,7.7,2.8,6.7,2,I. virginica\n124,6.3,2.7,4.9,1.8,I. virginica\n125,6.7,3.3,5.7,2.1,I. virginica\n126,7.2,3.2,6,1.8,I. virginica\n127,6.2,2.8,4.8,1.8,I. virginica\n128,6.1,3,4.9,1.8,I. virginica\n129,6.4,2.8,5.6,2.1,I. virginica\n130,7.2,3,5.8,1.6,I. virginica\n131,7.4,2.8,6.1,1.9,I. virginica\n132,7.9,3.8,6.4,2,I. virginica\n133,6.4,2.8,5.6,2.2,I. virginica\n134,6.3,2.8,5.1,1.5,I. virginica\n135,6.1,2.6,5.6,1.4,I. virginica\n136,7.7,3,6.1,2.3,I. virginica\n137,6.3,3.4,5.6,2.4,I. virginica\n138,6.4,3.1,5.5,1.8,I. virginica\n139,6,3,4.8,1.8,I. virginica\n140,6.9,3.1,5.4,2.1,I. virginica\n141,6.7,3.1,5.6,2.4,I. virginica\n142,6.9,3.1,5.1,2.3,I. virginica\n143,5.8,2.7,5.1,1.9,I. virginica\n144,6.8,3.2,5.9,2.3,I. virginica\n145,6.7,3.3,5.7,2.5,I. virginica\n146,6.7,3,5.2,2.3,I. virginica\n147,6.3,2.5,5,1.9,I. virginica\n148,6.5,3,5.2,2,I. virginica\n149,6.2,3.4,5.4,2.3,I. virginica\n150,5.9,3,5.1,1.8,I. virginica\n';

    var data = $.csv.toObjects(csv);

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

        var startElem = null;
        $(svg)
            .mouseup(function (evt) {
                startElem = null;
            })
            .mousemove(function (evt) {
                if (startElem) {
                    startElem.brush(evt);
                }
            });

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
        data.forEach(function (flower) {
            flower.circles = [];
        });

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
                    flower.circles.push(append($gCell, "circle")
                        .attr("class", flower["Species"].substring(3))
                        .attr("cx", x)
                        .attr("cy", cellSize - y)
                        .attr("r", 3));
                });

                //cell attribute label
                if (i == j) {
                    append($gCell, "text")
                        .attr("x", "0.31em")
                        .attr("y", "1em")
                        .text(attr1);
                }

                //brushing

                //background
                append($gCell, "rect")
                    .attr("class", "background")
                    .attr("width", cellSize)
                    .attr("height", cellSize)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    })
                    .mouseup(function (evt) {
                        if (startElem.isClick(evt)) {
                            clear();
                        }
                    });

                //the controlling elements
                append($gCell, "rect")
                    .attr("class", "extent")
                    .attr("width", 0)
                    .attr("height", 0)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize n")
                    .attr("width", 0)
                    .attr("height", 6)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize e")
                    .attr("width", 6)
                    .attr("height", 0)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize s")
                    .attr("width", 0)
                    .attr("height", 6)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize w")
                    .attr("width", 6)
                    .attr("height", 0)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize ne")
                    .attr("width", 6)
                    .attr("height", 6)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize se")
                    .attr("width", 6)
                    .attr("height", 6)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize sw")
                    .attr("width", 6)
                    .attr("height", 6)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
                append($gCell, "rect")
                    .attr("class", "resize nw")
                    .attr("width", 6)
                    .attr("height", 6)
                    .mousedown(function (evt) {
                        startElem = initStartElem(evt);
                    });
            }
        }

        function initStartElem(evt) {
            var target = evt.target,
                cell = target.parentElement,
                $extent = $(".extent", cell),
                $n = $(".n", cell),
                $e = $(".e", cell),
                $s = $(".s", cell),
                $w = $(".w", cell),
                $ne = $(".ne", cell),
                $se = $(".se", cell),
                $sw = $(".sw", cell),
                $nw = $(".nw", cell),
                offset = $(cell).offset(),
                classList = target.classList,
                type = classList.item(classList.length - 1),
                x0 = evt.pageX - offset.left,
                y0 = evt.pageY - offset.top,
                startX = +$extent.attr("x"),
                startY = +$extent.attr("y"),
                startW = +$extent.attr("width"),
                startH = +$extent.attr("height");

            var calPos = {};
            calPos["background"] = function (x1, y1) {
                x1 = adjust(x1);
                y1 = adjust(y1);
                var x = Math.min(x0, x1),
                    y = Math.min(y0, y1),
                    w = Math.abs(x0 - x1),
                    h = Math.abs(y0 - y1);
                clear();
                return [x, y, w, h];
            };
            calPos["extent"] = function (x1, y1) {
                var x = adjust(startX + x1 - x0, 0, cellSize - startW),
                    y = adjust(startY + y1 - y0, 0, cellSize - startH);
                return [x, y, startW, startH];
            };
            calPos["n"] = function (x1, y1) {
                var y = adjust(startY + y1 - y0),
                    yBottom = startY + startH,
                    h = Math.abs(y - yBottom);
                y = Math.min(y, yBottom);
                return [startX, y, startW, h];
            };
            calPos["e"] = function (x1, y1) {
                var xRight = adjust(startX + startW + x1 - x0),
                    w = Math.abs(xRight - startX),
                    x = Math.min(xRight, startX);
                return [x, startY, w, startH];
            };
            calPos["s"] = function (x1, y1) {
                var yBottom = adjust(startY + startH + y1 - y0),
                    h = Math.abs(yBottom - startY),
                    y = Math.min(yBottom, startY);
                return [startX, y, startW, h];
            };
            calPos["w"] = function (x1, y1) {
                var x = adjust(startX + x1 - x0),
                    xRight = startX + startW,
                    w = Math.abs(x - xRight);
                x = Math.min(x, xRight);
                return [x, startY, w, startH];
            };
            calPos["ne"] = function (x1, y1) {
                var nRect = calPos["n"](x1, y1),
                    eRect = calPos["e"](x1, y1);
                return [eRect[0], nRect[1], eRect[2], nRect[3]];
            };
            calPos["se"] = function (x1, y1) {
                var sRect = calPos["s"](x1, y1),
                    eRect = calPos["e"](x1, y1);
                return [eRect[0], sRect[1], eRect[2], sRect[3]];
            };
            calPos["sw"] = function (x1, y1) {
                var sRect = calPos["s"](x1, y1),
                    wRect = calPos["w"](x1, y1);
                return [wRect[0], sRect[1], wRect[2], sRect[3]];
            };
            calPos["nw"] = function (x1, y1) {
                var nRect = calPos["n"](x1, y1),
                    wRect = calPos["w"](x1, y1);
                return [wRect[0], nRect[1], wRect[2], nRect[3]];
            };

            var startElem = {};
            startElem.brush = function (evt) {
                var x1 = evt.pageX - offset.left,
                    y1 = evt.pageY - offset.top;

                var rect = calPos[type](x1, y1),
                    x = rect[0],
                    y = rect[1],
                    w = rect[2],
                    h = rect[3];
                update(x, y, w, h);

                var xRight = x + w,
                    yBottom = y + h,
                    index = $(".cell").index($(cell));

                // clear classes
                data.forEach(function (flower) {
                    flower.circles.forEach(function ($circle) {
                        var circle = $circle[0];
                        circle.classList.remove(circle.classList.item(0));
                    });
                });

                // add classes to the circles of selected data points
                data.forEach(function (flower) {
                    var $circle = flower.circles[index],
                        cx = $circle.attr("cx"),
                        cy = $circle.attr("cy");
                    if (cx >= x && cx <= xRight && cy >= y && cy <= yBottom) {
                        flower.circles.forEach(function ($circle) {
                            $circle.attr("class", flower["Species"].substring(3));
                        });
                    }
                });
            };

            startElem.isClick = function (evt) {
                var x = evt.pageX - offset.left,
                    y = evt.pageY - offset.top;
                if (x === x0 && y === y0) return true;
                else return false;
            };
            return startElem;

            function adjust(x, min, max) {
                if (min == null) {
                    min = 0;
                }
                if (max == null) {
                    max = cellSize;
                }
                if (x < min) {
                    x = min;
                }
                if (x > max) {
                    x = max;
                }
                return x;
            }

            function update(x, y, w, h) {
                var xRight = x + w,
                    yBottom = y + h;
                $extent
                    .attr("x", x)
                    .attr("y", y)
                    .attr("width", w)
                    .attr("height", h);
                $n
                    .attr("x", x)
                    .attr("y", y - 3)
                    .attr("width", w);
                $e
                    .attr("x", xRight - 3)
                    .attr("y", y)
                    .attr("height", h);
                $s
                    .attr("x", x)
                    .attr("y", yBottom - 3)
                    .attr("width", w);
                $w
                    .attr("x", x - 3)
                    .attr("y", y)
                    .attr("height", h);
                $ne.attr("x", xRight - 3).attr("y", y - 3);
                $se.attr("x", xRight - 3).attr("y", yBottom - 3);
                $sw.attr("x", x - 3).attr("y", yBottom - 3);
                $nw.attr("x", x - 3).attr("y", y - 3);
            }

        }

        function clear() {
            // put the selection rects outside the cell
            var $cells = $(".cell");
            $(".extent", $cells).attr("x", -6).attr("y", -6).attr("width", 0).attr("height", 0);
            $(".resize", $cells).attr("x", -6).attr("y", -6).attr("width", 6).attr("height", 6);

            //add back classes as to show all points as selected
            data.forEach(function (flower) {
                flower.circles.forEach(function ($circle) {
                    var circle = $circle[0];
                    if (circle.classList.item(0) == null) {
                        circle.classList.add(flower["Species"].substring(3));
                    }
                });
            });
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