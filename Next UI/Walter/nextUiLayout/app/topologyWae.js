(function (nx) {
    nx.define('MyTopology', nx.graphic.Topology, {
        methods: {
            "init": function(){
                this.inherited({
                    // width 100% if true
                    // special configuration for nodes
                    "nodeConfig": {
                        "label": "model.name",
                        "iconType": "router",
                        "lockYAxle": true,
                        "lockXAxle": true,
                        //"labelVisibility": false

                    },
                    // special configuration for links
                    "linkConfig": {
                        "linkType": "parallel"
                        //"linkType": "curve"
                        //"color": "red"
                    },
                    // if true, the nodes' icons are shown, otherwise a user sees a dot instead
                    "showIcon": true,
                    // automatically compute the position of nodes
                    //"dataProcessor": "force",
                    width: 1200,
                    height: 720
                });
            }
        }
    });
})(nx);