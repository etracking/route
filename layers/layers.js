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
                url: 'https://istw.hkirscout.org.hk/2023-06-QPNG/{z}/{x}/{y}.png'
            })
        });

        var lyr_referencemap_4 = new ol.layer.Tile({
            'title': 'reference map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://167.179.73.40/2023-06-QPNGN/{z}/{x}/{y}.png'
            })
        });
var format_UTM_5 = new ol.format.GeoJSON();
var features_UTM_5 = format_UTM_5.readFeatures(json_UTM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_5.addFeatures(features_UTM_5);
var lyr_UTM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTM_5, 
                style: style_UTM_5,
                popuplayertitle: "UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_5.png" /> UTM'
            });

        var lyr_Geodata_Label_6 = new ol.layer.Tile({
            'title': 'Geodata_Label',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/WGS84/{z}/{x}/{y}.png'
            })
        });
var format_SuggestedRoute_7 = new ol.format.GeoJSON();
var features_SuggestedRoute_7 = format_SuggestedRoute_7.readFeatures(json_SuggestedRoute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuggestedRoute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuggestedRoute_7.addFeatures(features_SuggestedRoute_7);
var lyr_SuggestedRoute_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuggestedRoute_7, 
                style: style_SuggestedRoute_7,
                popuplayertitle: "Suggested Route",
                interactive: true,
                title: '<img src="styles/legend/SuggestedRoute_7.png" /> Suggested Route'
            });
var format_T5_8 = new ol.format.GeoJSON();
var features_T5_8 = format_T5_8.readFeatures(json_T5_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T5_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T5_8.addFeatures(features_T5_8);
var lyr_T5_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T5_8, 
                style: style_T5_8,
                popuplayertitle: "T5",
                interactive: false,
                title: '<img src="styles/legend/T5_8.png" /> T5'
            });
var format_T4_9 = new ol.format.GeoJSON();
var features_T4_9 = format_T4_9.readFeatures(json_T4_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4_9.addFeatures(features_T4_9);
var lyr_T4_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T4_9, 
                style: style_T4_9,
                popuplayertitle: "T4",
                interactive: false,
                title: '<img src="styles/legend/T4_9.png" /> T4'
            });
var format_T3_10 = new ol.format.GeoJSON();
var features_T3_10 = format_T3_10.readFeatures(json_T3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_10.addFeatures(features_T3_10);
var lyr_T3_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_10, 
                style: style_T3_10,
                popuplayertitle: "T3",
                interactive: false,
                title: '<img src="styles/legend/T3_10.png" /> T3'
            });
var format_T2_11 = new ol.format.GeoJSON();
var features_T2_11 = format_T2_11.readFeatures(json_T2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2_11.addFeatures(features_T2_11);
var lyr_T2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2_11, 
                style: style_T2_11,
                popuplayertitle: "T2",
                interactive: false,
                title: '<img src="styles/legend/T2_11.png" /> T2'
            });
var format_T1_12 = new ol.format.GeoJSON();
var features_T1_12 = format_T1_12.readFeatures(json_T1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_12.addFeatures(features_T1_12);
var lyr_T1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_12, 
                style: style_T1_12,
                popuplayertitle: "T1",
                interactive: false,
                title: '<img src="styles/legend/T1_12.png" /> T1'
            });
var format_StudentCP_13 = new ol.format.GeoJSON();
var features_StudentCP_13 = format_StudentCP_13.readFeatures(json_StudentCP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudentCP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudentCP_13.addFeatures(features_StudentCP_13);
var lyr_StudentCP_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudentCP_13, 
                style: style_StudentCP_13,
                popuplayertitle: "Student CP",
                interactive: true,
                title: '<img src="styles/legend/StudentCP_13.png" /> Student CP'
            });
var format_1032024_14 = new ol.format.GeoJSON();
var features_1032024_14 = format_1032024_14.readFeatures(json_1032024_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1032024_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1032024_14.addFeatures(features_1032024_14);
var lyr_1032024_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1032024_14, 
                style: style_1032024_14,
                popuplayertitle: "地圖閱讀考驗日(集合及解散點)（10/3/2024）",
                interactive: false,
                title: '<img src="styles/legend/1032024_14.png" /> 地圖閱讀考驗日(集合及解散點)（10/3/2024）'
            });
var format_932024_15 = new ol.format.GeoJSON();
var features_932024_15 = format_932024_15.readFeatures(json_932024_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_932024_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_932024_15.addFeatures(features_932024_15);
var lyr_932024_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_932024_15, 
                style: style_932024_15,
                popuplayertitle: "夜行(蝌蚪坪-紅梅谷)（9/3/2024）",
                interactive: false,
                title: '<img src="styles/legend/932024_15.png" /> 夜行(蝌蚪坪-紅梅谷)（9/3/2024）'
            });
var format_1822024_16 = new ol.format.GeoJSON();
var features_1822024_16 = format_1822024_16.readFeatures(json_1822024_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1822024_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1822024_16.addFeatures(features_1822024_16);
var lyr_1822024_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1822024_16, 
                style: style_1822024_16,
                popuplayertitle: "地圖閱讀實習二(寶馬山)（18/2/2024）",
                interactive: false,
                title: '<img src="styles/legend/1822024_16.png" /> 地圖閱讀實習二(寶馬山)（18/2/2024）'
            });
var format_422024_17 = new ol.format.GeoJSON();
var features_422024_17 = format_422024_17.readFeatures(json_422024_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_422024_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_422024_17.addFeatures(features_422024_17);
var lyr_422024_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_422024_17, 
                style: style_422024_17,
                popuplayertitle: "地圖閱讀實習一(掌牛山)（4/2/2024）",
                interactive: false,
                title: '<img src="styles/legend/422024_17.png" /> 地圖閱讀實習一(掌牛山)（4/2/2024）'
            });
var format_202142024_18 = new ol.format.GeoJSON();
var features_202142024_18 = format_202142024_18.readFeatures(json_202142024_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_202142024_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_202142024_18.addFeatures(features_202142024_18);
var lyr_202142024_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_202142024_18, 
                style: style_202142024_18,
                popuplayertitle: "旅程二(屯門聯光荃灣)（20-21/4/2024）",
                interactive: true,
                title: '<img src="styles/legend/202142024_18.png" /> 旅程二(屯門聯光荃灣)（20-21/4/2024）'
            });
var format_131432024_19 = new ol.format.GeoJSON();
var features_131432024_19 = format_131432024_19.readFeatures(json_131432024_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_131432024_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_131432024_19.addFeatures(features_131432024_19);
var lyr_131432024_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_131432024_19, 
                style: style_131432024_19,
                popuplayertitle: "旅程一(黃泥頭白沙灣黃泥頭)（13-14/3/2024）",
                interactive: false,
                title: '<img src="styles/legend/131432024_19.png" /> 旅程一(黃泥頭白沙灣黃泥頭)（13-14/3/2024）'
            });
var format_StaffReference_20 = new ol.format.GeoJSON();
var features_StaffReference_20 = format_StaffReference_20.readFeatures(json_StaffReference_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StaffReference_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StaffReference_20.addFeatures(features_StaffReference_20);
var lyr_StaffReference_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StaffReference_20, 
                style: style_StaffReference_20,
                popuplayertitle: "Staff Reference",
                interactive: true,
                title: '<img src="styles/legend/StaffReference_20.png" /> Staff Reference'
            });
var format_ForStaffOnly_21 = new ol.format.GeoJSON();
var features_ForStaffOnly_21 = format_ForStaffOnly_21.readFeatures(json_ForStaffOnly_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForStaffOnly_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForStaffOnly_21.addFeatures(features_ForStaffOnly_21);
var lyr_ForStaffOnly_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForStaffOnly_21, 
                style: style_ForStaffOnly_21,
                popuplayertitle: "For Staff Only",
                interactive: false,
                title: '<img src="styles/legend/ForStaffOnly_21.png" /> For Staff Only'
            });

lyr_Geodata_Imagery_0.setVisible(false);lyr_Geodata_1.setVisible(false);lyr_OSMStandard_2.setVisible(false);lyr_ib20000_3.setVisible(true);lyr_referencemap_4.setVisible(false);lyr_UTM_5.setVisible(false);lyr_Geodata_Label_6.setVisible(false);lyr_SuggestedRoute_7.setVisible(false);lyr_T5_8.setVisible(true);lyr_T4_9.setVisible(true);lyr_T3_10.setVisible(true);lyr_T2_11.setVisible(true);lyr_T1_12.setVisible(true);lyr_StudentCP_13.setVisible(true);lyr_1032024_14.setVisible(false);lyr_932024_15.setVisible(false);lyr_1822024_16.setVisible(false);lyr_422024_17.setVisible(false);lyr_202142024_18.setVisible(true);lyr_131432024_19.setVisible(false);lyr_StaffReference_20.setVisible(true);lyr_ForStaffOnly_21.setVisible(true);
var layersList = [lyr_Geodata_Imagery_0,lyr_Geodata_1,lyr_OSMStandard_2,lyr_ib20000_3,lyr_referencemap_4,lyr_UTM_5,lyr_Geodata_Label_6,lyr_SuggestedRoute_7,lyr_T5_8,lyr_T4_9,lyr_T3_10,lyr_T2_11,lyr_T1_12,lyr_StudentCP_13,lyr_1032024_14,lyr_932024_15,lyr_1822024_16,lyr_422024_17,lyr_202142024_18,lyr_131432024_19,lyr_StaffReference_20,lyr_ForStaffOnly_21];
lyr_UTM_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Zone': 'Zone', 'GR': 'GR', 'layer': 'layer', 'path': 'path', });
lyr_SuggestedRoute_7.set('fieldAliases', {'fid': 'fid', });
lyr_T5_8.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T4_9.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T3_10.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T2_11.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_T1_12.set('fieldAliases', {'fid': 'fid', 'Team': 'Team', });
lyr_StudentCP_13.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_1032024_14.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_932024_15.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_1822024_16.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_422024_17.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_202142024_18.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_131432024_19.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_StaffReference_20.set('fieldAliases', {'fid': 'fid', 'CP': 'CP', 'Layer': 'Layer', 'Name': 'Name', 'Feature': 'Feature', 'Order': 'Order', 'Remark': 'Remark', 'T1': 'T1', 'T2': 'T2', 'T3': 'T3', 'T4': 'T4', 'T5': 'T5', 'GR': 'GR', });
lyr_ForStaffOnly_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_UTM_5.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'Zone': 'Hidden', 'GR': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_SuggestedRoute_7.set('fieldImages', {'fid': '', });
lyr_T5_8.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T4_9.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T3_10.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T2_11.set('fieldImages', {'fid': '', 'Team': '', });
lyr_T1_12.set('fieldImages', {'fid': '', 'Team': '', });
lyr_StudentCP_13.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_1032024_14.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_932024_15.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_1822024_16.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_422024_17.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_202142024_18.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_131432024_19.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_StaffReference_20.set('fieldImages', {'fid': 'Hidden', 'CP': 'TextEdit', 'Layer': 'Hidden', 'Name': 'TextEdit', 'Feature': 'TextEdit', 'Order': 'Hidden', 'Remark': 'TextEdit', 'T1': '', 'T2': '', 'T3': '', 'T4': '', 'T5': '', 'GR': 'TextEdit', });
lyr_ForStaffOnly_21.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_UTM_5.set('fieldLabels', {});
lyr_SuggestedRoute_7.set('fieldLabels', {'fid': 'no label', });
lyr_T5_8.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T4_9.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T3_10.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T2_11.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_T1_12.set('fieldLabels', {'fid': 'no label', 'Team': 'no label', });
lyr_StudentCP_13.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_1032024_14.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_932024_15.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_1822024_16.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_422024_17.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_202142024_18.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_131432024_19.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_StaffReference_20.set('fieldLabels', {'CP': 'no label', 'Name': 'no label', 'Feature': 'no label', 'Remark': 'no label', 'T1': 'no label', 'T2': 'no label', 'T3': 'no label', 'T4': 'no label', 'T5': 'no label', 'GR': 'no label', });
lyr_ForStaffOnly_21.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_ForStaffOnly_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});