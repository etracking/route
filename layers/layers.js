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
                interactive: true,
                title: '<img src="styles/legend/SuggestedRoute_6.png" /> Suggested Route'
            });
var format_T1_7 = new ol.format.GeoJSON();
var features_T1_7 = format_T1_7.readFeatures(json_T1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_7.addFeatures(features_T1_7);
var lyr_T1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_7, 
                style: style_T1_7,
                popuplayertitle: "T1",
                interactive: true,
                title: '<img src="styles/legend/T1_7.png" /> T1'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: "學員檢查點",
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 學員檢查點'
            });
var format_932024_9 = new ol.format.GeoJSON();
var features_932024_9 = format_932024_9.readFeatures(json_932024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_932024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_932024_9.addFeatures(features_932024_9);
var lyr_932024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_932024_9, 
                style: style_932024_9,
                popuplayertitle: "夜行(蝌蚪坪-紅梅谷)（9/3/2024）",
                interactive: true,
                title: '<img src="styles/legend/932024_9.png" /> 夜行(蝌蚪坪-紅梅谷)（9/3/2024）'
            });
var format_1822024_10 = new ol.format.GeoJSON();
var features_1822024_10 = format_1822024_10.readFeatures(json_1822024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1822024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1822024_10.addFeatures(features_1822024_10);
var lyr_1822024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1822024_10, 
                style: style_1822024_10,
                popuplayertitle: "地圖閱讀實習二(寶馬山)（18/2/2024）",
                interactive: true,
                title: '<img src="styles/legend/1822024_10.png" /> 地圖閱讀實習二(寶馬山)（18/2/2024）'
            });
var format_422024_11 = new ol.format.GeoJSON();
var features_422024_11 = format_422024_11.readFeatures(json_422024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_422024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_422024_11.addFeatures(features_422024_11);
var lyr_422024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_422024_11, 
                style: style_422024_11,
                popuplayertitle: "地圖閱讀實習一(掌牛山)（4/2/2024）",
                interactive: true,
                title: '<img src="styles/legend/422024_11.png" /> 地圖閱讀實習一(掌牛山)（4/2/2024）'
            });
var format_202142024_12 = new ol.format.GeoJSON();
var features_202142024_12 = format_202142024_12.readFeatures(json_202142024_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202142024_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202142024_12.addFeatures(features_202142024_12);
var lyr_202142024_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202142024_12, 
                style: style_202142024_12,
                popuplayertitle: "旅程二(屯門聯光荃灣)（20-21/4/2024）",
                interactive: true,
                title: '<img src="styles/legend/202142024_12.png" /> 旅程二(屯門聯光荃灣)（20-21/4/2024）'
            });
var format_131432024_13 = new ol.format.GeoJSON();
var features_131432024_13 = format_131432024_13.readFeatures(json_131432024_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_131432024_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_131432024_13.addFeatures(features_131432024_13);
var lyr_131432024_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_131432024_13, 
                style: style_131432024_13,
                popuplayertitle: "旅程一(黃泥頭白沙灣黃泥頭)（13-14/3/2024）",
                interactive: true,
                title: '<img src="styles/legend/131432024_13.png" /> 旅程一(黃泥頭白沙灣黃泥頭)（13-14/3/2024）'
            });
var format_StaffReference_14 = new ol.format.GeoJSON();
var features_StaffReference_14 = format_StaffReference_14.readFeatures(json_StaffReference_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StaffReference_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StaffReference_14.addFeatures(features_StaffReference_14);
var lyr_StaffReference_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StaffReference_14, 
                style: style_StaffReference_14,
                popuplayertitle: "Staff Reference",
                interactive: true,
                title: '<img src="styles/legend/StaffReference_14.png" /> Staff Reference'
            });
var format_ForStaffOnly_15 = new ol.format.GeoJSON();
var features_ForStaffOnly_15 = format_ForStaffOnly_15.readFeatures(json_ForStaffOnly_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForStaffOnly_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForStaffOnly_15.addFeatures(features_ForStaffOnly_15);
var lyr_ForStaffOnly_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForStaffOnly_15, 
                style: style_ForStaffOnly_15,
                popuplayertitle: "For Staff Only",
                interactive: true,
                title: '<img src="styles/legend/ForStaffOnly_15.png" /> For Staff Only'
            });

lyr_Geodata_Imagery_0.setVisible(true);lyr_Geodata_1.setVisible(true);lyr_Geodata_Label_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_UTM_4.setVisible(true);lyr_ib20000_5.setVisible(true);lyr_SuggestedRoute_6.setVisible(true);lyr_T1_7.setVisible(true);lyr__8.setVisible(true);lyr_932024_9.setVisible(true);lyr_1822024_10.setVisible(true);lyr_422024_11.setVisible(true);lyr_202142024_12.setVisible(true);lyr_131432024_13.setVisible(true);lyr_StaffReference_14.setVisible(true);lyr_ForStaffOnly_15.setVisible(true);
var layersList = [lyr_Geodata_Imagery_0,lyr_Geodata_1,lyr_Geodata_Label_2,lyr_OSMStandard_3,lyr_UTM_4,lyr_ib20000_5,lyr_SuggestedRoute_6,lyr_T1_7,lyr__8,lyr_932024_9,lyr_1822024_10,lyr_422024_11,lyr_202142024_12,lyr_131432024_13,lyr_StaffReference_14,lyr_ForStaffOnly_15];
lyr_UTM_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_SuggestedRoute_6.set('fieldAliases', {'fid': 'fid', });
lyr_T1_7.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr__8.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'GR': 'GR', });
lyr_932024_9.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'GR': 'GR', });
lyr_1822024_10.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'GR': 'GR', });
lyr_422024_11.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'GR': 'GR', });
lyr_202142024_12.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'GR': 'GR', });
lyr_131432024_13.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'GR': 'GR', });
lyr_StaffReference_14.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'GR': 'GR', });
lyr_ForStaffOnly_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_UTM_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'Zone': 'Hidden', 'GR': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_SuggestedRoute_6.set('fieldImages', {'fid': '', });
lyr_T1_7.set('fieldImages', {'fid': '', 'Team': '', });
lyr__8.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'GR': 'TextEdit', });
lyr_932024_9.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'GR': 'TextEdit', });
lyr_1822024_10.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'GR': 'TextEdit', });
lyr_422024_11.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'GR': 'TextEdit', });
lyr_202142024_12.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'GR': 'TextEdit', });
lyr_131432024_13.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'GR': 'TextEdit', });
lyr_StaffReference_14.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'GR': 'TextEdit', });
lyr_ForStaffOnly_15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_UTM_4.set('fieldLabels', {});
lyr_SuggestedRoute_6.set('fieldLabels', {'fid': 'no label', });
lyr_T1_7.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr__8.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'GR': 'no label', });
lyr_932024_9.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'GR': 'no label', });
lyr_1822024_10.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'GR': 'no label', });
lyr_422024_11.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'GR': 'no label', });
lyr_202142024_12.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'GR': 'no label', });
lyr_131432024_13.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'GR': 'no label', });
lyr_StaffReference_14.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'GR': 'no label', });
lyr_ForStaffOnly_15.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_ForStaffOnly_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});