nx.define("ActionPanel", nx.ui.Component, {
	view: {
		content: [
			/*{
				tag: "button",
				content: "Trafico Multicast",
				events: {
					click: "{#onDrawPath}"
				}
			},*/
			{
				tag: "button",
				content: "Limpiar",
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
		"onDrawPath": function(sender, events){
			// todo: add code
			var topo = this.topology();
			var pathLayer = topo.getLayer("paths");
			var pathLinks = [
				// HQ -> Mars
				topo.getLink(424434),
				// Mars -> Pluto
				topo.getLink(424431)
			];

			// create Path object
			var path = new nx.graphic.Topology.Path({
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
			// todo: add code
			var pathLayer = this.topology().getLayer("paths");
			pathLayer.clear();
		}
	}
});