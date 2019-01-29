
nx.define("MulticastHE_Model",{
    properties:{
        nodeName: null,
        ip: null,
        fullName:{
            get: function () {
                return "(" + this.nodeName() + "---" + this.ip() + ")";
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


nx.define("MulticastHE_View",nx.ui.Component, {
    view: {
        tag: 'select',
        props: {
            // items to iterate on
            'class': 'multicastHE_list',
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
            items: '{multicastHE_List}'
        }
    }

});

nx.define('MulticastHE_ViewModel', nx.data.ObservableObject, {
    properties: {
        multicastHE_List: null,


    },
    methods: {
        init: function (multicastsHE) {
            this.inherited();
            this.multicastHE_List(new nx.data.ObservableCollection());
            this.load(multicastsHE);
        },
        load: function (multicastsHE) {
            multicastsHE.forEach(function (item) {
                this.multicastHE_List().add(new MulticastHE_Model(item));
            }, this);
        }
    }
});


var mi_multicastsHE = [
    {
        "ip": "1.1.1.1",
        "nodeName": "NHE1"
    },
    {
        "ip": "2.2.2.2",
        "nodeName": "NHE2"
    }
];


