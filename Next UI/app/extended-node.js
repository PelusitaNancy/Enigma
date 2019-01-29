nx.define("ExtendedNode", nx.graphic.Topology.Node, {

	properties: {
				topology: {}
			},
	methods: {
		
		// add random path
		"onDrawPath": function(sender, events){
			// todo: add code
			var topo = this.topology();
			var lista_links = topo.getLayer("paths").topology().graph().links();
			var camino = []
			var source = ""
			var target = ""
			
			var hey = []
			for (y=0; y<(lista_links.length); y++){
				//console.log(source);
				//console.log(target);
				
				for (x=0; x<lista_links.length; x++){
					
					
					if (this.model().get("id") == lista_links[x].source || this.model().get("id") == lista_links[x].target){
						console.log("source " + lista_links[x].source + " target " + lista_links[x].target);
						//console.log(lista_links[x].id); 
						
						if (!hey.includes(lista_links[x].id)){ 
							camino.push(topo.getLink(lista_links[x].id))
							source = lista_links[x].source
							target = lista_links[x].target
							hey.push(lista_links[x].id)
						}
						
											
						//console.log("hola "+ lista_links[x]);
					}else if (source == lista_links[x].source || target == lista_links[x].target){
						console.log("entrando al else");
						
						if (!hey.includes(lista_links[x].id)){ 
							camino.push(topo.getLink(lista_links[x].id))
							source = lista_links[x].source
							target = lista_links[x].target
							hey.push(lista_links[x].id)
						}
						
					}
				}
			}						
			console.log(hey);
			//console.log(lista_links[x].target);
			
			
			
			var pathLayer = topo.getLayer("paths");
			/*var pathLinks = [ 
				// HQ -> Mars
				topo.getLink(424434),
				// Mars -> Pluto
				topo.getLink(424431)
			];*/
			
			// create Path object
			var path = new nx.graphic.Topology.Path({
				"links": camino,
				"arrow": "end",
				"pathStyle": {
					// path's color
					"fill": "#ff0000"
				}
			});

			pathLayer.addPath(path);
			//return topo.getLink(424434).get("target");
			//console.log(topo.getLink(424434).model()); 
			//console.log(topo.getLink(424434).model().get("linkKey"));
			//console.log(pathLayer);
			//console.log(topo.getLayer("paths").topology().graph().links());
			//return topo.getLink(424434).model().get("linkKey") + " hola " +topo.getLink(424434).model().get("reverseLinkKey"); 
			//return topo.getLayer("paths").topology().graph().links()[0].endPortID;
			//return topo.getLayer("paths").topology().graph().links();
		}
	}
});


/*nx.define("ExtendedNode", nx.graphic.Topology.Node, {
	view: {
		content: [
			{
				tag: "button",
				content: "Trafico Multicast",
				events: {
					click: "{#onDrawPath}"
				}
			},
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




/*nx.define('ExtendedNode', nx.graphic.Topology.Node, {
	
	/*methods: {
		
		'setModel': function (model) {
			this.inherited(model);
			this.updateBadge();
		},
		
		"updateBadge": function(){
			// draw/not draw the badge based on status
			this._onDrawPath();
		},
		
		// add random path
		"_onDrawPath": function(sender, events){
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
		"_onClearPaths": function(sender, events){
			// todo: add code
			var pathLayer = this.topology().getLayer("paths");
			pathLayer.clear();
		}
	}
	
	
	/*
	methods: {

		// called when the model is about to initialize
		'setModel': function (model) {
			this.inherited(model);
			this.updateBadge();
		},
		"updateBadge": function(){
			// draw/not draw the badge based on status
			/*var xhr = new XMLHttpRequest();
			xhr.open("GET", "https://sandboxdnac.cisco.com/dna/intent/api/v1/network-device/1904ca0d-01be-4d13-88e5-4f4f9980b512/config", true);
			xhr.responseType = 'text';
			xhr.setRequestHeader("content-type", 'application/json');
			xhr.setRequestHeader("X-Auth-Token", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmQ5OGQzNWIyYmVhMDAwNGMzZWM5YmYiLCJhdXRoU291cmNlIjoiaW50ZXJuYWwiLCJ0ZW5hbnROYW1lIjoiVE5UMCIsInJvbGVzIjpbIjViZDM2MzRiYjJiZWEwMDA0YzNlYmI1YSJdLCJ0ZW5hbnRJZCI6IjViZDM2MzRhYjJiZWEwMDA0YzNlYmI1OCIsImV4cCI6MTU0NjQ3NzAwNiwidXNlcm5hbWUiOiJkZXZuZXR1c2VyIn0.NXgl8hlmdXWLGQ8DPpvIYLGupqhaygDXZEclV4BjaOQ');
			xhr.send();
			return xhr.status;*/
			
			/*var message = null;
			var xmlhttp = new XMLHttpRequest();
			
			xmlhttp.open("GET", "https://sandboxdnac.cisco.com/dna/intent/api/v1/network-device/1904ca0d-01be-4d13-88e5-4f4f9980b512/config", true);
			xmlhttp.withCredentials = true
			
			var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmQ5OGQzNWIyYmVhMDAwNGMzZWM5YmYiLCJhdXRoU291cmNlIjoiaW50ZXJuYWwiLCJ0ZW5hbnROYW1lIjoiVE5UMCIsInJvbGVzIjpbIjViZDM2MzRiYjJiZWEwMDA0YzNlYmI1YSJdLCJ0ZW5hbnRJZCI6IjViZDM2MzRhYjJiZWEwMDA0YzNlYmI1OCIsImV4cCI6MTU0NjYyOTMwMiwidXNlcm5hbWUiOiJkZXZuZXR1c2VyIn0.RhDHQwDoQHKs2VphtdV7tP_TEwpWA6fBU4-77ZG9onQ';
				
			//xmlhttp.setRequestHeader("access-control-allow-origin", '*');
			xmlhttp.setRequestHeader("X-Auth-Token", token);
			//xmlhttp.setRequestHeader("content-type", 'application/json');
			
			//xmlhttp.setRequestHeader("access-control-allow-headers", '*');
		
			xmlhttp.send();
			return xmlhttp.readyState;
			
			
			
			
			
		}
	}
});*/