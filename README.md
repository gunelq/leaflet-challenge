# leaflet-challenge
Introduction




In this challenge, the following information was provided as background: 


The United States Geological Survey (USGS) was responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists developed new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. The USGS was interested in building a new set of tools that would allow them to visualize their earthquake data. They collected a massive amount of data from all over the world each day, but they lacked a meaningful way of displaying it. In this challenge, you were tasked with developing a way to visualize USGS data that would allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

Instructions
The instructions for this challenge  have two parts:

Part 1: Created the Earthquake Visualization
Part 2: Gathered and Plotted More Data



Part 1: Created the Earthquake Visualization
The first task was to visualize an earthquake dataset. The steps completed were:

1. Got the dataset:
The USGS provided earthquake data in a number of different formats, updated every 5 minutes. You visited the USGS GeoJSON Feed page and chose a dataset to visualize. 
2. Imported and visualized the data:
Using Leaflet, you created a map that plotted all the earthquakes from the dataset based on their longitude and latitude.
Data markers reflected the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appeared larger, and earthquakes with greater depth appeared darker in color.

Hint: The depth of the earth could be found as the third coordinate for each earthquake.
You included popups that provided additional information about the earthquake when its associated marker was clicked.
You created a legend that provided context for your map data.
The visualization looked something like the preceding map.



Part 2: Gathered and Plot More Data
In this part, a second dataset was plotted on the map to illustrate the relationship between tectonic plates and seismic activity. The dataset was pulled in and visualized alongside the original data. Data on tectonic plates could be found at GitHub - Tectonic Plates. The following image was an example screenshot of the final product:


Tasks performed:

Plotted the tectonic plates dataset on the map in addition to the earthquakes.
Added other base maps to choose from.
Put each dataset into separate overlays that could be turned on and off independently.
Added layer controls to the map.
Folder and Files
Leaflet-Part-1: Contained a static folder inside which had a css folder for styles and a js folder with a logic.js file (JavaScript code). This folder also contained the Mapbox API key for part 1 of this challenge.
Leaflet-Part-2: Similar to Part 1, this folder contained a static folder with css and js folders, including the logic.js file and the Mapbox API key for part 2 of this challenge.

You can view the project on GitHub Pages at the following link:


https://gunelq.github.io/leaflet-challenge/Leaflet-Part-1/index.html
https://gunelq.github.io/leaflet-challenge/Leaflet-Part-2/index.html


References
Dataset created by the United States Geological Survey
© 2024 edX Boot Camps LLC
