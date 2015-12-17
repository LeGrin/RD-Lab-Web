var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

function addingElement (nodeid, elementType) {
	var node = document.getElementById(nodeid);
	node.appendChild(document.createElement(elementType))
}

addingElement("id1","input");

function logger (arg1, arg2, arg3) {
	console.log(arg1+arg2+arg3);
};

function arrayadd (arg1, arg2, arg3) {
	var a = [];
	a.push(arg1);
	a.push(arg2);
	a.push(arg3);
	console.log(a);
}