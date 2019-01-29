// instantiate Topology class
var topology = new MyTopology();

// load topology data from app/data.js
topology.data(topologyData);

// bind the topology object to the app
topology.attach(app);

// app must run inside a specific container. In our case this is the one with id="topology-container"
app.container(document.getElementById("topology-container"));