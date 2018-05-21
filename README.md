# scatterplot-matrix
coding practice

## inspiration

the coding practice is following [this](http://mbostock.github.io/d3/talk/20111116/iris-splom.html) example created by [Mike Bostock](https://bost.ocks.org/mike/).

## compatibility
open index.html with Microsoft Edge please...

in Chrome using the `$.get()` method to get local file triggers cross origin error. 
this issue is left for a future me to tackle with -_-

alternatively, in row 3 of `main.js` I put the csv data directly to a variable as a string. currently it is disabled as it is turned to a comment. you can restore it and remove the `$.get()` part, and then open it with Chrome. 

## data
Edgar Anderson's *iris* data set, from [Iris flower data set - Wikipedia](https://en.wikipedia.org/wiki/Iris_flower_data_set)

## issues

1. the `$.get()` issue
2. brushing interferes with text labels
3. ticks on axes are solely based on min, max values and prescribed number of ticks