var wms_layers = [];


        var lyr_Geodata_0 = new ol.layer.Tile({
            'title': 'Geodata',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_Geodata_Label_1 = new ol.layer.Tile({
            'title': 'Geodata_Label',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Point_Q21_22_3 = new ol.format.GeoJSON();
var features_Point_Q21_22_3 = format_Point_Q21_22_3.readFeatures(json_Point_Q21_22_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Q21_22_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Q21_22_3.addFeatures(features_Point_Q21_22_3);
var lyr_Point_Q21_22_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Point_Q21_22_3, 
                style: style_Point_Q21_22_3,
                interactive: true,
                title: '<img src="styles/legend/Point_Q21_22_3.png" /> Point_Q21_22'
            });
var format_Route_Q21_22_4 = new ol.format.GeoJSON();
var features_Route_Q21_22_4 = format_Route_Q21_22_4.readFeatures(json_Route_Q21_22_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Q21_22_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Q21_22_4.addFeatures(features_Route_Q21_22_4);
var lyr_Route_Q21_22_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_Q21_22_4, 
                style: style_Route_Q21_22_4,
                interactive: true,
                title: '<img src="styles/legend/Route_Q21_22_4.png" /> Route_Q21_22'
            });

lyr_Geodata_0.setVisible(true);lyr_Geodata_Label_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Point_Q21_22_3.setVisible(true);lyr_Route_Q21_22_4.setVisible(true);
var layersList = [lyr_Geodata_0,lyr_Geodata_Label_1,lyr_OSMStandard_2,lyr_Point_Q21_22_3,lyr_Route_Q21_22_4];
lyr_Point_Q21_22_3.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'GR': 'GR', });
lyr_Route_Q21_22_4.set('fieldAliases', {'fid': 'fid', });
lyr_Point_Q21_22_3.set('fieldImages', {'fid': 'TextEdit', 'CP': 'TextEdit', 'Layer': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': '', 'Remark': '', 'GR': '', });
lyr_Route_Q21_22_4.set('fieldImages', {'fid': '', });
lyr_Point_Q21_22_3.set('fieldLabels', {'fid': 'no label', 'CP': 'no label', 'Layer': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Order': 'no label', 'Remark': 'no label', 'GR': 'no label', });
lyr_Route_Q21_22_4.set('fieldLabels', {'fid': 'no label', });
lyr_Route_Q21_22_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});