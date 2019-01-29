nx.define('ExtendedScene', nx.graphic.Topology.DefaultScene, {
	methods: {
		clickNode: function(sender, node){
			
			//alert(node.model().get("id"));
			//alert(node.onDrawPath());
			//alert(node.onDrawPath());
			node.onDrawPath();
			node.model().set("probando", "hoooola");
			//alert(node.updateBadge());
			//node.updateBadge();
			
			
			/*var request = new XMLHttpRequest();
			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					//console.log(this.responseText);
					//node.model().set("Show run", JSON.stringify(this.responseText););
				}
			};
			request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
			request.setRequestHeader('content-type', 'application/json');
			//request.setRequestHeader('content-type', 'application/json');
			//request.setRequestHeader('X-Auth-Token', token);
			//request2.setRequestHeader("Authorization", "Basic " + btoa('devnetuser:Cisco123!')); 
			request.send();*/
			
			
			
			var request2 = new XMLHttpRequest();
			request2.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					//console.log(this.responseText);
					node.model().set("Show run", JSON.parse(this.responseText));
					
				}
			};
			request2.open('GET', 'http://localhost:5000/config?id=' + node.model().get("id"), true);
			request2.send();
			
			//console.log(node.model().get("id"));
			/*var request = new XMLHttpRequest();
			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					node.model().set("Show run", JSON.stringify(this.responseText).response);
				}
			};
			request.open('GET', 'https://sandboxdnac.cisco.com/dna/intent/api/v1/network-device/'+node.model().get("id")+'/config', false);
			//request.withCredentials = true;
			request.setRequestHeader("X-Auth-Token", node.model().get("Token"));
			request.setRequestHeader("content-type", "application/json");
			//request.setRequestHeader("X-Auth-Token", node.model().get("Token"));
			request.send();
			node.model().set("Show run", JSON.stringify(this.responseText).response);*/
			
			
			/*var xmlHttp = new XMLHttpRequest();
			xmlHttp.open('GET', 'https://sandboxdnac.cisco.com/dna/intent/api/v1/network-device/1904ca0d-01be-4d13-88e5-4f4f9980b512/config', false);
			//xmlHttp.setRequestHeader("Access-Control-Allow-Headers", "X-Auth-Token")
			//xmlHttp.withCredentials = true;
			xmlHttp.setRequestHeader("access_token", node.model().get("Token")); 
			//xmlHttp.setRequestHeader("content-type", "application/json");
			//xmlHttp.send();
			//console.log(xmlHttp);*/
			
		}
	}
});