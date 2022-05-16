window.addEventListener('load', function(e) {
	console.log('script.js loaded')
	init();
});

function init() {
	document.locationForm.lookup.addEventListener('click', function(event) {
		let locationDiv = document.getElementById('locationData');
		locationDiv.textContent = '';
		event.preventDefault();
		var locationId = document.locationForm.locationId.value;
		if (!isNaN(locationId) && locationId > 0) {
			getLocation(locationId);
		}
	});


	document.addLocationForm.addLocation.addEventListener('click', function(event) {
		let locationDiv = document.getElementById('locationData');
		locationDiv.textContent = '';
		event.preventDefault();
		let locForm = document.addLocationForm;
		let newLocation = {
			name: locForm.name.value

		};
		console.log(newLocation);
		postNewLocation(newLocation);

	});

	document.allLocationForm.listAll.addEventListener('click', (e) => {
		let locationDiv = document.getElementById('locationData');
		locationDiv.textContent = '';
		e.preventDefault();
		findAllLocations();
	});

	document.updateLocationForm.submit.addEventListener('click', updateLocation);

	document.deleteLocationForm.submit.addEventListener('click', (e) => {
		let locationDiv = document.getElementById('locationData');
		locationDiv.textContent = '';
		e.preventDefault();
		let id = document.deleteLocationForm.locationId.value;
		deleteLocation(id);
	});
	
	document.numberOfLocations.calculateLocations.addEventListener('click', (e) => {
		let locationDiv = document.getElementById('locationData');
		locationDiv.textContent = '';
		e.preventDefault();
		numberOfLocations();
	});
		
	
	


}

function getLocation(locationId) {
	console.log('getLocation(): locationId is ' + locationId);
	let xhr = new XMLHttpRequest();
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.open('GET', 'api/index/' + locationId);
	console.log('xhr.readyState = ' + xhr.readyState);
	xhr.onreadystatechange = function() {
		console.log('xhr.readyState = ' + xhr.readyState);
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let locationJson = xhr.responseText;
				console.log(locationJson);
				let location = JSON.parse(locationJson);
				console.log(location);
				displayLocation(location);
			} else {

			}
		}
	}

	xhr.send();

}


function numberOfLocations() {
	console.log("index function hit")
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let locations = JSON.parse(xhr.responseText);
				console.log(locations);
				let numberOfLocations = locations.length;
				let location = document.getElementById("locations");
				let h3 = document.createElement("h3");
				h3.textContent = "This is how many locations I have travled to: " + numberOfLocations;
				location.appendChild(h3);
				}}}
				xhr.send();
}



function findAllLocations() {
	console.log("index function hit")
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let locations = JSON.parse(xhr.responseText);
				displayLocations(locations);
			} else {
				console.log("Location Not Found")
				let locationDiv = document.getElementById('locationData');
				locationDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Locations not found. . ."
				locationDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}

function postNewLocation(newLocation) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/index');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let location = JSON.parse(xhr.responseText);
				displayLocation(location);
			}
		}
		else {
			// ???????
		};
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newLocation));
}

function displayLocation(location) {
	console.log(location);
	let locationDiv = document.getElementById('locationData');
	let h1 = document.createElement('h1');
	h1.textContent = location.name;
	locationDiv.appendChild(h1);
}

function displayLocations(locations) {
	let locationDiv = document.getElementById('locationData');
	locationDiv.textContent = '';
	console.log(locations);
	let h1 = document.createElement('h1');
	h1.textContent = "";
	for (let location of locations) {
		displayLocation(location);
	}

}

function updateLocation(e) {
	e.preventDefault();
	let location = {
		name: document.updateLocationForm.name.value
	};
	console.log(location);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/index/' + document.updateLocationForm.locationId.value, true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let data = JSON.parse(xhr.responseText);
				displayLocation(data);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	xhr.send(JSON.stringify(location));
}

function deleteLocation(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/index/' + id)
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let locationDiv = document.getElementById('locationData');
				locationDiv.textContent = 'Location was deleted';
			} else {
				console.log("Location Not Found")
				let locationDiv = document.getElementById('locationData');
				locationDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Location not found. . ."
				locationDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}
