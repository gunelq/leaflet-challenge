//Challenge part 1:
// Can I render a basic base map? - Set up Leaflet correctly
// Can we fetch the data that we need to plot?

// Helper function
// Establish magnitude size
// I want to make the differences in earthquake magnitudes more pronounced, I choose the larger scaling factor
// helper function
function markerSize(mag) {
  let radius = 1;
if (mag > 0) {
    radius = mag ** 7;
  }
return radius
}

  
  // Establish colors for depth
  function mapColor(depth) {
    switch (true) {
      case depth > 90:
        return "#EA2C2C";
      case depth > 70:
        return "#EA822C";
      case depth > 50:
        return "#EE9C00";
      case depth > 30:
        return "#EECC00";
      case depth > 10:
        return "#D4EE00";
      default:
        return "#98EE00";
    }
  }
  
  
  function createMap(data) {
    // STEP 1: Init the Base Layers
  
    // Define variables for our tile layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
  
    // Step 2: Create the Overlay layers 
    
    let markers = L.markerClusterGroup();
    let circleArray = [];
  
    for (let i = 0; i < data.length; i++) {
      //row=feature
      let row = data[i];
      let location = row.geometry;
  
      // Create marker
      if (location) {
        // Extract coord
        let point = [location.coordinates[1], location.coordinates[0]];
  
        // Make marker
        let marker = L.marker(point);
        let popup = ("<br>Location: " + row.properties.place + "<br>Magnitude: " + row.properties.mag + "<br>Depth: " + row.geometry.coordinates[2]);
        marker.bindPopup(popup);
        markers.addLayer(marker);
  
  
        // Accessing the depth from the coordinates array 
         let depth = row.geometry.coordinates[2];
        // Create circle
        let circleMarker = L.circle(point, {
          fillOpacity:5,
          color:  mapColor(depth),
          fillColor: mapColor(depth),
          radius: markerSize(row.properties.mag),
          weight: 0.5,
          opacity: 1,
        }).bindPopup(popup);
  
        circleArray.push(circleMarker);
      }
    }
  
    // Create layer

    let circleLayer = L.layerGroup(circleArray);
  
  
    // Step 3: BUILD the Layer Controls
  
    // Only one base layer can be shown at a time.
    let baseLayers = {
      Street: street,
      Topography: topo
    };
  
    let overlayLayers = {
      Markers: markers,
      Circles: circleLayer,
    };
  
    // Step 4: INIT the Map
    let myMap = L.map("map", {
      center: [40.7, -94.5],
      zoom: 3,
      layers: [street, markers]
    });
  

  
    // Add the Layer Control filter + legends as needed
    L.control.layers(baseLayers, overlayLayers).addTo(myMap);
  
    let legend = L.control({ position: "bottomright" });
  
    legend.onAdd = function() {
      let div = L.DomUtil.create("div", "info legend");
      
      // Add the header
      let legendHeader = "<h4 class='legend-header'>Legend</h4>";
      div.innerHTML = legendHeader;
  
      // Depth values for the legend
      let depth = [-10, 10, 30, 50, 70, 90];
  
      // Loop through the depth values to create legend items
      for (let i = 0; i < depth.length; i++) {
        div.innerHTML +=
          '<i style="background-color:' + mapColor(depth[i] + 1) + '">&emsp;&emsp;</i> ' +
          depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
      }
      
      return div;
    };
  
    legend.addTo(myMap);
  }
  
  function doWork() {
    // Assemble the API query URLs.
    let EarthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
    d3.json(EarthquakeURL).then(function (data) {
    let data_rows = data.features;
  
        // Create the map with both datasets
        createMap(data_rows);
      });
    };
  
  doWork();
  
  