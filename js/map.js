'use strict';

// //initialize the map
const map = L.map('mapContainer')
.setView([47.620506, -122.349277], 11);

//Add a basemap
L.tileLayer('http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png')
.addTo(map);

const marker = L.marker([47.620506, -122.349277]).bindPopup("<b>Hello Tourist</b><br>The Space Needle is an observation tower in Seattle, Washington, a landmark of the Pacific Northwest, and an icon of Seattle. It was built in the Seattle Center for the 1962 World's Fair, which drew over 2.3 million visitors, when nearly 20,000 people a day used its elevators.")
.openPopup()
.addTo(map);

const marker1 = L.marker([47.6101359, -122.3420567]).bindPopup("<b>Pike Place Market</b><br>Pike Place Market is a public market overlooking the Elliott Bay waterfront in Seattle, Washington, United States. The Market opened August 17, 1907, and is one of the oldest continuously operated public farmers' markets in the United States. It is a place of business for many small farmers, craftspeople and merchants. Named after the central street, Pike Place runs northwest from Union Street to Virginia Street. With more than 10 million visitors annually, Pike Place Market is Seattle's most popular tourist destination and is the 33rd most visited tourist attraction in the world")
.openPopup()
.addTo(map);

const marker2 = L.marker([46.8799663, -121.72690940000001]).bindPopup("<b>Mount Rainier</b><br>Mount Rainier (pronounced: /reɪˈnɪər/), is the highest mountain of the Cascade Range of the Pacific Northwest, and the highest mountain in the U.S. state of Washington. It is a large active stratovolcano located 54 miles (87 km) south-southeast of Seattle, in the Mount Rainier National Park. It is the most topographically prominent mountain in the contiguous United States and the Cascade Volcanic Arc, with a summit elevation of 14,411 ft (4,392 m). Mt. Rainier is considered one of the most dangerous volcanoes in the world, and it is on the Decade Volcano list.[6] Because of its large amount of glacial ice, Mt. Rainier could produce massive lahars that could threaten the entire Puyallup River valley, and poses a grave threat to the southern sections of the Seattle metropolitan area, a city of over 650,000 people with more than 3.7 million living in its metropolitan area.")
.openPopup()
.addTo(map);

// ***********************************************************
