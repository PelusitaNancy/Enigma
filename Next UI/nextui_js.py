# Import requests library
import requests
from requests.auth import HTTPBasicAuth
# Import json library
import json
# Import flask web framework
from flask import Flask
from flask_restful import reqparse, abort, Api, Resource


def getTicket():
    # Put the IP address or DNS of your DNA Center in this URL
    url = "https://" + CONTROLLER + "/api/system/v1/auth/token"
    # Content type must be included in the header
    header = {"Accept": "application/json"}
    # Perform a POST on the specified url to get the token
    response = requests.post(url, headers=header, auth=HTTPBasicAuth('devnetuser', 'Cisco123!'), verify=False)
    data = response.json()
    return data["Token"]

app = Flask(__name__)
api = Api(app) #la clase requiere un app


parser = reqparse.RequestParser()
parser.add_argument('id')

CONTROLLER = 'sandboxdnac.cisco.com'
HEADERS = {"content-type": "application/json", "X-Auth-Token": getTicket()}

class Topologia(Resource):

    def get(self):
        # URL for network device REST API call to get list of exisiting devices on the network.
        url = "https://" + CONTROLLER + "/dna/intent/api/v1/topology/physical-topology"

        # This statement performs a GET on the specified network device url
        response = requests.get(url, headers=HEADERS, verify=False)

        # Convert data to JSON format.
        r_json = response.json()
        file = open("app/topology_data.js", "w")
        file.write("var topologyData =  " +json.dumps(r_json["response"]))
        file.close()

        return r_json["response"]

class Config(Resource):
    def get(self):
        args = parser.parse_args()
        # URL for network device REST API call to get list of exisiting devices on the network.
        url = "https://" + CONTROLLER + "/dna/intent/api/v1/network-device/" + str(args['id']) +"/config"

        # This statement performs a GET on the specified network device url
        response = requests.get(url, headers=HEADERS, verify=False)

        # Convert data to JSON format.
        r_json = response.json()

        # Return json object
        return r_json["response"]


#print(getTopology())
#print(getRun('1904ca0d-01be-4d13-88e5-4f4f9980b512'))

api.add_resource(Topologia, '/topologia')
api.add_resource(Config, '/config')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)