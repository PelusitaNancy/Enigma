# Import requests library
import requests

from requests.auth import HTTPBasicAuth
# Import json library
import json

# Import flask web framework
from flask import Flask

# From flask, import render_template function
from flask import render_template, jsonify

controller = 'sandboxdnac.cisco.com'


def getTicket():
    # Put the IP address or DNS of your DNA Center in this URL
    url = "https://" + controller + "/api/system/v1/auth/token"

    # Content type must be included in the header
    header = {"Accept": "application/json"}

    # Perform a POST on the specified url to get the token
    response = requests.post(url, headers=header, auth=HTTPBasicAuth('devnetuser','Cisco123!'), verify=False)
    data = response.json()
    
    return data["Token"]


def getTopology():
    # URL for network device REST API call to get list of exisiting devices on the network.
    url = "https://" + controller + "/dna/intent/api/v1/topology/physical-topology"

    # Include the content type and ticket in the header
    header = {"content-type": "application/json", "X-Auth-Token": getTicket()}

    # This statement performs a GET on the specified network device url
    response = requests.get(url, headers=header, verify=False)

    # Convert data to JSON format.
    r_json = response.json()

    file = open("topology_data.js", "w")
    file.write("var topologyData =  " +json.dumps(r_json["response"]))
    file.close()

    # Return json object
    return r_json["response"]
	

def getRun(id):
    # URL for network device REST API call to get list of exisiting devices on the network.
    url = "https://" + controller + "/dna/intent/api/v1/network-device/" + id +"/config"

    # Include the content type and ticket in the header
    header = {"content-type": "application/json", "X-Auth-Token": getTicket()}

    # This statement performs a GET on the specified network device url
    response = requests.get(url, headers=header, verify=False)

    # Convert data to JSON format.
    r_json = response.json()

    # Return json object
    return r_json["response"]


#print(getTopology())
#print(getRun('1904ca0d-01be-4d13-88e5-4f4f9980b512'))


# Intialize a web app
app = Flask(__name__)


# Define index route to return topology.html
@app.route("/")
def index():
    # when called '/' which is the default index page, render the template 'topology.html'
    return render_template("index.html")


if __name__ == "__main__":
    app.run()