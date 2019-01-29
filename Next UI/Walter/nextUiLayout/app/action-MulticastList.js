
nx.define("MulticastModel",{
    properties:{
        ip: null,
        port: null,
        source: null,
        fullName:{
            get: function () {
                return "(" + this.ip() + ":" + this.port() + ") , (" + this.source()+ ")";
            }
        }

    },
    methods: {
        init: function (args) {
            this.inherited();
            this.sets(args);
        }
    }

});


nx.define("MulticastView",nx.ui.Component, {


    view:
        {
            tag: 'div',
            content: [
                {
                    tag: "button",
                    content: "Get Multicast List",
                    props:{
                        "disabled": 1
                    },
                    events: {
                        click: "{#onDrawPath}"
                    }
                },
                {
                    tag: "button",
                    content: "Clear Paths",
                    events: {
                        click: "{#onClearPaths}"
                    }
                },
                {
                    tag: 'div',
                    content: [
                        {
                            tag: 'select',
                            props: {
                                // items to iterate on
                                'class': 'multicast-list',
                                // template for iterations (will remain the same for the items)
                                template: {
                                    tag: 'option',
                                    content: [

                                        {
                                            "tag": "value",
                                            "content": "{fullName}"
                                        },
                                    ]
                                },
                                items: '{multicastList}'
                            }
                        }
                    ]
                }
            ]
        },


});

nx.define('MulticastViewModel', nx.data.ObservableObject, {
    properties: {
        multicastList: null,
        algo: "algo mas"

    },
    methods: {
        init: function (multicasts) {
            this.inherited();
            this.multicastList(new nx.data.ObservableCollection());
            this.load(multicasts);
        },
        load: function (multicasts) {
            multicasts.forEach(function (item) {
                this.multicastList().add(new MulticastModel(item));
            }, this);
        }
    }
});


var mi_multicasts = [
    {
        "ip": "1.1.1.1",
        "port": "11",
        "source": "x.x.x.x"
    },
    {
        "ip": "2.2.2.2",
        "port": "22",
        "source": "y.y.x.x"
    },
    {
        "ip": "3.3.3.3",
        "port": "33",
        "source": "z.z.x.x"
    }
];


