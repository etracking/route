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

        var lyr_Geodata_Label_2 = new ol.layer.Tile({
            'title': 'Geodata_Label',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/WGS84/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
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
                declutter: false,
                source:jsonSource_UTM_4, 
                style: style_UTM_4,
                popuplayertitle: "UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_4.png" /> UTM'
            });

        var lyr_ib20000_5 = new ol.layer.Tile({
            'title': 'ib20000',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://istw.hkirscout.org.hk/2023-06-QPNG/{z}/{x}/{y}.png'
            })
        });
var format_SuggestedRoute_6 = new ol.format.GeoJSON();
var features_SuggestedRoute_6 = format_SuggestedRoute_6.readFeatures(json_SuggestedRoute_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuggestedRoute_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuggestedRoute_6.addFeatures(features_SuggestedRoute_6);
var lyr_SuggestedRoute_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuggestedRoute_6, 
                style: style_SuggestedRoute_6,
                popuplayertitle: "Suggested Route",
                interactive: false,
                title: '<img src="styles/legend/SuggestedRoute_6.png" /> Suggested Route'
            });
var format_T5_7 = new ol.format.GeoJSON();
var features_T5_7 = format_T5_7.readFeatures(json_T5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T5_7.addFeatures(features_T5_7);
var lyr_T5_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T5_7, 
                style: style_T5_7,
                popuplayertitle: "T5",
                interactive: false,
                title: '<img src="styles/legend/T5_7.png" /> T5'
            });
var format_T4_8 = new ol.format.GeoJSON();
var features_T4_8 = format_T4_8.readFeatures(json_T4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4_8.addFeatures(features_T4_8);
var lyr_T4_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T4_8, 
                style: style_T4_8,
                popuplayertitle: "T4",
                interactive: false,
                title: '<img src="styles/legend/T4_8.png" /> T4'
            });
var format_T3_9 = new ol.format.GeoJSON();
var features_T3_9 = format_T3_9.readFeatures(json_T3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_9.addFeatures(features_T3_9);
var lyr_T3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_9, 
                style: style_T3_9,
                popuplayertitle: "T3",
                interactive: false,
                title: '<img src="styles/legend/T3_9.png" /> T3'
            });
var format_T2_10 = new ol.format.GeoJSON();
var features_T2_10 = format_T2_10.readFeatures(json_T2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2_10.addFeatures(features_T2_10);
var lyr_T2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2_10, 
                style: style_T2_10,
                popuplayertitle: "T2",
                interactive: false,
                title: '<img src="styles/legend/T2_10.png" /> T2'
            });
var format_T1_11 = new ol.format.GeoJSON();
var features_T1_11 = format_T1_11.readFeatures(json_T1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_11.addFeatures(features_T1_11);
var lyr_T1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_11, 
                style: style_T1_11,
                popuplayertitle: "T1",
                interactive: false,
                title: '<img src="styles/legend/T1_11.png" /> T1'
            });
var format_StudentCP_12 = new ol.format.GeoJSON();
var features_StudentCP_12 = format_StudentCP_12.readFeatures(json_StudentCP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudentCP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudentCP_12.addFeatures(features_StudentCP_12);
var lyr_StudentCP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudentCP_12, 
                style: style_StudentCP_12,
                popuplayertitle: "Student CP",
                interactive: true,
                title: '<img src="styles/legend/StudentCP_12.png" /> Student CP'
            });
var format_202142024_13 = new ol.format.GeoJSON();
var features_202142024_13 = format_202142024_13.readFeatures(json_202142024_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202142024_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202142024_13.addFeatures(features_202142024_13);
var lyr_202142024_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202142024_13, 
                style: style_202142024_13,
                popuplayertitle: "旅程二(屯門聯光荃灣)（20-21/4/2024）",
                interactive: true,
                title: '<img src="styles/legend/202142024_13.png" /> 旅程二(屯門聯光荃灣)（20-21/4/2024）'
            });
var format_ForStaffOnly_14 = new ol.format.GeoJSON();
var features_ForStaffOnly_14 = format_ForStaffOnly_14.readFeatures(json_ForStaffOnly_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForStaffOnly_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForStaffOnly_14.addFeatures(features_ForStaffOnly_14);
var lyr_ForStaffOnly_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForStaffOnly_14, 
                style: style_ForStaffOnly_14,
                popuplayertitle: "For Staff Only",
                interactive: false,
                title: '<img src="styles/legend/ForStaffOnly_14.png" /> For Staff Only'
            });

lyr_Geodata_Imagery_0.setVisible(false);lyr_Geodata_1.setVisible(false);lyr_Geodata_Label_2.setVisible(false);lyr_OSMStandard_3.setVisible(false);lyr_UTM_4.setVisible(false);lyr_ib20000_5.setVisible(true);lyr_SuggestedRoute_6.setVisible(false);lyr_T5_7.setVisible(true);lyr_T4_8.setVisible(true);lyr_T3_9.setVisible(true);lyr_T2_10.setVisible(true);lyr_T1_11.setVisible(true);lyr_StudentCP_12.setVisible(true);lyr_202142024_13.setVisible(true);lyr_ForStaffOnly_14.setVisible(true);
var layersList = [lyr_Geodata_Imagery_0,lyr_Geodata_1,lyr_Geodata_Label_2,lyr_OSMStandard_3,lyr_UTM_4,lyr_ib20000_5,lyr_SuggestedRoute_6,lyr_T5_7,lyr_T4_8,lyr_T3_9,lyr_T2_10,lyr_T1_11,lyr_StudentCP_12,lyr_202142024_13,lyr_ForStaffOnly_14];
lyr_UTM_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_SuggestedRoute_6.set('fieldAliases', {'fid': 'fid', });
lyr_T5_7.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T4_8.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T3_9.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T2_10.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T1_11.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_StudentCP_12.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_202142024_13.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_ForStaffOnly_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_UTM_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'Zone': 'Hidden', 'GR': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_SuggestedRoute_6.set('fieldImages', {'fid': '', });
lyr_T5_7.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T4_8.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T3_9.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T2_10.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T1_11.set('fieldImages', {'fid': '', 'Team': '', });
lyr_StudentCP_12.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_202142024_13.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_ForStaffOnly_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_UTM_4.set('fieldLabels', {});
lyr_SuggestedRoute_6.set('fieldLabels', {'fid': 'no label', });
lyr_T5_7.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T4_8.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T3_9.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T2_10.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T1_11.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_StudentCP_12.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_202142024_13.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_ForStaffOnly_14.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_ForStaffOnly_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});