from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

import sys,os,binascii
import sys
import os
import os.path
import com.cisco.wae.design
from com.cisco.wae.design.model.plotLayout import LayoutKey
from com.cisco.wae.design import ServiceConnectionManager
from com.cisco.wae.design.model.net import NodeKey


def getNodoInfo(nodeList,nodeName):

    for node in nodeList:
        if node["name"] == nodeName:
            return node
    return -1


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():

    return 'Hello World!'

@app.route('/getMulticastList',methods=['GET'])
def getMulticastList():
    print("algo")
    multicastList = [
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
        }]


    response = jsonify({'multicastList':multicastList })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == '__main__':
    app.run()
