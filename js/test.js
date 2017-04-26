$(document).ready(function($) {
    "use strict";
    var cy = cytoscape({
        container: $("#CYTO"), // container to render in

        elements: [ // list of graph elements to start with
            { // node a
                data: {
                    id: 'a'
                }
            },
            { // node b
                data: {
                    id: 'c'
                }
            },
            { // edge ab
                data: {
                    id: 'ac',
                    source: 'a',
                    target: 'c'
                }
            }
        ],

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': '#666',
                    'label': 'data(id)'
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                }
            }
        ],

        layout: {
            name: 'springy',
            rows: 1
        }
            /*
        layout: {
            name: 'grid',
            rows: 1
        }
        */

    });
});
