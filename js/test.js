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
                    id: 'b'
                }
            },
            { // node c
                data: {
                    id: 'c'
                }
            },
            { // node d
                data: {
                    id: 'd'
                }
            },
            { // edge ac
                data: {
                    id: 'ac',
                    source: 'a',
                    target: 'c',
                    weight: 50
                }
            },
            { // edge bd
                data: {
                    id: 'bd',
                    source: 'b',
                    target: 'd',
                    weight: 50
                }
            },
            { // edge dc
                data: {
                    id: 'dc',
                    source: 'd',
                    target: 'c',
                    weight: 50
                }
            },
            { // edge ba
                data: {
                    id: 'ba',
                    source: 'b',
                    target: 'a',
                    weight: 1
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

    var edges = cy.filter(function(element, index) {
        return !element.isNode();
    });
    var nodes = cy.filter(function(element, index) {
        return element.isNode();
    });

    var nodesAndEdges = edges.union(nodes);

    var dijkstra = cy.elements().dijkstra('#a', function(self){
        return self.data('weight');
    });

    var pathToD = dijkstra.pathTo(cy.$("#d"));
    var things = pathToD.map(function(i){return i.id();});
    console.log(pathToD);
    console.log(things);
});
