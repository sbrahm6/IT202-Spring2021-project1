


// When the user clicks the marker, an info window opens.
function initMap() {

    map = new google.maps.Map(document.querySelector('#map-canvas'), {
        zoom: 8,
        center: {
            lat: lats[0],
            lng: lngs[0]
        }
    });



    let infowindow, contentString;


    for (let i in lats) {

        let lat = lats[i];
        let lng = lngs[i];


        let marker = new google.maps.Marker({

            position: new google.maps.LatLng(lat, lng),
            map: map,
            title: "MyMap"
        });

        markers.push[marker];

        google.maps.event.addListener(marker, 'click', () => {
            console.log("Opened InfoWindow!");
            if (infowindow) {
                infowindow.close();
            }
            contentString = '<div id="content">' + addrArr[i] + "</div>";

            infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            infowindow.open(map, marker);
        });

    }
    console.log("All Markers Added");

}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (let j = 0; j < markers.length; j++) {
        markers[j].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

// function keyExists(JSONObject object, String searchedKey) {
//     boolean exists = object.has(searchedKey);
//     if (!exists) {
//         Iterator <?> keys = object.keys();
//         while (keys.hasNext()) {
//             String key = (String)keys.next();
//             if (object.get(key) instanceof JSONObject) {
//                 exists = keyExists(object.get(key), searchedKey);
//             }
//         }
//     }
//     return exists;
// }

// Object obj = JSONValue.parse(str);
// JSONObject json = (JSONObject) obj;
// console.log(keyExists(json, "country")); //Returns true