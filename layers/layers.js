var wms_layers = [];


        var lyr_Geodata_Imagery_0 = new ol.layer.Tile({
            'title': 'Geodata_Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/imagery/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_Geodata_1 = new ol.layer.Tile({
            'title': 'Geodata',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ib20000_3 = new ol.layer.Tile({
            'title': 'ib20000',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://etrack.freemyip.com/2023-06-QPNG/{z}/{x}/{y}.png'
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
                declutter: false,
                source:jsonSource_UTM_4, 
                style: style_UTM_4,
                popuplayertitle: "UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_4.png" /> UTM'
            });

        var lyr_Geodata_Label_5 = new ol.layer.Tile({
            'title': 'Geodata_Label',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/WGS84/{z}/{x}/{y}.png'
            })
        });
var format_910112024_6 = new ol.format.GeoJSON();
var features_910112024_6 = format_910112024_6.readFeatures(json_910112024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_910112024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_910112024_6.addFeatures(features_910112024_6);cluster_910112024_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_910112024_6
});
var lyr_910112024_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_910112024_6, 
                style: style_910112024_6,
                popuplayertitle: "旅程二（聯光童軍中心）9-10/11/2024",
                interactive: true,
                title: '<img src="styles/legend/910112024_6.png" /> 旅程二（聯光童軍中心）9-10/11/2024'
            });
var format_562024_7 = new ol.format.GeoJSON();
var features_562024_7 = format_562024_7.readFeatures(json_562024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_562024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_562024_7.addFeatures(features_562024_7);cluster_562024_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_562024_7
});
var lyr_562024_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_562024_7, 
                style: style_562024_7,
                popuplayertitle: "旅程一（沙田童軍中心）5-6/2024",
                interactive: true,
                title: '<img src="styles/legend/562024_7.png" /> 旅程一（沙田童軍中心）5-6/2024'
            });
var format_2292024_8 = new ol.format.GeoJSON();
var features_2292024_8 = format_2292024_8.readFeatures(json_2292024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2292024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2292024_8.addFeatures(features_2292024_8);cluster_2292024_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_2292024_8
});
var lyr_2292024_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_2292024_8, 
                style: style_2292024_8,
                popuplayertitle: "地圖閱讀評核（寶馬山）22/9/2024",
                interactive: true,
                title: '<img src="styles/legend/2292024_8.png" /> 地圖閱讀評核（寶馬山）22/9/2024'
            });
var format_892024_9 = new ol.format.GeoJSON();
var features_892024_9 = format_892024_9.readFeatures(json_892024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_892024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_892024_9.addFeatures(features_892024_9);cluster_892024_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_892024_9
});
var lyr_892024_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_892024_9, 
                style: style_892024_9,
                popuplayertitle: "地圖閱讀二（屯門）8/9/2024",
                interactive: true,
                title: '<img src="styles/legend/892024_9.png" /> 地圖閱讀二（屯門）8/9/2024'
            });
var format_192024_10 = new ol.format.GeoJSON();
var features_192024_10 = format_192024_10.readFeatures(json_192024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_192024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_192024_10.addFeatures(features_192024_10);cluster_192024_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_192024_10
});
var lyr_192024_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_192024_10, 
                style: style_192024_10,
                popuplayertitle: "地圖閱讀一（馬鞍山）1/9/2024",
                interactive: true,
                title: '<img src="styles/legend/192024_10.png" /> 地圖閱讀一（馬鞍山）1/9/2024'
            });
var format_ForStaffOnly_11 = new ol.format.GeoJSON();
var features_ForStaffOnly_11 = format_ForStaffOnly_11.readFeatures(json_ForStaffOnly_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForStaffOnly_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForStaffOnly_11.addFeatures(features_ForStaffOnly_11);cluster_ForStaffOnly_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ForStaffOnly_11
});
var lyr_ForStaffOnly_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ForStaffOnly_11, 
                style: style_ForStaffOnly_11,
                popuplayertitle: "For Staff Only",
                interactive: false,
                title: '<img src="styles/legend/ForStaffOnly_11.png" /> For Staff Only'
            });

lyr_Geodata_Imagery_0.setVisible(false);lyr_Geodata_1.setVisible(false);lyr_OSMStandard_2.setVisible(false);lyr_ib20000_3.setVisible(true);lyr_UTM_4.setVisible(false);lyr_Geodata_Label_5.setVisible(false);lyr_910112024_6.setVisible(true);lyr_562024_7.setVisible(true);lyr_2292024_8.setVisible(true);lyr_892024_9.setVisible(true);lyr_192024_10.setVisible(true);lyr_ForStaffOnly_11.setVisible(true);
var layersList = [lyr_Geodata_Imagery_0,lyr_Geodata_1,lyr_OSMStandard_2,lyr_ib20000_3,lyr_UTM_4,lyr_Geodata_Label_5,lyr_910112024_6,lyr_562024_7,lyr_2292024_8,lyr_892024_9,lyr_192024_10,lyr_ForStaffOnly_11];
lyr_UTM_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_910112024_6.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'Layer': 'Layer', 'GR': 'GR', });
lyr_562024_7.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'Layer': 'Layer', 'GR': 'GR', });
lyr_2292024_8.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'Layer': 'Layer', 'GR': 'GR', });
lyr_892024_9.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'Layer': 'Layer', 'GR': 'GR', });
lyr_192024_10.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'Layer': 'Layer', 'GR': 'GR', });
lyr_ForStaffOnly_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_UTM_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'Zone': 'Hidden', 'GR': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_910112024_6.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'Layer': '', 'GR': 'TextEdit', });
lyr_562024_7.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'Layer': '', 'GR': 'TextEdit', });
lyr_2292024_8.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'Layer': '', 'GR': 'TextEdit', });
lyr_892024_9.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'Layer': '', 'GR': 'TextEdit', });
lyr_192024_10.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'Layer': '', 'GR': 'TextEdit', });
lyr_ForStaffOnly_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_UTM_4.set('fieldLabels', {});
lyr_910112024_6.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'Layer': 'no label', 'GR': 'no label', });
lyr_562024_7.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'Layer': 'no label', 'GR': 'no label', });
lyr_2292024_8.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'Layer': 'no label', 'GR': 'no label', });
lyr_892024_9.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'Layer': 'no label', 'GR': 'no label', });
lyr_192024_10.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'Layer': 'no label', 'GR': 'no label', });
lyr_ForStaffOnly_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_ForStaffOnly_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});