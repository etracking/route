var wms_layers = [];


        var lyr_Geodata_Imagery_0 = new ol.layer.Tile({
            'title': 'Geodata_Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/imagery/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_Geodata_1 = new ol.layer.Tile({
            'title': 'Geodata',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_Geodata_Label_2 = new ol.layer.Tile({
            'title': 'Geodata_Label',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UTM_4 = new ol.format.GeoJSON();
var features_UTM_4 = format_UTM_4.readFeatures(json_UTM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_4.addFeatures(features_UTM_4);
var lyr_UTM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UTM_4, 
                style: style_UTM_4,
                interactive: true,
                title: 'UTM'
            });

        var lyr_istw_5 = new ol.layer.Tile({
            'title': 'istw',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://istw.hkirscout.org.hk/2023-06-QPNG/{z}/{x}/{y}.png'
            })
        });
var format_Route_Q21_22_6 = new ol.format.GeoJSON();
var features_Route_Q21_22_6 = format_Route_Q21_22_6.readFeatures(json_Route_Q21_22_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Q21_22_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Q21_22_6.addFeatures(features_Route_Q21_22_6);
var lyr_Route_Q21_22_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_Q21_22_6, 
                style: style_Route_Q21_22_6,
                interactive: true,
                title: '<img src="styles/legend/Route_Q21_22_6.png" /> Route_Q21_22'
            });
var format_Point_Q21_22_7 = new ol.format.GeoJSON();
var features_Point_Q21_22_7 = format_Point_Q21_22_7.readFeatures(json_Point_Q21_22_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Q21_22_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Q21_22_7.addFeatures(features_Point_Q21_22_7);
var lyr_Point_Q21_22_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Point_Q21_22_7, 
                style: style_Point_Q21_22_7,
                interactive: true,
                title: '<img src="styles/legend/Point_Q21_22_7.png" /> Point_Q21_22'
            });

lyr_Geodata_Imagery_0.setVisible(true);lyr_Geodata_1.setVisible(true);lyr_Geodata_Label_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_UTM_4.setVisible(true);lyr_istw_5.setVisible(true);lyr_Route_Q21_22_6.setVisible(true);lyr_Point_Q21_22_7.setVisible(true);
var layersList = [lyr_Geodata_Imagery_0,lyr_Geodata_1,lyr_Geodata_Label_2,lyr_OSMStandard_3,lyr_UTM_4,lyr_istw_5,lyr_Route_Q21_22_6,lyr_Point_Q21_22_7];
lyr_UTM_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_Route_Q21_22_6.set('fieldAliases', {'fid': 'fid', });
lyr_Point_Q21_22_7.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'GR': 'GR', });
lyr_UTM_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'Zone': 'TextEdit', 'GR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Route_Q21_22_6.set('fieldImages', {'fid': '', });
lyr_Point_Q21_22_7.set('fieldImages', {'fid': 'TextEdit', 'CP': 'TextEdit', 'Layer': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': '', 'Remark': '', 'GR': '', });
lyr_UTM_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'Zone': 'no label', 'GR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Route_Q21_22_6.set('fieldLabels', {'fid': 'no label', });
lyr_Point_Q21_22_7.set('fieldLabels', {'fid': 'no label', 'CP': 'no label', 'Layer': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Order': 'no label', 'Remark': 'no label', 'GR': 'no label', });
lyr_Point_Q21_22_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});