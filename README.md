# Scatterplot Graph

The aim of this project is to visualize data with a scatterplot graph using JSON Data.

It is in a functionality similar to https://codepen.io/freeCodeCamp/full/bgpXyK.

Example - Doping in Professional Bicycle Racing.

## UX

User stories taken from https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-scatterplot-graph

As a user, I can see a title element that has corresponding `id=title`.

As a user, I can see an x-axis that has a corresponding `id=x-axis`.

As a user, I can see a y-axis that has corresponding `id=y-axis`.

As a user, I can see dots, that each have a class of `dot`, which represent The
data being plotted.

Each dot should have the properties `data-xvalue` and `data-yvalue` containing their
corresponding x and y values.

The `data-xvalue` and `data-yvalue` of each dot should be within the range of
the actual data and in the correct data format.  For `data-xvalue`, integers
(full years) or Date objects are acceptable for test evaluation.  For `data-yvalue`
(minutes), use Date objects.

The `data-xvalue` and its corresponding dot should align with the corresponding
point/value on the x-axis.

The `data-yvalue` and its corresponding dot should align with the corresponding
point/value on the y-axis.

As a user, I can see multiple tick labels on the y-axis with `%M:%S` time format.

As a user, I can see multiple tick labels on the x-axis that show the year.

As a user, I can see that the range of the x-axis labels are within the range of
the x-axis data.

As a user, I can see that the range of the y-axis labels are within the range of
the y-axis data.

As a user, I can mouse over an area and see a tooltip with a corresponding 
`id=tooltip` which displays more information about the area.

My tooltip should have a `data-year` property that corresponds to the `data-xvalue`
of the active area.

Data from https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json

Data - year (x-axis) and time (y-axis).

[Wireframes](wireframes/wireframe-scatterplot-graph) are supplied.

## Features

This scatterplot allows the user to view more information about the area when a dot is hovered.  If there was more time, update the data.

## Technologies

This project uses HTML5, CSS3, JavaScript and D3.  Additional Technologies include Google Fonts.

## Testing

Use `<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>`
below the custom script for testing.  Select run tests.  Make sure all the tests are passing.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/scatterplot-graph) at the
main branch.

## Credits

### Content

Did a Google Search on freecodecamp scatterplot.

HTML5 (within the body tag), CSS and JavaScript taken from [Notion](https://www.notion.so/Visualize-Data-with-a-Scatterplot-Graph-f3b277dc35294accb4d42a0358b92009)
website, accessed on 6 October 2020.

### Media

Data provided by https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json

### Acknowledgements

paycoguy at freecodecamp.org

[YouTube Video](https://www.youtube.com/watch?v=OvtT4X2L9Fo) from Ganesh H.  Accessed on 6 October 2020.

[Notion](https://www.notion.so/Visualize-Data-with-a-Scatterplot-Graph-f3b277dc35294accb4d42a0358b92009).  Accessed
on 6 October 2020.




