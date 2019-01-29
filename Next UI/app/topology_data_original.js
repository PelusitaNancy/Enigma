var topologyData = {
	"nodes": [
		{
			"id": 0,
			"name": "HQ",
			"status": "hq",
			"isConnected": false
		},
		{
			"id": 1,
			"name": "Mars",
			"isConnected": true
		},
		{
			"id": 2,
			"name": "Saturn",
			"isConnected": false
		},
		{
			"id": 3,
			"name": "Pluto",
			"isConnected": true
		}
	],
	"links": [
		{	
			"id": 0,
			"source": 0,
			"target": 1
		},
		{	
			"id": 1,
			"source": 0,
			"target": 2
		},
		{	
			"id": 2,
			"source": 0,
			"target": 3
		},
		{	
			"id": 3,
			"source": 1,
			"target": 2
		},
		{	
			"id": 4,
			"source": 2,
			"target": 3
		},
		{		
			"id": 5,
			"source": 3,
			"target": 1
		}
	]
};