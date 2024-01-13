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
var format_UTM_3 = new ol.format.GeoJSON();
var features_UTM_3 = format_UTM_3.readFeatures(json_UTM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_3.addFeatures(features_UTM_3);
var lyr_UTM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UTM_3, 
                style: style_UTM_3,
                interactive: true,
                title: '<img src="styles/legend/UTM_3.png" /> UTM'
            });

        var lyr_ib20000_4 = new ol.layer.Tile({
            'title': 'ib20000',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://istw.hkirscout.org.hk/2023-06-QPNG/{z}/{x}/{y}.png'
            })
        });
var format_Route_Q21_22_5 = new ol.format.GeoJSON();
var features_Route_Q21_22_5 = format_Route_Q21_22_5.readFeatures(json_Route_Q21_22_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_Q21_22_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Q21_22_5.addFeatures(features_Route_Q21_22_5);
var lyr_Route_Q21_22_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_Q21_22_5, 
                style: style_Route_Q21_22_5,
                interactive: true,
                title: '<img src="styles/legend/Route_Q21_22_5.png" /> Route_Q21_22'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 導師參考'
            });
var format_161732024_7 = new ol.format.GeoJSON();
var features_161732024_7 = format_161732024_7.readFeatures(json_161732024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_161732024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_161732024_7.addFeatures(features_161732024_7);
var lyr_161732024_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_161732024_7, 
                style: style_161732024_7,
                interactive: true,
                title: '<img src="styles/legend/161732024_7.png" />  旅程一（16-17/3/2024）（學員）'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Geodata_1.setVisible(true);lyr_Geodata_Label_2.setVisible(true);lyr_UTM_3.setVisible(true);lyr_ib20000_4.setVisible(true);lyr_Route_Q21_22_5.setVisible(true);lyr__6.setVisible(true);lyr_161732024_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Geodata_1,lyr_Geodata_Label_2,lyr_UTM_3,lyr_ib20000_4,lyr_Route_Q21_22_5,lyr__6,lyr_161732024_7];
lyr_UTM_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_Route_Q21_22_5.set('fieldAliases', {'fid': 'fid', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'GR': 'GR', });
lyr_161732024_7.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'GR': 'GR', });
lyr_UTM_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'Zone': 'TextEdit', 'GR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Route_Q21_22_5.set('fieldImages', {'fid': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', 'CP': 'TextEdit', 'Layer': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Range', 'Remark': 'TextEdit', 'GR': 'TextEdit', });
lyr_161732024_7.set('fieldImages', {'fid': 'TextEdit', 'CP': 'TextEdit', 'Layer': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Range', 'Remark': 'TextEdit', 'GR': 'TextEdit', });
lyr_UTM_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'Zone': 'no label', 'GR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Route_Q21_22_5.set('fieldLabels', {'fid': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', 'CP': 'no label', 'Layer': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Order': 'no label', 'Remark': 'no label', 'GR': 'no label', });
lyr_161732024_7.set('fieldLabels', {'fid': 'no label', 'CP': 'no label', 'Layer': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Order': 'no label', 'Remark': 'no label', 'GR': 'no label', });
lyr_161732024_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});