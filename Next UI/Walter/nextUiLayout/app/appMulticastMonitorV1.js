(function(nx){
    //create app
    var app = new nx.ui.Application();



    // instantiate Topology class
    var topology = new MyTopology();
    var actionPanel = new ActionPanel();
    actionPanel.topology(topology);

    topology.registerIcon("settings", "images/settings.png", 40, 48);


    // load topology data from app/data.js
    topology.data(topologyData);



    // bind the topology object to the app
    topology.attach(app);
    // add action panel to the view


    var multicastMonitorPanel_ViewModel = new MulticastMonitorPanel_ViewModel(mi_multicasts);

    var multicastMonitorPanel_View = new MulticastMonitorPanel_View();

    multicastMonitorPanel_View.model(multicastMonitorPanel_ViewModel);

    actionPanel.attach(app);
    multicastMonitorPanel_View.attach(app);




    // app must run inside a specific container. In our case this is the one with id="topology-container"
    app.container(document.getElementById("topology-container"));

})(nx);