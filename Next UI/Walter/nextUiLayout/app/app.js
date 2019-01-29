nx.define("MulticastList",nx.ui.Component, {
    view: {
        tag: 'ul',
        props: {
            // items to iterate on
            items: '{#multicast}',
            // template for iterations (will remain the same for the items)
            template: {
                tag: 'li',
                content: [
                    {
                        "tag": "span",
                        "content": "{ip}",
                        "props": {
                            "style": "font-weight: bold;"
                        }
                    },
                    {
                        "tag": "span",
                        "content": "{port}"
                    }
                ]
            }
        }
    },
    properties: {
        multicast: null,
    }

});


var multicast = [
    {
        "ip": "1.1.1.1",
        "port": "11",
        "source": "x.x.x.x"
    },
    {
        "ip": "2.2.2.2",
        "port": "22",
        "source": "x.x.x.x"
    },
    {
        "ip": "3.3.3.3",
        "port": "33",
        "source": "x.x.x.x"
    },
];

//create app
var app = new nx.ui.Application();

var multicastList = new MulticastList();
// pass the input array and render it in UI
multicastList.multicast(multicast);

//attach the component to app;
multicastList.attach(app);