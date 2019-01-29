nx.define("ActionPanel", nx.ui.Component, {
    view: {
        content: [
            {
                tag: "button",
                content: "-------",
                events: {
                    click: "{#onDrawPath}"
                }
            },
            {
                tag: "button",
                content: "------",
                events: {
                    click: "{#onClearPaths}"
                }
            }
        ]
    },
    properties: {
        topology: {}
    },
    methods: {
        // add random path
        // add random path
        "onDrawPath": function(sender, events){
            // todo: add code
            var topo = this.topology();
            console.log(topo)
            var pathLayer = topo.getLayer("paths");

            var pathLinks = [
                // HQ -> Mars
                topo.getLink(10),
                // Mars -> Pluto
                topo.getLink(15),
                // Pluto -> Saturn
                topo.getLink(13)

            ];

           console.log(pathLinks)

            // create Path object
            var path = new nx.graphic.Topology.Path({
                "pathWidth": 3,
                "links": pathLinks,
                "arrow": "cap",
                "pathStyle": {
                    // path's color
                    "fill": "#ff0000"
                }
            });

            pathLayer.addPath(path);

        },
        // clear paths
        "onClearPaths": function(sender, events){
            var pathLayer = this.topology().getLayer("paths");
            pathLayer.clear();

        }
    }
});