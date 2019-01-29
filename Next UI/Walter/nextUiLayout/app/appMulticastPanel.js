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


    var multicastViewModel = new MulticastViewModel(mi_multicasts);

    var multicastView = new MulticastView();

    multicastView.model(multicastViewModel);


    var multicastHE_ViewModel = new MulticastHE_ViewModel(mi_multicastsHE);

    var multicastHE_View = new MulticastHE_View();

    multicastHE_View.model(multicastHE_ViewModel);


    multicastView.attach(app);
    multicastHE_View.attach(app);

    actionPanel.attach(app);


    // app must run inside a specific container. In our case this is the one with id="topology-container"
    app.container(document.getElementById("topology-container"));

})(nx);