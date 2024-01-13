var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UTM_1 = new ol.format.GeoJSON();
var features_UTM_1 = format_UTM_1.readFeatures(json_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_1.addFeatures(features_UTM_1);
var lyr_UTM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UTM_1, 
                style: style_UTM_1,
                interactive: true,
                title: '<img src="styles/legend/UTM_1.png" /> UTM'
            });
var format_Route_Q21_22_2 = new ol.format.GeoJSON();
var features_Route_Q21_22_2 = format_Route_Q21_22_2.readFeatures(json_Route_Q21_22_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Q21_22_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Q21_22_2.addFeatures(features_Route_Q21_22_2);
var lyr_Route_Q21_22_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_Q21_22_2, 
                style: style_Route_Q21_22_2,
                interactive: true,
                title: '<img src="styles/legend/Route_Q21_22_2.png" /> Route_Q21_22'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 導師參考'
            });
var format_161732024_4 = new ol.format.GeoJSON();
var features_161732024_4 = format_161732024_4.readFeatures(json_161732024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_161732024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_161732024_4.addFeatures(features_161732024_4);
var lyr_161732024_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_161732024_4, 
                style: style_161732024_4,
                interactive: true,
                title: '<img src="styles/legend/161732024_4.png" />  旅程一（16-17/3/2024）（學員）'
            });

lyr_OSMStandard_0.setVisible(true);lyr_UTM_1.setVisible(true);lyr_Route_Q21_22_2.setVisible(true);lyr__3.setVisible(true);lyr_161732024_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UTM_1,lyr_Route_Q21_22_2,lyr__3,lyr_161732024_4];
lyr_UTM_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_Route_Q21_22_2.set('fieldAliases', {'fid': 'fid', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'GR': 'GR', });
lyr_161732024_4.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'GR': 'GR', });
lyr_UTM_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'Zone': 'TextEdit', 'GR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Route_Q21_22_2.set('fieldImages', {'fid': 'Hidden', });
lyr__3.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'GR': 'TextEdit', });
lyr_161732024_4.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'GR': 'TextEdit', });
lyr_UTM_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'Zone': 'no label', 'GR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Route_Q21_22_2.set('fieldLabels', {});
lyr__3.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'GR': 'no label', });
lyr_161732024_4.set('fieldLabels', {'CP': 'inline label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'GR': 'inline label', });
lyr_161732024_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});