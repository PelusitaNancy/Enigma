
nx.define("MulticastMonitorPanel_Model",{
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


nx.define("MulticastMonitorPanel_View",nx.ui.Component, {
    view:
        {
            tag: 'div',
            props:{
                //"hidden": false,
                "align": "right"
            },
            content: [
                {
                    tag: "button",
                    content: "Get Multicast List",
                    props:{
                        //"disabled": 1
                    },
                    events: {
                        click: "{#onMulticastListGet}"
                    }
                },
                {
                    tag: 'div',
                    content: [
                        {
                            tag: 'select',
                            name: "listMulticastElement",
                            id: "idListElement",
                            props: {
                                "disabled": 1,
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
    methods: {

        "onMulticastListGet": function(sender, events){
            // todo: add code

            console.log("click Get Multicast lIST")

            MulticastMonitorPanel_View["@view"].content["1"].content["0"].props.disabled='false'
            //MulticastMonitorPanel_View["@view"].content["1"].content["0"].removeAttribute('disabled')
            console.log("enable list")
            var multicastListElement= document.getElementsByClassName("multicast-list");
            multicastListElement["0"].disabled=false


            var request2 = new XMLHttpRequest();
            request2.onreadystatechange = function() {
                console.log(this.status)
                if (this.readyState == 4 && this.status == 200) {
                    //console.log(this.responseText);
                    var respuesta= JSON.parse(this.responseText);
                    var listaMulticast=respuesta.multicastList
                    console.log(listaMulticast)
                    var multicastListElement= document.getElementsByClassName("multicast-list");


                    var index=0;
                    multicastListElement[0].options.length = 0;
                    var valorOption = ""
                    for(element in listaMulticast)
                    {
                        var opt = document.createElement("option");
                        console.log(listaMulticast[index].ip)
                        //opt.value= listaMulticast[index].ip;
                        //opt.innerHTML = element; // whatever property it has

                        // then append it to the select element
                        //multicastListElement.appendChild(opt);
                        valorOption = listaMulticast[index].ip +": " + listaMulticast[index].port
                        multicastListElement[0].options[multicastListElement[0].options.length] = new Option(valorOption, index);
                        index++;
                    }

                    //MulticastMonitorPanel_ViewModel.multicastList=this.responseText
                    //MulticastMonitorPanel_ViewModel.multicastList=listaMulticast
                    //MulticastMonitorPanel_ViewModel["@methods"].load(listaMulticast)
                }
            };
            request2.open('GET', 'http://localhost:5000/getMulticastList', true);
            request2.setRequestHeader('Access-Control-Allow-Origin','*')
            request2.send();

        },

    }


});

nx.define('MulticastMonitorPanel_ViewModel', nx.data.ObservableObject, {
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
                this.multicastList().add(new MulticastMonitorPanel_Model(item));
            }, this);
        }
    }
});

/*
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
*/
var mi_multicasts = [
    {
        "ip": "----",
        "port": "----",
        "source": "x.x.x.x"


    }]

